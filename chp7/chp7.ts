import { isValue, isNonEmptySet } from "../utils";

/*
    Create a console logging problem for mutiple 
    colors and use currying to divide the problem up... 
*/

/*

What cases will be needed to be tested for 

- currying the function 
- and does invoking the function 


    Chapter 7

    I will be covering Currying, Partial Application, and Partial Currying 

    Curry: 

        is turning a function of m-ary (a function of arity m) and turning that function into a 
        function that returns m unary functions and then on the final parameter will return the result 

        for example: 

            const sum = (a, b, c) => a + b + c;

            the curried version of this is: 

            const sumCurried = a => b => c => a + b + c;


        The benefit of creating curry(fn, len) function will be able to take any function 
        and turn that function into a curried function len m... 
        
        
        Currying can be helpful in writing libraries and in a way of simplifying 
        your functions when needed


    Note: 
        Getting the arity of a function 
        -> Function.prototype.length 
        -> returns the the arity of a function

*/ 

export const includes = (arr, search) => {
    return arr.some(item => item === search);
};


// function to be curried 
export const sum = (a: number, b: number, c: number) => a + b + c;

export const curry = (fn, len = fn.length) => 
                                    len === 0 
                                    ? fn() 
                                    : p => isValue(p) ? curry(fn.bind(null, p), len - 1) 
                                                      : curry(fn, len); 


/*

    Partial Application: 

        Gives you the ability to set argument positions 
        so you can give all arguments at once or in multiple 
        function calls until all arguments have been given 
        then the function will be called.

        Were able to meet all the achieve this type of 
        function by using closures. 

*/

export const partialApplication = (fn, ...args) => {
    const partialize = (...args1) => (...args2) => {
        const newArray = args1.map(item => item === undefined ? args2.shift() : item);
        const allParams = [ ...newArray, ...args2 ];

        return (includes(allParams, undefined) || allParams.length < fn.length ? partialize : fn)(...allParams);   
    };

    return partialize(...args);
};

/*

    Partial Currying: 
        is sort of a mix of currying and partial application 
        but in the fact that you can give all arguments or 
        just one arugment at a time or in any order you want 
        until all parameters have been given then result will be 
        given. 

*/

export const partialCurrying = (fn, len = fn.length) => 
                                            len === 0
                                            ? fn()
                                            : (...pp) => isNonEmptySet(pp) 
                                                                     ? partialCurrying(fn.bind(null, ...pp), len - pp.length) 
                                                                     : partialCurrying(fn, len);
/*

    - Still need to write unit tests for this chapter 
        ( partialApplication, partialCurrying, and for the new app that I wrote... )
    - Still need to write small console-function example using currying as an example

*/

interface WarningLevelsForLogging {
    error: string;
    info: string;
    success: string;
    warning: string;
    default: string;
}

export const warningLevels: WarningLevelsForLogging = {
    error: "Red",
    info: "DodgeBlue",
    success: "Green",
    warning: "Orange",
    default: "black"
};

export const strFormater = (message: string, color:string) => `${message}, color:${color}`;

// returns the string that will be logged with the color type... 
// I could write some tests around currying as well or partial application... I will probably use partial currying... 
const Logger = (message: string, _warningLevels = warningLevels, color = warningLevels.default) => {
    const c = color in _warningLevels ? _warningLevels[color] : _warningLevels.default;
    // console.log(message, "color:" + c);
    return strFormater(message, color);
};


export const warnignLogger = partialApplication(Logger, 
    undefined,
    warningLevels,
    warningLevels.warning  
);


export const successLogger = partialApplication(Logger, 
    undefined,
    warningLevels,
    warningLevels.success  
);


export const infoLogger = partialApplication(Logger, 
    undefined,
    warningLevels,
    warningLevels.info  
);

export const sumMany = (...args) => args.reduce((acc, cur) => acc + cur, 0);

export const partialCompositionForSumMany = fn => { 

    const partialize = fn1 => (...args1) => {
       // console.log("args1", args1);
        return args1 === undefined || args1.length === 0 ? fn1() : partialize(fn1.bind(null, ...args1));
    };

    return partialize(fn);
};

export const sumManyPartialized = partialCompositionForSumMany(sumMany); 


const applyStyle = (tag, txt) => `<${tag}>${txt}</${tag}>`;

const curryApplyStyle = curry(applyStyle);

export const makeBold = curryApplyStyle("b");
export const makeUnderlined = curryApplyStyle("u");
export const sum3 = (a, b, c) => 100 * a + 10 * b + c;


export const sum3Curried = curry(sum3);

export const unCurry = (fn, arity) => {

    const uncur = (...args) => {
        while (arity-- > 0) {
            fn = fn(args.shift());
        }

        return fn;
    };

    return uncur;
};

