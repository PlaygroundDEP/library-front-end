function e(e,t,n){const o=new XMLHttpRequest;o.onreadystatechange=()=>{o.readyState===o.DONE&&(200===o.status?t(o.getResponseHeader("X-Count")):n&&n(o.status))},o.open("HEAD",e,!1),o.send()}e("http://127.0.0.1:8080/library/members",(e=>{document.querySelector("#spn-total-members").innerText=e})),e("http://127.0.0.1:8080/library/v2/books",(e=>{document.querySelector("#spn-total-books").innerText=e}));
//# sourceMappingURL=index.ba1287d4.js.map
