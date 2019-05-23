var wins = 0;
var losses = 0;
var guesses = 9;
var userGuess = [];
var aiOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

 document.onkeypress = function(event) {
    var computerGuess = aiOptions[Math.floor(Math.random() * aiOptions.length)];
    var userType = event.key.toLowerCase();
   userGuess.push(userType);
   document.querySelector("#userGuess").innerHTML = userGuess; 

   if (userType == computerGuess) {
       wins++;
       guesses = 9;
       userGuess = []; 
       document.querySelector("#wins").innerHTML = wins;
       document.querySelector("#guesses").innerHTML = guesses;
       document.querySelector("#userGuess").innerHTML = userGuess;
   }
   else {
       guesses--;
       document.querySelector("#guesses").innerHTML = guesses;
       if (guesses === 0) {
           losses++;
           guesses = 9;
           userGuess = [];
           document.querySelector("#losses").innerHTML = losses;
           document.querySelector("#guesses").innerHTML = guesses;
           document.querySelector("#userGuess").innerHTML = userGuess;
       }
   } 
}