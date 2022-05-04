const btnNewBook = document.querySelector<HTMLButtonElement>('#btn-new-book')!;
const frmBook = document.querySelector<HTMLFormElement>('#frm-book')!;
const txtISBN = document.querySelector<HTMLInputElement>('#txt-isbn')!;
const txtName = document.querySelector<HTMLInputElement>('#txt-name')!;
const txtAuthor = document.querySelector<HTMLInputElement>('#txt-author')!;
const btnBrowse = document.querySelector<HTMLButtonElement>('#btn-browse')!;
const btnRemove = document.querySelector<HTMLButtonElement>('#btn-remove')!;
const txtPreview = document.querySelector<HTMLInputElement>('#txt-preview')!;
const divThumbnail = document.querySelector<HTMLDivElement>('#thumbnail')!;
const paginationElm = document.querySelector<HTMLUListElement>('#pagination')!;
const tblBooks = document.querySelector<HTMLTableElement>("table")!;
const btnSave = document.querySelector<HTMLButtonElement>("#btn-save")!;
const btnClear = document.querySelector<HTMLButtonElement>('#btn-clear')!;
let blobURL: null | string = null;

frmBook.addEventListener('reset', ()=> {
    const inputElms = [txtISBN, txtName, txtAuthor];
    inputElms.forEach(elm => elm.classList.remove('is-valid', 'is-invalid'));
    inputElms[0].focus();
    divThumbnail.style.backgroundImage = '';
    tblBooks.querySelectorAll("tr").forEach(elm => elm.classList.remove('selected'));
    btnRemove.click();
    btnSave.innerText = 'SAVE';
});

frmBook.addEventListener('submit', (e) => {
    e.preventDefault();
    if (btnSave.innerText === 'EDIT'){
        setEnableForm();
        btnSave.innerText = 'SAVE';
        btnRemove.disabled = !divThumbnail.style.backgroundImage;
        return;
    }


    const inputElms = [txtISBN, txtName, txtAuthor];
    const invalidInputElms = inputElms.filter(elm => !elm.classList.contains('is-valid'));

    if (invalidInputElms.length > 0) {
        invalidInputElms.forEach(elm => elm.classList.add('is-invalid'));
        invalidInputElms[0].focus();
        return;
    }

    /*Todo : Now lets send the data to the backend for saving*/
});

btnBrowse.addEventListener('click', () => txtPreview.click());
txtPreview.addEventListener('input', () => {
    if (txtPreview.files![0]) {
        if (blobURL) URL.revokeObjectURL(blobURL);
        blobURL = URL.createObjectURL(txtPreview.files![0]);
        divThumbnail.style.backgroundImage = `url(${blobURL})`;
        // setTimeout(()=>URL.revokeObjectURL(blobURL), 0);
        btnRemove.disabled = false;
    }
});

btnRemove.addEventListener('click', () => {
    txtPreview.value = '';
    if (blobURL) URL.revokeObjectURL(blobURL);
    divThumbnail.style.backgroundImage = '';
    btnRemove.disabled = true;
});

setEnableForm(false);

function setEnableForm(enable: boolean = true) {
    for (const element of frmBook.elements) {
        if (element instanceof HTMLInputElement || element instanceof HTMLButtonElement) {
            element.disabled = !enable;
        }
    }
}

btnNewBook.addEventListener('click', () => {
    setEnableForm();
    btnRemove.click();
    frmBook.reset();
    txtISBN.focus();
});

/*function checkValidity(this: HTMLInputElement) {
    const isbn = txtISBN.value;
    const name = txtName.value;
    const author = txtAuthor.value;

    txtISBN.classList.remove('is-invalid');
    txtISBN.classList.remove('is-valid');
    txtName.classList.remove('is-invalid');
    txtName.classList.remove('is-valid');
    txtAuthor.classList.remove('is-invalid');
    txtAuthor.classList.remove('is-valid');

    if (!/^\d+$/.test(isbn)) {
        txtISBN.classList.add('is-invalid');
    } else {
        txtISBN.classList.add('is-valid')
    }

    if (!/^.+$/.test(name)) {
        txtISBN.classList.add('is-invalid');
    } else {
        txtISBN.classList.add('is-valid')
    }

    if (!/^[A-Za-z ]+$/.test(author)) {
        txtISBN.classList.add('is-invalid');
    } else {
        txtISBN.classList.add('is-valid')
    }
}

txtISBN.addEventListener('input', checkValidity)
txtName.addEventListener('input', checkValidity)
txtAuthor.addEventListener('input', checkValidity)
*/


function checkValidityOfISBN() {
    return /^\d+$/.test(txtISBN.value);
}

function checkValidityOfName() {
    return /^.+$/.test(txtName.value);
}

function checkValidityOfAuthor() {
    return /^[A-Za-z ]+$/.test(txtAuthor.value);
}


txtISBN.addEventListener('input', checkValidity);
txtName.addEventListener('input', checkValidity);
txtAuthor.addEventListener('input', checkValidity);

function checkValidity(e: Event) {
    (e.target as HTMLInputElement).classList.remove('is-valid', 'is-invalid');
    if (e.target === txtISBN) {
        checkValidityOfISBN() ? txtISBN.classList.add('is-valid') : txtISBN.classList.add('is-invalid');
    } else if (e.target === txtName) {
        checkValidityOfName() ? txtName.classList.add('is-valid') : txtName.classList.add('is-invalid');
    } else {
        checkValidityOfAuthor() ? txtAuthor.classList.add('is-valid') : txtAuthor.classList.add('is-invalid');
    }
}

const pageSize = 5;
let booksCount = 55;
let activePage = 1;

initPagination();

function initPagination(page: number = 1) {
    let pages = Math.ceil(booksCount / pageSize);
    if (page < 1 || page > pages) page = pages;
    activePage = page;
    let end = page + 4;
    let start = page - 5;
    if (end > pages) {
        start -= (end - pages);
        end = pages;
    }
    if (start < 1) {
        end += (1 - start);
        if (end > pages) end = pages;
        start = 1;
    }
    let html = `<li class="page-item"><a class="page-link" href="#">&laquo;</a></li>`;
    for (let i = start; i <= end; i++) {
        html += `<li class="page-item ${i === page ? 'active' : ''}"><a class="page-link" href="#">${i}</a></li>`
    }
    html += `<li class="page-item"><a class="page-link" href="#">&raquo;</a></li>`;
    paginationElm.innerHTML = html;
}

paginationElm.addEventListener('click', (e) => {
    let elm = (e.target as HTMLElement);
    if (elm.tagName === 'A') {
        if (elm.innerText === '«') {
            initPagination(--activePage);
        } else if (elm.innerText === '»') {
            initPagination(++activePage);
        } else {
            initPagination(+elm.innerText);
        }
        e.stopPropagation();
    }
});

tblBooks.querySelector("tbody")!.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).classList.contains('trash') ||
        (e.target as HTMLElement).classList.contains('fa-trash')) {
        e.stopPropagation();
        const elm = e.target as HTMLElement;
        const row = elm.closest<HTMLTableRowElement>('tr')!;
        const isbn = (row.querySelector<HTMLDivElement>(".isbn")!.innerText);
        /*if (confirm(`Are you sure to delete the ${isbn}?`)) {
            row.remove();
        }*/

        const promise = Swal.fire({
            title: 'Confirm?',
            text: `Are you sure to delete the ${isbn}?`,
            icon: 'question',
            confirmButtonText : 'Yes',
            denyButtonText: 'No',
            showDenyButton: true
        })as Promise<any>;

        promise.then((resolve)=>{
            if (resolve.isConfirmed) {
                frmBook.reset();
                row.remove();
            }
        });
    }

    console.log("working");
});

declare const Swal: any;

tblBooks.querySelector("tbody")!.addEventListener('click', (e)=>{
    const row = (e.target as HTMLElement).closest<HTMLTableRowElement>('tr')!;
    tblBooks.querySelectorAll("tr").forEach(elm=>elm.classList.remove('selected'));
    row.classList.add('selected');

    const isbn = row.querySelector<HTMLDivElement>(".isbn")!.innerText.replace('ISBN:','');
    const name = row.querySelector<HTMLDivElement>(".book-name")!.innerText;
    const author = row.querySelector<HTMLDivElement>(".book-author")!.innerText;
    const bookPreview = row.querySelector<HTMLDivElement>('.book-preview')!;

    txtISBN.classList.add('is-valid');
    txtName.classList.add('is-valid');
    txtAuthor.classList.add('is-valid');

    txtISBN.value = isbn;
    txtName.value = name;
    txtAuthor.value = author;
    divThumbnail.style.backgroundImage = bookPreview.style.backgroundImage;
    setEnableForm(false);
    btnSave.disabled = false;
    btnClear.disabled = false;
    btnSave.innerText = 'EDIT';

});