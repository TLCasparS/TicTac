alert("tic tac toe")


const makeBoard = (function(){
    let board = [];

    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(0);
        }
        board.push(row);
    }

    return function() {
        return { board };
    };
})();



function createPlayer(name, symbol){
    let score = 0;
    symbol = symbol[0]

    const giveScore = () => score;
    const scored = () => score++;

    return { name, symbol, giveScore, scored}
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

gameBoard = makeBoard();
p1 = createPlayer("Jean", "J")
p2 = createPlayer("Caspar", "C")
console.log(gameBoard, p1.name, p2.symbol)