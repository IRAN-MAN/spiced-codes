(function () {
    var headlines = document.getElementById("headlines");
    var links = headlines.getElementsByTagName("A"); // to have a synced list of elements
    var left = headlines.offsetLeft;
    moveHeadlines();
    function moveHeadlines() {
        left--;
        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }
        links[0].style.left = headlines.offsetWidth + "px";

        requestAnimationFrame(moveHeadlines);
    }
})();
