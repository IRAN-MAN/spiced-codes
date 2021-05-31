/*
Make a static HTML page that has a large <textarea> on it. 
When the user types in it, save the value in localStorage. 
When the user comes back to the page after navigating away or 
closing the browser, the stored value should automatically appear in the <textarea>.
*/

(function () {
    var $textarea = $("#text-area");
    var defaultValue = localStorage.getItem("textarea");

    $textarea.val(defaultValue);

    $textarea.on("input", function () {
        try {
            var value = $textarea.val();
            localStorage.setItem("textarea", value);
        } catch (error) {
            alert(error);
        }
    });
})();
