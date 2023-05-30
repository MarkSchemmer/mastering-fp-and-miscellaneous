import { doubleInteger, romanToNumeral } from "./problems";

import * as javaScriptProblems from './problems-js.js';

describe("dummy test", () => {
    it("You can't code under pressure #1", () => {
        expect(doubleInteger(2)).toBe(4);
    });
});

describe(" some roman Numeral tests: ", () => {
    /*
    
        Assert.AreEqual("I", solution(1))
        Assert.AreEqual("IV", solution(4))
        Assert.AreEqual("M", solution(1000))
        Assert.AreEqual("MCMXC", solution(1990))
        Assert.AreEqual("MMVII", solution(2007))

    */
    it("sample tests: ", () => {
        expect(romanToNumeral("I")).toBe(1);
        expect(romanToNumeral("IV")).toBe(4);
        expect(romanToNumeral("M")).toBe(1000);
        expect(romanToNumeral("MCMXC")).toBe(1990);
        expect(romanToNumeral("MMVII")).toBe(2007);
    });

    it("Pagination Helper: ", () => {
        expect((new javaScriptProblems.PaginationHelper()).pageCount()).toBe(0);
    });
});