const btnNewBook=document.querySelector("#btn-new-book"),frmBook=document.querySelector("#frm-book"),txtISBN=document.querySelector("#txt-isbn"),txtName=document.querySelector("#txt-name"),txtAuthor=document.querySelector("#txt-author"),btnBrowse=document.querySelector("#btn-browse"),btnRemove=document.querySelector("#btn-remove"),txtPreview=document.querySelector("#txt-preview"),divThumbnail=document.querySelector("#thumbnail"),paginationElm=document.querySelector("#pagination"),tblBooks=document.querySelector("table"),btnSave=document.querySelector("#btn-save"),btnClear=document.querySelector("#btn-clear");let blobURL=null;function setEnableForm(e=!0){for(const t of frmBook.elements)(t instanceof HTMLInputElement||t instanceof HTMLButtonElement)&&(t.disabled=!e)}function checkValidityOfISBN(){return/^\d+$/.test(txtISBN.value)}function checkValidityOfName(){return/^.+$/.test(txtName.value)}function checkValidityOfAuthor(){return/^[A-Za-z ]+$/.test(txtAuthor.value)}function checkValidity(e){e.target.classList.remove("is-valid","is-invalid"),e.target===txtISBN?checkValidityOfISBN()?txtISBN.classList.add("is-valid"):txtISBN.classList.add("is-invalid"):e.target===txtName?checkValidityOfName()?txtName.classList.add("is-valid"):txtName.classList.add("is-invalid"):checkValidityOfAuthor()?txtAuthor.classList.add("is-valid"):txtAuthor.classList.add("is-invalid")}frmBook.addEventListener("reset",(()=>{const e=[txtISBN,txtName,txtAuthor];e.forEach((e=>e.classList.remove("is-valid","is-invalid"))),e[0].focus(),divThumbnail.style.backgroundImage="",tblBooks.querySelectorAll("tr").forEach((e=>e.classList.remove("selected"))),btnRemove.click(),btnSave.innerText="SAVE"})),frmBook.addEventListener("submit",(e=>{if(e.preventDefault(),"EDIT"===btnSave.innerText)return setEnableForm(),btnSave.innerText="SAVE",void(btnRemove.disabled=!divThumbnail.style.backgroundImage);const t=[txtISBN,txtName,txtAuthor].filter((e=>!e.classList.contains("is-valid")));return t.length>0?(t.forEach((e=>e.classList.add("is-invalid"))),void t[0].focus()):void 0})),btnBrowse.addEventListener("click",(()=>txtPreview.click())),txtPreview.addEventListener("input",(()=>{txtPreview.files[0]&&(blobURL&&URL.revokeObjectURL(blobURL),blobURL=URL.createObjectURL(txtPreview.files[0]),divThumbnail.style.backgroundImage=`url(${blobURL})`,btnRemove.disabled=!1)})),btnRemove.addEventListener("click",(()=>{txtPreview.value="",blobURL&&URL.revokeObjectURL(blobURL),divThumbnail.style.backgroundImage="",btnRemove.disabled=!0})),setEnableForm(!1),btnNewBook.addEventListener("click",(()=>{setEnableForm(),btnRemove.click(),frmBook.reset(),txtISBN.focus()})),txtISBN.addEventListener("input",checkValidity),txtName.addEventListener("input",checkValidity),txtAuthor.addEventListener("input",checkValidity);const pageSize=5;let booksCount=55,activePage=1;function initPagination(e=1){let t=Math.ceil(booksCount/5);(e<1||e>t)&&(e=t),activePage=e;let i=e+4,n=e-5;i>t&&(n-=i-t,i=t),n<1&&(i+=1-n,i>t&&(i=t),n=1);let a='<li class="page-item"><a class="page-link" href="#">&laquo;</a></li>';for(let t=n;t<=i;t++)a+=`<li class="page-item ${t===e?"active":""}"><a class="page-link" href="#">${t}</a></li>`;a+='<li class="page-item"><a class="page-link" href="#">&raquo;</a></li>',paginationElm.innerHTML=a}initPagination(),paginationElm.addEventListener("click",(e=>{let t=e.target;"A"===t.tagName&&("«"===t.innerText?initPagination(--activePage):"»"===t.innerText?initPagination(++activePage):initPagination(+t.innerText),e.stopPropagation())})),tblBooks.querySelector("tbody").addEventListener("click",(e=>{if(e.target.classList.contains("trash")||e.target.classList.contains("fa-trash")){e.stopPropagation();const t=e.target.closest("tr"),i=t.querySelector(".isbn").innerText;Swal.fire({title:"Confirm?",text:`Are you sure to delete the ${i}?`,icon:"question",confirmButtonText:"Yes",denyButtonText:"No",showDenyButton:!0}).then((e=>{e.isConfirmed&&t.remove()}))}console.log("working")})),tblBooks.querySelector("tbody").addEventListener("click",(e=>{const t=e.target.closest("tr");tblBooks.querySelectorAll("tr").forEach((e=>e.classList.remove("selected"))),t.classList.add("selected");const i=t.querySelector(".isbn").innerText,n=t.querySelector(".book-name").innerText,a=t.querySelector(".book-author").innerText,o=t.querySelector(".book-preview");txtISBN.value=i,txtName.value=n,txtAuthor.value=a,divThumbnail.style.backgroundImage=o.style.backgroundImage,setEnableForm(!1),btnSave.disabled=!1,btnClear.disabled=!1,btnSave.innerText="EDIT"}));
//# sourceMappingURL=manage-books.dd51393a.js.map