const TRACK_W = 40, TRACK_H = 40, TRACK_GAP = 2;
const TRACK_COLS = 800/TRACK_W, TRACK_ROWS = 800/TRACK_H;
var trackGrid = [4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,
				 4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
				 4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
				 1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,
				 1,0,0,0,1,1,1,4,4,4,4,1,1,1,1,1,1,0,0,1,
				 1,0,0,1,1,0,0,1,4,4,1,0,0,0,0,0,1,0,0,1,
				 1,0,0,1,0,0,0,0,1,4,1,0,0,0,0,0,1,0,0,1,
				 1,0,0,1,0,0,0,0,0,1,1,0,0,5,0,0,1,0,0,1,
				 1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,
				 1,0,0,1,0,0,5,0,0,0,5,0,0,1,0,0,1,0,0,1,
				 1,0,2,1,0,0,1,1,0,0,0,0,0,1,0,0,5,0,0,1,
				 1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,
				 0,3,0,0,0,0,1,4,1,0,0,0,1,1,0,0,0,0,0,1,
				 0,3,0,0,0,0,1,4,4,1,1,1,1,1,1,0,0,0,1,1,
				 1,1,1,1,1,1,1,4,4,4,4,4,4,4,1,1,1,1,1,4];
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_FOREST = 4;
const TRACK_FLAG = 5;

function trackTileToIndex(tileCol,tileRow){
	return(tileCol+(TRACK_COLS*tileRow));
}

function isObstacleAtTileCoord(trackTileCol, trackTileRow){
	var trackIndex = trackTileToIndex(trackTileCol, trackTileRow);
	return(trackGrid[trackIndex] == TRACK_WALL);
}

function carTrackHandling(pixelX,pixelY){
	var tileCol = pixelX/TRACK_W;
	var tileRow = pixelY/TRACK_H;
	
	tileCol = Math.floor(tileCol);
	tileRow = Math.floor(tileRow);
	
	if(tileCol < 0 || tileCol >= TRACK_COLS
	|| tileRow < 0 || tileRow >= TRACK_ROWS){
		return false;
	}
	
	var trackIndex = trackTileToIndex(tileCol, tileRow);
	
	if(trackGrid[trackIndex] != TRACK_ROAD){	
		carX -= Math.cos(carAng)*carSpeed;
		carY -= Math.sin(carAng)*carSpeed;
	
		carSpeed *= -0.5;
	}	
}

function drawTracks(){
	for(var eachRow=0; eachRow<TRACK_ROWS; eachRow++){	
		for(var eachCol=0; eachCol<TRACK_COLS; eachCol++){	
			var trackIndex = trackTileToIndex(eachCol, eachRow);
			var tileTypeHere = trackGrid[trackIndex];
			
			var useImage = trackPics[tileTypeHere];
			
			canvasContext.drawImage(useImage, TRACK_W*eachCol,TRACK_H*eachRow);	
		}	
	}
}