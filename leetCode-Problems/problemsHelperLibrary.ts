
export const convertBase = (n, base) => {
    let s = "";

    while (n > 0) {
        let remainder = n % base;
        s += remainder;
        n = Math.floor(n / base);
    }

    return s.split("").reverse().join("");
};

// Function is for convert base to add zeros if function is wrong.
export const shouldAddZero = (n, base) => {
    let orig = convertBase(n, base);
    let counter = 0;
    let testRes = convertBinaryToBase10(orig);

    while (testRes !== n && counter++ < 6) {
        orig = "0" + orig;
        testRes = convertBinaryToBase10(orig);
    }

    return orig;
};

export const prepStrNumbForBase10 = (fn, strNumb) => fn(strNumb.split("").reverse().join("")) / 2;

export const convertBinaryToBase10 = strNumb => {
    let numb = 0;

    for (let i = 0; i < strNumb.length; i++) {
        numb =  numb + (strNumb[i] === "1" ? Math.pow(2, i + 1) : 0);
    }

    return numb;
};

// Split array into chunks
export const chunks = (arr, chunk) => {
    return arr.reduce((acc, cur, idx) => {
        const remaining = Math.floor(idx / chunk);
        acc[remaining] = (acc[remaining] || []).concat(cur);
        return acc;
    }, []);
};