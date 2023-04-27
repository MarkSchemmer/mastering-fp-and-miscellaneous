
Dummy Example
$$
P(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{\frac{-(x-\mu)^2}{2\sigma^2}}
$$


Chapter 1. 

problems 1.1

# a)

$$
    a = \sum_{j=1}^{10} 2 = 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 = 20 
$$

Now How to solve this problem in Coding?

Requirements?

- Make Summation method
    - Will need to make a sub method, such as range?
      but a basic immplementation as such.


Now what does "a" look like in computer code...

```js

let range = (lowerLimit: number, upperLimit: number) => {
    if (lowerLimit >= upperLimit) throw new Error("lower limit cannot be greater than or equal to upperlimit.");

    let set: number[] = [];

    for(let i = lowerLimit; i <= upperLimit; i++) {
        set.push(i);
    }

    return set;
}

export let summation = (lowerLimit, upperLimit, fn) => {
    let numb = 0;
    let newRange = range(lowerLimit, upperLimit);

    let sum = newRange.reduce((acc, cur) => {
        let mutation = fn(cur);
        return acc + mutation;
    }, numb);

    return sum;
}

```

Then when calling the code in testing purposes...

```js

    it("Summation Tests", () => {
        // Coding for problem 1.1 'a' 
       expect(summation(1, 10, () => 2)).toBe(20);  
    });

```

# b)

$$
    b = \sum_{j=1}^{10} j = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55 
$$


# c)


$$
    c = \sum_{j=1}^{10} j^2 = 1^2 + 2^2 +  ... + 10^2 = 385
$$

# d)

$$
    d = \sum_{j=1}^{10} 2^j = 2^1 + 2^2 + ... + 2^{10} = 2046
$$


I have soled problem set of 1.1 a - d here are the complete unit tests proving I did the work. 

```js

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

```


# Problems 1.1 -> 2

##  2.a)

$$
    a = \prod_{j = 1}^5 2 = 2 * 2 * 2 * 2 * 2 = 32
$$


# 2.b)

$$
    b = \prod_{j=1}^5 j = 1 * 2 * 3 * 4 * 5 = 120
$$


# 2.c)

$$
    c = \prod_{j=1}^5 {j^2} = 1^2 * 2^2 * 3^2 * 4^2 * 5^2 = 14,400
$$


# 2.d)

$$
    d = \prod_{j=1}^5 {2^j} = 2^1 * 2^2 * 2^3 * 2^4 * 2^5 = 32678
$$

I also coded out a solution for product

Here is code implementation: 

```js

export let product = (lowerLimit: number, upperLimit: number, fn): number => {
    let numb = 1;
    let newRange = range(lowerLimit, upperLimit);

    let productResult = newRange.reduce((acc, cur) => {
        let mutation = fn(cur);
        return acc * mutation;
    }, numb);

    return productResult;
};

```


And here are the unit tests: 

```js

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

```

# Problem 1.1 3: 

Find n! for n = to the 1st 10 integers, basically: 1..10 find !


$$
    n! = \prod_{j=1}^n a_j = a_1a_2...a_n
$$


Factorial implementation: 

```js

let factorialIterative = () => {
    let map = {};

    let subFactorial = (nn) => {
        let prev = nn;
        while (nn > 1) {
            nn = nn - 1;
            prev = prev * nn;
        }
        return prev;
    };

    return n => {
        if (n < 0) throw new Error("cannot be less than 0.");
        if (n === 0 || n === 1) return 1;
        if (n in map) return map[n];
        return subFactorial(n);
    }
};

export let FactorialIterative = factorialIterative();

```

Evidence of unit tests: 

```js

    it("Factorial testing", () => {
        expect(FactorialIterative(5)).toBe(120);
        expect(FactorialIterative(4)).toBe(24);
        expect(FactorialIterative(3)).toBe(6);
        expect(FactorialIterative(6)).toBe(720);
        expect(FactorialIterative(7)).toBe(5040);
        expect(FactorialIterative(9)).toBe(362880);
    });

```

# Binomial coefficient

$$
    \binom{n}{k} = \frac{n!}{k!(n-k)!}
$$

In computer code this looks like: 

```ts

export let binomialCoefficient = (() => 
{
    let map = {};
    return (m: number, k: number): number => {
        if (k > m) throw new Error(" k <= m is false.");
        if (k === null || m === null) throw new Error("k or m is null. ");
        
        let key = m.toString() + k.toString();
        if (key in map) return map[key];
        let result = FactorialIterative(m) / (FactorialIterative(k) * FactorialIterative(m - k));
        map[key] = result;
        return result;
    }
})();

```

\- Todo's for tomorrow - 

- show work for yesterday as well

- And writing out the work for therom 1.2, and another 2 - 3 problems

