const btnNewBook=document.querySelector("#btn-new-book"),frmBook=document.querySelector("#frm-book"),txtISBN=document.querySelector("#txt-isbn"),txtName=document.querySelector("#txt-name"),txtAuthor=document.querySelector("#txt-author"),btnBrowse=document.querySelector("#btn-browse"),btnRemove=document.querySelector("#btn-remove"),txtPreview=document.querySelector("#txt-preview"),divThumbnail=document.querySelector("#thumbnail"),paginationElm=document.querySelector("#pagination"),tblBooks=document.querySelector("table"),btnSave=document.querySelector("#btn-save"),btnClear=document.querySelector("#btn-clear");let blobURL=null;function setEnableForm(t=!0){for(const e of frmBook.elements)(e instanceof HTMLInputElement||e instanceof HTMLButtonElement)&&(e.disabled=!t)}function checkValidityOfISBN(){return/^\d+$/.test(txtISBN.value)}function checkValidityOfName(){return/^.+$/.test(txtName.value)}function checkValidityOfAuthor(){return/^[A-Za-z ]+$/.test(txtAuthor.value)}function checkValidity(t){t.target.classList.remove("is-valid","is-invalid"),t.target===txtISBN?checkValidityOfISBN()?txtISBN.classList.add("is-valid"):txtISBN.classList.add("is-invalid"):t.target===txtName?checkValidityOfName()?txtName.classList.add("is-valid"):txtName.classList.add("is-invalid"):checkValidityOfAuthor()?txtAuthor.classList.add("is-valid"):txtAuthor.classList.add("is-invalid")}frmBook.addEventListener("reset",(()=>{const t=[txtISBN,txtName,txtAuthor];t.forEach((t=>t.classList.remove("is-valid","is-invalid"))),t[0].focus(),divThumbnail.style.backgroundImage="",tblBooks.querySelectorAll("tr").forEach((t=>t.classList.remove("selected"))),btnRemove.click(),btnSave.innerText="SAVE"})),frmBook.addEventListener("submit",(t=>{if(t.preventDefault(),"EDIT"===btnSave.innerText)return setEnableForm(),btnSave.innerText="SAVE",void(btnRemove.disabled=!divThumbnail.style.backgroundImage);const e=[txtISBN,txtName,txtAuthor].filter((t=>!t.classList.contains("is-valid")));return e.length>0?(e.forEach((t=>t.classList.add("is-invalid"))),void e[0].focus()):void 0})),btnBrowse.addEventListener("click",(()=>txtPreview.click())),txtPreview.addEventListener("input",(()=>{txtPreview.files[0]&&(blobURL&&URL.revokeObjectURL(blobURL),blobURL=URL.createObjectURL(txtPreview.files[0]),divThumbnail.style.backgroundImage=`url(${blobURL})`,btnRemove.disabled=!1)})),btnRemove.addEventListener("click",(()=>{txtPreview.value="",blobURL&&URL.revokeObjectURL(blobURL),divThumbnail.style.backgroundImage="",btnRemove.disabled=!0})),setEnableForm(!1),btnNewBook.addEventListener("click",(()=>{setEnableForm(),btnRemove.click(),frmBook.reset(),txtISBN.focus()})),txtISBN.addEventListener("input",checkValidity),txtName.addEventListener("input",checkValidity),txtAuthor.addEventListener("input",checkValidity);const pageSize=5;let booksCount=55,activePage=1;function initPagination(t=1){let e=Math.ceil(booksCount/5);(t<1||t>e)&&(t=e),activePage=t;let a=t+4,n=t-5;a>e&&(n-=a-e,a=e),n<1&&(a+=1-n,a>e&&(a=e),n=1);let i='<li class="page-item"><a class="page-link" href="#">&laquo;</a></li>';for(let e=n;e<=a;e++)i+=`<li class="page-item ${e===t?"active":""}"><a class="page-link" href="#">${e}</a></li>`;i+='<li class="page-item"><a class="page-link" href="#">&raquo;</a></li>',paginationElm.innerHTML=i}initPagination(),paginationElm.addEventListener("click",(t=>{let e=t.target;"A"===e.tagName&&("«"===e.innerText?initPagination(--activePage):"»"===e.innerText?initPagination(++activePage):initPagination(+e.innerText),t.stopPropagation())})),tblBooks.querySelector("tbody").addEventListener("click",(t=>{if(t.target.classList.contains("trash")||t.target.classList.contains("fa-trash")){t.stopPropagation();const e=t.target.closest("tr"),a=e.querySelector(".isbn").innerText;Swal.fire({title:"Confirm?",text:`Are you sure to delete the ${a}?`,icon:"question",confirmButtonText:"Yes",denyButtonText:"No",showDenyButton:!0}).then((t=>{t.isConfirmed&&(frmBook.reset(),e.remove())}))}console.log("working")})),tblBooks.querySelector("tbody").addEventListener("click",(t=>{const e=t.target.closest("tr");tblBooks.querySelectorAll("tr").forEach((t=>t.classList.remove("selected"))),e.classList.add("selected");const a=e.querySelector(".isbn").innerText.replace("ISBN:",""),n=e.querySelector(".book-name").innerText,i=e.querySelector(".book-author").innerText,o=e.querySelector(".book-preview");txtISBN.classList.add("is-valid"),txtName.classList.add("is-valid"),txtAuthor.classList.add("is-valid"),txtISBN.value=a,txtName.value=n,txtAuthor.value=i,divThumbnail.style.backgroundImage=o.style.backgroundImage,setEnableForm(!1),btnSave.disabled=!1,btnClear.disabled=!1,btnSave.innerText="EDIT"}));const myPromise=sendHTTPRequest("GET","http://localhost:8080/library/v2/books");function sendHTTPRequest(t,e,a=[],n=null){return new Promise(((i,o)=>{const s=new XMLHttpRequest;s.onreadystatechange=()=>{s.readyState===s.DONE&&(s.status>=200&&s.status<=299?i({status:+s.status,body:s.responseText,http:s}):o({status:+s.status,body:s.responseText,http:s}))},s.open(t,e,!0),a.forEach((t=>s.setRequestHeader(t.name,t.value))),s.send(n)}))}myPromise.then((t=>{console.log("Success",t.status,t.body)})),myPromise.catch((t=>{console.log("Catch an error",t.status,t.body)}));
//# sourceMappingURL=manage-books.636082eb.js.map
