class TicTacToe {
    constructor() {
        this.array=[];
        this.symbol='x';
        this.turn=1;
    }

    getCurrentPlayerSymbol() {
        if (this.turn%2==0) {
            this.symbol='o';
            }
            else {
                this.symbol= 'x';
            }
            return this.symbol;
            this.turn++;
        }
        

    nextTurn(rowIndex, columnIndex) {
        this.array[rowIndex][columnIndex]=this.symbol;
        this.turn++;
    }

    isFinished() {
        var winner=null;
        var a=0;
        for (var i=0;i<4;i++) {
            for (var j=0;j<4;j++) {
                if (this.array[i][j]!=null) {
                    a++;
                }
                if (a===3) {
                    if (this.array[0][0]==this.array[0][1] && this.array[0[0]==this.array[0][2]]){
                        winner=this.array[0][0];
                    }
                    else if (this.array[1][0]==this.array[1][1] && this.array[1][0]==this.array[1][2]) {
                        winner=this.array[1][0];
                    }
                    else if (this.array[2][0]==this.array[2][1] && this.array[2][0]==this.array[2][2]) {
                        winner=this.array[2][0];
                    }
                    else if (this.array[0][0]==this.array[1][0] && this.array[0][0]==this.array[2][0]) {
                        winner=this.array[0][0];
                }
                else if (this.array[0][1]==this.array[1][1] && this.array[0][1]==this.array[2][1]) {
                        winner=this.array[0][1];
                }
                else if (this.array[0][2]==this.array[1][2] && this.array[0][2]==this.array[2][2]) {
                        winner=this.array[0][2];
                }
                else if (this.array[0][0]==this.array[1][1] && this.array[0][0]==this.array[2][2]) {
                        winner=this.array[0][0];
                }
                else if (this.array[0][2]==this.array[1][1] && this.array[0][2]==this.array[2][0]) {
                        winner=this.array[0][2];
                }
                else {
                    winner=null;
                }
                return winner;
            }
        }
        }
    }

    getWinner() {
         var winner=null;
        var a=0;
        for (var i=0;i<4;i++) {
            for (var j=0;j<4;j++) {
                if (this.array[i][j]!=null) {
                    a++;
                }
                if (a===3) {
                    if (this.array[0][0]==this.array[0][1] && this.array[0[0]==this.array[0][2]]){
                        winner=this.array[0][0];
                    }
                    else if (this.array[1][0]==this.array[1][1] && this.array[1][0]==this.array[1][2]) {
                        winner=this.array[1][0];
                    }
                    else if (this.array[2][0]==this.array[2][1] && this.array[2][0]==this.array[2][2]) {
                        winner=this.array[2][0];
                    }
                    else if (this.array[0][0]==this.array[1][0] && this.array[0][0]==this.array[2][0]) {
                        winner=this.array[0][0];
                }
                else if (this.array[0][1]==this.array[1][1] && this.array[0][1]==this.array[2][1]) {
                        winner=this.array[0][1];
                }
                else if (this.array[0][2]==this.array[1][2] && this.array[0][2]==this.array[2][2]) {
                        winner=this.array[0][2];
                }
                else if (this.array[0][0]==this.array[1][1] && this.array[0][0]==this.array[2][2]) {
                        winner=this.array[0][0];
                }
                else if (this.array[0][2]==this.array[1][1] && this.array[0][2]==this.array[2][0]) {
                        winner=this.array[0][2];
                }
                else {
                    winner=null;
                }
                return winner;
            }
            else {return null;}
        }
        }
    }

    noMoreTurns() {
        var winner=null;
        var a=0;
        for (var i=0;i<4;i++) {
            for (var j=0;j<4;j++) {
                if (this.array[i][j]!=null) {
                    a++;
                }
                if (a===3) {
                    return true;
                }
                else {false;}
    }
        }
    }

    isDraw() {
        var winner=null;
        var a=0;
        for (var i=0;i<4;i++) {
            for (var j=0;j<4;j++) {
                if (this.array[i][j]!=null) {
                    a++;
                }
                if (a===3) {
                    if (this.array[0][0]==this.array[0][1] && this.array[0[0]==this.array[0][2]]){
                        return false;
                    }
                    else if (this.array[1][0]==this.array[1][1] && this.array[1][0]==this.array[1][2]) {
                        return false;
                    }
                    else if (this.array[2][0]==this.array[2][1] && this.array[2][0]==this.array[2][2]) {
                        return false;
                    }
                    else if (this.array[0][0]==this.array[1][0] && this.array[0][0]==this.array[2][0]) {
                        return false;
                }
                else if (this.array[0][1]==this.array[1][1] && this.array[0][1]==this.array[2][1]) {
                        return false;
                }
                else if (this.array[0][2]==this.array[1][2] && this.array[0][2]==this.array[2][2]) {
                        return false;
                }
                else if (this.array[0][0]==this.array[1][1] && this.array[0][0]==this.array[2][2]) {
                        return false;
                }
                else if (this.array[0][2]==this.array[1][1] && this.array[0][2]==this.array[2][0]) {
                        return false;
                }
                else {
                    return true;
                }
            }
            else {return false;}
        }
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.array[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;