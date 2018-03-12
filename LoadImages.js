var carPic = document.createElement("img");
var trackPics = [];

var picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady(){
	picsToLoad--;
	console.log(picsToLoad);
	if(picsToLoad == 0){
		startGameAfterImagesLoaded();
	}
}

function beginLoadingImage(imgVar, fileName){
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = "Images/"+fileName;
}

function loadImageForTrackCode(trackCode, fileName){
	trackPics[trackCode] = document.createElement("img");
	beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages(){
	var imageList = [
	{varName: carPic, theFile: "p1Car.png"},
	{trackType: TRACK_ROAD, theFile: "Track_Road.png"},
	{trackType: TRACK_WALL, theFile: "Track_Wall.png"},
	{trackType: TRACK_GOAL, theFile: "Track_Goal.png"},
	{trackType: TRACK_FOREST, theFile: "Track_Forest.png"},
	{trackType: TRACK_FLAG, theFile: "Track_Flag.png"}
	];
	
	picsToLoad = imageList.length;
	
	for(var i=0; i<imageList.length; i++){
		if(imageList[i].varName != undefined){	
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} else {
			loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
		}
	}
}