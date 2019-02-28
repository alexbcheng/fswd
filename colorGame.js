var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 255)"
];
var pickedColor = pickAColor();
//"rgb("+random255()+", "+random255()+", "+random255()+")";
var rgbDisplay = document.getElementById("rgbDisplay");
var msgDisplay = document.getElementById("message");
rgbDisplay.textContent = pickedColor.toUpperCase();

var squares = document.querySelectorAll(".square");
for (i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        if (this.style.backgroundColor === pickedColor) {
            msgDisplay.textContent = "Correct!"
            for (j=0; j<squares.length; j++) {
                squares[j].style.backgroundColor = pickedColor;
            }
        } else {
            msgDisplay.textContent = "Try again!"
            this.style.backgroundColor = "#234561";
        }
    });
};

function random255() {
    return Math.floor(Math.random() * 255 + 1);
}
function pickAColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}