let guessNum =Math.floor(Math.random()*100 + 1);
console.log(guessNum);


let btn1 = document.getElementById("btn-1");
let comments = document.getElementById("comments");
btn1.addEventListener("click",check);

let chances = document.getElementById("chances");
let lose = document.getElementById("lose");


let attempts =10;
function check(){
    attempts--;
    chances.innerText = `${attempts}`;
    let num = document.getElementById("num").value;
    if (num == guessNum) {
      comments.innerText = `You guessed right the number is ${guessNum}`;
      comments.style.color = "green";
    } else if(num>guessNum){
      comments.innerText = "High";
      comments.style.color = "red";
    } else if(num<guessNum){
       comments.innerText = "Low"; 
       comments.style.color = "red";
    }

    if(attempts===0){
        lose.innerText = `${guessNum}`;
        btn1.disabled = "true";
        return;
    }
}