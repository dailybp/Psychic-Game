window.onload = function () {
  var alphabet = ['a','b','c','d','e','f','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v',
  'w','x','y','z'];
  var guessesLeft = 10;
  var wins = 0;
  var losses = 0;
  var guesses = 0;
  var listOfLettersGuessed = [];
  var userGuess = null;

  var computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];

  console.log("Wins: " + wins + " Losses: " + losses + " Number of Guesses Left: " + guessesLeft + " Guesses So Far: " + listOfLettersGuessed + " Computer Guess: " + computerGuess);

  document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if(listOfLettersGuessed.indexOf(userGuess)<0 && alphabet.indexOf(userGuess)>=0){
      listOfLettersGuessed[listOfLettersGuessed.length] = userGuess;

      guessesLeft--;
    }

    if(computerGuess === userGuess){
      wins++;
      console.log("Win!!!");
    }

    if(guessesLeft === 0){
      losses++;
      console.log("Loss");
    }
  }

  $("restart").on("click", function(){
    guesses = 10;
    listOfLettersGuessed = [];
    updateLetterToGuess();
    updateGuessesSoFar();
    updateGuessesLeft();
  });
}
