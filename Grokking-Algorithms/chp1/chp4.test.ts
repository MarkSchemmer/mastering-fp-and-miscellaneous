import { recursiveSum, 
    recCountItemsInList, findMaxInSetRec, 
    binarySearchRecursive, 
    functionalRecQuickSort, biggestSquareInFarmLand } from "./chp4";

describe("chp 4 function tests", () => {
    it("recursive sum", () => {
        expect(recursiveSum([1, 2, 3, 4])).toEqual(10);
    });

    it("recursive counting items in list: ", () => {
        expect(recCountItemsInList([1, 2, 3, 4, 5, 6, 7, 8])).toEqual(8);
    });

    it("Recursive max item in set: ", () => {
        expect(findMaxInSetRec([1, 100, 20, 15, -100])).toEqual(100);
    });

    it("Binary search recursive version: ", () => {
        expect(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)).toEqual(9 - 1);
    });

    it("Testing quicksort functional and recursive style", () => {
        const arr = [ 2, 4, 2, 1, 6, 5, 0, 9, 3];
        expect(functionalRecQuickSort(arr)).toStrictEqual([...arr].sort())
    });

    it("Farmland smallest square: ", () => {
        expect(biggestSquareInFarmLand(1680, 640)).toBe(80);
    });
});