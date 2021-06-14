(function () {
    var $pane = $("#pane");
    var $slider = $pane.find(".slider");
    var $rightPane = $pane.find(".no-color");
    // var rightPane = $pane.find('.no-color');
    var isSliding = false;
    var sliderDefaultPosition = $slider.position().left;

    $rightPane.width(sliderDefaultPosition);

    $slider
        .on("mousedown", function () {
            isSliding = true;
        })
        .on("mouseup", function () {
            console.log("mouseup");
            isSliding = false;
        });

    $pane
        .on("mousemove", function (event) {
            var width = $(this).width();
            // console.log(width);
            var sliderCurrentPositon = getPosition(
                event.clientX,
                this.offsetLeft,
                width
            );
            if (isSliding) {
                // console.log(isSliding);
                $slider.css({
                    left: sliderCurrentPositon,
                });
                $rightPane.width(sliderCurrentPositon);
            }
        })
        .on("mouseleave", function () {
            isSliding = false;
        });

    function getPosition(clientX, offsetLeft, width) {
        var posX = clientX - offsetLeft;
        if (posX >= width) {
            posX = width;
        }
        return posX + "px";
    }
})();
