module.exports = function fn(arg) {
    if (typeof arg === "string") {
        return arg.split("").reverse().join("");
    } else if (Array.isArray(arg)) {
        return [arg[0].split("").reverse().join(""), null];
    } else {
        return null;
    }
};
