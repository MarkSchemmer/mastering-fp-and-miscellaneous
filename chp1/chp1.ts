
export const errorMessageForInputOnFactorial: string = "input must be greater or equal to 0";

export const fact = n => n < 2 ? n : fact(n - 1) * n; 

export const factorial = n => {

    if (n < 0) {
        throw new Error(errorMessageForInputOnFactorial);
    }

    if (n === 0) {
        return 1;
    }

    return n < 2 ? n : factorial(n - 1) * n;
};

export const factorialZeroToN = (n:number, inc:number = 1, total:number = 1) => {

    if (n < 0) {
        throw new Error(errorMessageForInputOnFactorial);
    }

    if (n === 0) {
        return 1;
    }

    const newInc = inc+1;

    return inc < n ? factorialZeroToN(n, newInc, total * newInc) : total; 
};

export const factorialZeroToNWithoutLogic = (n:number, inc:number = 1, total:number = 1) => {
    const newInc = inc+1;
    return inc < n ? factorialZeroToN(n, newInc, total * newInc) : total; 
};

export const factorialWrapper = (...args: any) => {
    if (args[0] === 0) {
        return () => 1;
    }

    if (args[0] < 0) {
        return () => {
            throw new Error(errorMessageForInputOnFactorial);
        };
    }

    return fn => {
        return fn(...args);
    };
};



/*
    Note(Mark): 
        A small improvement would be to wrap this function for error handling 
        to avoid duplication... 
*/
