const e=document.querySelector("#btn-new-book"),t=document.querySelector("#frm-book"),s=document.querySelector("#txt-isbn"),a=document.querySelector("#txt-name"),n=document.querySelector("#txt-author"),i=document.querySelector("#btn-browse"),r=document.querySelector("#btn-remove"),l=document.querySelector("#txt-preview"),o=document.querySelector("#thumbnail"),c=document.querySelector("#pagination"),d=document.querySelector("table"),u=document.querySelector("#btn-save"),v=document.querySelector("#btn-clear"),m=document.querySelector("#txt-search");let b=null;function L(e=!0){for(const s of t.elements)(s instanceof HTMLInputElement||s instanceof HTMLButtonElement)&&(s.disabled=!e)}function y(e){e.target.classList.remove("is-valid","is-invalid"),e.target===s?/^\d+$/.test(s.value)?s.classList.add("is-valid"):s.classList.add("is-invalid"):e.target===a?/^.+$/.test(a.value)?a.classList.add("is-valid"):a.classList.add("is-invalid"):/^[A-Za-z ]+$/.test(n.value)?n.classList.add("is-valid"):n.classList.add("is-invalid")}t.addEventListener("reset",(()=>{const e=[s,a,n];e.forEach((e=>e.classList.remove("is-valid","is-invalid"))),e[0].focus(),o.style.backgroundImage="",d.querySelectorAll("tr").forEach((e=>e.classList.remove("selected"))),r.click(),u.innerText="SAVE"})),t.addEventListener("submit",(e=>{if(e.preventDefault(),"EDIT"===u.innerText)return L(),u.innerText="SAVE",void(r.disabled=!o.style.backgroundImage);const t=[s,a,n].filter((e=>!e.classList.contains("is-valid")));return t.length>0?(t.forEach((e=>e.classList.add("is-invalid"))),void t[0].focus()):void 0})),i.addEventListener("click",(()=>l.click())),l.addEventListener("input",(()=>{l.files[0]&&(b&&URL.revokeObjectURL(b),b=URL.createObjectURL(l.files[0]),o.style.backgroundImage=`url(${b})`,r.disabled=!1)})),r.addEventListener("click",(()=>{l.value="",b&&URL.revokeObjectURL(b),o.style.backgroundImage="",r.disabled=!0})),L(!1),e.addEventListener("click",(()=>{L(),r.click(),t.reset(),s.focus()})),s.addEventListener("input",y),a.addEventListener("input",y),n.addEventListener("input",y);let g=55,f=1;function p(e=1){let t=Math.ceil(g/5);(e<1||e>t)&&(e=t),f=e;let s=e+4,a=e-5;s>t&&(a-=s-t,s=t),a<1&&(s+=1-a,s>t&&(s=t),a=1);let n='<li class="page-item"><a class="page-link" href="#">&laquo;</a></li>';for(let t=a;t<=s;t++)n+=`<li class="page-item ${t===e?"active":""}"><a class="page-link" href="#">${t}</a></li>`;n+='<li class="page-item"><a class="page-link" href="#">&raquo;</a></li>',c.innerHTML=n}p(),c.addEventListener("click",(e=>{let t=e.target;"A"===t.tagName&&("«"===t.innerText?p(--f):"»"===t.innerText?p(++f):(p(+t.innerText),k(m.value,f)),e.stopPropagation())})),d.querySelector("tbody").addEventListener("click",(e=>{if(e.target.classList.contains("trash")||e.target.classList.contains("fa-trash")){e.stopPropagation();const s=e.target.closest("tr"),a=s.querySelector(".isbn").innerText;Swal.fire({title:"Confirm?",text:`Are you sure to delete the ${a}?`,icon:"question",confirmButtonText:"Yes",denyButtonText:"No",showDenyButton:!0}).then((e=>{e.isConfirmed&&(t.reset(),s.remove())}))}console.log("working")})),d.querySelector("tbody").addEventListener("click",(e=>{const t=e.target.closest("tr");d.querySelectorAll("tr").forEach((e=>e.classList.remove("selected"))),t.classList.add("selected");const i=t.querySelector(".isbn").innerText.replace("ISBN:",""),r=t.querySelector(".book-name").innerText,l=t.querySelector(".book-author").innerText,c=t.querySelector(".book-preview");s.classList.add("is-valid"),a.classList.add("is-valid"),n.classList.add("is-valid"),s.value=i,a.value=r,n.value=l,o.style.backgroundImage=c.style.backgroundImage,L(!1),u.disabled=!1,v.disabled=!1,u.innerText="EDIT"}));function k(e="",t=1){httpRequest("GET",`http://127.0.0.1:8080/library/v2/books?q=${e}&page=${t}&size=5`).then((e=>{d.querySelectorAll("tr").forEach((e=>e.remove()));const t=JSON.parse(e.body);g=+e.http.getResponseHeader("X-Count"),p(f),t.forEach((e=>{const t=document.createElement("tr");t.innerHTML=`<td><div class="book-preview ${null===e.preview?"no-image":""}" style="background-image: url(${e.preview})"></div></td>\n                                    <td>\n                                        <div class="isbn">ISBN: ${e.isbn}</div>\n                                        <div class="book-name text-bold">${e.name}</div>\n                                        <div class="book-author">${e.author}</div>\n                                    </td>\n                                    <td class="trash">\n                                        <i class="fas fa-trash"></i>\n                                    </td>`,d.querySelector("tbody").append(t)}))})).catch((e=>{}))}k(),m.addEventListener("input",(()=>k(m.value)));
//# sourceMappingURL=manage-books.26534f3f.js.map
