let box = document.querySelectorAll(".box");
let mainbox = document.getElementById("mainbox");
mainbox.classList.add("player1");

let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner(){
    for(let combo of winningCombos){
        if(box[combo[0]].innerText === "" && box[combo[1]].innerText === "" && box[combo[2]].innerText === ""){
            return;
        }
        else{
            if(box[combo[0]].innerText === box[combo[1]].innerText && box[combo[1]].innerText === box[combo[2]].innerText){
                document.getElementById("result").textContent = `${box[combo[0]].innerText} won the game`;
                document.getElementById("reset").style.display = "inline-block";
                return;
            }
        }
    }
}

function resetGame(){
    box.forEach((b) => {
        b.textContent = "";
        b.classList.remove("clicked");
    })
};

box.forEach((b) => {
    b.addEventListener("click", (e) => {
        if (b.classList.contains("clicked")===true) {
            return;
        }else if (mainbox.classList.contains("player1")) {
                b.textContent = "X";
                b.classList.add("clicked")
                mainbox.classList.remove("player1")
                mainbox.classList.add("player2")    
        }else{
                b.textContent = "O";
                b.classList.add("clicked")
                mainbox.classList.remove("player2")
                mainbox.classList.add("player1")
        }
        checkWinner();
            })
});     

document.getElementById("reset").addEventListener("click", () => {
    resetGame();
    mainbox.classList.remove("player2");
    mainbox.classList.add("player1");
    document.getElementById("result").textContent = "";
    document.getElementById("reset").style.display = "none";
});
    