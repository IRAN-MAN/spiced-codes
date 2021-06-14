// Top Ticker

(function () {
    var topHeadlines = document.getElementById("headlines-top");
    var topLinks = topHeadlines.getElementsByClassName("top-links");
    var left = topHeadlines.offsetLeft;
    var animationId;
    var SPEED = 2;

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
        left -= SPEED;
        if (left <= -topLinks[0].offsetWidth) {
            left += topLinks[0].offsetWidth;
            topHeadlines.appendChild(topLinks[0]);
        }
        topHeadlines.style.left = left + "px";

        animationId = requestAnimationFrame(moveHeadlines);
    }
})();

// Bottom Ticker

(function () {
    var bottomHeadlines = document.getElementById("headlines-bottom");
    var bottomLinks = bottomHeadlines.getElementsByClassName("bottom-links");
    var SPEED = 2;
    var animationId;
    var right =
        window.innerWidth -
        (bottomHeadlines.offsetLeft + bottomHeadlines.offsetWidth);

    function addHoverEffectToLinks() {
        for (var i = 0; i < bottomLinks.length; i++) {
            var link = bottomLinks[i];
            link.addEventListener("mouseenter", function () {
                this.style.textDecoration = "underline";
                this.style.color = "blue";
                cancelAnimationFrame(animationId);
            });
            link.addEventListener("mouseleave", function () {
                this.style.textDecoration = "";
                this.style.color = "";
                moveBottomHeadlines();
            });
        }
    }

    addHoverEffectToLinks();
    moveBottomHeadlines();
    function moveBottomHeadlines() {
        var lastChild = bottomHeadlines.lastElementChild;
        right -= SPEED;

        if (right <= lastChild.offsetWidth) {
            right += lastChild.offsetWidth;
            bottomHeadlines.insertBefore(lastChild, bottomHeadlines.firstChild);
        }
        bottomHeadlines.style.right = right + "px";

        animationId = requestAnimationFrame(moveBottomHeadlines);
    }
})();
