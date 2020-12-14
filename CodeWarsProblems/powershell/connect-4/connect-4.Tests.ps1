
 
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

    Connect4() {
        $this.move = 1;
        $this.board = $this.genBoard();
        $this.player1 = 1;
        $this.player2 = 2;
        $this.winner = $false;
    }

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

    [bool]every ($set, $item) {

        foreach ($i in $set) {
            if ($i -ne $item) { return $false; }
        }
    
        return $true;
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
        for ($row = 0; $row -lt $this.board.Count; $row++) {
            $column += $this.board[$row][$col];
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
                $win = $this.every($row[$j..$j + 4], $piece);
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
                    $win = $this.every($column[$j..$j+4], $piece);

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
            return ($this.every($ar, $piece));
        } else {

            while ($ar.Count -ge 4) {
                $sub = $ar[0..4]
                $piece = $sub[0];
                if ($this.every($sub, $piece)) { return $true; } 

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
            return ($this.every($ar, $piece));
        } else {

            while ($ar.Count -ge 4) {
                $sub = @() + $ar[0..4]
                $piece = $sub[0];
                if ($this.every($sub, $piece)) { return $true; } 

                $ar = @() + $ar[1..$ar.Count - 1];
            }

            return $false;
        }
    }

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
                $this.move += 1;
                return $whosMove;
            }
        }

        return $null;
    }
 }

 Describe "Easy test" {
     It "proper turns?" {

        $player1Wins = "Player 1 wins!";
        $player2Wins = "Player 2 wins!";
        $player1Turn = "Player 1 has a turn";
        $player2Turn = "Player 2 has a turn";
        $cantPlace = "Column full!";
        $gameIsFinished = "Game has finished!";

         $game = [Connect4]::new();
         Write-Host "board: " $game.board;
         $move1 = $game.play(0);
         Write-Host "board: " $game.board;
         $move2 = $game.play(0);
         Write-Host "board: " $game.board;
         $move3 = $game.play(0);
         Write-Host "board: " $game.board;
         $move4 = $game.play(0);
         Write-Host "board: " $game.board;
         $move5 = $game.play(0);
         Write-Host "board: " $game.board;
         $move6 = $game.play(0);

         $move1 | Should -Be $player1Turn;
         $move2 | Should -Be $player2Turn;
         $move3 | Should -Be $player1Turn;
         $move4 | Should -Be $player2Turn;
         $move5 | Should -Be $player1Turn;
         Write-Host $game.board;
         $move6 | Should -Be $player2Turn;
     }

    #  It "Plyaer 1 wins. " {
    #     $player1Wins = "Player 1 wins!";
    #     $player2Wins = "Player 2 wins!";
    #     $player1Turn = "Player 1 has a turn";
    #     $player2Turn = "Player 2 has a turn";
    #     $cantPlace = "Column full!";
    #     $gameIsFinished = "Game has finished!";

    #     $game2 = [Connect4]::new();

    #     Write-Host $game2.move;

    #     $game2.play(0) | Should -Be $player1Turn

    #     Write-Host $game2.move;

    #     $game2.play(1) | Should -Be $player2Turn
    #  }
 }

