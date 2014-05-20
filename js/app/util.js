var canvas = document.getElementById("bubbleCanvas");
function getLocation(e){		
	return { x: e.clientX, y: e.clientY };
}
function blowBubble(e){
	var loc = getLocation(e);
	locx = loc.x;
	locy = loc.y;

	var c = document.getElementById("bubbleCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(locx, locy, 20, 0, 2*Math.PI);
	ctx.fillStyle = "rgba(0,0,0,0.1)";
	ctx.fill();
	ctx.stroke();

	document.getElementById('locate').innerHTML = "Click position: x: "+locx+", y: "+locy;
}