var waitThenRun = function (func) {
    // check if the argument is a function
    if (typeof func !== "function") {
        console.log("the argument is not a function!");
        return;
    }
    // set the delay to run the function that passed to waitThenRun
    setTimeout(func, 1500);
};

waitThenRun("not a function"); // test the if statement

waitThenRun(function () {
    console.log("Print with 1.5 seconds delay");
    return;
});
