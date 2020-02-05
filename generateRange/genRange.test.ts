import { genRange } from "./genRange";



describe("first test", () => {
    it("true is true?", () => {
        expect(true).toBe(true);
    });
});


describe("pass sample tests", () => {
    it("test 1", () => {
        expect(genRange(2, 10, 2)).toStrictEqual([2,4,6,8,10]);
    });
});