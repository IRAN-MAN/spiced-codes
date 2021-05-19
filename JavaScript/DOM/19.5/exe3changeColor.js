/*
Make a page that has on it an element that is 100px by 100px in size and has 
a solid black border. When the user mouses down on this box, its background 
should change to a randomly selected color. When the user mouses up on it, its 
background should change to another randomly selected color.
*/

var box = document.getElementById("exe3");

box.addEventListener("mousedown", boxHandler);
box.addEventListener("mouseup", boxHandler);

function boxHandler(event) {
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
