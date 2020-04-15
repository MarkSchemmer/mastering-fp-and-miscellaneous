import { recursiveSum, recCountItemsInList } from "./chp4";

describe("chp 4 function tests", () => {
    it("recursive sum", () => {
        expect(recursiveSum([1, 2, 3, 4])).toEqual(10);
    });

    it("recursive counting items in list: ", () => {
        expect(recCountItemsInList([1, 2, 3, 4, 5, 6, 7, 8])).toEqual(8);
    });
});