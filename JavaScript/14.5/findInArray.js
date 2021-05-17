function findInArray(array, condition) {
    var results = array.filter(condition);
    if (results) {
        // console.log(results[0]);
        return results[0];
    }
}

findInArray([1, 4, 5], function (element) {
    return element % 2 === 0;
});

findInArray(["Bob", "Alice", "Charlie"], function (name) {
    return name.length > 3;
});

var users = [
    {
        name: "Diego",
        age: 30,
    },
    {
        name: "Alice",
        age: 25,
    },
    {
        name: "Bob",
        age: 15,
    },
];

findInArray(users, function (user) {
    return user.age > 30;
});
