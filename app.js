let boxes = document.querySelectorAll(".box"); //boxes
let resetBtn = document.querySelectorAll(".reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winningPatterns = [

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");

        if (turnO) { // player1
            box.innerText = "O"
            turnO = false;

        } else { //player2
            box.innerText = "X"
            turnO = true;
        }

        box.disabled = true;

        checkWinner();


    });
});

const disableBoxes = () => {  // desable box when game finishes
    for (let box of boxes) {
        box.disabled = true;
    };
};
const enableBoxes = () => {  // desable box when game finishes
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";

    };
};
const showWinner = (winner) => {
    msg.innerText = `Winner is  ${winner}`; // print winner value
    msgContainer.classList.remove("hide");// to remove the class of hide
    disableBoxes(); // call desable box

}
const checkWinner = () => {
    for (let pattern of winningPatterns) {
        // console.log(pattern); //// the variable pattern is an array
        //    console.log( pattern[0], pattern[1], pattern[2]);
        //    console.log(
        //     boxes [pattern[0]].innerText, //position1
        //     boxes [pattern[1]].innerText,  //position2
        //     boxes [pattern[2]].innerText);  //position3
        // };
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") { // the values should not be equal to empty!
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);

                showWinner(pos1Val);
            }
        }
    };
};
resetBtn.addEventListener("click", resetGame);
