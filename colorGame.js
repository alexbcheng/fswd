var rgbDisplay = document.getElementById("rgbDisplay");
var msgDisplay = document.getElementById("message");
var header = document.querySelector("#header");
var squares = document.querySelectorAll(".square");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

var colors = [];
var pickedColor = null;
var isGameModeHard = true;

startGame();

function startGame() {
    resetBtn.addEventListener("click", startGame);
    easyBtn.addEventListener("click", function() {
        isGameModeHard = false;
        resetGame();
    })
    hardBtn.addEventListener("click", function() {
        isGameModeHard = true;
        resetGame();
    })
    for (i=0; i<squares.length; i++) {
        squares[i].addEventListener("click", squareClicked);
    }
    resetGame();
}

function resetGame() {
    colors = generateRandomColors((isGameModeHard ? 6 : 3));
    pickedColor = pickAColor();
    rgbDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    msgDisplay.textContent = "";
    header.style.backgroundColor = "steelblue";
    for (i=0; i<squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    if (isGameModeHard) {
        easyBtn.classList.remove("selected");
        hardBtn.classList.add("selected");    
    } else {
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");    
    }
}

function squareClicked() {
    if (this.style.backgroundColor === pickedColor) {
        msgDisplay.textContent = "Correct!";
        header.style.backgroundColor = pickedColor;
        for (i=0; i<squares.length; i++) {
            if (!isGameModeHard && i >= 3) {
                squares[i].style.backgroundColor = "#234561";
            } else {
                squares[i].style.backgroundColor = pickedColor;
            }
        }
        resetBtn.textContent = "Play Again?";
    } else {
        msgDisplay.textContent = "Try again!"
        this.style.backgroundColor = "#234561";
    }
}

function myRandom(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomColors(count) {
    var arr = [];
    for (i=0; i<count; i++) {
        arr.push("rgb("+myRandom(256)+", "+myRandom(256)+", "+myRandom(256)+")");
    }
    return arr;
}
function pickAColor() {
    return colors[myRandom(colors.length)];
}