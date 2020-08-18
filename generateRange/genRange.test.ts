import { genRange, fastGenRange } from "./genRange";



describe("first test", () => {
    it("true is true?", () => {
        expect(true).toBe(true);
    });
});


describe("pass sample tests", () => {
    it("test 1", () => {
        expect(genRange(2, 10, 2)).toStrictEqual([2,4,6,8,10]);
    });

    it("Test 2 fast genRange -> ", () => {
        expect(fastGenRange(2, 10, 2)).toStrictEqual([2,4,6,8,10])
    });
});