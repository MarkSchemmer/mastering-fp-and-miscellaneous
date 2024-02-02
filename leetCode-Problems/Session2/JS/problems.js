






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