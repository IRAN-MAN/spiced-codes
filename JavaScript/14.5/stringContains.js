function stringContains(string1, string2) {
    var array1 = string1.toLowerCase().split("");
    var array2 = string2.toLowerCase().split("");
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true;
            } else {
                return false;
            }
        }
    }
}

stringContains("Diego", "di");
stringContains("di", "Diego");
stringContains("hello", "ll");
stringContains("good morning", "morning");
stringContains("blabla", "Blabla");
stringContains("hello", " hello");
