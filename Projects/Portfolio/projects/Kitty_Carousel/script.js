var carousel = document.getElementById("carousel");
var kitties = carousel.querySelectorAll(".kitty");
var dots = carousel.querySelectorAll(".dots li");
var delay = 3000;
var kittyIndex = 0;
var nextKittyIndex = 1;
var timer;
var animating;
var touchStart;
var touchEnd;

function moveKitties() {
    animating = true;
    dots[kittyIndex].classList.remove("current");
    kitties[kittyIndex].classList.remove("onscreen");
    kitties[kittyIndex].classList.add("exit");
    kitties[nextKittyIndex].classList.add("onscreen");
    dots[nextKittyIndex].classList.add("current");
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
    animating = false;
    event.target.classList.remove("exit");
    timer = setTimeout(function () {
        moveKitties();
    }, delay);
});

for (var i = 0; i < dots.length; i++) {
    (function (i) {
        dots[i].addEventListener("click", function (event) {
            if (event.target.classList.contains("current")) {
                return;
            }
            if (animating) {
                return;
            }
            clearTimeout(timer);
            nextKittyIndex = i;
            moveKitties();
        });
    })(i);
}

carousel.addEventListener("touchstart", function (event) {
    // console.log(event.touches[0]);
    touchStart = event.touches[0].clientX;
    // console.log(touchStart);
});

carousel.addEventListener("touchend", function (event) {
    // console.log(event);
    touchEnd = event.changedTouches[0].clientX;
    // console.log(touchEnd);
    if (touchEnd < touchStart) {
        // console.log("swiped left");
        if (animating) {
            return;
        }
        clearTimeout(timer);
        moveKitties();
    }
});

// document.addEventListener("swiped-left", function () {
//     console.log("swiped left");

// });

setTimeout(function () {
    moveKitties();
}, delay);
