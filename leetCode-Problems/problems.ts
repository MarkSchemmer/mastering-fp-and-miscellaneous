
/**
 * @param {number} x
 * @return {boolean}
 */

const palindroneHelper = arr => arr.length === 1 || arr.length === 0
                        ? true 
                        : arr.slice(0, 1)[0] === arr.slice(-1)[0] 
                        ? palindroneHelper(arr.slice(1, -1)) 
                        : false;

export const isPalindrome = x => {
    return x < 0 ? false : palindroneHelper(x.toString().split(""));
};


/**
 * @param {number} x
 * @return {number}
 */
const maxNumb = Math.pow(2, 31) - 1;
const revNumb = n => Number( n.toString().split("").reverse().join("") );
export const reverse = x => {
  const reversedNumb = revNumb(Math.abs(x));
  return reversedNumb > maxNumb ? 0 : x < 0 ? -reversedNumb : reversedNumb;  
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = (nums, target) => nums.reduce((acc, cur, idx, ar) => { 
    const next = ar.filter((i, id) => id !== idx).findIndex(i => cur + i === target);
    return cur + ar[next] === target ? [ idx, next ] : acc;
}, []);


/**
 * @param {string} s
 * @return {number}
 */

 const romanNumerals = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
 };

 const romanToIntegerBuilder = (acc, cur, idx, arr) => {
    return cur < arr[idx - 1] || 0 ? acc - cur : acc + cur;
 };

export const romanToInt = s => s
                               .split("")
                               .map(val => romanNumerals[val])
                               .reverse()
                               .reduce(romanToIntegerBuilder, 0);


const sortStrArr = strs => [ ...strs ].sort((a, b) => a.length - b.length);

/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = strs => {

    if (strs.length === 0) return "";
    const sorted = sortStrArr(strs);
    const [ firstItem, ...restOfItems ] = sorted;

    const biggestSubSet = firstItem.split("").reduce((acc, cur, idx, arr) => {
            const isApart = restOfItems.every(str => {
                return str[idx] === cur;     
            });
            return isApart ? acc + cur : acc;
    }, "");

    return biggestSubSet.split("").every((item, idx) => {
            return sorted.every(str => str[idx] === item );
           }) ? biggestSubSet : ""; 
};


/**
 * @param {string} s
 * @return {boolean}
 */

const pattern = /(\(\))|(\[\])|({})/;

export const isValid = s => {
    while (s.match(pattern)) {
        s = s.replace(pattern, "");
    }

    return s.length > 0 ? false : true;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const getListReturnArr = listNode => {
    let acc = [];
    
    while(listNode) {
        acc = [...acc, listNode.val];
        listNode = listNode.next;
    }
    
    return acc;
}

const sortArr = arr => [ ...arr ].sort((a, b) => a - b);

export const mergeTwoLists = (l1, l2) => {
    if(!l1) return l2;
    if(!l2) return l1;
    const sortedNewArr = sortArr(
        [ ... getListReturnArr(l1), ...getListReturnArr(l2) ]
    );
    
    
    
    return sortedNewArr
           .slice(1)
           .reduce((ac, cur) => {
                            let nx = new ListNode(cur);
                            let root = ac;
                            while(root.next) 
                                root = root.next;
        
                            root.next = nx;
                            return ac;
                        }, new ListNode(sortedNewArr[0]));
};


/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = nums => {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};


/**
 *  @param {number[]} nums
 *  @param {number} val
 *  @return {number}
 *
 *  Given nums = [0,1,2,2,3,0,4,2], val = 2,
 *  Your function should return length = 5, 
 *  with the first five elements of nums containing 0, 1, 3, 0, and 4. 
 * 
 */
export const removeElement = (nums, val) => {
    let index = null;
    while ((index = nums.indexOf(val)) !== -1)
        nums.splice(index, 1);

    return nums.length;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const searchInsert = (nums, target) => {
    let i = 0; 
    
    while (target > nums[i] && i < nums.length) i++;
    
    return i;
};

/**
 * @param {number} n
 * @return {string}
 */

const takeWhile = (toTake, arr) => {
    let acc = [];
    let i = 0;

    while (arr[i] === toTake) { 
        acc = [...acc, arr[i]]; 
        i = i + 1;
    }

    return {
        acc,
        arr: arr.slice(i)
    };
};

export const calcNext = (cache, from,  targrtIndex) => { 

    let lastCalculated = cache.split("");
    let accumulator = "";

    while (lastCalculated.length > 0) {
        const { acc, arr } = takeWhile(lastCalculated[0], lastCalculated);
        accumulator += acc.length + acc[0];
        lastCalculated = arr;
    }

    cache = accumulator;
    return from === targrtIndex - 1 ? cache : calcNext(cache, from + 1, targrtIndex);
};

export const countAndSay = ((fn) => {
    
    const cache = {
        1: "1",
        2: "11",
        3: "21",
        4: "1211",
        5: "111221"
    };

    const vals = Object.keys(cache).map(item => cache[item]);

    return n => n in cache ? cache[n] : ( cache[n] = fn(vals[vals.length - 1], vals.length, n) );

})(calcNext);

/*

    1. 1
    2. 11
    3. 21
    4. 1211 -> one 1 one 2 two 1 -> 111221
    5. 111221 -> three 1 two 2 one 1 -> 312211
    6. 312211 -> one 3 one 1 two 2 two 1 ->   13112221
    7. 1 3 11 222 1 -> one 1 one 3 two 1 three 2 one 1 -> 
    8. 1113213211 -> 

    I'm thinking for this Algorithm I'm going to use some memoization 
    with some recursion.. 

    Need to create a function that just breaks up 
    
*/

/**
 * @param {number[]} nums
 * @return {number}
 
    Going to solve this in two ways using the Kedane algorithm 
    will need to use a explanation later on for that.

    Also will take some short lessions on Dynamic Programming.
    

    Will implement algorithm in both ways to understand and review the Kedane method
    and to review and implement some Dynamic alorithmic principles... 

    [ −2,  1,  −3,  4,  −1,  2,  1,  −5,  4  ]

    
    This algorithm is O(n) -> which is the fastest solution

    

 */
// Kedanes method... 
export const maxSubArray = nums => {

    const maxAmount = Math.max(...nums);

    if (maxAmount < 0) return maxAmount;

    let maxSubArray = 0;

    let maxSoFar = 0;

    for (let i = 0; i < nums.length; i++) {
        
        // representing subArray pointer
        maxSoFar = maxSoFar + nums[i];

        // reset array if negative... 
        if (maxSoFar < 0) maxSoFar = 0;

        if (maxSoFar > maxSubArray) maxSubArray = maxSoFar; 
    }

    return maxSubArray;

};

export const dynamicFib = () => {

    const cache = {
        2: 1,
        3: 2,
        4: 3
    };

    return (n) => {
    // dynamic version of fib
        const dynamicFibHelper = (n) => {

            let result = null;

            if (n in cache) return cache[n];

            result = n === 0 || n === 1 
                        ? 1 : dynamicFibHelper(n - 1) + dynamicFibHelper(n - 2);

            cache[n] = result;
            return result;
        };

        return dynamicFibHelper(n);
    };
};

/*
    Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

    The digits are stored such that the most significant digit is at the head of the 
    list, and each element in the array contain a single digit.

    You may assume the integer does not contain any leading zero, except the number 0 itself.

    Example 1:

    Input: [1,2,3]
    Output: [1,2,4]
    Explanation: The array represents the integer 123.
    Example 2:

    Input: [4,3,2,1]
    Output: [4,3,2,2]
    Explanation: The array represents the integer 4321.

    ways of solving this problem 

    there is a simple recursive way...

    and a iterative way... 


*/


/**
 * @param {number[]} digits
 * @return {number[]}
 */

// recursive solution... 
export const plusOne = digits =>  {
    return digits[digits.length - 1] < 9 ? (digits[digits.length - 1] += 1, digits) : plusOneHelper(digits, digits.length - 1);
};

const plusOneHelper = (digits, index) => {
    
    let tp = [...digits];
    

    while (index >= 0) {

        tp[index] += 1;

        if (tp[index] === 10)  {

            tp[index] = 0;

            if (index - 1 === -1) {
                tp = [1, ...tp];
            }

        } else {
            break;
        }

        index = index - 1;
    }

    return tp;
};
