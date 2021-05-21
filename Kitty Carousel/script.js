var carousel = document.getElementById("carousel");
var kitties = carousel.querySelectorAll(".kitty");
var dots = carousel.querySelectorAll(".dots li");
var kittyIndex = 0;
var nextKittyIndex = 1;

function updateDots() {
    dots.forEach(function (dot, index) {
        dot.classList.toggle("current", kittyIndex === index);
    });
}

function moveKitties() {
    kitties[kittyIndex].classList.remove("onscreen");
    kitties[kittyIndex].classList.add("exit");
    kitties[nextKittyIndex].classList.add("onscreen");
    kittyIndex = nextKittyIndex;
    if (kittyIndex === kitties.length - 1) {
        nextKittyIndex = 0;
    } else {
        nextKittyIndex++;
    }
}
carousel.addEventListener("transitionend", function (event) {
    if (!event.target.classList.contains("exit")) {
        return;
    }
    event.target.classList.remove("exit");
    setTimeout(function () {
        moveKitties();
        updateDots();
    }, 1000);
});

setTimeout(function () {
    moveKitties();
}, 1000);

//initCarousel('carousel', 2000)
