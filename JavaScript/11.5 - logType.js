function logType(value) {
    if (typeof value === "undefined") {
        console.log("undefined!");
    } else if (typeof value === "null") {
        console.log("null!");
    } else if (typeof value === "number") {
        console.log("number!");
    } else if (isNaN(value)) {
        console.log("not a number!");
    } else if (typeof value === "string") {
        console.log("string!");
    } else if (typeof value === "boolean") {
        console.log("boolean!");
    } else if (typeof value === "bigInt") {
        console.log("null!");
    } else if (typeof value === "function") {
        console.log("function!");
    } else if (Array.isArray(value)) {
        console.log("array!");
    } else if (typeof value === "object") {
        console.log("object!");
    } else {
        console.log("I have no idea!");
    }
}

var a = 2;
var b = "milad";
var c = null;
logType(10n);
logType([a * b]);
