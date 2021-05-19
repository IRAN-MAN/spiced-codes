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
    moveBottomHeadlines();
    function moveBottomHeadlines() {
        var lastChiled = bottomHeadlines.lastElementChild;
        right--;
        // problem lays here
        if (right <= lastChiled.offsetWidth) {
            right += lastChiled.offsetWidth;
            bottomHeadlines.removeChild(lastChiled);
            bottomLinks[0].insertBefore(lastChiled);
        }
        bottomHeadlines.style.right = right + "px";

        requestAnimationFrame(moveBottomHeadlines);
    }
})();
