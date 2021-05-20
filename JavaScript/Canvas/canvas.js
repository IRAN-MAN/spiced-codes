var ctxS = document.getElementById("canv-small").getContext("2d");
var ctxB = document.getElementById("canv-big").getContext("2d");
var smallConvas = document.getElementById("canv-small");

ctxS.beginPath();
ctxS.arc(110, 50, 40, 0, Math.PI * 2, true); // head
ctxS.moveTo(95, 43);
ctxS.arc(95, 43, 5, 0, Math.PI * 2, true); // left eye
ctxS.moveTo(125, 43);
ctxS.arc(125, 43, 5, 0, Math.PI * 2, true); // right eye
ctxS.moveTo(85, 55);
ctxS.arc(111, 55, 25, 0, Math.PI, false); // smile
ctxS.moveTo(110, 89);
ctxS.lineTo(110, 120); // neck
ctxS.lineTo(30, 90); // left hand
ctxS.moveTo(110, 120);
ctxS.lineTo(180, 90); // right hand
ctxS.moveTo(110, 120);
ctxS.lineTo(110, 185); // body
ctxS.moveTo(110, 185);
ctxS.lineTo(38, 245); // left leg
ctxS.moveTo(110, 185);
ctxS.lineTo(180, 245); // right leg
ctxS.stroke();
ctxS.closePath();

ctxB.drawImage(smallConvas, 40, 40);

var frames = {
    frame1: function frame1() {
        ctxB.clearRect(0, 0, 300, 300);
        ctxB.drawImage(smallConvas, 50, 40);
    },
    frame2: function frame2() {
        ctxB.clearRect(0, 0, 300, 300);
        ctxB.drawImage(smallConvas, 40, 40);
    },
    frame3: function frame3() {
        ctxB.clearRect(0, 0, 300, 300);
        ctxB.drawImage(smallConvas, 70, 40);
    },
};

document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode == 39) {
        return frames.frame1();
    }
    if (event.keyCode == 37) {
        return frames.frame2();
    }
}
/* 
    ctx.drawImage(img, 100, 250);
    ctx.clearRect(0,0,50,50)
*/
