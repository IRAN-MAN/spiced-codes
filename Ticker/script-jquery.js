(function () {
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
        if ($left <= -parseInt($($topLinks.eq(0)).css("width").slice(0, -2))) {
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
})();

// bottom-Ticker

// (function () {
//     var $bottomHeadlines = $("#headlines-bottom");
//     var $bottomLinks = $bottomHeadlines.find(".bottom-links");
//     console.log($bottomLinks);
//     var $right =
//         $(window).innerWidth() -
//         $bottomHeadlines.offset().left +
//         parseInt($bottomHeadlines.css("width").slice(0, -2));
//     // console.log($right);
//     var animationId2;
//     var SPEED = 3;

//     // var $lastChildWidth = $bottomHeadlines
//     //     .children()
//     //     .last()
//     //     .css("width")
//     //     .slice(0, -2);
//     // console.log($lastChildWidth);
//     // moveBottomHeadlines();

//     function moveBottomHeadlines() {
//         var $bottomLinks = $bottomHeadlines.find(".bottom-links");

//         var $lastChildWidth = $bottomHeadlines
//             .children()
//             .last()
//             .css("width")
//             .slice(0, -2);

//         $right -= SPEED;
//         if ($right <= $lastChildWidth) {
//             $right += $lastChildWidth;
//             $bottomLinks.children().last().prependTo($bottomHeadlines.last());
//         }
//         $bottomHeadlines.css({ right: $right + "px" });
//         animationId2 = requestAnimationFrame(moveBottomHeadlines);
//     }
// })();
