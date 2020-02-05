
import { range } from "../chp5/chp5-questions.test";

const dummySet = [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 1, 8, 99, 1000];

describe("chp9 testing contains ", () => {
    it("should return true: ", () => {
        expect(contains(dummySet, 1000)).toBe(true);
    });

    it("Should be false: ", () => {
        expect(contains(dummySet, 9999999)).toBe(false);
    });

    it("testing powerN: ", () => {
        expect(powerN(10, 2)).toBe(100);
        expect(powerN(7, 5)).toBe(16807);
        expect(powerN(3, 3)).toBe(27);
    })
});

describe("Testing Tower of hanoi... ", () => {

    it("Testing completeSolve: ", () => {
        const hanoi = new Hanoi(7);
        hanoi.makeAllMoves();
        expect(hanoi.board).toStrictEqual([ [], [], [1, 2, 3, 4, 5, 6, 7]]);
    });

    it("cna it work for 64 disks?: ", () => {
        const hanoi = new Hanoi(8);
        hanoi.makeAllMoves();
        expect(hanoi.board).toStrictEqual([ [], [], range(1, 8) ]);
    })
});

describe("testing functional quicksort: ", () => {
    it("test 1", () => {
        const dummySet = [4, 3, 4, 5, 1, 3, 2];
        expect(functionalQuickSort(dummySet)).toStrictEqual([ 1, 2, 3, 3, 4, 4, 5 ]);
    });

    it("Testing paybills ", () => {
        const dummySet = [100, 50, 20, 10, 5, 2, 1];
        const res = howManyWaysToPayABill(64, dummySet);
        expect(res).toBe(969);
    });

    it("Testing myRMap: ", () => {
        const dummySet = [1, 2, 3];
        const res = myRMap(dummySet, a => a * 2);
        expect(res).toStrictEqual([ 2, 4, 6]);

        const dummySet2 = [2, 4, 7, 10];
        const res2 = myRMap(dummySet2, (i, idx) => i * 10 + idx);
        expect(res2).toStrictEqual([ 20, 41, 72, 103 ]);
    });

    it("Testing myRFitler: ", () => {
        const dummySet = [1, 2, 3, 4];
        const res = myRFilter(dummySet, (a, idx) => idx % 2 === 0);
        expect(res).toStrictEqual([1, 3]);
    });

    it("Testing myRecReduce: ", () => {
        const dummySet = [1, 2, 3];
        const res = myRecReduce(dummySet, (acc, cur) => acc + cur, 0);
        expect(res).toBe(6);
    });

    it("Testing myRFind: ", () => {
        const dummySet = [1, 2, 4, 5, 1000];
        const res = myRFind(dummySet, 1000);
        expect(res).toBe(1000);
        expect(myRFind(dummySet, -1)).toBe(undefined);
    });

    it("Testing myRPipeLine: ", () => {
        const plusTen = n => n + 10;
        const double = n => n * 2;

        const res = myRPipeLine(
            plusTen,
            plusTen,
            double,
            double,
            n => n - 5,
            plusTen
        )(10);
        eightQueensPuzzle();
        expect(res).toBe(125);
    });
});
