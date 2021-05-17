var x = 57;
var doubleX;

function timesTwo(num) {
    return num * 2;
}

doubleX = timesTwo(x);

var numbers = [x, doubleX];
for (var i in numbers) {
    console.log(numbers[i]);
}

numbers = {};
numbers.y = doubleX;
