(function () {
    var $textArea = $("#text-area");
    var $validateBtn = $("#validate");

    $validateBtn.on("click", function () {
        $("div").remove();
        var $inputValue = $textArea.val();
        try {
            JSON.parse($inputValue);
            $("<div>Your JSON is valid</div>")
                .css({ color: "green" })
                .insertAfter($("#validate"));
        } catch (error) {
            console.warn(error);
            $("<div>Your JSON is NOT valid</div>")
                .css({ color: "red" })
                .insertAfter($("#validate"));
        }
    });
})();
