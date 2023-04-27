
// Concepts of chapter 1
// Summation
// Factorial
// Product such as: II 
// Binominal coeficient
// Pascal Triangle

// Additional proofs to be done as well. 

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
        let result = subFactorial(n);
        map[n] = result;
        return result;
    };
};

export let FactorialIterative = factorialIterative();

let range = (lowerLimit: number, upperLimit: number): number[] => {
    if (lowerLimit >= upperLimit) throw new Error("lower limit cannot be greater than or equal to upperlimit.");

    let set: number[] = [];

    for(let i = lowerLimit; i <= upperLimit; i++) {
        set.push(i);
    }

    return set;
}

export let summation = (lowerLimit, upperLimit, fn) : number => {
    let numb = 0;
    let newRange = range(lowerLimit, upperLimit);

    let sum = newRange.reduce((acc, cur) => {
        let mutation = fn(cur);
        return acc + mutation;
    }, numb);

    return sum;
}

export let product = (lowerLimit: number, upperLimit: number, fn): number => {
    let numb = 1;
    let newRange = range(lowerLimit, upperLimit);

    let productResult = newRange.reduce((acc, cur) => {
        let mutation = fn(cur);
        return acc * mutation;
    }, numb);

    return productResult;
};

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