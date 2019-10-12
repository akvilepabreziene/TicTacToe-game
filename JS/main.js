var lastClicked;
var player;
var choosePlayer = document.getElementById("choosePlayer");
var winner = false;
var board = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
];

document.getElementById('zeroPlayer').onclick = function() {

    lastClicked = 1;
    choosePlayer.style.display = "none";
}

document.getElementById('xPlayer').onclick = function() {

    lastClicked = 0;
    choosePlayer.style.display = "none";
}

function player() {
    if (lastClicked == 1) {
        player = "X";
     } else if (lastClicked == 0) {
        player = "O";
     }
}

function printBoard() {

    for (var i = 0; i < board.length; i++) {
        for (var y = 0; y < board[i].length; y++) {
             if (document.getElementById(i + "_" + y).className == "cell x") {
                board[i][y] = "x";
            } else if (document.getElementById(i + "_" + y).className == "cell zero") {
                board[i][y] = "zero";

            } else {
                board[i][y] = false;
            } 
        }  
    }
}

function ckeckWinner() {
    for (var i = 0; i < board.length; i++) {
       if ((board[i][0] !== false && board[i][1] !== false && board[i][2] !== false) && (board[i][0] == board[i][1] && board[i][1] == board[i][2])) {
           winner = true;
           congrats();
       }
    }
    for (var y = 0; y < board.length; y++) {
        if ((board[0][y] !== false && board[1][y] !== false && board[2][y] !== false) && (board[0][y] == board[1][y] && board[1][y] == board[2][y])) {
            winner = true;
            congrats();
        }
    }
    if ((board[0][0] == board[1][1] && board[1][1] == board[2][2]) && (board[0][0] !== false && board[1][1] !== false && board[2][2] !== false)
    || (board[2][0] == board[1][1] && board[1][1] == board[0][2])  && (board[2][0] !== false && board[1][1] !== false && board[0][2] !== false)) {
        winner = true;
        congrats();
    }
}

function congrats() {
    player();
    document.getElementById("player").innerHTML = "LAIMĖJO - " + player + "!";
}

function makeAMove(i, y) {
    var cell = document.getElementById(i + "_" + y);

    if (winner !== false){
        return;}
      if (board[i][y] !== false) {
           return;
       }
       board[i][y] = lastClicked;
       switch (lastClicked) {
           case 1:
                cell.classList.add("zero")
               lastClicked = 0;
               break;
           case 0:
                cell.classList.add("x")
               lastClicked = 1;
               break;
       }
       printBoard();
        ckeckWinner();
   } 

