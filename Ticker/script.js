(function () {
    var headlines = document.getElementById("headlines");
    var links = headlines.getElementsByTagName("A"); // to have a synced list of elements
    var left = headlines.offsetLeft;
    // moveHeadlines();
    function moveHeadlines() {
        left--;
        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth; // increase the currentf left
            // use appendChild
        }
        // change the style.left to the new left position + 'px'

        requestAnimationFrame(moveHeadlines);
    }
})();