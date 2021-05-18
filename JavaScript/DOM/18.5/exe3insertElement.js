/* Write a function that inserts an element into the body of the currently loaded page. 
That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px, 
font-size of 200px, and contain the text 'AWESOME'. */

(function inserElement() {
    var h1 = document.createElement("h1");
    h1.innerText = "AWSOME";
    document.body.appendChild(h1);
    h1.style.position = "fixed";
    h1.style.zIndex = "2147483647";
    h1.style.left = "20px";
    h1.style.top = "100px";
    h1.style.fontSize = "200px";
})();
