function checkNumber(num) {
    const MAX_LIMIT = 1000000;
    if (num <= 0 || typeof num !== "number") {
        return "ERROR";
    } else if (num >= MAX_LIMIT) {
        return num;
    }
    var multplyCounter = 0;
    do {
        num *= 10;
        multplyCounter++;
    } while (num < MAX_LIMIT);
    return `new number is ${num}, times multiplied: ${multplyCounter}`;
}
checkNumber(-12);
checkNumber(0);
checkNumber("String");
checkNumber(1000000);
checkNumber(25);
