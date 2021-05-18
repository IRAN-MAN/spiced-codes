/* Write a function called invertCase that expects a string as a parameter. 
This function should return a new string with all the same characters as the string 
that was passed in but with the cases of the alphabetic characters switched. 
Uppercase characters should become lowercase and lowercase letters should become uppercase. 
Characters that are not alphabetic should not change. The toUpperCase and toLowerCase methods 
that all strings have will come in handy here. */

// My Version
function invertCase(string) {
    var inverted = [];
    var stringToArray = string.split("");
    stringToArray.forEach(function (element) {
        if (element == element.toUpperCase()) {
            inverted.push(element.toLowerCase());
        } else {
            inverted.push(element.toUpperCase());
        }
    });
    return inverted.join("");
}

invertCase("aaaV3VVDsss43s");

//Version 1
/*
function invertCase(str) {
    return str
        .split("")
        .map(function (char) {
            if (char == char.toLowerCase()) {
                return char.toUpperCase();
            }
            return char.toLowerCase();
        })
        .join("");
}
*/

/* Version 2

function invertCase(str) {
    var inverted = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            inverted += str[i].toLowerCase();
        } else {
            inverted += str[i].toUpperCase();
        }
    }
    return inverted;
}
*/

/* version 3
function invertCase(str) {
    var inverted = '';
    for (var i = 0; i < str.length; i++) {
        inverted += str[i][
            str[i] == str[i].toUpperCase() ? 'toLowerCase' : 'toUpperCase'
        ]();
    }
    return inverted;
}
*/
