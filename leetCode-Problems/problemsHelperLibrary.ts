
export const convertBase = (n, base) => {
    let s = "";

    while (n > 0) {
        let remainder = n % base;
        s += remainder;
        n = Math.floor(n / base);
    }

    return s.split("").reverse().join("");
};

export const convertBinaryToBase10 = strNumb => {
    let numb = 0;

    for (let i = 0; i < strNumb.length; i++) {
        numb =  numb + (strNumb[i] === "1" ? Math.pow(2, i + 1) : 0);
    }

    return numb;
};