var wins = 0;
var losses = 0;
var guesses = 9;
var userGuess = [];
var aiOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var computerGuess = aiOptions[Math.floor(Math.random() * aiOptions.length)];

 document.onkeyup = function(event) {
   var userType = event.key;
   userGuess.push(userType);
   document.querySelector("#userGuess").innerHTML = userGuess; 

   
   if (userGuess === aiOptions) {
       wins++;
       document.querySelector("#wins").innerHTML = wins;
   }
   
   if (guesses === 0) {
    alert("Game Over");
   }

   else {
       losses++;
       guesses--;
       document.querySelector("#losses").innerHTML = losses;
       document.querySelector("#guesses").innerHTML = guesses;
   }
 }

 document.querySelector("#reset").addEventListener("click", reset);

 function reset() {
     guesses=9;
     wins=0;
     losses=0;
     userGuess=[];
    }
 