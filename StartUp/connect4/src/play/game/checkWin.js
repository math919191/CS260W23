

//returns false if no winner, else returns the winner (yellow or red)
function checkWin(board){
    if (checkHorizontal(board)){
        return checkHorizontal(board)
    } else if (checkVerticle(board)){
        return checkVerticle(board)
    } else if (checkDiagonal(board)){
        return checkDiagonal(board)
    } else {
        return false;
    }
}

function checkHorizontal(board){
    //use this to get the length
    let aCol = board.map( (value,index) => value[0] );

    for (let i = 0; i < aCol.length; i++){
        aCol = board.map( (value,index) => value[i] );

        let result = checkSingleLine(aCol); 
        if (result != false){
            return result
        }
    }
    return false;
}

function checkVerticle(board){
    for (let i = 0; i < board.length; i++){
        let result = checkSingleLine(board[i]); 
        if (result != false){
            return result
        }
    }
    return false;
}

function checkDiagonal(board){
    return false;
}

function checkSingleLine(line){
    let currMax = 0;
    let currColorWinning = line[0] == "red" ? "red" : "yellow";
    for (let i = 0; i < line.length; i++){
        let currColor = line[i]
        if (currColor == currColorWinning){
            currMax++;
        } else {
            currMax = 1;
            currColorWinning = currColor;
        }

        if (currMax == 4 && currColorWinning != "white"){
            return currColor;
        }
    }
    return false;
}

export {checkWin}