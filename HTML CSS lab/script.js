var elementsThatToggle = document.querySelectorAll(".can-toggle-nav");
var nav = document.getElementById("nav");
var hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
    nav.classList.add("open");
});

elementsThatToggle.forEach(function (element) {
    element.addEventListener("click", function () {
        nav.classList.toggle("open");
    });
});
