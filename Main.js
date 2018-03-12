var canvas, canvasContext;

window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	
	canvasContext.textAlign = 'center';
	colorRect(0,0, canvas.width,canvas.height, 'black');
	colorText("Loading Images...", canvas.width/2,canvas.height/2, 'white');
	
	loadImages();
}	

function startGameAfterImagesLoaded(){	
	var framesPerSecond = 120;
	setInterval(updateAll, 1000/framesPerSecond);
	
	setupInput();
		
	carReset();
}

function updateAll(){
	moveAll();
	drawAll();
}

function moveAll(){
	carMove();
	carTrackHandling(carX,carY);
}

function drawAll(){	
	drawTracks();
	drawCar();
}