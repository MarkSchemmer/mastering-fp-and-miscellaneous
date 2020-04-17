import { recursiveSum, recCountItemsInList, findMaxInSetRec, binarySearchRecursive } from "./chp4";

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
});