function checkNumber(num) {
    const MAX_LIMIT = 1000000;
    if (num <= 0 || typeof num !== "number") {
        return "ERROR";
    } else if (num >= MAX_LIMIT) {
        return num;
    }
    do {
        num *= 10;
    } while (num < MAX_LIMIT);
    return num;
}
checkNumber(-12);
checkNumber(0);
checkNumber("String");
checkNumber(1000000);
checkNumber(25);
