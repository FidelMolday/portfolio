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
const loader = document.getElementById("preloader");
window.addEventListener("load", () => {
    loader.style.display = "none";
})






