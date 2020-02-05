import { longestCommonPrefix, isValid, removeDuplicates, maxSubArray, dynamicFib, plusOne } from "./problems";


describe("leetCode # 14", () => {
    it("demo test", () => {
        expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
        expect(longestCommonPrefix(["dog","racecar","car"])).toBe("");
    });
});

describe("leetCode # 20", () => {
    it("demo test", () => {
        expect(isValid("()")).toBe(true);
    });
});

describe("testing # 26", () => {
    it("dummy test for # 26", () => {
        expect(removeDuplicates([1,1,2,2,3,3])).toBe(3);
    });
});

describe("Testing # 53 maxium subArray: ", () => {
    it("testing : [ −2,  1,  −3,  4,  −1,  2,  1,  −5,  4  ] ", () => {
        expect(maxSubArray([ -2, 1, -3, 4, -1, 2, 1, -5, 4 ])).toBe(6);
        expect(maxSubArray([ -2, -1 ])).toBe(-1);
    });

    it("Testing dyanmic Fib of 40", () => {
        // only using memoization I guess...
        const dynamicFibMemoized = dynamicFib();
        expect(dynamicFibMemoized(50)).toBe(12586269025);
        expect(dynamicFibMemoized(40)).toBe(102334155);
        expect(dynamicFibMemoized(43)).toBe(433494437);
        expect(dynamicFibMemoized(49)).toBe(7778742049);
        expect(dynamicFibMemoized(45)).toBe(1134903170);
    });

    it("PlusOne test recursion solution: ", () => {
        expect(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toStrictEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);
        expect(plusOne([9])).toStrictEqual([1, 0]);
        expect(plusOne([9, 9])).toStrictEqual([1, 0, 0]);
        expect(plusOne([9, 9, 9])).toStrictEqual([1, 0, 0, 0]);
    });
});
