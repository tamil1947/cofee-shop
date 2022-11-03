let menu=document.querySelector("#nav-btn");
let menu2=document.querySelector('#menu-btn2');


let links=document.querySelector(".nav-links");

menu.addEventListener('click',()=>{
   // links.classList.add("nav-show");  only add
 
   links.classList.toggle("active"); //add and remove
   menu2.classList.toggle('fa-xmark'); //add and remove
})