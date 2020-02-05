import { range } from "../chp5/chp5-questions.test";

/*
    Problems for chapter 6 that need to done for this chapter.

    Also remember to pass inpure functions like a depency 

    - Create a addLogging(), function wrapper
    - Create a addTiming(), function wrapper
    - Create a memoize(), function wrapper -> like memoize3:
        memoize() needs to have a cached and a with primitive 
        array of [number, string, boolean] if not one of these use
        JSON.stringify() then access the cache with that and access the 
        fn.name in count object of the cache object


    - Make sure to create a demethodize() method for filter, map, parseInt

    - Then make sure to do some work not, and negate as well Implementing the oposite function 
        That will either use not or negate
    
    Some talk about the main points of this chapter of creating higher order functions or wrapping functions
*/

const logWrapper = fn => (logger = console.log, ...args) => {
    try {
        logger(`fn.name: ${fn.name} arguments: ${args}`);
        const result = fn(...args);
        logger("the reuslt of the function: ", result);
        return result;
    } catch(err) {
        throw new Error(err);
    }
};

const timerWrapper = fn => (logger = console.log, ...args) => {
    try { 
        const start = new Date().getTime();
        const result = fn(...args);
        const end = new Date().getTime();
        logger("Execution time: ", end - start);
        return result;
    } catch(err) {
        throw new Error(err);
    }
};

const not = fn => (...args) => !fn(...args);

const negate = fn => (...args) => -fn(...args);

// Implementing opposite
const opposite = fn => (...args) => {
    const result = fn(...args);
    // console.log(result);
    if (typeof result === "number") 
        return -result;
    if (typeof result === "boolean")
        return !result;
        
    throw new Error("function must return Number or Boolean");
};


const demethodize = fn => (...args) => fn.bind(...args);

// add timing 

// create a method for memoizing data

// do the typescript way or the JavaScript way

// create a simple memoize, and a way to count 


// log and timer a simple 

const sum = (a, b) => a + b;
// wrong
// const summer = logWrapper(timerWrapper(sum))(console.log, 5,5);

// 6.1
// what happens when you try to get field and it does not exist. 
const getField = obj => field => obj[field];

// getField will return undefined to remedy that... 
const getField2 = obj => field => obj && field && field in obj ? obj[field] : null;

// getField2 will fail safly without returning undefined and creating an error. 

// But there are still issues with getField2... 
// later chapters in recursion we can fix them with "Recursion"

describe("getField tests: ", () => {
    const car = {
        type: "Mustange"
    };

    const fieldToGet = "horse power";

    it("getField doesn't exist: ", () => {
        const expected = getField(car)(fieldToGet); 
        // console.log(expected);
        expect(expected).toBeFalsy();
    });

    it("getField2 doesn't exist: but will return null", () => {
        const expected = getField2(car)(fieldToGet);
        // console.log(expected);
        expect(expected).toBe(null);
    });
});

describe("someting", () => {
    it("else: ", () => {
        // summer();
        expect(true).toBe(true);
    });
});


// 6.2, How many calls does it take to caclulate fib 50

// task for this question is two parts

// 1. remember, find the solution for calculating this
// 2. create a function for counting how many function calls have been made

const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);

// failture attempt here
// const fib2 = (n, count) => n < 2 ? { n, count } : fib(n - 1, count++).n + fib(n - 2, count++).n;


const fibWrapper = n => {
    let count = 0;
    let _fib = nn => {

        count += 1;

        if (nn < 2) return nn;

        return _fib(nn - 1) + _fib(nn - 2);
    };

    const result = _fib(n);
    
    return { result, count };
};

// fib 6 -> 25 times

// (1 + Math.sqrt(5)) = golden ratio -> g => 3.236... 

// g * fib(6)===8 -> g * 8 => 25

const mathWayOfCalculatingFibNumb = fn => (n) => {
    const g = 3.236;
    return Math.floor(fn(n) * g);
};

describe("testing problems 6.2: ", () => {
    it("fib function properly?", () => {
         const f1  = fib(6);
         expect(f1).toBe(8);

        // but does it call the function 25 times?
        const shouldBe = mathWayOfCalculatingFibNumb(fib)(6);

        
         const { result, count } = fibWrapper(6);
         // console.log("the count: ", count);
         expect(result).toBe(8);
         expect(count).toBe(shouldBe);
    });

    it("for fib(20): ", () => {
        const { result, count } = fibWrapper(20);
        const shouldBe = mathWayOfCalculatingFibNumb(fib)(20);

        expect(result).toBe(6765);
        expect(count).toBe(shouldBe);
    });
});

describe("testing oposite: ", () => {
    it("opposite on boolean", () => {
        const dummySet = [ true, true, true ];
        const expectResult = dummySet.map(i => false);

        const isEqualToTrue = item => item === true;

        const result = dummySet.map(i => opposite(isEqualToTrue)(i));

        expect(result).toStrictEqual(expectResult);
    });

    it("opposite on Number: ", () => {

        const doubleInt = item => item * 2;
        const dummySet = [ 10, 10, 10 ];
        const expectResult = dummySet.map(i => -doubleInt(i));

        const result = dummySet.map(opposite(doubleInt));

        expect(result).toStrictEqual(expectResult);
    });
});

// Todo, last question in chapter also a 
// good memoization function that can

// Also there is a good 4kyu problem in codewars I can do as well 
// Human readable form. 

// A little optomized... 
export const memomization = fn => {
    let cache = {};
    const primitives: string[] = [ "number", "boolean", "string" ];

    return (...args) => {
        const strX = args.length === 1 && primitives.indexOf(typeof args[0]) > -1 ? args[0] : JSON.stringify(args);
        return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
    };
};

export const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// 6.3 A randomizing balancer, calls a random function every time, and can't call the same function twice 
export const randomizer = (...fns) => (...args) => {
    const firstItem = fns[0];
    const restOfItems = fns.slice(1);
    fns = [...shuffle(restOfItems), firstItem];
    return fns[0](...args);
};


describe("testing randomizer: ", () => {
    it("first test", () => {
        const f0 = jest.fn(() => 0);
        const f1 = jest.fn(() => 1);
        const f2 = jest.fn(() => 2);
        const f3 = jest.fn(() => 3);

        const randomizerTest1 = randomizer(f0, f1, f2, f3);

        const results = range(0, 3).map( () => randomizerTest1() );

        for (let i = 0; i < results.length - 2; i++) {
            // console.log(results[i], results[i + 1]);
            expect(results[i] !== results[i + 1]).toBe(true);
        }
    });
});