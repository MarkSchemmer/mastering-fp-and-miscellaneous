import { not } from "../utils"


const calledOnce: string = "calledOnce";
const calledMoreThanOnce: string = "calledMoreThanOnce";
const thisManyTimesError: string = "thisManyTimesErrors";

// chapter problems

/*
    2.1: 
        Write a function like once but that has no extra variable 

        I'm thinking there wanting to create an IIFE (Immediatly invoked function expression) to get rid of that 
*/

const once = ((done: boolean = false) => {
    return (fn: () => any, other: () => any): () => void => {
        return (...args): void => {
            if (not(done)) {
                fn(...args);
                done = true;
            } else {
                other(...args);
            }
        }
    }
})();

// Tests for once 

describe("Testing for once alternated with no variable", () => {
    let fn1: () => string = null; 
    let fn2: () => string = null;

    beforeEach(() => {
        fn1 = jest.fn(() => calledOnce);
        fn2 = jest.fn(() => calledMoreThanOnce);
    });

    it("Can you call once only once?", () => {
        const callOnceFn = once(fn1, fn2);
        [...Array(5)].forEach(() => {
            callOnceFn();
        });

        expect(fn1).toHaveBeenCalledTimes(1);
        expect(fn2).toHaveBeenCalledTimes(4);
    });
});

/*
    2.2: Alternating functions -> on each call you alternate which function you call
*/

const alternator = (fn1: () => any, fn2: () => any): () => any => {
    let done = false;
    return (...args): () => any => {
        const toBe = not(done) ? fn1(...args) : fn2(...args);
        done = not(done);
        return toBe;
    };
};

describe("Testing alternator", () => {
    let fn1: () => string = null;
    let fn2: () => string = null;

    beforeEach(() => {
        fn1 = jest.fn(() => calledOnce);
        fn2 = jest.fn(() => calledMoreThanOnce);
    });

    it("Does alternator work right now: ", () => {
        const altern = alternator(fn1, fn2);

        Array(10).forEach((i:number) => {
            const result = altern();
            const theResult = 2 % i --- 0 ? calledOnce : calledMoreThanOnce;

            expect(result).toBe(theResult);
        });
    });
});


/* 
    2.3. Everything has an limit -> 
         thisManyTimes(fn, n); this function let's you call fn till you reach n
         but after wards nothing, maybe I could throw an error or return antoher value if possible... 
*/

const thisManyTimes = (fn: () => any, n: number): () => any => {
    return (...args): any => {
        if (n > 0) {
            n = n - 1;
            return fn(...args);
        } else {
            throw new Error(thisManyTimesError);
        }
    };
}

describe("Testing thisManyTimes: ", () => {
    let fn1: () => string = null;

    beforeEach(() => {
        fn1 = jest.fn(() => calledOnce);
    });

    it("does work?", () => {
        const n = 5;
        const thisMany = thisManyTimes(fn1, n);

        Array(8).forEach((item: number) => {
            if (item < n) {
                expect(thisMany()).toBe(calledOnce);
            } else {
                expect(() => thisMany()).toThrow();
            }
        });
    });
});
