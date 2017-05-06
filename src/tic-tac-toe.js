class TicTacToe {
    constructor() {
        this.array=[[null,null,null],[null,null,null],[null,null,null]];
        this.symbol='x';
        this.turn=1;
        this.winner=null;
    }

    getCurrentPlayerSymbol() {
        //should return correct player symbol
        if (this.turn%2===0) this.symbol='o'
        else this.symbol= 'x';
        return this.symbol;
    }
        

    nextTurn(rowIndex, columnIndex) {
        //should update game state correctly
        if (!this.array[rowIndex][columnIndex]) {
        this.array[rowIndex][columnIndex]=this.symbol;
        this.turn++;
        this.getCurrentPlayerSymbol();
        }
    }

    isFinished() {
        //should return winner of the game or null
        if (this.getWinner()||this.isDraw()) return true; 
        else  return false;
    }

    getWinner() {
        //should return winner of the game or null
        if ((this.array[0][0]==='x'&&this.array[0][1]==='x'&&this.array[0][2]==='x')
        ||(this.array[1][0]==='x'&&this.array[1][1]==='x'&&this.array[1][2]==='x')
        ||(this.array[2][0]==='x'&&this.array[2][1]==='x'&&this.array[2][2]==='x')
        ||(this.array[0][0]==='x'&&this.array[1][0]==='x'&&this.array[2][0]==='x')
        ||(this.array[0][1]==='x'&&this.array[1][1]==='x'&&this.array[2][1]==='x')
        ||(this.array[0][2]==='x'&&this.array[1][2]==='x'&&this.array[2][2]==='x')
        ||(this.array[0][0]==='x'&&this.array[1][1]==='x'&&this.array[2][2]==='x')
        ||(this.array[2][0]==='x'&&this.array[1][1]==='x'&&this.array[0][2]==='x')
        ) return 'x'
        else if ((this.array[0][0]==='o'&&this.array[0][1]==='o'&&this.array[0][2]==='o')
        ||(this.array[1][0]==='o'&&this.array[1][1]==='o'&&this.array[1][2]==='o')
        ||(this.array[2][0]==='o'&&this.array[2][1]==='o'&&this.array[2][2]==='o')
        ||(this.array[0][0]==='o'&&this.array[1][0]==='o'&&this.array[2][0]==='o')
        ||(this.array[0][1]==='o'&&this.array[1][1]==='o'&&this.array[2][1]==='o')
        ||(this.array[0][2]==='o'&&this.array[1][2]==='o'&&this.array[2][2]==='o')
        ||(this.array[0][0]==='o'&&this.array[1][1]==='o'&&this.array[2][2]==='o')
        ||(this.array[2][0]==='o'&&this.array[1][1]==='o'&&this.array[0][2]==='o')
        ) return 'o'
        else return null;

    }

    noMoreTurns() {
        //should true if game field is full and false otherwise
        if (this.turn===10) return true;
        else return false;
    }

    isDraw() {
        // should return false if game is not finished or there is a winner 
        //and true if it is a draw
        if ((this.noMoreTurns())&&!(this.getWinner())) return true;
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        //should return correct field value
        return this.array[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;