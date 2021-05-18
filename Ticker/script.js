(function () {
    var headlines = document.getElementById("headlines");
    var links = headlines.getElementsByTagName("A");
    var left = headlines.offsetLeft;
    moveHeadlines();
    function moveHeadlines() {
        left--;
        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }
        headlines.style.left = left + "px";

        requestAnimationFrame(moveHeadlines);
    }
})();
