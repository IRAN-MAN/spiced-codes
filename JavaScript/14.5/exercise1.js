function each(objOrArray, callback) {
    if (Array.isArray(objOrArray)) {
        objOrArray.forEach((val, index) => {
            callback(val, index);
        });
    } else {
        for (var val in objOrArray) {
            callback(objOrArray[val], val);
        }
    }
}

each([1, 2, 3], function (val, index) {
    console.log("The value of item " + index + " is " + val);
});

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
);
