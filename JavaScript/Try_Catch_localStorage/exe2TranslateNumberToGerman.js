/*
Write a function called translateNumberToGerman that tries to get a number between 1 and 10 
by calling another function called askForNumber.
 If askForNumber returns a number between 1 and 10, translateNumberToGerman should return 
 the German translation of that number as a string.
If askForNumber does not return a number between 1 and 10 and instead throws 
an exception, translateNumberToGerman should log the error message to the console and 
restart the whole process. The user should keep being prompted to input a number between 1 and 10 until 
she does so.
*/

(function () {
    var numbersInGerman = {
        1: "Eins",
        2: "Zwei",
        3: "Drei",
        4: "Vier",
        5: "Fünf",
        6: "Sechs",
        7: "Sieben",
        8: "Acht",
        9: "Neun",
        10: "Zehn",
    };

    function translateNumberToGerman() {
        try {
            var number = askForNumber();
            alert("German Translation: " + numbersInGerman[number]);
            translateNumberToGerman();
        } catch (error) {
            alert(error);
            translateNumberToGerman();
        }
    }

    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }

    translateNumberToGerman();
})();
