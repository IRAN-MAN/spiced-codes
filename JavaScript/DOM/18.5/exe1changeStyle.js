/* Write a function that expects a string representing a selector to be passed as a parameter.
 The function should find all the elements in the document that match the selector and
  change their style so that the text they contain is italic, underlined, and bold.*/

function changeStyle(selector) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.style.fontStyle = "italic";
        element.style.textDecoration = "underline";
        element.style.fontWeight = "bold";
    }
}

changeStyle("p");
