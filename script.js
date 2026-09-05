window.addEventListener('load',()=>setTimeout(()=>document.querySelector('.loader')?.remove(),900));
const nameCards=document.querySelectorAll(".reveal-name");
const nameObserver=new IntersectionObserver((entries)=>{
 entries.forEach((entry)=>{
   if(entry.isIntersecting){
     const i=[...nameCards].indexOf(entry.target);
     setTimeout(()=>entry.target.classList.add("show"), Math.min(i*45, 420));
     nameObserver.unobserve(entry.target);
   }
 });
},{threshold:.12});
nameCards.forEach(card=>nameObserver.observe(card));
