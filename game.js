const correctNumber = 15;

var userNumber = 0;
var text2Show = "";
var isRight = false;

do {
    userNumber = Number(prompt("Guess the number"));
    if (userNumber === correctNumber) {
        text2Show = "You got it!"
        isRight = true;
    } else if (userNumber > correctNumber) {
        text2Show = "Too high! Guess again."
    } else {
        text2Show = "Too Low! Guess again."
    }
    alert(text2Show);
    console.log(text2Show);
} while (isRight == false);
