$(function(){
  var alphabet = ['a','b','c','d','e','f','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v',
  'w','x','y','z'];
  var guesses = 10;
  var wins = 0;
  var losses = 0;
  var guesses = 0;
  var listOfLettersGuessed = [];
  var computerGuess = null;

  var updateGuessesLeft = function(){
    document.querySelector('#guesses').innerHTML = "Number of Guesses Left: "+guesses;
  };

  var updateGuessesSoFar = function(){
    document.querySelector('#list').innerHTML = "Guesses so Far: " + listOfLettersGuessed;
  };

  var updateLetterToGuess = function(){
    this.computerGuess = this.alphabet[Math.floor(Math.random()*alphabet.length)];
  };

  $("restart").on("click", function(){
    guesses = 10;
    listOfLettersGuessed = [];
    updateLetterToGuess();
    updateGuessesSoFar();
    updateGuessesLeft();
  };

  $("guess").on("click",function(){
    if(guesses > 0){
      if('#letter' === random){
        alert('You are correct, you maybe a psychic!!!');
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        else{
          alert('That is incorrect, try again.');
          listOfLettersGuessed.append('#letter');
          guesses--;
        }
      }
      else{
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Don't give up, you should try again.");
        reset();
      }
    }
  };
};
