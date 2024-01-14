
/*
        8 kyu Multiplication table for number

        Link: https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

        Description: 

            Your goal is to return multiplication table for number that is always an integer from 1 to 10.

            For example, a multiplication table (string) for number == 5 looks like below:

            1 * 5 = 5
            2 * 5 = 10
            3 * 5 = 15
            4 * 5 = 20
            5 * 5 = 25
            6 * 5 = 30
            7 * 5 = 35
            8 * 5 = 40
            9 * 5 = 45
            10 * 5 = 50

            P. S. You can use \n in string to jump to the next line.

            

*/

const multiTable = n => {
    return ([ ...Array(10)].map((n, i) => i + 1).reduce((acc, cur) => acc + `${cur} * ${n} = ${cur * n}\n`, "")).trim("\n");  
};

const res = multiTable(5);


// Simple pig latin solution. 
// https://www.codewars.com/kata/520b9d2ad5c005041100000f
const pigIt = s => {
    let alpahbet = "abcdefghijklmnopqrstuvwxyz";
    let pigify = str => {
        if (str.length === 1) { return alpahbet.includes(str.toLowerCase()) ? str+"ay" : str }
        let a = str.split("");
        let [f, ...rest] = a;
        return rest.join("") + f + "ay";
    }

    return s.split(" ").map(pigify).join(" ");
};
// Breaking Camel Case for Javascript, https://www.codewars.com/kata/5208f99aee097e6552000148
// This solution passes all tests. 
export const breakCamelCase = s => {
    // camelCase -> "camel Caser"... Basically we break on the UpperCase.... 
    let breakCase = (oldStringArray, newString) => {
        let [f, ...rest] = oldStringArray;
        if (!f && rest.length === 0) return newString;
        return (f && f === f.toUpperCase()) ? breakCase(rest, newString + " " + f) : 
               breakCase(rest, newString + f);
    };

    return breakCamelCase(s.split(""), "");
};