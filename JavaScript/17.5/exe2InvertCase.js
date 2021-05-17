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
    return inverted.toString();
}

invertCase("aaaV3VVDsss43s");
