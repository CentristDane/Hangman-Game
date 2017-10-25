var cruz = ["c","r","u","z"]
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
var turns = 0; 
var loser = []; document.getElementById('l1');





document.onkeyup = function(event) {

	var userGuess = event.key;

	if (userGuess === cruz[0]) {
            first.textContent = "c";
        }
    if (userGuess === cruz[1]) {
            second.textContent = "r";
        }
    if (userGuess === cruz[2]) {
            third.textContent = "u";
        }
    if (userGuess === cruz[3]) {
       		fourth.textContent = "z";
   		}
   	if (userGuess !== "c" && userGuess !== "r" && userGuess !== "u" && userGuess !== "z") {
   		loser.push (userGuess);
   		console.log(turns);
   		console.log(loser);
   		l1.textContent = loser;
   		turns++;
   	}
   	if (turns == 10) {
   		alert("game over!!!!!!!!!!")
   		first.textContent = "_";
   		second.textContent = "_";
   		third.textContent = "_";
   		fourth.textContent = "_";
   	}
	
} 


// function checkletter() {


//     for (var i = 0; i < grayson.length; i++) {

//         if (userGuess === grayson[i]) {
//             console.log("yay");
//         }
//     }
// }

// }


// function include(grayson, userGuess) {
//     	for(var i=0; i < grayson.length; i++) {
//         	if (grayson[i] == userGuess) {
//         		alert("yay");
//         		console.log("come one");
//   			  }
// 			}	

// 	}