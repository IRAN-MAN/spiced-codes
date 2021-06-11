(function () {
    function appendNews(data) {
        var $topHeadlines = $("#headlines-top");
        data.forEach(function (links) {
            var newsTitle = links.title;
            var newsUrl = links.url;
            var anchor =
                "<a class=top-links href=" + newsUrl + ">" + newsTitle + "</a>";
            $topHeadlines.append(anchor);
        });
    }

    $.get("headLines.json", function (data) {
        appendNews(data);
        initTicker();
    });

    function initTicker() {
        var $topHeadlines = $("#headlines-top");
        var $topLinks = $topHeadlines.find(".top-links");
        var $left = $topHeadlines.offset().left;
        var animationId;
        var SPEED = 3;

        moveHeadlines();
        addHoverEffectToLinks();

        function moveHeadlines() {
            $left -= SPEED;
            var $topLinks = $topHeadlines.find(".top-links");
            if (
                $left <= -parseInt($($topLinks.eq(0)).css("width").slice(0, -2))
            ) {
                $left += parseInt($($topLinks.eq(0)).css("width").slice(0, -2));
                $topLinks.eq(0).appendTo($topHeadlines);
            }
            $topHeadlines.css({ left: $left + "px" });
            animationId = requestAnimationFrame(moveHeadlines);
        }

        function addHoverEffectToLinks() {
            $topLinks.each(function () {
                $(this).hover(mouseIn, mouseOut);
            });
            function mouseIn() {
                cancelAnimationFrame(animationId);
                $(this).css({ "text-decoration": "underline", color: "blue" });
            }
            function mouseOut() {
                $(this).css({ "text-decoration": "", color: "" });
                moveHeadlines();
            }
        }
    }
})();
