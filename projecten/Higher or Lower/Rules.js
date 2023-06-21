const rulesQ = document.querySelectorAll("#wrapper");
const nextButton = document.querySelector(".nextButton");

rulesQ[0].style.display = "block";
rulesQ[1].style.display = "none";

function exitRulesWindow(){
    rulesQ[0].style.display = "none";
    rulesQ[1].style.display = "block";

}

if (nextButton){
   nextButton.addEventListener("click", exitRulesWindow);
}