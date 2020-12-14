
function every ($set, $item) {

    foreach ($i in $set) {
        if ($i -ne $item) { return $false; }
    }

    return $true;
}
 
 class Connect4 {
    
    [int]$move = 1;
    $board = $this.genBoard();

    [int]$player1 = 1;
    [int]$player2 = 2;

    [string]$player1Wins = "Player 1 wins!";
    [string]$player2Wins = "Player 2 wins!";

    [string]$player1Turn = "Player 1 has a turn";
    [string]$player2Turn = "Player 2 has a turn";

    [string]$cantPlace = "Column full!";

    [string]$gameIsFinished = "Game has finished!";

    [bool]$winner = $false;

    [Object]genBoard () {
        return @(
            , @(0, 0, 0, 0, 0, 0, 0),
            , @(0, 0, 0, 0, 0, 0, 0),
            , @(0, 0, 0, 0, 0, 0, 0),
            , @(0, 0, 0, 0, 0, 0, 0),
            , @(0, 0, 0, 0, 0, 0, 0),
            , @(0, 0, 0, 0, 0, 0, 0)
        );
    }

    [string]checkIfWinner() {

        $horziontalWinner = $this.checkHorizontalWinner();

        if ($null -ne $horziontalWinner) {
            $this.winner = $true;
            return $horziontalWinner;
        }

        $verticalWinner = $this.checkVerticalWinner();

        if ($null -ne $verticalWinner) {
            $this.winner = $true;
            return $verticalWinner;
        }

        $diagonalWinner = $this.checkDiagonalWinner();

        if($null -ne $diagonalWinner) {
            $this.winner = $true;
            return $diagonalWinner;
        }

        return $null;
    }

    [string]play($col) {

        if ($this.winner -eq $true) {
            return $this.gameIsFinished;
        }

        $column = $this.genColumn($col);

        $canPlace = $column | ForEach-Object -Begin { $cp = $false; } -Process { if ($_ -eq 0) { $cp = $true; }} -End { $cp; }

        if ($canPlace -eq $false) {
            return $this.cantPlace;
        }

        $turn = $this.placePieceInColumn($col);

        if ($this.move -gt 6) {

            $win = $this.checkIfWinner();

            if ($null -ne $win) {
                return $win;
            }

            if ($turn -eq 2) { return $this.player2Turn; }

            return $this.player1Turn;

        } else {
            return $this.calcTurn();
        }  
    }

    [Object]genColumn($col) {
        # to get a column you need to iterate through array on each row and get that column location.
        # so I iterate through each row and I get that column index
        $column = @();
        $rowIdx = 0;
        foreach ($row in $this.board) {
            $column += $this.board[$rowIdx][$col];
            $rowIdx += 1;
        }

        return $column;
    }

    [string]checkDiagonalWinner() {
        $whoWins = $this.calcWinner();

        for($row = 0; $row -lt 3; $row++) {

            for($j = 0; $j -lt $this.board[$row].Count; $j++) {
                $left = $this.generateLeftDiagonal();

                if($left) { return $whoWins; }

                $right = $this.generateRightDiagonal();

                if($right) { return $whoWins; }
            }
        }

        return $null;
    }

    [string]checkHorizontalWinner() {
        $whoWins = $this.calcWinner();

        for($i = 0; $i -lt $this.board.Count; $i++) {
            $row = $this.board[$i];

            for($j = 0; $j -lt 4; $j++) {
                $piece = $row[$j];
                $win = every ($row[$j..$j + 4]) $piece;
                if ($win -and ($piece -eq 1 -or $piece -eq 2) -and $row.Count -ge 4) { 
                    return $whoWins;
                }
            }
        }

        return $null;
    }

    [string] checkVerticalWinner() {
        $whoWins = $this.calcWinner();

        for($col = 0; $col -lt 7; $col++) {
            $column = $this.genColumn($col);

            for($j = 0; $j -lt 4; $j++) {
                $piece = $column[$j];

                if ($column.Count -ge 4 -and ($piece -eq 1 -or $piece -eq 2)) {
                    $win = every ($column[$j..$j+4]) $piece

                    if ($win) {
                        return $whoWins;
                    }
                }
            }
        }

        return $null;
    }

    [bool]generateLeftDiagonal($row, $col) {
        $r = row + 1; $c = $col + 1;
        $leftStepper = $this.board[$row][$col];
        $ar = @($leftStepper);

        while ($this.board[$r][$c]) {
            $ar += ($this.board[$r][$c]);
            $r += 1;
            $c += 1;
        }

        if ($ar.Count -lt 4) { return $false; } 

        $piece = $ar[0];

        if ($ar.Count -eq 4) {
            return (every $ar $piece);
        } else {

            while ($ar.Count -ge 4) {
                $sub = $ar[0..4]
                $piece = $sub[0];
                if ((every $sub $piece)) { return $true; } 

                $ar = $ar[1..$ar.Count - 1];
            }

            return $false;
        }
    }

    
    [bool]generateRightDiagonal($row, $col) {
        $r = row + 1; $c = $col - 1;
        $leftStepper = $this.board[$row][$col];
        $ar = @($leftStepper);

        while ($this.board[$r][$c]) {
            $ar += ($this.board[$r][$c]);
            $r += 1;
            $c -= 1;
        }

        if ($ar.Count -lt 4) { return $false; } 

        $piece = $ar[0];

        if ($ar.Count -eq 4) {
            return (every $ar $piece);
        } else {

            while ($ar.Count -ge 4) {
                $sub = $ar[0..4]
                $piece = $sub[0];
                if ((every $sub $piece)) { return $true; } 

                $ar = $ar[1..$ar.Count - 1];
            }

            return $false;
        }
    }

    # [bool]checkDiagonalWinner() {
    #     $whoWins = $this.calcWinner();
    #     # can only check first 3 rows.
    #     for ($row = 0; $row -lt 3; $row++) {
    #         # need to get the row and column index then gen diagonal left and then diagonal right.
    #         for ($j = 0; $j -lt $this.board[$row].Count; $j++) {

    #             $left = $this.generateLeftDiagonal($row, $j);

    #             # do checks
    #             if ($left) { return $whoWins; }

    #             $right = $this.generateRightDiagonal($row, $j);

    #             if ($right) { return $whoWins; }

    #         }
    #     }

    #     return $false;
    # }



    [string]calcTurn() {
        [string] $turn = $null;
        if ($this.move % 2 -eq 0)  { $turn = $this.player1Turn; } else { $turn = $this.player2Turn; }
        
        return $turn;
    }

    [string]calcWinner() {
        [string] $win = $null;
        if ($this.move % 2 -eq 0) { $win = $this.player1Wins; } else { $win = $this.player2Wins; }

        return $win;
    }

    [int]calcMove() {
        [int]$player = $null;
        if ($this.move % 2 -eq 0) { $player = 2; } else { $player = 1; }

        return $player;
    }

    [int]placePieceInColumn([int] $col) {
        $whosMove = $this.calcMove();
        for ($i = 0; $i -lt $this.board.Length; $i++) {
            $row = $this.board[$i];
            $rowIdx = $row[$col];

            if ($rowIdx -eq 0) {
                $this.board[$i][$col] = $whosMove;
                $this.move++;
                return $whosMove;
            }
        }

        return $null;
    }
 }

 $game = [Connect4]::new();

 Write-Host $game.play(0);
 Write-Host $game.play(0);