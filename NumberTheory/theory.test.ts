import { FactorialIterative, summation } from "./theory";

describe("Number Theory Dummy test. ", () => {
    it("demo test", () => {
        expect(0).toBe(0);
        expect(0).not.toBe(1);
    });
});

describe("Number Theory Chapter 1", () => {
    it("Factorial testing", () => {
        expect(FactorialIterative(5)).toBe(120);
        expect(FactorialIterative(4)).toBe(24);
    });

    it("Summation Tests", () => {
        // Coding for problem 1.1 'a' 
       expect(summation(1, 10, () => 2)).toBe(20);  
       // Coding for problem 1.1 'b'
       expect(summation(1, 10, (n) => n)).toBe(55);
       // Coding for problem 1.1 'c'
       expect(summation(1, 10, (n) => Math.pow(n, 2))).toBe(385);
       // Coding for problem 1.1 'd'
       expect(summation(1, 10, (n) => Math.pow(2, n))).toBe(2046);
    });
});
/*

$$
P(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{\frac{-(x-\mu)^2}{2\sigma^2}}
$$


*/



