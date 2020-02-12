
import { range } from "../chp5/chp5-questions.test";
import { contains, powerN, functionalQuickSort, myRMap, myRFilter,
     myRecReduce, myRFind, myRPipeLine, myRSome, myREvery, Hanoi, readFiles } from "./chp9";


describe("chp9 testing contains ", () => {
    it("should return true: ", () => {
        const dummySet = [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 1, 8, 99, 1000];
        expect(contains(dummySet, 1000)).toBe(true);
    });

    it("Should be false: ", () => {
        const dummySet = [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 1, 8, 99, 1000];
        expect(contains(dummySet, 9999999)).toBe(false);
    });

    it("testing powerN: ", () => {
        expect(powerN(10, 2)).toBe(100);
        expect(powerN(7, 5)).toBe(16807);
        expect(powerN(3, 3)).toBe(27);
    });

    it("test 1", () => {
        const dummySet = [4, 3, 4, 5, 1, 3, 2];
        expect(functionalQuickSort(dummySet)).toStrictEqual([ 1, 2, 3, 3, 4, 4, 5 ]);
    });
});

 describe("Testing Tower of hanoi... ", () => {

    it("Testing completeSolve: ", () => {
        const hanoi = new Hanoi(3);
        const res = hanoi.makeAllMoves()
        // console.log(res);
        expect(res).toStrictEqual([ [], [], [1, 2, 3]]);
    });

    it("cna it work for 64 disks?: ", () => {
        const hanoi = new Hanoi(8);
        const res = hanoi.makeAllMoves();
        expect(res).toStrictEqual([ [], [], range(1, 8) ]);
    })
 });

describe("Testing custom higher order functions: ", () => {
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

        const res2 = myRecReduce(dummySet, (acc, cur) => acc.concat(cur), []);
        expect(res2).toStrictEqual(dummySet);
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
        expect(res).toBe(125);
    });

    it("Testing some and every: ", () => {
        const dummySet = [2, 4, 6];
        expect(myRSome(dummySet.concat(7), n => n % 2 !== 0)).toBe(true);
        expect(myREvery(dummySet, n => n % 2 === 0)).toBe(true);
    });

    it("Test file search: ", () => {
        const res = readFiles();
        expect(res).toBe(31);
    });
});
