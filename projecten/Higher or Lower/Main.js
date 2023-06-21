let randomNumber = Math.floor(Math.random()* 10);
let credits = 0;
let computerNumber = 0;
let playerNumber = 0;

const buttonH = document.querySelector(".buttonHigher");
const buttonL = document.querySelector(".buttonLower");
const buttonP = document.querySelector(".buttonPlay");




document.querySelector(".computerNumber").innerHTML = "Computer: "
document.querySelector(".playerNumber").innerHTML = "Player: "

function test(){
    document.querySelector(".computerNumber").innerHTML = "Computer: " + randomNumber;

}

function refresh(){
    document.querySelector(".computerNumber").innerHTML = "Computer: ";

}

if (buttonH){
    buttonH.addEventListener("click", refresh);
}

 if (buttonP){
    buttonP.addEventListener("click", test);
}