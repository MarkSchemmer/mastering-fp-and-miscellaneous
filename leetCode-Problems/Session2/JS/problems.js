


// Valid Parentheses - Link: https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {

    let regex = /\[\]|\(\)|{}/;

    while(s.match(regex) != null) {
        s = s.replace(regex, "");
    }

    return s.length === 0;
};

// Can you solve using a stack...?
/*

    Hint 1
        Use a stack of characters.

    Hint 2
        When you encounter an opening bracket, push it to the top of the stack.

    Hint 3
        When you encounter a closing bracket, check if the top of the stack was the opening for it. 
        If yes, pop it from the stack. Otherwise, return false.

*/

const isValidUsingStack = (() => {
    let stack = [];
    let openingBraces = "({[";
    let isOpeningBrace = c => openingBraces.includes(c);

    let parenMap = {
        "}": "{",
        "]": "[",
        ")": "("
    };

    let pop = ar => {
        let [f, ...rest] = ar;
        return rest;
    };

    let push = (item, ar) => {
        return [item, ...ar];
    };

    let inner = (array, stck) => {
        
        if (array.length === 0 && stck.length === 0) 
            return true;
        else if (array.length === 0 && stck.length !== 0)
            return false;

        let [c, ...rest] = array;
        return isOpeningBrace(c) ? inner(rest, push(c, stck)) : (parenMap[c] === stck[0] ? inner(rest, pop(stck)) : false)
    }

    return (s) => {
        return inner(s.split(""), stack);
    }
})();


/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    let [first, ...rest] = strs;
    if (rest.length === 0) return first;

    const inner = (idx, result) => {
        if (idx === first.length) return result;
        let fChar = first[idx];
        let isCommon = rest.every(s => fChar === s[idx]);
        return isCommon ? inner(
            idx + 1, result + fChar
        ) : result;
    };

    return inner(0, "");
};

/*
    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000


    4.  IV
    9.  IX
    10. 

*/
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
    let sum = 0;
    let ar = s.split("");
    let romanKeys = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC":90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    }

    while (ar.length > 0) {
        let [l1, l2, ...rest] = ar;
        let special = (l1 && l2 && romanKeys[l1+l2]);
        let l1Int = romanKeys[l1] || 0, l2Int = romanKeys[l2] || 0;
        sum = special ? sum + romanKeys[l1+l2] : l1Int + sum;
        ar = [(special ? null : l2), ...rest].filter(i => i !== null && i !== undefined);
    }

    return sum;
};



/**
 * @param {number} x
 * @return {boolean}
 * 
 * 
 * Link to problem: https://leetcode.com/problems/palindrome-number/
 */
const isPalindrome = x => {
    return ([ ...x.toString().split("")].reverse()).join("") === x.toString(); 
};

// the stack overflow answer is here: 
/*
    https://stackoverflow.com/questions/199184/how-do-i-check-if-a-number-is-a-palindrome

    The mathematic solution is here: 


*/
// Can you re-write the problem so that we don't have to conver to a string... using just math logic....?
const isPalindromeV2 = x => {
    let numb = x; // temp holder for the number
    let rev = 0; // the final number reversed
    let last_numb = 0; // the difference of digits added to the rev


    while (numb > 0) {
        last_numb = numb % 10; // get the remaining
        numb = Math.floor(numb / 10); // divide numb by 10 and widdle it down
        rev = rev * 10 + last_numb; // slowly creating the numb but in reverse... 
    }

    return x === rev;
}

/**
 * 
 * Link to problem: https://leetcode.com/problems/two-sum/
 * 
 * Js solution. 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*

    Problem 1. 


    Hint that made get how to do this: 

    So, if we fix one of the numbers, say x, 
    we have to scan the entire array to find the next number y which 
    is value - x where value is the input parameter. 
    
    Can we change our array somehow so that this search becomes faster?

    1st implementation will be brufeforce. 
*/
export const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            let b = nums[b];

            if (a + b === target) {
                return [i, j];
            }
        }
    }

    return [];
};

export const twoSumV3 = (nums, target) => {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let k = target - n;
        if (k in seen) {
            return [seen[k], i];
        }

        seen[n] = i;
    }

    return [];
};