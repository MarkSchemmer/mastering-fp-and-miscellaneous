import { sum, curry, warningLevels, successLogger, strFormater, warnignLogger, sumMany, sumManyPartialized, makeBold, makeUnderlined, sum3, unCurry, sum3Curried } from "./chp7";
import "../stubs";
import { countAndSay } from "../leetCode-Problems/problems";

// tests for currying... 


describe("does currying work?", () => {
    
    it("curry and sum first test", () => {
        const shouldBe = sum(1, 3, 4);
        const sumCurred = curry(sum, 3);
        const expected = sumCurred(1)(3)(4);
        console.log(expected);
        expect(expected).toBe(shouldBe);
    });

    it("Can you call mutiple times with parameters and it will still wait for parameter", () => {
        const shouldBe = sum(15, 7, 8); 
        const sumCurred = curry(sum)()()()()(15);
        const sumCurred1 = sumCurred(8)()()();
        const sumCurred3 = sumCurred1()()(7);

        expect(sumCurred3).toBe(shouldBe);
    });

    it("Testing partial application: ", () => {
        const message = "Don’t fear failure. Not failure, but low aim, is the crime. In great attempts it is glorious even to fail.";
        const warning = warningLevels.success;
        expect(successLogger(message)).toBe(strFormater(message, warning));
    });

    it("Testing partial application: ", () => {
        const message = "Don’t fear failure. Not failure, but low aim, is the crime. In great attempts it is glorious even to fail.";
        const warning = warningLevels.warning;
        expect(warnignLogger(message)).toBe(strFormater(message, warning));
    });

    it("Testing sumMany", () => {
        const res = sumMany(1, 2, 4, 5, 6, 8, 1, 4); // 31
        const expected = 31;

        expect(res).toBe(expected);
    });

    it("Testing sumMany partialized function: ", () => {
        const res = sumManyPartialized(10, 11, 20, 3, 9)(1)(2)(4)(5)(); // should be 65
        const expected = 65;

        expect(res).toBe(expected);
    });

    it("Testing curried makebold and makeunderlined: ", () => {
        const message = "santa cruz";
        const bolded = makeBold(message);
        const underlined = makeUnderlined(message);

        expect(bolded).toBe("<b>santa cruz</b>");
        expect(underlined).toBe("<u>santa cruz</u>");
    });

    it("Testing uncurrie", () => {
        const sum3Uncurried = unCurry(sum3Curried, 3);

        expect(sum3Uncurried(1,2,4,5,6)).toBe(sum3Curried(1)(2)(4));
    });

    it("testing count and say: ", () => {
        expect(countAndSay(10)).toBe("13211311123113112211");
        expect(countAndSay(9)).toBe("31131211131221");
        expect(countAndSay(5)).toBe("111221");
    });
});