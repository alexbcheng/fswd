var p1Score = 0;
var p2Score = 0;

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var maxScore = document.queryCommandEnabled("#maxScore");

var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var maxDisplay = document.querySelector("#maxScore");


p1Button.addEventListener("click", function() {
    if (!weHaveAWinner()) {
        p1Score++;
        p1Display.textContent = p1Score;    
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
});

function weHaveAWinner() {
    if (p1Score >= maxScore || p2Score >= maxScore) {
        return true;
    }
}