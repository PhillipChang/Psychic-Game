var wins = 0;
var losses = 0;
var guesses = 9;
var userGuess = [];
var aiOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var computerGuess = aiOptions[Math.floor(Math.random() * aiOptions.length)];

 document.onkeyup = function(event) {
   var userGuess = event.key;
   document.querySelector("#userGuess").innerHTML = userGuess; 

   if (userGuess === aiOptions) {
       wins++;
       document.querySelector("#wins").innerHTML = wins;
   }
   else {
       losses--;
       guesses--;
       document.querySelector("#losses").innerHTML = losses;
       document.querySelector("#guesses").innerHTML = guesses;
   }

 }
