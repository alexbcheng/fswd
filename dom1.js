var p1 = document.getElementById("first");
var p1c = document.getElementsByClassName("special")[0];
var p1t = document.getElementsByTagName("p")[0];
var p1q1 = document.querySelector("#first");
var p1fancy = document.querySelector("h1 + p");
var p2 = document.querySelector("p.special");

var btn1 = document.querySelector("button");
btn1.addEventListener("click", runOnClick);

function runOnClick() {
    this.style.color = "pink";
    console.log("Button has been clicked!")
}