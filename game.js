


const makeBoard = (function(){
    let board = [];

    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(" ");
        }
        board.push(row);
    }

    return function() {
        return board 
    };
})();

function displayBoard(board) {
    // Create the frame div to hold the rows
    var frame = document.createElement("div");
    frame.classList.add("framing")
    frame.setAttribute("id", "frame");

    // Iterate through the rows of the board
    for (let i = 0; i < 3; i++) {
        // Create a new div for each row
        var row = document.createElement("div");
        row.classList.add("row")
       

        // Iterate through the columns of the board
        for (let j = 0; j < 3; j++) {
            // Create a button for each cell in the row
            var btn = createButton(i, j, board[i][j]);
            btn.classList.add("field")
           
            row.appendChild(btn); // Append the button to the row
        }

        // Append the row to the frame
        frame.appendChild(row);
    }

    // Append the frame to the body or any desired container
    document.body.appendChild(frame);

   
}

function createButton(col,row,symbol){
    // Create a new button element
    var button = document.createElement("button");

    
    button.setAttribute("type", "button");
    button.innerText = symbol; // Set the text displayed on the button

    // Add event listener to handle button click
    button.addEventListener("click", function(event) {
        setTicker(event, col, row)
      // method to 
        // Your code to handle button click goes here

});
return button
}

var won = false;

// Define a function that changes the global variable
function changeWon() {
    won = !won; // Changing the value of globalVariable
}



function createPlayer(name, symbol){
    let score = 0;
    symbol = symbol[0]

    const giveScore = function(){
        return score
    } 
    const scored = function() {
        score++
        displayPlayer();

    } 

    return { name, symbol,giveScore, scored}
}


function gameOn(board){
    // gucke ob noch platz im board
    let emptyCell = " ";

    for (let row of board){
        for(let cell of row){
            if (cell == " "){
                emptyCell++;
                console.log(emptyCell)
            }
        }
    }
    return emptyCell >= 1;
   

}

function showBoard(board){
    // console log done everytime a player sets a ticker
    console.log("The bored looks like this;")
    console.log(board)

}


function checkWinner(board){
    // soll iterieren und schauen wo die symbole sitzen
    //gibt mehrere Gewinnmöglichkeiten

    let status = document.querySelector("#status")

    if(won){
        restart()
    }
    let winnerName = p1.name
    let winner = p1

    if (currentPlayer === p2.symbol){
        winnerName = p2.name
        winner = p2
    }


   

    //horizontal
    for(let i = 0; i<3; i++){
        if(board[i][0] === board[i][1]  && 
            board[i][0] == board[i][2]){
            if(board[i][0] != 0){
                status.innerText = "Winner is " + winnerName
                winner.scored()
                

                
                //alert("Winner is " + board[i][0]);
                changeWon()
                return false;
                break
               
            }
    }
    // Vertical
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === board[1][i] && 
            board[0][i] === board[2][i]) {
            if(board[0][i] != 0){
                status.innerText = "Winner is " + winnerName
                winner.scored()
                
                //alert("Winner is " + board[0][i]);
                changeWon()
                return false;
                break
               
            }
        }
    }

    // Diagonal
    if ((board[0][0] === board[1][1] &&
         board[0][0] === board[2][2]) ||
        (board[0][2] === board[1][1] 
            && board[0][2] === board[2][0])) {
            if(board[1][1] != 0){
                status.innerText = "Winner is " + winnerName
                winner.scored()
               
               // alert("Winner is " + board[1][1]);
                changeWon()
                return false;
                break;
                
            }
       
    }

    // No winner
    
    return true;
}
}
function clear(board){
     // Remove the existing frame element from the document
     var existingFrame = document.querySelector("#frame");
     if (existingFrame) {
         existingFrame.remove();
     }
 
     // Create a new frame element to hold the cleared board
     var frame = document.createElement("div");
     frame.setAttribute("id", "frame");
    for(let i = 0; i<3; i++){
        for(let j = 0; j<3; j++){
            board[i][j] = " "
        }

    }
    displayBoard(board)
}

function restart(){
    changeWon()
    document.querySelector("#status").innerText = ""
    clear(gameBoard)
    


}

//methode schreiben die position im Array übermiitelt bekommt 
//je nach dem welcher knopf geklickt wird desto anders der Parameter

//**setTicket function implemente game mechanics
// checks if game is still on, if it was won
// lets currentplayer change after each turn
// finally sets the symbol on the clicked field */
function setTicker(event, col, row){
    let status = document.querySelector("#result")
    if (gameOn(gameBoard)) {
        if (gameBoard[col][row] === " ") {
            gameBoard[col][row] = currentPlayer;
            event.target.innerText = currentPlayer;

            if (checkWinner(gameBoard)) {
                currentPlayer = currentPlayer === p1.symbol ? p2.symbol : p1.symbol;
               
                status.innerText = "It's " + (currentPlayer === p1.symbol ? p1.name : p2.name) + "'s turn"
            } else {
                //alert("Game Over!");
                status.innerText = "Game Over! "
            }
        } else {
            //alert("Cell already occupied!");
            status.innerText = "Cell already occupied"
        }
    } else {
        //alert("Game Over!");
        status.innerText = "Game Over! "
    }
}


// gameloop
// as long as noone one or lost the game is going on

//each round 
// player 1 picks where to place his symbol
// check if place is free
//  if not repeat to ask player 1
// if free put in array
// show game board
// check for winners or gameboard full

// player 2 turn 
// player 2 picks where to place his symbol
// check if place is free
//  if not repeat to ask player 2
// if free put in array
// show game board
// check for winners or gameboard full

// 
function displayPlayer(){
    document.querySelector("#p1").innerText = p1.symbol + " - " + p1Name  + ": "+p1.giveScore();
    document.querySelector("#p2").innerText = p2.symbol + " - " + p2Name  +": "+p2.giveScore();
}

let gameBoard = makeBoard();
displayBoard(gameBoard);

let p1Name = prompt("Choose player 1 Name");

let p2Name = prompt("Choose player 2 Name");
document.querySelector("#p2").innerText = p2Name;
let p1 = createPlayer(p1Name, "X");
let p2 = createPlayer(p2Name, "O");
let currentPlayer = p1.symbol;
displayPlayer()









 
 







 
/* while(inGame){
showBoard(gameBoard)
if(!gameOn(gameBoard)){
    break
}
console.log("It's "+ p1.name+"'s turn")
let p1Row = prompt("pick a row to place your tick Row 1 to Row 3") -1
let p1Col = prompt("pick a row to place your tick Column 1 to Column 3") -1
gameBoard[p1Row][p1Col] = p1.symbol

showBoard(gameBoard)
console.log(checkWinner(gameBoard))
if(!checkWinner(gameBoard)){
    break
}

if(!gameOn(gameBoard)){
    break
}

console.log("It's "+ p2.name+"'s turn")
let p2Row = prompt("pick a row to place your tick Row 1 to Row 3") -1
let p2Col = prompt("pick a row to place your tick Column 1 to Column 3") -1
gameBoard[p2Row][p2Col] = p2.symbol

console.log(checkWinner(gameBoard))
inGame = checkWinner(gameBoard)
}
console.log("Game over")
console.log(checkWinner(gameBoard))
 */