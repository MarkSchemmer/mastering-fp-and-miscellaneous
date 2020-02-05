import { R } from "../Schema";
import { factorial, factorialZeroToN, 
    factorialWrapper, fact, 
    factorialZeroToNWithoutLogic } from "./chp1";


describe("first test here", () => {
    it("should be true -> ", () => {
        expect(1 + 2).toBe(3);
    });

    it("Should be a falsy value", () => {
        const shouldBeFalsy = 1 + 2 === 4;
        expect(shouldBeFalsy).toBeFalsy();
    });
});

describe("testing factorial function", () => {
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
    expect(() => factorial(-2)).toThrow();
});

describe("Does non functional factorial work preoperly?", () => {
    expect(factorialZeroToN(5)).toBe(120);
});

describe("testing wrapper with fact", () => {
    it("testing 0", () => {
        const factorial = factorialWrapper(5)(fact);
        expect(factorial).toBe(120);
    });

    it("testing -3", () => {
        expect(() => factorialWrapper(-3)(fact)).toThrow();
    });
});

describe("testing wrapper with factorialZeroToNWithoutLogic", () => {
    it("testing 0", () => {
        expect(factorialWrapper(0)(factorialZeroToNWithoutLogic)).toBe(1);
    });

    it("testing -5", () => {
        expect(() => factorialWrapper(-5)(factorialZeroToNWithoutLogic)).toThrow();
    });
});