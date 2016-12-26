var a=[];
var b=[];
var value;
var gameOver=false;

$(".box").each(function(index){
	$(this).attr("id", index);
});

$(".box").click(function(){
	if(gameOver==true){   //if we already have a winner, the user shouldn't be able to select anymore boxes.
		//since the game is over, I'll add the selected class to all the boxes. This way, the user won't be able to select any boxes.

		updateMsg("GAME OVER!");

	}
	else if(gameOver=="Draw"){
		//do nothing.
	}
	else  //game over = false.
	{
			if( $(this).hasClass("selected")==true){
		updateMsg("SORRY, YOU CAN'T SELECT THIS BOX AGAIN.");
			}
			else{
		$(this).addClass("selected");
		value=$(this).attr("id");
		updateId(value);
		
			if(document.turn=="A"){
			a.push(value);
			winner("A");
		document.playera=document.playera+1;
	    $(this).css("background", "black");
		document.turn="B";
		// updateMsg("It's player "+document.turn+"'s turn and he's had "+document.playerb+" tries so far.");
		updateMsg("PLAYER "+document.turn);
		}

		else{
			b.push(value);
			winner("B");
		document.playerb=document.playerb+1;
		$(this).css("background", "yellow");
		document.turn="A";
		// updateMsg("It's player "+document.turn+"'s turn and he's had "+document.playera+" tries so far.");
		updateMsg("PLAYER "+document.turn);
			}

			if($(".selected").length==9){
				if($("#gamestatus").is(":empty")){
					gameOver="Draw";
					updateMsg("GAME OVER. IT'S A DRAW.");
				}
				
		}
		}		
	}
	
});

function inArray(array, element){
	var len=array.length;
	var present=false;
	var i;
	for(i=0;i<len;i++){
		//console.log("Element: "+array[i]);
		if(array[i]==element){
			present=true;
			break;
		}
	}
	return present;
}
function winner(player){
	var j;
	var lena=a.length;
	var lenb=b.length;

	
	var array=[];
	if(player=="A"){
		console.log("Player A");
		for(j=0;j<lena;j++){
			array[j]=a[j];
		}
	}
	else{
		console.log("Player B");
		for(j=0;j<lenb;j++){
			array[j]=b[j];
		}
	}

	
	if( (inArray(array, 0) && inArray(array, 1) && inArray(array, 2)) ||
		(inArray(array, 3) && inArray(array, 4) && inArray(array, 5)) ||
		(inArray(array, 6) && inArray(array, 7) && inArray(array, 8)) ||
		(inArray(array, 0) && inArray(array, 3) && inArray(array, 6)) ||
		(inArray(array, 1) && inArray(array, 4) && inArray(array, 7)) ||
		(inArray(array, 2) && inArray(array, 5) && inArray(array, 8)) ||
		(inArray(array, 2) && inArray(array, 4) && inArray(array, 6)) ||
		(inArray(array, 0) && inArray(array, 4) && inArray(array, 8)))
	{
		console.log("We have a winner: "+player);
		gameOver=true;
		document.getElementById("gamestatus").innerHTML="PLAYER "+player+" WINS!";
	}
}	
	

function gameStarted(){
document.turn="A";
document.playera=0;
document.playerb=0;
}

function updateMsg(msg){
document.getElementById("messageBox").innerHTML=msg;
}
function updateId(id){
document.getElementById("boxid").innerHTML=id;
}