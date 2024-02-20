alert("tic tac toe")




function makeBoard(){


    let board = []

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
    return { name}
}

gameBoard = makeBoard();
console.log(gameBoard)