function checkNumber(num) {
    if (num < 0 || num === 0 || typeof num !== "number") {
        return "ERROR";
    } else if (num >= 1000000) {
        return num;
    }
    var multplyCounter = 0;
    do {
        num *= 10;
        multplyCounter++;
    } while (num < 1000000);
    return `new number is ${num}, times multiplied: ${multplyCounter}`;
}
checkNumber(-12);
checkNumber(0);
checkNumber("String");
checkNumber(1000000);
checkNumber(25);
