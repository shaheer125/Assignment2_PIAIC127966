var secretNumber = 5;
var guessGame = prompt("Guess The Secret Number?\n(ranging from 1 to 10)");
if(guessGame == secretNumber){
    alert("Bingo! Correct answer");
}
else if(guessGame == secretNumber + 1){
    alert("Close enough to the correct answer");
}
else{
    alert("Sorry! Wrong Answer");
}