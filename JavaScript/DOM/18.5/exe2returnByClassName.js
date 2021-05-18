/* Write a function that expects a string representing a class name to be passed as a parameter.
 The function should return an array containing all the elements in the document 
 that have the class that was passed in. */

function returnByClassName(className) {
    // var elements = [...document.getElementsByClassName("className")];
    var elements = Array.from(document.getElementsByClassName(className));
    return elements;
}

returnByClassName("change");
