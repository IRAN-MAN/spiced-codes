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
    function translateNumberToGerman() {
        try {
            var number = askForNumber();

            switch (number) {
                case "1":
                    alert("Ein");
                    break;
                case "2":
                    alert("Zwei");
                    break;
                case "3":
                    alert("Drei");
                    break;
                case "4":
                    alert("Vier");
                    break;
                case "5":
                    alert("Fünf");
                    break;
                case "6":
                    alert("Sechs");
                    break;
                case "7":
                    alert("Sieben");
                    break;
                case "8":
                    alert("Acht");
                    break;
                case "9":
                    alert("Nein");
                    break;
                case "10":
                    alert("Zehn");
                    break;
                default:
                    break;
            }
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
