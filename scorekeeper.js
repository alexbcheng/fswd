var p1Score = 0;
var p2Score = 0;
var maxScore = 5;

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");

var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var maxDisplay = document.querySelector("p span");
var playToNum = document.querySelector("#playToNum");

playToNum.addEventListener("change", function() {
    if (this.value > 0) {
        maxScore = this.value;
        maxDisplay.textContent = maxScore;    
    }
});

p1Button.addEventListener("click", function() {
    p1Score++;
    p1Display.textContent = p1Score;
    if (weHaveAWinner()) {
        
    }
});

p2Button.addEventListener("click", function() {
    if (!weHaveAWinner()) {
        p2Score++;
        p2Display.textContent = p2Score;
    }
})

resetButton.addEventListener("click", function() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    maxScore = 5;
    playToNum.value = maxScore;
    maxDisplay.textContent = maxScore;
    p1Display.classList.remove("winner");
    p1Display.classList.remove("winner");
});

function weHaveAWinner() {
    if (p1Score == maxScore || p2Score == maxScore) {
        p1Display.classList.toggle("winner");
        return true;
    }
}