/*
Make a page that has on it an element that is 200px by 200px in size and has a solid background color. 
Nest within that element another element that is 50px by 50px in size and has a different solid background 
color. When the user clicks on the outer element its background color should change to a randomly selected 
color. However, if the user clicks on the inner element, the inner element's background color should 
change to a randomly selected background color but the outer element's background color should not 
change at all.
*/

var outsideBox = document.getElementById("exe4-outside-box");
var insideBox = document.getElementById("inside-box");

outsideBox.addEventListener("click", outsideBoxHandler);

function outsideBoxHandler(event) {
    event.target.style.backgroundColor = getRandomColor();
}

function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 255);
    return randomNumber;
}

function getRandomColor() {
    var randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    return randomColor;
}
