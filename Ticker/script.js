(function () {
    var topHeadlines = document.getElementById("headlines-top");
    var topLinks = topHeadlines.getElementsByClassName("top-links");
    var left = topHeadlines.offsetLeft;
    var animationId;

    function addHoverEffectToLinks() {
        for (var i = 0; i < topLinks.length; i++) {
            var link = topLinks[i];
            link.addEventListener("mouseenter", function () {
                this.style.textDecoration = "underline";
                this.style.color = "blue";
                cancelAnimationFrame(animationId);
            });
            link.addEventListener("mouseleave", function () {
                this.style.textDecoration = "";
                this.style.color = "";
                moveHeadlines();
            });
        }
    }

    addHoverEffectToLinks();
    moveHeadlines();
    function moveHeadlines() {
        left--;
        if (left <= -topLinks[0].offsetWidth) {
            left += topLinks[0].offsetWidth;
            topHeadlines.appendChild(topLinks[0]);
        }
        topHeadlines.style.left = left + "px";

        animationId = requestAnimationFrame(moveHeadlines);
    }
})();

(function () {
    var bottomHeadlines = document.getElementById("headlines-bottom");
    // var bottomLinks = bottomHeadlines.getElementsByClassName("bottom-links");
    var right =
        window.innerWidth -
        (bottomHeadlines.offsetLeft + bottomHeadlines.offsetWidth);
    moveBottomHeadlines();
    function moveBottomHeadlines() {
        var lastChild = bottomHeadlines.lastElementChild;
        right--;

        if (right <= lastChild.offsetWidth) {
            right += lastChild.offsetWidth;
            bottomHeadlines.removeChild(bottomHeadlines.lastChild);
            bottomHeadlines.insertBefore(
                bottomHeadlines.lastChild,
                bottomHeadlines.firstChild
            );
        }
        bottomHeadlines.style.right = right + "px";

        requestAnimationFrame(moveBottomHeadlines);
    }
})();
