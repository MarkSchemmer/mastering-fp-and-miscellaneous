

/*
    Introduction: 

    We all love to play games especially as children. I have fond memories playing Connect 4 with my brother 
    so decided to create this Kata based on the classic game. Connect 4 is known as several names 
    such as “Four in a Row” and “Captain’s Mistress" but was made popular by Hasbro MB Games


    Task
        The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. 
        The pieces fall straight down, occupying the next available space within the column. 
        The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

        Your task is to create a Class called Connect4 that has a method called play 
        which takes one argument for the column where the player is going to place their disc.


    Rules
        If a player successfully has 4 discs horizontally, vertically or 
        diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.

        If a player attempts to place a disc in a column that is full then 
        you should return ”Column full!” and the next move must be taken by the same player.

        If the game has been won by a player, any following moves should return ”Game has finished!”.

        Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.

        Player 1 starts the game every time and alternates with player 2.

        The columns are numbered 0-6 left to right.


        - column - is vertical 
        - row - is horizontal

*/

class Connect4 {

    // if board[y][x] is 0 then it's open, it's a obj then a piece is there
   
    move;
    board;

    player1 = 1;
    player2 = 2;

    player1Wins = "Player 1 wins!";
    player2Wins = "Player 2 wins!";
    player1Turn = "Player 1 has a turn";
    player2Turn = "Player 2 has a turn";
    cantPlace = "Column full!";

    gameIsFinished = "Game has finished!";

    isWinner = false;

    constructor() {
        this.move = 1;
        this.board = this.genBoard();
    }


    genBoard = () => {
        /*
            I need to model a board

            7 width

            6 height
        */
        return [...Array(6)].map(() => [...Array(7)].map(() => 0));
    }

    checkIfWinner = () => {
        // check horizontal 
        let horizWinner = this.checkHorizontalWinner();

        if (horizWinner !== null) { 
            this.isWinner = true;
            return horizWinner;
        }

        // check vertical winner
        let verticalWinner = this.checkVerticalWinner();

        if (verticalWinner !== null) {
            this.isWinner = true;
            return verticalWinner;
        }

        // check if vertical victory
        let diagonalWinner = this.checkDiagonalWinner();
        
        if (diagonalWinner !== null) { 
            this.isWinner = true;
            return diagonalWinner;
        }


        // no winner yet.
        return null;
    }

    play = col => {
        // can we place a piece here? if so place a piece other wise column full
        // Need to gen the column and see if theres any room to place piece
        // if so place piece in coordinate


        if (this.isWinner === true) {
            return this.gameIsFinished;
        }


        // column
        const column = this.genColumn(col);

        // can place piece?
        if (column.every(i => i !== 0)) {
            return this.cantPlace; // column is column is full
        } 
        
        // place piece
        const whosTurn = this.placePieceInColumn(col);

        // Is there a winner if so return results of winner person who just placed a piece
        // Check if anybody has won if so return winner or if 

        // must be more than 6 moves to check for winner
        if (this.move > 6) {

            // need to check if a player has won
            const winner = this.checkIfWinner();

            if (winner !== null) {
                return winner;
            }

            return whosTurn === 2 ? this.player2Turn : this.player1Turn;

        } else {
            return this.calcTurn();
        }

        // update all remaining information turn of player 
    }

    genColumn = col => {
        // to get a column you need to iterate through array on each row and get that column location.
        return this.board.map(row => row[col]); // so I iterate through each row and I get that column index
    }

    checkHorizontalWinner = () => {
        const whoWins = this.calcWinner();
        for(let i = 0; i < this.board.length; i++) {
            const row = this.board[i];

            for(let j = 0; j < 4; j++) {
                let piece = row[j];
                let winner = row.slice(j, j + 4).every(p => p === piece);
                if (winner && (piece === 1 || piece === 2) && row.length >= 4) { 
                    return whoWins;
                }
            }
        }

        return null;
    }

    checkVerticalWinner = () => {
        const whoWins = this.calcWinner();
        // bottom row, need to check every 
        for (let col = 0; col < 7; col++) {
            let column = this.genColumn(col);

            // need to check if winner
            for(let j = 0; j < 4; j++) {
                let piece = column[j];
                let winner = column.slice(j, j + 4).every(p => p === piece);
                if (winner && (piece === 1 || piece === 2) && column.length >= 4) {
                    console.log("Winner Winner chicken dinner. ");
                    return whoWins;
                } 
            }

        }

        // no winner return null;
        return null;
    }

    generateLeftDiagonal = (row, col) => {
        let r = row + 1, c = col + 1;
        let leftStepper = this.board[row][col];
        let ar = [ leftStepper ];

        while (this.board[r][c]) {
            ar.push(this.board[r][c]);
            r += 1;
            c += 1;
        }

        if (ar.length < 4) return false;

        let piece = ar[0];

        if (ar.length === 4) {
            return ar.every(p => p === piece);
        } else {

            while (ar.length >= 4) {
                let sub = ar.slice(0, 4);
                let piece = sub[0];
                if (sub.every(p => p === piece)) return true;

                ar = ar.slice(1);
            }

            return false;
        }
    }

    generateRightDiagonal = (row, col) => {
        let r = row + 1, c = col - 1;
        let leftStepper = this.board[row][col];
        let ar = [ leftStepper ];

        while (this.board[r][c]) {
            ar.push(this.board[r][c]);
            r += 1;
            c -= 1;
        }

        if (ar.length < 4) return false;

        let piece = ar[0];

        if (ar.length === 4) {
            return ar.every(p => p === piece);
        } else {

            while (ar.length >= 4) {
                let sub = ar.slice(0, 4);
                let piece = sub[0];
                if (sub.every(p => p === piece)) return true;

                ar = ar.slice(1);
            }

            return false;
        }
    }

    checkDiagonalWinner = () => {
        const whoWins = this.calcWinner();
        // can only check first 3 rows.
        for (let row = 0; row < 3; row++) {
            // need to get the row and column index then gen diagonal left and then diagonal right.

            for (let j = 0; j < this.board[row].length; j++) {

                const left = this.generateLeftDiagonal(row, j);

                // do checks
                if (left) return whoWins;

                const right = this.generateRightDiagonal(row, j);

                if (right) return whoWins;

            }
        }

        return null;
    }

    calcTurn = () => {
        return this.move % 2 === 0 ? this.player1Turn : this.player2Turn;
    }

    calcWinner = () => {
        return this.move % 2 === 0 ? this.player1Wins : this.player2Wins;
    }

    calcMove = () => {
        return this.move % 2 === 0 ? 2 : 1;
    }

    placePieceInColumn = col => {
        const whosMove = this.calcMove();
        for(let i = 0; i < this.board.length; i++) {
            const row = this.board[i];
            const rowIdx = row[col];

            if (rowIdx === 0) {
                this.board[i][col] = whosMove; // now board is updated
                this.move++;
                return whosMove;
            }
        }
    }
}

module.exports = {
    Connect4: Connect4
};
