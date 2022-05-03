console.log("http://127.0.0.1:8080/library");function t(t,e,o){const s=new XMLHttpRequest;s.onreadystatechange=()=>{s.readyState===s.DONE&&(200===s.status?e(s.responseText):o&&o(s.status))}}t("http://127.0.0.1:8080/library/members",(t=>{console.log(t)})),t("http://127.0.0.1:8080/library/books",(t=>{console.log(t)}));
//# sourceMappingURL=index.ed32b795.js.map
