
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
