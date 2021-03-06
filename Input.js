var mouseX, mouseY;

const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

var keyHeld_Gas = false;
var keyHeld_Reverse = false;
var keyHeld_TurnLeft = false;
var keyHeld_TurnRight = false;

function setupInput(){
	canvas.addEventListener('mousemove', updateMousePos);
	
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
}

function updateMousePos(){
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	
	mouseX = event.clientX - rect.left - root.scrollLeft;
	mouseY = event.clientY - rect.top - root.scrollTop;
}

function keyPressed(evt){
	//console.log("Key Pressed: "+evt.keyCode);
	if(evt.keyCode == KEY_LEFT_ARROW){
		keyHeld_TurnLeft = true;
	}
	if(evt.keyCode == KEY_RIGHT_ARROW){
		keyHeld_TurnRight = true;
	}
	if(evt.keyCode == KEY_UP_ARROW){
		keyHeld_Gas = true;
	}
	if(evt.keyCode == KEY_DOWN_ARROW){
		keyHeld_Reverse = true;
	}
	evt.preventDefault();
}

function keyReleased(evt){
	//console.log("Key Pressed: "+evt.keyCode);
	if(evt.keyCode == KEY_LEFT_ARROW){
		keyHeld_TurnLeft = false;
	}
	if(evt.keyCode == KEY_RIGHT_ARROW){
		keyHeld_TurnRight = false;
	}
	if(evt.keyCode == KEY_UP_ARROW){
		keyHeld_Gas = false;
	}
	if(evt.keyCode == KEY_DOWN_ARROW){
		keyHeld_Reverse = false;
	}
}