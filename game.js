alert("tic tac toe")




function makeBoard(){


    let board = []
    let score = 0;

    for (let  i = 0; i<3; i++){
        let row = [];
        for( let  j = 0; j<3; j++){
            row.push(0);
        }
        board.push(row);
    }

 
    
    return { board }

}

function createPlayer(name){
    let score = 0;

    const giveScore = () => score;
    const scored = () => score++;

    return { name, giveScore, scored}
}

gameBoard = makeBoard();
console.log(gameBoard)