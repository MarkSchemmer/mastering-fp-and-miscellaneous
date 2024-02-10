/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {

    if (haystack === needle) return 0;

    let stack = haystack.split("");
    let n = needle[0];

    for (let i = 0; i <= stack.length - needle.length; i++) {
        let cur = stack[i];
        if (cur === n) {
            // take -> i + needle-length
            let subString = stack.slice(i, i+needle.length).join("");
            if(subString === needle) return i;
        }
    }

    return -1;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    let j = 0;
    let cnt = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            cnt++;
        } else {
            nums[j++]=nums[i];
        }
    }

    return nums.length - cnt;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
    let unorderedList = [];
    let orderedList = [];
    let seen = {};
    for(let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (n in seen) {
            unorderedList.push(n);
        } else {
            orderedList.push(n);
            seen[n] = n;
        }
    }
 
    let temp = [...orderedList, ...unorderedList];
 
     for (let i = 0; i < nums.length; i++) {
         nums[i] = temp[i];
     }
 
    return orderedList.length;
 };
// Merge Two Linked Lists : https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let isValue = (v) => v !== null && v !== undefined;

// implement like both have values
// then cover all the edge cases. 
var mergeTwoLists = function(list1, list2) {
    let genNode = () => new ListNode(null, null);
    if (!isValue(list1) && !isValue(list2)) return list1;
    if (list1 === undefined) return list2;
    if (list2 === undefined) return list1;

    let newList = genNode();
    let head = newList;

    while(list1 || list2) {
        let a = list1 !== null ? list1.val : null, 
        b = list2 !== null ?  list2.val : null;

        if (isValue(a) && isValue(b)) {
            if (a <= b) {
                newList.val = a;
                list1 = list1.next; 
            } else {
                newList.val = b;
                list2 = list2.next;
            }
        } 
        else if (isValue(a)) {
            newList.val = a;
            list1 = list1.next; 
        } 
        else if (isValue(b)) {
            newList.val = b;
            list2 = list2.next;
        } 
        else {

            console.log("he")
            return head;
        }

        newList.next = genNode();
        newList = newList.next;
    }

    let temp = head;

    while ( temp && isValue(temp.next)) {
       if (!isValue(temp.next.val)) {
           temp.next = null;
       }

       temp = temp.next;
    }
    
    return head;
};

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
        return isOpeningBrace(c) ? inner(rest, push(c, stck)) 
        : (parenMap[c] === stck[0] ? inner(rest, pop(stck)) : false)
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