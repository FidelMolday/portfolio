window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");

    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
}

//  $(window).load(function() {

//     // will first fade out the loading animation 
//       $("#loader").fadeOut("slow", function(){

//       // will fade out the whole DIV that covers the website.
//       $("#preloader").delay(300).fadeOut("slow");

//     });       

//     })






