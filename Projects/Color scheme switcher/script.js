let grey = document.getElementsByClassName("grey")[0];
let white = document.getElementsByClassName("white")[0];
let black = document.getElementsByClassName("black")[0];
let yellow = document.getElementsByClassName("yellow")[0];
let body = document.body;

grey.addEventListener("click", changeGrey);
white.addEventListener("click", changeWhite);
black.addEventListener("click", changeBlack);
yellow.addEventListener("click", changeYellow);

function changeGrey() {
  body.style.backgroundColor = "grey";
}
function changeWhite() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
}
function changeBlack() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
}
function changeYellow() {
  body.style.backgroundColor = "yellow";
}
