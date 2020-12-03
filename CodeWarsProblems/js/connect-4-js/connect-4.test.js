const Connect4 = require("./connect-4").Connect4;

const player1Wins = "Player 1 wins!";
const player2Wins = "Player 2 wins!";
const player1Turn = "Player 1 has a turn";
const player2Turn = "Player 2 has a turn";
const cantPlace = "Column full!";
const gameIsFinished = "Game has finished!";

describe("first test", () => {
    it("proper turns?", () => {
        let game = new Connect4();

        expect(game.play(0)).toBe(player1Turn);
        expect(game.play(0)).toBe(player2Turn);
    });
});

describe("Player 1 winning:", () => {

    it("Player 1 wins. ", () => {
        let game = new Connect4();

        expect(game.play(0)).toBe(player1Turn);
        expect(game.play(1)).toBe(player2Turn);
        expect(game.play(0)).toBe(player1Turn);
        expect(game.play(1)).toBe(player2Turn);
        expect(game.play(0)).toBe(player1Turn);
        expect(game.play(1)).toBe(player2Turn);
        expect(game.play(0)).toBe(player1Wins);
      });
});

describe("Column full...", () => {
    it("Column full test. ", () => {
        let game = new Connect4();
        expect(game.play(4)).toBe(player1Turn);
        expect(game.play(4)).toBe(player2Turn);
        expect(game.play(4)).toBe(player1Turn);
        expect(game.play(4)).toBe(player2Turn);
        expect(game.play(4)).toBe(player1Turn);
        expect(game.play(4)).toBe(player2Turn);
        expect(game.play(4)).toBe(cantPlace);     
    });
});

describe("Game has finished", () => {
    it("Game finished test. ", () => {
        let game = new Connect4();
        expect(game.play(1)).toBe(player1Turn);
        expect(game.play(1)).toBe(player2Turn);
        expect(game.play(2)).toBe(player1Turn);
        expect(game.play(2)).toBe(player2Turn);
        expect(game.play(3)).toBe(player1Turn);
        expect(game.play(3)).toBe(player2Turn);
        expect(game.play(4)).toBe(player1Wins); 
        expect(game.play(4)).toBe(gameIsFinished);  
    });
});