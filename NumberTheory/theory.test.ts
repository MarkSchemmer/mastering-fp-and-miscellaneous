import { FactorialIterative, product, summation } from "./theory";

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
        expect(FactorialIterative(3)).toBe(6);
        expect(FactorialIterative(6)).toBe(720);
        expect(FactorialIterative(7)).toBe(5040);
        expect(FactorialIterative(9)).toBe(362880);
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

    it("Product Tests ", () => {
        // Coding for problem 1.1 -> 2.a
        expect(product(1, 5, () => 2)).toBe(32);
        // Coding for problem 1.1 -> 2.b
        expect(product(1, 5, (n) => n)).toBe(120);
        // Coding for problem 1.1 -> 2.c
        expect(product(1, 5, (n) => Math.pow(n, 2))).toBe(14400);
        // Coding for problem 1.1 -> 2.d
        expect(product(1, 5, (n) => Math.pow(2, n))).toBe(32768);
    });
});
/*

$$
P(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{\frac{-(x-\mu)^2}{2\sigma^2}}
$$


*/



