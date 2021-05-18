/* Write a function that expects a string representing a class name to be passed as a parameter.
 The function should return an array containing all the elements in the document 
 that have the class that was passed in. */

function returnByClassName(className) {
    // var elements = [...document.getElementsByClassName(className)];
    // var elements = Array.from(document.getElementsByClassName(className));
    // console.log(Array.isArray(elements)); // logs true for both cases above
    // return elements;

    // seems like some older browsers don't support Array.from() and the other solution.
    // i refactor the code as below:

    var classArray = [];
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        classArray.push(elements[i]);
    }
    console.log(Array.isArray(classArray));
    return classArray;
}

returnByClassName("change");
