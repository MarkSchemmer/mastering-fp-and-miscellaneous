
// Base case same size
// Or at least determine biggest size...

// const add = (str1, str2) => {
//     let sum = "";  // our result will be stored in a string.

//     // we'll need these in the program many times.
//     let str1Length = str1.length;
//     let str2Length = str2.length;

//     // if s2 is longer than s1, swap them.
//     if(str2Length > str1Length ){
//         let temp = str2;
//         str2 = str1;
//         str1 = temp;
//     }

//     let carry = 0;  // number that is carried to next decimal place, initially zero.
//     let a;
//     let b;
//     let temp;
//     let digitSum;
//     for (let i = 0; i < str1.length; i++) {
//         a = parseInt(str1.charAt(str1.length - 1 - i));      // get ith digit of str1 from right, we store it in a
//         b = parseInt(str2.charAt(str2.length - 1 - i));      // get ith digit of str2 from right, we store it in b
//         b = (b) ? b : 0;                                    // make sure b is a number, (this is useful in case, str2 is shorter than str1
//         temp = (carry + a + b).toString();                  // add a and b along with carry, store it in a temp string.
//         digitSum = temp.charAt(temp.length - 1);            //
//         carry = parseInt(temp.substr(0, temp.length - 1));  // split the string into carry and digitSum ( least significant digit of abSum.
//         carry = (carry) ? carry : 0;                        // if carry is not number, make it zero.

//         sum = (i === str1.length - 1) ? temp + sum : digitSum + sum;  // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.

//     }

//     return sum;
// };


// My own add implementation for long string numbers... 
export const add = (str1, str2) => {
    let sum = "";

    str1 = str1.split("").map(x => Number(x));
    str2 = str2.split("").map(x => Number(x));
    let diff = [ ...new Array(Math.abs(str1.length - str2.length)) ]
               .map(() => 0);
    
    if (str1.length !== str2.length) {
        if (str1.length > str2.length) {
            str2 = [ ...diff, ...str2 ];
        } else {
            str1 = [ ...diff, ...str1 ];
        }
    }
    // now I need to iterate through the sets and the values...
    let carry = 0;

    for (let i = str1.length - 1; i >= 0; i--) {
        let a = str1[i], b = str2[i];
        let totalNewSum = a + b + carry;
        let sumToConcat = totalNewSum > 9 ? Number(totalNewSum.toString()[1]) : totalNewSum;
        carry = totalNewSum > 9 ? Number(totalNewSum.toString()[0]) : 0;
        // assign sum
        sum = (i === 0) ? totalNewSum + sum : sumToConcat + sum;
    }

    return sum;

};

export const factorialGenerator = n => {
    let fact = 1;

    for (let i = 2; i <= Number(n); i++) {
        if (Number.isSafeInteger(fact * i)) {
            fact = fact * i;
        } else {
            // Need to do multiplication by adding...
            let facti = "0";
            for (let j = 0; j < i; j++) {
                facti = add(facti, fact.toString());
            }
            fact = facti;
        }
    }
    return fact.toString();
};

const res = add("99", "1"); // factorialGenerator(20);
console.log(res);

console.log(add("2750", "3750"));  // will return 6500

let res4 = factorialGenerator(20);

console.log(res4);

console.log("2432902008176640000" === res4); // res4 should equal... 2432902008176640000


console.log(add("1", "10461394944000"));