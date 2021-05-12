function checkNumber(num) {
    if (num < 0 || num === 0 || typeof num !== "number") {
        // console.log("Error!");
        return "ERROR";
    } else if (num >= 1000000) {
        // console.log(num);
        return num;
    }
    var multplyCounter = 0;
    do {
        num *= 10;
        multplyCounter++;
    } while (num < 1000000);
    // console.log(num, "times multiplied:", multplyCounter);
    return `${num} + "times multiplied: " + ${multplyCounter}`;
}

checkNumber(1000000);
