
//2D array initialized with sample values. To get a blank board initialize all the values to zero
var board = [[2,4,8,16],[32,64,128,512],[1024,0,0,0],[0,0,0,0]];



//As soon as webpage loads run these two functions
$(document).ready(function(){
	setUpBoard();
	printBoard();
	console.log("Loaded webpage"); //how you do print statements in javascript
});
var board = [];
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;

function setUpBoard(){

	// initialize board to have no values
	for(var i=0; i<4; i++){
		var innerboard = [];
		for(var j=0; j<4; j++){
			innerboard.push("");
		}
		board.push(innerboard);
	}

	addTile();
	addTile();

}


function addTile() {
	//places a 2 on a random spot in the board
	//only keep running WHILE theres not a 2 there at that position already
	var x = Math.round(Math.random()*3);
	var y = Math.round(Math.random()*3);
	var z = Math.random();

	while (board[x][y] !== "") {
		x = Math.round(Math.random()*3);
		y = Math.round(Math.random()*3);
	}
	if (z>=.25){
		board[x][y] = 2;
	}
	if (z<.25){
		board[x][y] = 4;
	}
}
document.onkeydown = function(e) {

    //makes it work in internet explorer which uses window.event and not e
    e = e || window.event;

    //keyCode is actually a character value which we convert to a String
    //to use triple equals sign
    if (e.keyCode == UP_ARROW) {
        // up arrow
				console.log("Pressed up");
				addTilesUp();
        moveTilesUp();
				addTile();
		}
		if (e.keyCode == LEFT_ARROW) {
				// left arrow
				addTilesLeft();
				moveTilesLeft();
				addTile();
    }
		if (e.keyCode == RIGHT_ARROW) {
				// right arrow
				addTilesRight();
				moveTilesRight();
				addTile();
		}
		if (e.keyCode == DOWN_ARROW) {
				// down arrow
				addTilesDown();
				moveTilesDown();
				addTile();
		}

    //double equals sign will convert it for us
    else if (e.keyCode == DOWN_ARROW) {
        // down arrow
        console.log("Pressed down");
    }
    else if (e.keyCode == LEFT_ARROW) {
       // left arrow
       console.log("Pressed left");
    }
    else if (e.keyCode == RIGHT_ARROW) {
       // right arrow
       console.log("Pressed right");
    }

    printBoard(); //have to recall print board to get the board to update
};
function moveTilesUp()
{
//rows are on the sides going across and columns are on the top going down
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r !== 0  && board[r][c] !== "" && board[r-1][c] === "")
            {
                board[r-1][c] = board[r][c];
                board[r][c] = "";
            }
        }
    }
}

function moveTilesLeft()
{
//rows are on the sides going across and columns are on the top going down
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(c !== 0  && board[r][c] !== "" && board[r][c-1] === "")
            {
                board[r][c-1] = board[r][c];
                board[r][c] = "";
            }
        }
    }
}


function moveTilesRight()
{
//rows are on the sides going across and columns are on the top going down
    for(var r=3; r > -1; r--)
    {
        for(var c=3; c > -1; c--)
        {
            if(c !== 3  && board[r][c] !== "" && board[r][c+1] === "")
            {
                board[r][c+1] = board[r][c];
                board[r][c] = "";
            }
        }
    }
}

function moveTilesDown()
{
//rows are on the sides going across and columns are on the top going down
    for(var r=3; r > -1; r--)
    {
        for(var c=3; c > -1; c--)
        {
            if(r !== 3  && board[r][c] !== "" && board[r+1][c] === "")
            {
                board[r+1][c] = board[r][c];
                board[r][c] = "";
            }
        }
    }
}

function addTilesUp() {

	for(var r=0; r < board.length; r++)
	{
			for(var c=0; c<board[r].length; c++)
			{
				if(r !== 0  && board[r][c] !== "" && board[r-1][c] === board[r][c]) {
					board[r-1][c] = (parseInt(board[r-1][c]) + parseInt(board[r][c]));
					board[r][c] = "";
				}
			}
	}

}

function addTilesLeft() {
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
					if(c !== 0  && board[r][c] !== "" && board[r][c-1] === board[r][c])
					{
						board[r][c-1] = (parseInt(board[r][c-1]) + parseInt(board[r][c]));
						board[r][c] = "";
        	}
				}
    }
}

function addTilesRight()
{
//rows are on the sides going across and columns are on the top going down
    for(var r=3; r > -1; r--)
    {
        for(var c=3; c > -1; c--)
        {
					if(c !== 3  && board[r][c] !== "" && board[r][c+1] === board[r][c])
					{
						board[r][c+1] = (parseInt(board[r][c+1]) + parseInt(board[r][c]));
						board[r][c] = "";
        	}
        }
    }
}

function addTilesDown()
{
//rows are on the sides going across and columns are on the top going down
    for(var r=3; r > -1; r--)
    {
        for(var c=3; c > -1; c--)
        {
					if(r !== 3  && board[r][c] !== "" && board[r+1][c] === board[r][c]) {
						board[r+1][c] = (parseInt(board[r+1][c]) + parseInt(board[r][c]));
						board[r][c] = "";
					}
        }
    }
}

function printBoard(){

	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var boardID = "r"+i+"c"+j;
			//if the tile is not zero, put it on the board
			if(board[i][j]!=0){
				document.getElementById(boardID).innerHTML = board[i][j];
			}
			else{
				document.getElementById(boardID).innerHTML = "";
			}
			//Change the different number tiles to different colors
			switch(board[i][j]){
				case 2:
					document.getElementById(boardID).style.background = "#f0e5da";
					break;//similar to an else if. Makes sure none of the other cases executes if this one does
				case 4:
					document.getElementById(boardID).style.background = "#ede2c8";
					break;
				case 8:
					document.getElementById(boardID).style.background = "#feb578";
					break;
				case 16:
					document.getElementById(boardID).style.background = "#ff9962";
					break;
				case 32:
					document.getElementById(boardID).style.background = "#ff8060";
					break;
				case 64:
					document.getElementById(boardID).style.background = "#ff613c";
					break;
				case 128:
					document.getElementById(boardID).style.background = "#efd26d";
					break;
				case 256:
					document.getElementById(boardID).style.background = "#efd15c";
					break;
				case 512:
					document.getElementById(boardID).style.background = "#efcd4a";
					break;
				case 1024:
					document.getElementById(boardID).style.background = "#f0ca36";
					break;
				case 2048:
					document.getElementById(boardID).style.background = "#ccc0b3";
					break;
				default:
					document.getElementById(boardID).style.background = "rgba(238, 228, 218, 0.35)";
					break;
					//similar to the else statement. If none of the other cases execute, this statement will execute
			}
		}
	}
}
