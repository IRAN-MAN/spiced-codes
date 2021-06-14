var elementsThatToggle = document.querySelectorAll(".can-toggle-nav");
var nav = document.getElementById("nav");
var hamburger = document.getElementById("hamburger");
var backDrop = document.getElementById("back-drop");
var $modal = $(".modal-container");
var $modalButton = $(".modal-button");
var $body = $(document.body);

setTimeout(function () {
    $modal.css({ display: "flex" });
    $body.addClass("no-scroll");
}, 1000);

$modalButton.on("click", function () {
    $modal.css({ display: "none" });
    $body.removeClass("no-scroll");
});

hamburger.addEventListener("click", function () {
    nav.classList.add("open");
    backDrop.classList.add("backdrop");
});

elementsThatToggle.forEach(function (element) {
    element.addEventListener("click", function () {
        nav.classList.toggle("open");
        backDrop.classList.toggle("backdrop");
    });
});

document.addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
        nav.classList.remove("open");
        backDrop.classList.remove("backdrop");
    }
});
