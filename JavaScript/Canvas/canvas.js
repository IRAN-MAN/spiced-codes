var ctx = document.getElementById("canv").getContext("2d");

ctx.beginPath();
ctx.arc(150, 50, 40, 0, Math.PI * 2, true); // head
ctx.moveTo(135, 43);
ctx.arc(135, 43, 5, 0, Math.PI * 2, true); // left eye
ctx.moveTo(165, 43);
ctx.arc(165, 43, 5, 0, Math.PI * 2, true); // right eye
ctx.moveTo(125, 55);
ctx.arc(151, 55, 25, 0, Math.PI, false); // smile
ctx.moveTo(150, 89);
ctx.lineTo(150, 120); // neck
ctx.lineTo(70, 90); // left hand
ctx.moveTo(150, 120);
ctx.lineTo(220, 90); // right hand
ctx.moveTo(150, 120);
ctx.lineTo(150, 185); // body
ctx.moveTo(150, 185);
ctx.lineTo(78, 245); // left leg
ctx.moveTo(150, 185);
ctx.lineTo(220, 245); // right leg
ctx.stroke();
