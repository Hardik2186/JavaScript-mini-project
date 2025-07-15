let boxes = document.querySelectorAll(".box");

let reset_btn = document.querySelector(".reset");
let win = document.querySelector(".win-player");
let msg = document.querySelector("#msg");
let new_game = document.querySelector("#new-game");


let turnO = true;

let win_pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = false;
    enabled();
    win.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O";
            turnO=false;
        } else {
            box.innerText = "X";
            turnO=true;
        }
        box.disabled = true;

        checkWinner();
    }); 
});

const disabled = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enabled = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const winner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    win.classList.remove("hide");
    disabled();
}

const checkWinner = () => {
    for(let patterns of win_pattern){
        let val1 = boxes[patterns[0]].innerText;
        let val2 = boxes[patterns[1]].innerText;
        let val3 = boxes[patterns[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                winner(val1);
            }
        }
    }
}

new_game.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);
