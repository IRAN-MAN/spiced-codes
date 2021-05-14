function getLessThanZero(numbers) {
    var results = [];
    numbers.forEach((num) => {
        if (num < 0) {
            results.push(num);
        }
    });
    return results;
}

getLessThanZero([-1, 2, -5, 4, 8]);
getLessThanZero([1, 2, 5, 4, 8]);
