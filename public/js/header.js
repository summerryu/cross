

const mo_hamburger = document.querySelector(".mo_hamburger");
const mo_gnb = document.querySelector(".main .mo_gnb_on");
const mo_main = document.querySelector(".main");
const closeBtn = document.querySelector(".mo_close");
const header = document.querySelector("#header");

mo_hamburger.addEventListener("click",function(){
    mo_main.classList.toggle("on");
    mo_gnb.classList.toggle("open");
    header.classList.toggle("on");
})
closeBtn.addEventListener("click",function(){
    mo_main.classList.remove("on");
    mo_gnb.classList.remove("open");
    header.classList.remove("on");
})
