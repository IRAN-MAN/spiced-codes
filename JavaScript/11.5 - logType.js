function logType(value) {
    if (typeof value === "undefined") {
        console.log("undefined!");
        return;
    } else if (value === null) {
        console.log("null!");
        return;
    } else if (isNaN(value) && typeof value === "number") {
        console.log("not a number!");
        return;
    } else if (typeof value === "number") {
        console.log("number!");
        return;
    } else if (typeof value === "bigint") {
        console.log("bigint!");
        return;
    } else if (typeof value === "string") {
        console.log("string!");
        return;
    } else if (typeof value === "boolean") {
        console.log("boolean!");
        return;
    } else if (typeof value === "function") {
        console.log("function!");
        return;
    } else if (Array.isArray(value)) {
        console.log("array!");
        return;
    } else if (typeof value === "object") {
        console.log("object!");
        return;
    } else {
        console.log("I have no idea!");
        return;
    }
}

logType(NaN);
