var c = document.getElementById("bubbleCanvas");
var ctx;
var dx = 0;
var dy = 1;
var x, y;

function getLocation(e){		
	return { x: e.clientX, y: e.clientY };
}
function blowBubble(e){
	ctx = c.getContext("2d");
	var loc = getLocation(e);
	x = loc.x;
	y = loc.y;
	setInterval(drawBubble, 10);
	// document.getElementById('locate').innerHTML = "Click position: x: "+x+", y: "+y;
}
function drawBubble(){
	ctx.clearRect(0,0,c.width,c.height);
	ctx.beginPath();
	ctx.arc(x, y, 20, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fillStyle = "rgba(0,0,0,0.1)";
	ctx.fill();
	ctx.stroke();
	x+=dx;
	y+=dy;
}