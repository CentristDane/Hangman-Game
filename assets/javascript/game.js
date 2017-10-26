var cruz = ["c","r","u","z"]
var reid = ["r","e","i","d"]
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
var fifth = document.getElementById('fifth');
var sixth = document.getElementById('sixth');
var seventh = document.getElementById('seventh');
var hint = document.getElementById('hint');
var turns = 0; 
var loser = []; document.getElementById('l1');
var winners =[];
var winners1 = [];
var choices = [first,second,third,fourth,fifth,sixth,seventh];
var cruzHint = "ran for President";
var tries = document.getElementById('tries');
var g1 = true;
var g2 = false;
var g3 = false;

//alert("Press any key to start!");

document.onkeyup = function(event) {
	var userGuess = event.key;

function finalGame(){
document.getElementById("tries").innerHTML = turns;
 		for (var i = 0; i < reid.length; i++) {
		        if (userGuess === reid[i]) {
		            winners.push(userGuess);
		            choices[i].textContent = userGuess;
		        }
		        if (turns == 10) {
			   		alert("game over!!!!!!!!!!")
			   		first.textContent = "_";
			   		second.textContent = "_";
			   		third.textContent = "_";
			   		fourth.textContent = "_";
		  	 	}
   		 }	
		   	 	if (userGuess != "r" && userGuess != "e" && userGuess != "i" && userGuess != "d" ){
		        	loser.push (userGuess);
			   		console.log(loser);
			   		turns++;
			   		l1.textContent = "  " + loser;
			   		document.getElementById("tries").innerHTML = turns;
			   		
		        }


			   	if (winners.includes("r") && winners.includes("e") && winners.includes("i") && winners.includes("d")) {
						alert("you the  man!!!");
						first.textContent = "_";
						second.textContent = "_";
						third.textContent = "_";
						fourth.textContent = "_";
						fifth.textContent = " _";
						sixth.textContent = " _";
						seventh.textContent = " _";
						userGuess = "  ";
						winners = [];
						turns = 0;
						loser = [];
						cruz = [];
						

			}
}


////final game

function startgame(){
		hint.textContent = "hit his wife";
		var grayson = ["g","r","a","y","s","o","n"];
		console.log("here is " + userGuess);
		//turns = 0;
	
    	for (var i = 0; i < grayson.length; i++) {
    		console.log(grayson[i]);
        if (userGuess === grayson[i]) {
            winners.push(userGuess);
            choices[i].textContent = userGuess;     
    		}
	}
		if (userGuess != "g" && userGuess != "r" && userGuess != "a" && userGuess != "y" && userGuess != "s" && userGuess != "o" && userGuess != "n") {  
        		loser.push (userGuess);
	   			console.log(loser);
	   			turns++;
	   			l1.textContent = "    "+ loser;
	   			document.getElementById("tries").innerHTML = turns;
	   			
      	}	
     	if (turns == 10) {
	   		alert("game over!!!!!!!!!!")
	   		first.textContent = "_";
	   		second.textContent = "_";
	   		third.textContent = "_";
	   		fourth.textContent = "_";
   		}
      if (winners.includes("g") && winners.includes("r") && winners.includes("a") && winners.includes("y") && winners.includes("s")&& winners.includes("o")&& winners.includes("n")) {
			alert("Alan Grayson");
			first.textContent = "_";
			second.textContent = "_";
			third.textContent = "_";
			fourth.textContent = "_";
			fifth.textContent = " ";
			sixth.textContent = " ";
			seventh.textContent = " ";
			turns = 0;
			winners = [];
			userGuess = " ";
			loser = [];
			cruz = [];
			g2 = false;
			g3 = true;
	}	
}//Grayson function

function game1(){



 		for (var i = 0; i < cruz.length; i++) {
        if (userGuess === cruz[i]) {
            winners.push(userGuess);
            choices[i].textContent = userGuess;
        }if (turns == 10) {
	   		alert("game over!!!!!!!!!!")
	   		first.textContent = "_";
	   		second.textContent = "_";
	   		third.textContent = "_";
	   		fourth.textContent = "_";
   	}
    }if (userGuess != "c" && userGuess != "r" && userGuess != "u" && userGuess != "z" ){
        	loser.push (userGuess);
	   		console.log(loser);
	   		turns++;
	   		l1.textContent = "  " + loser;
	   		document.getElementById("tries").innerHTML = turns;
	   		
        }


   	if (winners.includes("c") && winners.includes("r") && winners.includes("u") && winners.includes("z")) {
			alert("you the  man!!!");
			first.textContent = "_";
			second.textContent = "_";
			third.textContent = "_";
			fourth.textContent = "_";
			fifth.textContent = " _";
			sixth.textContent = " _";
			seventh.textContent = " _";
			userGuess = "  ";
			winners = [];
			turns = 0;
			loser = [];
			cruz = [];
			g2 = true;
			g1 = false;

}
}


if (g1) {
game1();
document.getElementById("wins").innerHTML = 0;
}

if (g2){
	startgame();
	document.getElementById("wins").innerHTML = 1;
}

if (g3){
	finalGame();
	document.getElementById("wins").innerHTML = 2;
}
}
// if (g1 = true) {
// 	startgame();}else{
// game1();}


// /////game 2
// 	function startgame(){
// 		word = words[0].split();
// 		first.textContent = "_";
// 		second.textContent = "_";
// 		third.textContent = "_";
// 		fourth.textContent = "_";
// 		fifth.textContent = "_";
// 		sixth.textContent = "_";
// 		seventh.textContent = "_";
// 		winners = [];
// 		cruz = [];

// 		g1 = false;

// 	function checkletter(userGuess) {
// 		console.log("here is " + userGuess);
//     	for (var i = 0; i < grayson[0].length; i++) {
//         if (userGuess === grayson[i]) {
//         	console.log("here is " + userGuess);
//             winners.push(userGuess);
//             choices[i].textContent = userGuess;
//         }
//     }
        

 //   	if (userGuess !== "c" && userGuess !== "r" && userGuess !== "u" && userGuess !== "z") {
 //   		loser.push (userGuess);
 //   		console.log(turns);
 //   		console.log(loser);
 //   		l1.textContent = "   "+ loser;
 //   		turns++;
 //   	}
		 

	
// }
// checkletter();
// }// end of game 2










///////////////////////////////////////////////////////



// }

	// function checkletter(userGuess) {
 //    for (var i = 0; i < cruz.length; i++) {
 //     	   if (userGuess === cruz[i]) {
 //            winners.push(userGuess);
 //            choices[i].textContent = userGuess
 //        	}
 //    	}
 //    }
//         if (userGuess !== "c" && userGuess !== "r" && userGuess !== "u" && userGuess !== "z") {
// 	   		loser.push (userGuess);
// 	   		console.log(turns);
// 	   		console.log(loser);
// 	   		l1.textContent = "   "+ loser;
// 	   		turns++;
//    		}
//    		if (turns == 10) {
// 	   		alert("game over!!!!!!!!!!")
// 	   		first.textContent = "_";
// 	   		second.textContent = "_";
// 	   		third.textContent = "_";
// 	   		fourth.textContent = "_";
// 	   	}
	    
//     winnerCheck();

// }


// function include(grayson, userGuess) {
//     	for(var i=0; i < grayson.length; i++) {
//         	if (grayson[i] == userGuess) {
//         		alert("yay");
//         		console.log("come one");
//   			  }
// 			}	

// 	}


	// if (userGuess === cruz[0]) {
 //            first.textContent = "c";
 //            winners.push(userGuess);
 //            console.log(winners);
 //        }
 //    if (userGuess === cruz[1]) {
 //            second.textContent = "r";
 //            winners.push(userGuess);
 //        }
 //    if (userGuess === cruz[2]) {
 //            third.textContent = "u";
 //            winners.push(userGuess);
 //        }
 //    if (userGuess === cruz[3]) {
 //       		fourth.textContent = "z";
 //       		winners.push(userGuess);
 //   		}