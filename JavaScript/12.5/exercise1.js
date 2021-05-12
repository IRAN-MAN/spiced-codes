function sum() {
    var sum = 0;
    for (var i in arguments) {
        sum += arguments[i];
    }
    console.log(sum);
    return;
}

sum(5, 10, 5, 7, -2);
