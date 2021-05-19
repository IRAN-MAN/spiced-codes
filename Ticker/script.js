(function () {
    var topHeadlines = document.getElementById("headlines-top");
    var topLinks = topHeadlines.getElementsByClassName("top-links");
    var left = topHeadlines.offsetLeft;
    moveHeadlines();
    function moveHeadlines() {
        left--;
        if (left <= -topLinks[0].offsetWidth) {
            left += topLinks[0].offsetWidth;
            topHeadlines.appendChild(topLinks[0]);
        }
        topHeadlines.style.left = left + "px";

        requestAnimationFrame(moveHeadlines);
    }
})();

(function () {
    var bottomHeadlines = document.getElementById("headlines-bottom");
    var bottomLinks = bottomHeadlines.getElementsByClassName("bottom-links");
    var right =
        window.innerWidth -
        (bottomHeadlines.offsetLeft + bottomHeadlines.offsetWidth);

    console.log(right);
    moveBottomHeadlines();
    function moveBottomHeadlines() {
        right--;
        if (right <= -bottomLinks.length - (1).offsetWidth) {
            right += bottomLinks.length - (1).offsetWidth;
            bottomHeadlines.appendChild(bottomLinks.length - 1);
        }
        bottomHeadlines.style.right = right + "px";

        requestAnimationFrame(moveBottomHeadlines);
    }
})();
