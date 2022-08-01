window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");

    menuToggle.classList.toggle("scroll");
    menu.classList.toggle("scroll");
}
// Scroll top button
window.addEventListener("scroll", () => {
    const scrollHeight = window.scrollY;
    const moveTopButton = document.querySelector(".move-top");
    if(scrollHeight > 520) {
        moveTopButton.style.opacity = 1;
        moveTopButton.style.top = "85vh";
        moveTopButton.style.right = "5vw";
    } else {
        moveTopButton.style.opacity = 0;
        moveTopButton.style.top = "50vh";
        moveTopButton.style.right = "5vw";
    }
});
// Preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", () => {
    loader.style.display = "none";
})


// Changes Display in about me auto-typing on window resizing
var Hello = document.getElementById("myName");

function myFunction(x) {
    if (x.matches) { // If media query matches
      Hello.style.display = "block";
    } else {
      Hello.style.display = "inline-block";
    }
  }
  
  var x = window.matchMedia("(max-width: 603px)")
  myFunction(x) // Call listener function at run time
  x.addEventListener("change", myFunction) // Attach event listener function on state changes

//   Adding active classes to menu that will change on scrolling

var li = document.querySelectorAll(".nav-item");
var section = document.querySelectorAll("section");

function activeMenu() {
    let length = section.length;
    while(--length && window.scrollY + 97 < section[length].offsetTop) {}
        li.forEach(ltx => ltx.classList.remove("active"));
        li[length].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);


