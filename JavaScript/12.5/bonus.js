var getTotaler = function () {
    var sum = 0;
    return function (num) {
        return (sum += num);
    };
};
var totaler = getTotaler();
