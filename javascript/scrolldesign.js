window.onscroll = function() {myFunction()}; 
var header = document.getElementById("mainHeader"); 
var backtotop = document.getElementById('BackToTheTop'); 
var page = document.getElementById("pageMain"); 
var hamburger_menu = document.getElementById("minimenu-ham")
var hamburger_img = document.getElementById('OpenHamMenu'); 

var sticky = header.offsetTop;

function myFunction() { 
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        page.style.marginTop = '125px'; 
        hamburger_menu.style.top = "0px"; 
    if (window.pageYOffset > 10) {
        header.classList.add("sticky2"); 
        page.style.marginTop = '125px'; 
        hamburger_menu.style.top = "0px"}
    if (window.pageYOffset > 120) {
        backtotop.classList.add("shown"); 
    }
    } else { 
        header.classList.remove("sticky","sticky2"); 
        page.style.marginTop = '20px'; 
        backtotop.classList.remove("shown"); 
        hamburger_menu.style.top = "auto"; 
        hamburger_img.style.filter = "brightness(1)"
    }
}