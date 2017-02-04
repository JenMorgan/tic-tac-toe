class TicTacToe {
    constructor() {
        this.symbol=null;
        this.turn=1;
    }

    getCurrentPlayerSymbol() {
        if (this.turn%2===0) {
            this.symbol='o';
            }
            else {
                this.symbol= 'x';
            }
            return this.symbol;
        }
        

    nextTurn(rowIndex, columnIndex) {
        this.turn++;


    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;