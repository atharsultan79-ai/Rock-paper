
let btns = document.querySelectorAll(".btn");
let resetButton = document.querySelector("#resetbutton ");
let newgameButton = document.querySelector("#newbutton");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turnO = true;
  enableButtons();
  msgContainer.classList.add("hide");
}

btns.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("button was clicked");

    if (turnO) {
      button.innerText = "O";
      turnO = false;
    } else {
      button.innerText = "X";
      turnO = true;
    }

    button.disabled = true;

  
 checkWinner();
    
  });
});
const disableButtons = () => {
  for (let btn of btns) {
    btn.disabled = true;

  }
};
const enableButtons = () => {
  for (let btn of btns) {
    btn.disabled = false;
    btn.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Winner: ${winner}`;
  msgContainer.classList.remove("hide");
}
const checkWinner = () => {
 for (let pattern of winningPatterns){
  let pos1Val = btns[pattern[0]].innerText;
    let pos2Val = btns[pattern[1]].innerText;
      let pos3Val = btns[pattern[2]].innerText;

      if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
           console.log("winnner ", pos1Val);
           showWinner(pos1Val);
           disableButtons();
        }

      
       
      } 

 }
};
newgameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
