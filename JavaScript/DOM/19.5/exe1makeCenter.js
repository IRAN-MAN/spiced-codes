/* 
Make a page that has on it an element that is 100px by 100px in size, 
has absolute positioning, and has a solid background color. 
Add an event handler that makes this box center itself directly under the user's 
mouse pointer as it is moved across the screen.
*/

var div = document.getElementById("div-center");

document.addEventListener("mousemove", documentHandler);

function documentHandler(event) {
    div.style.top = event.clientY - div.offsetHeight / 2 + "px";
    div.style.left = event.clientX - div.offsetWidth / 2 + "px";
}
