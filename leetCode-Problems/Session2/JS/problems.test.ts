import { singleNumber } from "./problems_type";

describe("dummy test", () => {
    it("dummy", () => {
        expect(1).toBe(1);
    });
});

describe("single number", () => {
    it("test 1", () => {
        expect(singleNumber([2, 2, 1])).toBe(1);
    });
});