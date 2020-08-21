
/**
 * @param {number} x
 * @return {boolean}
 */

import { quickSort } from "./quickSort";
import { isObject } from "util";
import { convertBase, convertBinaryToBase10, shouldAddZero, chunks } from "./problemsHelperLibrary";
import { title } from "process";
import { fastGenRange } from "../generateRange/genRange";
import { getLastNodeInTree } from "./InterviewCodeProblemsForStudy/problems";

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
    return digits[digits.length - 1] < 9 
            ? (digits[digits.length - 1] += 1, digits) 
            : plusOneHelper(digits, digits.length - 1);
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

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// Define base cases for adding binary numbers

/*
    Adding binary 

    1 + 0 = 1 bin

    1 + 1 = 2 dec = 10 bin

    1 + 1 + 1 = 3 dec = 11 bin

    1 + 0 + 1 = 2 = 10 bin

    11 + 1

    1 + 1 = 10
*/

const addToFrontOfSet = (n, arr) => {
    return [ n, ...arr ];
}

export const addBinary = (a, b) => {
    const setA = a.split("").reverse().map(i => +i);
    const setB = b.split("").reverse().map(i => +i);
    let carryOver = null;
    let result = [];

    const which = setA.length > setB.length ? setA.length : setB.length;

    for (let i = 0; i < which; i++) {
        const res = ((setA[i] || 0) + (setB[i] || 0)) + (carryOver === null ? 0 : carryOver);
        carryOver = null;

        if (res === 0) {
            result = addToFrontOfSet(0, result);
        } else if (res === 1) {
            result = addToFrontOfSet(1, result);
        } else if (res === 2) {
            result = addToFrontOfSet(0, result);
            carryOver = 1;
        } else if (res === 3) {
            result = addToFrontOfSet(1, result);
            carryOver = 1;
        }
    }

    if (carryOver !== null) 
        result = addToFrontOfSet(carryOver, result);

    return result.reduce((a, c) => a + c, "");
};

/**
 * @param {number} x
 * @return {number}
 * 
 * How to resolve th
 * 
 * 
 * Implement int sqrt(int x).

        Compute and return the square root of x, 
        where x is guaranteed to be a non-negative integer.

        Since the return type is an integer, the decimal digits are 
        truncated and only the integer part of the result is returned.

        Example 1:

        Input: 4
        Output: 2
        Example 2:

        Input: 8
        Output: 2
        Explanation: The square root of 8 is 2.82842..., and since 
                    the decimal part is truncated, 2 is returned.
 */

const genSquareRoot = (x) => {
    if (x === 0) return 0;
    if (x === 1 || x === 2 || x === 3) return 1;
    for (let i = 2; i <= Math.ceil(x / 2); i++) {
        const n = i * i;

        if (n === x) return i;

        if (n > x) return  i - 1;
    }
}

export const mySqrt = () => {
    const cache = {};
    let res;
    return x => {
        return x in cache 
                ? cache[x] 
                : (res = genSquareRoot(x), cache[x] = res, res);
    };
};

/**
 * @param {number} n
 * @return {number}
 * 
 

    To reach nth step, what could have been your previous steps? (Think about the step sizes)


 */

const thunk = (fn, ...args) => {
    return () => fn(...args);
}


const possibilities = [ 1, 2 ];

const sumStairSteps = arr => arr.reduce((acc, cur) => acc + cur, 0);

const climbStairsHelper = (newStairSequence, ladderCount, cache) => {
    const sum = sumStairSteps(newStairSequence);
    if (sum === ladderCount && !(JSON.stringify(newStairSequence) in cache)) {  cache[JSON.stringify(newStairSequence)] = newStairSequence; }

    for (let i = 0; i < possibilities.length; i++) {

        if (possibilities[i] + sum <= ladderCount) {
            climbStairsHelper([...newStairSequence, possibilities[i]], ladderCount, cache);
        }

    }

    return cache;
};


export const climbStairs = n => {

    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 3;

    let cache = climbStairsHelper([], n, {});

    // console.log(cache);

    return Object.keys(cache).length;
};




/*
const climbStairsHelper = (newStairSequence, ladderCount, cache) => {
    const sum = sumStairSteps(newStairSequence);
    const currentSequence = JSON.stringify(newStairSequence);
    if (sum === ladderCount && !(currentSequence in cache)) {  cache[currentSequence] = newStairSequence; }

    for (let i = 0; i < possibilities.length; i++) {

        if (possibilities[i] + sum <= ladderCount) {

            if (possibilities[i] + sum === ladderCount) {
                const nextSequence = JSON.stringify([...newStairSequence, possibilities[i] ]);
                if (!(nextSequence in cache)) climbStairsHelper([...newStairSequence, possibilities[i]], ladderCount, cache);
            } else {
                climbStairsHelper([...newStairSequence, possibilities[i]], ladderCount, cache);
            }
        }

    }

    return cache;
};
*/

// let cacheHelper = {};

// const climbStairsHelper2 = fn => {

//     let thunk = fn();

//     while (typeof thunk === "function") {
//         thunk = thunk();
//     }

//     return thunk;
// };


// export const climbStairs2 = (newStairSequence, ladderCount) => {

//     const sum = sumStairSteps(newStairSequence);
//     const currentSequence = JSON.stringify(newStairSequence);

//     if (sum === ladderCount && !(currentSequence in cacheHelper)) {  cacheHelper[currentSequence] = newStairSequence; }

//     for (let i = 0; i < possibilities.length; i++) {

//         if (possibilities[i] + sum <= ladderCount) {
//             if (possibilities[i] + sum === ladderCount) {
//                 const nextSequence = JSON.stringify([ ...newStairSequence, possibilities[i] ]);
//             if (!(nextSequence in cacheHelper)) cacheHelper[nextSequence] = [ ...newStairSequence, possibilities[i] ];

//             } else {
//                 climbStairsHelper2(thunk(climbStairs2, [ ...newStairSequence, possibilities[i] ], ladderCount, cacheHelper));
//             }
//         }

//     }

//     return Object.keys(cacheHelper).length;
// };

// export const climbStair2Shell = n => {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     if (n === 3) return 3;
//     cacheHelper = {};
//     return climbStairs2([], n);  
// };


/*
        -------------------------------------------------------------------------------------------------------------------
                                                70. Climbing stairs 3rd attempt
        -------------------------------------------------------------------------------------------------------------------
*/

let cache = {};

const climbStairsHelper2 = fn => {

    let thunk = fn();

    while (typeof thunk === "function") {
        thunk = thunk();
    }

    return thunk;
};


export const climbStairs2 = (newStairSequence, ladderCount) => {
    const sum = sumStairSteps(newStairSequence);

    if (sum === ladderCount) {  cache[ladderCount] = cache[ladderCount] + 1; }


    if (1 + sum <= ladderCount) {
        climbStairsHelper2(thunk(climbStairs2, [ ...newStairSequence, 1 ], ladderCount));
    }
    
    if (2 + sum <= ladderCount) {
         climbStairsHelper2(thunk(climbStairs2, [ ...newStairSequence, 2 ], ladderCount));
    }
};


export const climbStair2Shell = n => {
    if (n in cache) return cache[n];
    cache[n] = 0;
    climbStairs2([], n);
    // console.log(cache[n]);
    return cache[n];
};


/*

        -------------------------------------------------------------------------------------------------------------------


                                                70. Climbing stairs 4rd attempt

                                                Using the fibonaci solution...


        -------------------------------------------------------------------------------------------------------------------

*/
export const climbStairsFibCurried = () => {
    let cache = {};
    const climbStairsTailRecursionHelper = n => {
        if (n === 1) return 1;

        let first = 1, seconded = 2, third;

        for (let i = 3; i <= n; i++) {
            third = first + seconded;
            first = seconded;
            seconded = third;
        }

        return seconded;
    };

    return n => {
        if (n in cache) return cache[n];

        const res = climbStairsTailRecursionHelper(n);

        cache[n] = res;

        return res;
    } 
};

/*
        -------------------------------------------------------------------------------------------------------

                                    88. Merge Sorted Array

        -------------------------------------------------------------------------------------------------------


        Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

        Note:

        The number of elements initialized in nums1 and nums2 are m and n respectively.
        You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.


        Hint 1:

        You can easily solve this problem if you simply think about two elements at a time rather
        than two arrays. We know that each of the individual arrays is sorted. What we don't know is how 
        they will intertwine. Can we take a local decision and arrive at an optimal solution?

        Hint 2:

        If you simply consider one element each at a time from the 
        two arrays and make a decision and proceed accordingly, 
        you will arrive at the optimal solution.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

export const merge = (nums1, m, nums2, n) => {
    let n1 = 0, n2 = 0, i = 0, tarr = nums1.slice();

    while (i < m + n) {
        if (tarr[n1] <= nums2[n2] && n1 < m) {
            nums1[i] = tarr[n1];
            n1++;
        } else if (n2 < n) {
                nums1[i] = nums2[n2];
                n2++;
        } else {
            nums1[i] = tarr[n1];
            n1++;
        }

        i = i + 1;
    }

    // console.log(nums1);
};

/*

--------------------------------------------------------------------------

                            100. Same Tree

--------------------------------------------------------------------------


1. If both trees are empty then return 1.
2. Else If both trees are non -empty
     (a) Check data of the root nodes (tree1->data ==  tree2->data)
     (b) Check left subtrees recursively  i.e., call sameTree( 
          tree1->left_subtree, tree2->left_subtree)
     (c) Check right subtrees recursively  i.e., call sameTree( 
          tree1->right_subtree, tree2->right_subtree)
     (d) If a,b and c are true then return 1.
3  Else return 0 (one is empty and other is not)


To complete this problem what is needed?

- Create Tree object

- Create Add method to add values

- Create is tree identical

*/



// Is Tree the same #100
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
export const isSameTree = (p, q) => {
    if (p === null && q === null) { return true; }

    if (p !== null && q !== null && p.val === q.val) {
        const res = isSameTree(p.left, q.left);
        const res2 = isSameTree(p.right, q.right);
        // console.log("res: ", res);
        // console.log("res2: ", res2);
        return res && res2;
    }

    return false;
};

/*
--------------------------------------------------------------------------

                            100. Same Tree

--------------------------------------------------------------------------


[1,2,2,3,4,4,3] -> sequence to be outputted... and added... 

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isSymmetric = function(root) {
    if (root === null) return true;
    return isMirror(root.left, root.right);
};

const isMirror = (leftLeaf, rightLeaf) => {
    if (leftLeaf === null && rightLeaf === null) return true;
    if (leftLeaf === null || rightLeaf === null) return false;
    
    return (leftLeaf.val === rightLeaf.val) 
    && isMirror(leftLeaf.left, rightLeaf.right) 
    && isMirror(leftLeaf.right, rightLeaf.left);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const getDepth = (node, level = 0) => {
    if (node === null) return 0;
    else {
            let leftDepth = getDepth(node.left, level + 1);
            let rightDepth = getDepth(node.right, level + 1);
            if (leftDepth > rightDepth) return leftDepth + 1; else return rightDepth + 1;
    }
}

export const maxDepth = root => {
    
    if (root === null) return 0;
    
    if (root.left === null && root.right === null) return 1;
    
    return getDepth(root, 0);
};

/**
 * LeetCode #107. 
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

export const levelOrderBottom = function(root) {
    if (root === null) return [];
    if (root.left === null && root.right === null) return [ [ root.val ] ];

    const floors = [];

    const innnerLevelHelper = (node, level = 0) => {
        if (node !== null) {
            if (floors[level] === undefined) {
                floors[level] = [ node.val ];
            } else {
                floors[level].push(node.val);
            }

            innnerLevelHelper(node.left, level + 1);
            innnerLevelHelper(node.right, level + 1);

        }
    };

    innnerLevelHelper(root, 0); // make calculations
    const revFloors = floors.reverse();
    // console.log(revFloors);
    return revFloors;
};

/**
 * 
 * LeetCode #108. Convert Sorted Array to Binary Search Tree
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? null : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function AddTreeNode (leaf, leafToAdd) {
    if (leaf.val <= leafToAdd.val) {
        if (leaf.right === null) {
            leaf.right = leafToAdd;
        } else {
            AddTreeNode(leaf.right, leafToAdd);
        }
    } else {
        if (leaf.left === null) {
            leaf.left = leafToAdd;
        } else {
            AddTreeNode(leaf.left, leafToAdd);
        }
    }
}

// this version is wrong

const sortedArrayToBST = nums => {
    const half = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[half], undefined, undefined);

    root.left = sortedArrayToBST(nums.slice(0, half));

    root.right = sortedArrayToBST(nums.slice(half + 1, nums.length));

    // console.log(root);

    return root;
};

/**
 * LeetCode #110. Balanced 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const max = (a, b) => {
    return a >= b ? a : b;
}

const height = node => {
    if (node === null) return 0;
    return 1 + max(height(node.left), height(node.right));
}

const isBalancedHelper = (node) => {
    let leftTree;
    let rightTree;
    
    if (node === null) return true;

    leftTree = height(node.left);
    rightTree = height(node.right);

    if (Math.abs(leftTree - rightTree) <= 1 
    && isBalancedHelper(node.left) 
    && isBalancedHelper(node.right))
        return true;

    return false;

};

const isBalanced = root => {
    if (root === null) return true;
    if (root.left === null && root.right === null) return true;

    return isBalancedHelper(root);
};

/** #111. Minimum Depth of Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const min = (a, b) => {
    return a <= b ? a : b;
}

const minDepth = root => {
    if (root === null) return 0;
    
    if (root.left === null && root.right === null) return 1;
    
    if (root.left === null) return minDepth(root.right) + 1;
    
    if (root.right === null) return minDepth(root.left) + 1;
    
    return min(minDepth(root.left), minDepth(root.right)) + 1;
};

/** #112 Path Sum... 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

const sumHelper = (node, currentSum, sumToReach) => {
    if (node) {
        if (node.left === null && node.right === null && node.val + currentSum === sumToReach) return node.val + currentSum;
        let sum = sumHelper(node.left, currentSum + node.val, sumToReach);
        let sum2 = sumHelper(node.right, currentSum + node.val, sumToReach);
        if (sum === sumToReach) return sum;
        if (sum2 === sumToReach) return sum2;
        return null;   
    } else return null;
}

const hasPathSum = (root, sum) => {
    if (root === null) return false;
    if (root.left === null && root.right === null) return root.val === sum;
    const res = sumHelper(root, 0, sum);
    return res === sum;
};

/**
 * 
 * Name of function -> generate
 * @param {number} numRows
 * @return {number[][]}
 */
const memoGenerate = fn => {

    const cache = [
        [1],
       [1,1],
      [1,2,1],
     [1,3,3,1],
    [1,4,6,4,1]
   ];

    return numRows => {
        let res;
        return numRows <= cache.length ? cache[numRows - 1] : (
            res = fn(cache, numRows),
            res
        );
    };
};


const genRow = prevRow => {
    let newRow = [];
    for (let i = 0, j = 1; j < prevRow.length; j++, i++) {
        newRow.push(prevRow[i] + prevRow[j]);
    }

    return [1, ...newRow, 1];
};

const generateHelper = (cache, numRows) => {
    let currentRow = cache.length;

    while (currentRow < numRows) {
        cache.push(
            genRow(cache[currentRow - 1])
        );
        currentRow += 1;
    }

    return cache[numRows - 1];
};

export const generate = memoGenerate(generateHelper);

/** #119 Pascals's Triange II was easy to solve 
 * I solved it but I just had to edit small parts of my previous solution
 * So I will give a small commented out version of it as an example just for 
 * documentation's sake
 * @param {number} rowIndex
 * @return {number[]}
 * 
 * 
 * const memoGenerate = fn => {

    const cache = [
        [1],
       [1,1],
      [1,2,1],
     [1,3,3,1],
    [1,4,6,4,1]
   ];

    return numRows => {
        let res;
        return cache[numRows] ? cache[numRows] : (
            res = fn(cache, numRows),
            res
        );
    };
};


const genRow = prevRow => {
    let newRow = [];
    for (let i = 0, j = 1; j < prevRow.length; j++, i++) {
        newRow.push(prevRow[i] + prevRow[j]);
    }

    return [1, ...newRow, 1];
};

const generateHelper = (cache, numRows) => {
    let currentRow = cache.length;

    while (currentRow <= numRows) {
        cache.push(
            genRow(cache[currentRow - 1])
        );
        currentRow += 1;
    }

    return cache[numRows];
};

const getRow = memoGenerate(generateHelper);
 */

 /**
 * @param {number[]} prices
 * @return {number}
 */

// export const maxProfit = prices => {
//     // find lowest index 
//     let [min, minIndex] = prices.reduce(([min, i], cur, idx) => {
//         return cur < min ? [cur, idx] : [min, i]
//     }, [prices[0], 0]);


//     minIndex = minIndex + 1 === prices.length ? (min = prices[0], 0) : minIndex;

//     console.log("min index: ", minIndex);

    

//     console.log("min value: ", min);

//     // Need to iterate forward and find the highest range
//     let sellBuyCases = [
        
//     ];
//     while (minIndex < prices.length) {
//         let nextBiggerVal = prices[minIndex + 1] || null;

//         if (nextBiggerVal && min < nextBiggerVal) {
//             sellBuyCases.push(
//                 nextBiggerVal - min, // value to filter on
//             );
//         }

//         minIndex = minIndex + 1;
//     }

//     console.log(sellBuyCases);

//     return sellBuyCases.length === 0 ? 0 : Math.max(...sellBuyCases);
// };

// iteration two... going to use some aspects of the 
// Kedane algorithm to get this done... 

// My last solution does not pass every test... 

// Will create a pointer for the min and for the maxSum... and track both... 

export const maxProfit = prices => {
    let maxSum = 0, min = prices[0], i = 0;

    while (i < prices.length) {
        let nextDayPrice = prices[i + 1] || null;

        if (nextDayPrice && min < nextDayPrice && nextDayPrice - min > maxSum) 
            maxSum = nextDayPrice - min;

        if (prices[i] < min) min = prices[i]; 
        else if (nextDayPrice < min) min = nextDayPrice;

        i = i + 1;
    }

    return maxSum;
};

/** 125. Valid Palindrome version 2... 
 * @param {string} s
 * @return {boolean}
 */


const onlyAlphaNumeric = str => {
    const letters = "abcdefghijklmnopqrstuvwxyz0123456789";
    return str.toLowerCase().split("").filter(c => letters.includes(c));
} 

export const isPalindrome2 = (str): Boolean => {
    if (str.length === 0) return true;
    const strSet = onlyAlphaNumeric(str);
    for (let i = 0, j = strSet.length - 1; i < Math.floor(strSet.length / 2); i++, j--) {
        if (strSet[i] !== strSet[j]) return false;
    } 
    return true;
};

/** #136. Single Number
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = nums => {
    const sortedNums = quickSort(nums);
    
    // console.log("sorted Nums", sortedNums);

    for (let j = 0; j < sortedNums.length; j++) {
        let current = sortedNums[j];
        let nextJ = sortedNums[j + 1]; // hitting boundry... 
        let prevJ = sortedNums[j - 1];

        if (nextJ !== undefined && prevJ !== undefined && current !== nextJ && current !== prevJ) 
            return current; 
        
        if (nextJ === undefined && current !== prevJ)
            return current;
        
        if (prevJ === undefined && current !== nextJ)
            return current;
    }

    return null;
};

/** 141. LinkedList List Cycle... 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


 /*
 
  I utilized the tortoise and the hair type strategy... 

  I have two pointers, one slow and one fast... I iterate through until they overlap

  When they overlap I know that where the cycle will be

  Also I know if one of the values is null then there is no cylce in this linkedList 
 
 */
var hasCycle = function(head) {
    
    if (head === null) return false;
    
    let tortoise = head;
    let hair = head.next;
    
    while (tortoise.next !== null && hair.next && hair.next.next) {
        if (tortoise.val === hair.val) return true;
        
        tortoise = tortoise.next;
        hair = hair.next.next;
    }
    
    return false;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit2 = prices => {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) 
            maxProfit = prices[i] - prices[i - 1];
    }

    return maxProfit;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*



Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:


begin to intersect at node c1.

 

Example 1:


Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads 
as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
 

Example 2:


Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as 
[0,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
 

Example 3:


Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.
 

Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.




    I can brute force this solution where I compare every node of A to every node of b to see if any of the nodes
    Have the same reference

    I could take the object reference of every node and compare that to b to see if any have the same if so I return that value
    In that case...


    Or I could use pointers which is kinda related to what I'm thinking about tortoise and the hair... or similar in a way...

    So I iterate through and keep track of the last item before I hit the end, if list a and list b have different ends then break out and return null

    If they don't then keep exchaning runner a and runner b until they hit the same node then return that first node that they intersect... 

*/

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

const iterHeadUp = (node, count) => {
    let iter = 0;

    while (iter < count) {
        node = node.next;
        iter = iter + 1;
    }

    return node;
}

var getIntersectionNode = function(headA, headB) { 
    let lastNodeRunnerA = null;
    let lastNodeRunnerB = null;

    let runnerA = headA;
    let runnerB = headB;

    let counterA = 0;
    let counterB = 0;

    // getLastNode for A

    while (runnerA !== null) {
        if (runnerA.next === null) lastNodeRunnerA = runnerA.val;
        runnerA = runnerA.next;
        counterA++;
    }
    runnerA = headA;

    while (runnerB !== null) {
        if (runnerB.next === null) lastNodeRunnerB = runnerB.val;
        runnerB = runnerB.next;
        counterB++;
    }
    runnerB = headB;

    if (lastNodeRunnerA !== lastNodeRunnerB) return null;

    if (lastNodeRunnerA === null || lastNodeRunnerB === null) return null;


    if (counterA > counterB) {
        runnerA = iterHeadUp(headA, counterA - counterB);
    } else {
        runnerB = iterHeadUp(headB, counterB - counterA);
    }
    
    while (true) {
        if (Object.is(runnerA, runnerB)) return runnerA;
        runnerA = runnerA.next;
        runnerB = runnerB.next;
    }
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        let index1 = i + 1;
        for (let j = i + 1; j < numbers.length; j++) {
            let index2 = j + 1;
            if (numbers[i] + numbers[j] === target) return [index1, index2];
        }  
    }
};

/**
 * @param {number} n
 * @return {string}
 */


const upperCaseLetters = [...new Array(26)]
    .map((item, idx) => idx)
    .reduce((acc, cur) => {
    acc[cur] = String.fromCharCode(cur + 65);
    return acc;
}, {});

const convertToTitleHelper = (n, str) => {
    while (n > 0) {
        str += upperCaseLetters[(n - 1) % 26];
        n = Math.floor((n - 1) / 26);
    }

    return str.split("").reverse().join("");
}

export const convertToTitle = n => {
    if (n <= 26) 
        return upperCaseLetters[n];
    else 
        return convertToTitleHelper(n, ""); 
};

/**
 * @param {number[]} nums
 * @return {number}
 */

/*

    Just going to sort this array and return n/2

*/

const majorityElementSorter = arr => {
    // if (arr.length < 2) return arr;
    //  else {
    //     let pivot = arr[0];
    //     let smaller = arr.slice(1).filter(n => n < pivot);
    //     let bigger = arr.slice(1).filter(n => n >= pivot);
    //     return [ ...majorityElementSorter(smaller), pivot, ...majorityElementSorter(bigger) ];
    // }

    let stacks = [arr];
    let sorted = [];

    while (stacks.length) {
        const currentArray = stacks.pop();

        if (currentArray.length === 1) {
            sorted.push(currentArray[0]);
            continue; // skips this round and moves to next
        }

        const [ first, ...rest] = currentArray;

        // go through array... so first is pivot...
        // Need to get smaller and bigger arrays

        let smaller = [], bigger = [];

        for (let i = 0; i < rest.length; i++) {
            let value = rest[i];
            if (value < first) {
                smaller.push(value);
            } else {
                bigger.push(value);
            }
        }

        // Need to add arrays to stack...

        // In order of smallest, pivot, largest

        if (smaller.length) {
            stacks.push(smaller);
        }

        stacks.push([first]);

        if (bigger.length) {
            stacks.push(bigger);
        }
    }

    return sorted;
}

var majorityElement = function(nums) {
    let len = Math.floor(nums.length / 2);
    let sorted = majorityElementSorter(nums);
    return sorted[len];
};

/**
 * @param {string} s
 * @return {number}
 */

/*
    A - Z mapped 0 - 25 hash map... 
*/
const numbersToUpperCaseLetters = [...new Array(26)]
    .map((item, idx) => idx)
    .reduce((acc, cur) => {
    acc[String.fromCharCode(cur + 65)] = cur;
    return acc;
}, {});

export const titleToNumber = s => {
    const charArr = s.split("").reverse(); // array of chars... 

    return charArr.reduce((acc, cur, coefficent) => {
        const coe = Math.pow(26, coefficent);
        return acc + (coe * (numbersToUpperCaseLetters[cur] + 1));
    }, 0);
};

/**
 * @param {number} n
 * @return {number}
 */

/*

    Create Factorial generator, and then memoize it as well to speed up the process

    Finally implement getting the trailing zeros... 

    My factorial generator is not working so I have to refactor...

    So basically I have to create an add function wi

*/

// Iteration 1
// const factorialGenerator = n => {
//     let total = n;

//     while (n > 0) {
//         total = total * n;
//         n = n - 1;
//     }

//     return total;
// };

// Iteration 2
export const add = (s1: any, s2: any) => {
    let sum = "";

    s1 = s1.toString().split("").map(x => Number(x));
    s2 = s2.toString().split("").map(x => Number(x));
    let diff = [ ...new Array(Math.abs(s1.length - s2.length)) ]
               .map(() => 0);
    
    if (s1.length !== s2.length) {
        if (s1.length > s2.length) {
            s2 = [ ...diff, ...s2 ];
        } else {
            s1 = [ ...diff, ...s1 ];
        }
    }

    // now I need to iterate through the sets and the values...
    let carry = 0;

    for (let i = s1.length - 1; i >= 0; i--) {
        let a = s1[i], b = s2[i];
        let totalNewSum = a + b + carry;
        let sumToConcat = totalNewSum > 9 ? Number(totalNewSum.toString()[1]) : totalNewSum;
        carry = totalNewSum > 9 ? Number(totalNewSum.toString()[0]) : 0;
        // assign sum
        sum = (i === 0) ? totalNewSum + sum : sumToConcat + sum;
    }

    return sum;

};

export const factorialGenerator = n => {
    let fact: any = 1;

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

const memoizedFactorial = fn => {
    let cache = {};

    return n => {
        return n in cache ? cache[n] : (cache[n] = fn(n), cache[n]);
    }
};

let memoizedFactorialFunc = memoizedFactorial(factorialGenerator);

const takeWhileTrailingZeros = (toTake, strSet) => {
    let iterCount = 0;

    while (strSet[iterCount] === "0") {
        iterCount = iterCount + 1;
    }

    return iterCount;
}

export const trailingZeroes = n => {
    let factorialNumb = memoizedFactorialFunc(n);
    return takeWhileTrailingZeros("0", factorialNumb.split("").reverse());
};

// solution that is time efficent...
const trailingZeroesTimeEfficent = n => {
    let zeroes = 0;

    while (n >= 5) {
        n = Math.floor(n / 5);
        zeroes += n;
    }

    return zeroes;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
    I pop the array for k amount... then unshift the popped item 
    This works... very fast and very simply... 
*/
export const rotate = (nums, k) => {
    let i = 0;

    while (i < k) {
        nums.unshift(nums.pop());
        i = i + 1;
    }

    return nums;
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
export const reverseBits = n => {
    return convertBinaryToBase10(
            shouldAddZero(n, 2)
        ) / 2;
};


/*
    Solve the following using JavaScript (console.log each line of the output): For every number from 1 to 100: 1) if the number is divisible by 3, print ”clearly”; 2) 
    if the number is divisible by 5, print “agile”; 3) if the number is divisible by 3 and 5, print “clearlyagile”; 4) otherwise, print the number
*/
// const clearlyAgile = () => [ ...Array(101).keys() ].slice(1).map(n => n % 15 === 0 ? "clearlyagile" : n % 5 === 0 ? "agile" : n % 3 === 0 ? "clearly" : n).forEach(n => console.log(n));


/**
 * @param {number} n - a positive integer
 * @return {number}
 * 
 * 
 * 
 * I'm just going to convert number to binary string and then filter for 1's 
 * And return the set's count
 */
export const hammingWeight = n => {
    return convertBase(n, 2).split("").filter(i => i === "1").length;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const rob = nums => {
    let rob1 = 0, rob2 = 0;

    for (let i = 0; i < nums.length; i++) {
        let temp = Math.max(rob1 + nums[i], rob2);
        rob1 = rob2;
        rob2 = temp;
    }

    return rob2;
};

// Task 2 Toptal interview question
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


export const compress = s => {
    let out = "";
    let sum = 1;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            sum++;
        } else {
            out = out + (sum === 1 ? "" : sum) + s[i];
            sum = 1;
        }
    }

    if (sum === 1) { out = out + sum + s[s.length - 1]; }
    return out.length < s.length ? out : s;
};

export const solution = (S, K) => {
    // console.log(compress(S));
};

/**
 * @param {number} n
 * @return {boolean}
 */

/*

    Write an algorithm to determine if a number n is "happy".

    A happy number is a number defined by the following process: 
    Starting with any positive integer, replace the number by the sum of the 
    squares of its digits, and repeat the process until the number equals 1 
    (where it will stay), or it loops endlessly in a cycle which does not include 1. 
    Those numbers for which this process ends in 1 are happy numbers.

    Return True if n is a happy number, and False if not.

*/

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy1 = () => {
    let map = {};
    let convertNToNextSet = n => n.toString().split("")
                                .map(x => Math.pow(Number(x), 2))
                                .reduce((acc, cur) => acc + cur, 0);

    let isValidHappy = n => n === 1;

    return n => {
        let origN = n;
        let tn = {};
        
        if (n in map)  { return map[n]; }
        
        tn[n] = { n };
        
        while (true) {

            n = convertNToNextSet(n);
            if (isValidHappy(n)) {
                map[origN] = true;
                return true;
            } else {
                if (n in tn) {
                    return false;
                } else {
                    tn[n] = n;
                }
            }
        }
    };
};

export const isHappy = isHappy1();

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
export const removeElements = (head, val) => {
    // Accounting for the head... 
    if (head === null) return head;
    if (head.val === val) {
        head = head.next;
        return removeElements(head, val);
    }

    // Accounting for the middle

    let runner = head;

    while (runner.next !== null) {
        if (runner.next.val === val && runner.next.next !== null) {
            let temp = runner.next.next;
            runner.next = null;
            runner.next = temp;
            return removeElements(head, val);
        }
        if (runner.next.next === null) {
            break;            
        } else {
            runner = runner.next;
        }

    }

    if (runner.next && runner.next.val === val) {
        runner.next = null;
        return removeElements(head, val);
    }
    // Accounting for the tail... 
    return head;
};

/**
 * @param {number} n
 * @return {number}
 */
// export const countPrimes1 = () => {
//     let primesResMap = {
//         0: 0,
//         1: 0,
//         2: 0
//     };
//     let primesMap = [ 2, 3, 5, 7, 11 ];
//     let primesHashMapVersion = {
//         2: 2,
//         3: 3,
//         5: 5,
//         7: 7,
//         11: 11
//     };
//     let largestPrime = () => primesMap[primesMap.length - 1];


//     const genRestOfPrimesToN = n => {
//         for (let i = largestPrime() + 2; i <= n; i+= 2) {
//             let iInPrimesHashMap = i in primesHashMapVersion;
//             let isPrime = iInPrimesHashMap || primesMap.every(p => i % p !== 0);
//             if (isPrime) {
//                 primesMap.push(i);
//                 primesHashMapVersion[i] = i;
//             }
//         }

//         return n in primesHashMapVersion ? primesMap.length - 1 : primesMap.length;
//     }

//     const preparePrimes = n => {
//             // Need to generate a result... 
//             let largestPrimeV = largestPrime();
//             if (n <= largestPrimeV) {
//                 let highCounter = primesMap.length - 1;
//                 while (highCounter > 0) {
//                     let curPrimes = primesMap[highCounter];
//                     if (curPrimes < n) {
//                         console.log("curprimes: ", curPrimes);
//                         return primesMap.slice(0, highCounter + 1).length;
//                     }

//                     highCounter = highCounter - 1;
//                 }
                
//             } else {
//                 return genRestOfPrimesToN(n);
//             }
//     }



//     return n => {
//         return n in primesResMap ? primesResMap[n] : (
//             primesResMap[n] = preparePrimes(n),
//             primesResMap[n]
//         );
//     }
// };

// Need to revamp this solution later on in time for finding faster primes... 
// This is still very slow at the moment and needs improvement
// PROBLEM: 204 Count Primes
/**
 * @param {number} n
 * @return {number}
 */
export const countPrimes1 = () => {
    let primesResMap = {
        0: [],
        1: [],
        2: [],
        3: [ 2 ],
        4: [ 2, 3 ],
        5: [ 2, 3 ],
        6: [ 2, 3, 5 ],
        7: [ 2, 3, 5 ],
        8: [ 2, 3, 5, 7 ],
        9: [ 2, 3, 5, 7 ],
        10: [ 2, 3, 5, 7 ]
    };

    const preparePrimes = n => {
        // TODO: 
        // Need to remove this while loop and get this in a for loop so I don't have
        // to generate a large set each time I iterate this can be after I do another problem... 
        // Need to generate range from 2 to n
        let range = fastGenRange(2, n);
        // console.log("range before: ", range);
        let nextRange = [];
        let counter = 0;

        while (counter < range.length - 1) {
            let curVal = range[counter];
            nextRange.push(curVal); 
            range = range.filter(p => p % curVal !== 0);
            // console.log(range);
        }

        // console.log(nextRange);

        return nextRange;
    };
    
    return n => {
        return n in primesResMap ? primesResMap[n].length : (
            primesResMap[n] = preparePrimes(n),
            primesResMap[n].length
        );
    }
};

export const countPrimes = countPrimes1;





const https = require('https');

const findUniqueSubstrings = (str) => {

    const distinct = (value, index, self) => {
        return self.indexOf(value) === index && value.length > 0;
    }

    const arr = [...str].reduce((acc, _, idx) =>
      acc.concat(Array.from({length: str.length}, 
        (_, innerIdx) => str.substring(idx, innerIdx + 1)
      )), []);

    return [ ...arr.filter(distinct) ].sort();
}
  
function maxSubstring(s) {
    let res = findUniqueSubstrings(s);
    return res[res.length - 1];
}

const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
}

// function returns a Promise
export const getPromise = (t, page = 1) => {
  return new Promise((resolve, reject) => {
    https.get(
      `https://jsonmock.hackerrank.com/api/movies/search/?Title=${t}&page=${page}`,
      response => {
        let d = [];

        response.on('data', fragments => {
          d.push(fragments);
        });
        response.on('end', () => {
          let data = Buffer.concat(d) as any;
          resolve(JSON.parse(data));
        });
        response.on('error', error => {
          reject(error);
        });
      }
    );
  });
};

// async function to make http request
export const makeSynchronousRequest = async movie_title => {
  try {
    // maing a req for number of pages
    let response = await getPromise(movie_title) as any;
    let titles = response.data;
    let pageNum = 2;
    let totalPages = response.total_pages;

    while (pageNum <= totalPages) {
        let newRes = await getPromise(movie_title, pageNum) as any;
        titles = [ ...titles, ...newRes.data ];
        pageNum += 1;
    }

    return titles;
  } catch (error) {
    // Promise rejected
    throw new Error(error);
  }
};

// async function to make http request
// Using Promise.all
export const makeSynchronousRequestUsingPromiseAll = async movie_title => {
    try {
      // maing a req for number of pages
      let response = await getPromise(movie_title) as any;
      let titles = response.data;
      let pageNum = 2;
      let totalPages = response.total_pages;

      let promiseList = [];
  
      while (pageNum <= totalPages) {
          let newRes = getPromise(movie_title, pageNum) as any;
          promiseList.push(newRes);
          pageNum += 1;
      }

      let results = await Promise.all(promiseList);
      titles = titles.concat(results.map(r => r.data));
  
      return titles;
    } catch (error) {
      // Promise rejected
      throw new Error(error);
    }
  };

export async function getMovieTitles1(movie_title) {
  const allMovies = await makeSynchronousRequest(movie_title);
  const finalResult = [ ...((allMovies.map(m => m.Title)).sort()) ].reduce((acc, cur) => acc + cur + "\n", "");
  return finalResult;
};

export async function getMovieTitles2(movie_title) {
    const allMovies = await makeSynchronousRequestUsingPromiseAll(movie_title);
    const finalResult = [ ...((allMovies.map(m => m.Title)).sort()) ].reduce((acc, cur) => acc + cur + "\n", "");
    return finalResult;
  };
/*

        PROBLEM: 205. Isomorphic Strings

        Given two strings s and t, determine if they are isomorphic.

        Two strings are isomorphic if the characters in s can be replaced to get t.

        All occurrences of a character must be replaced with another character while preserving 
        the order of characters. No two characters may map to the same character but a character may map to itself.

        Example 1:

        Input: s = "egg", t = "add"
        Output: true
        Example 2:

        Input: s = "foo", t = "bar"
        Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

export const isIsomorphic = (s: string, t: string): boolean => {  
    let mapS = {};
    let mapT = {};

    for (let i = 0; i < s.length; i++) {
        // Need to iterate over string s 
        // and map char in s and assign it to char in string t
        const charS = s[i];
        const charT = t[i];    

        if (charS in mapS) {
            let doesMatch = mapS[charS] === charT;
            if (!doesMatch) { return false; }
        } else {
            if (!(charT in mapT) && !(charS in mapS)) {
                mapS[charS] = charT;
                mapT[charT] = charS;
            } else {
                return false;
            }
        }
    }

    return true;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* Complete working solution on LeetCode. */
export const reverseList = head => {

    const getLastNodeInTree = node => {
        let runner = node;
        let count = 1;
    
        while (runner && runner.next && runner.next !== null) {
            runner = runner.next;
            count++;
        }
    
        return {
            lastNode: runner,
            count
        };
    };
      
    const gettingNthToListNode = (node, howManyToCount) => {
        let counter = 0;
        while (node.next !== null && counter < howManyToCount) {
            node = node.next;
            counter = counter + 1;
        }
    
        return node;
    };

    return () => {
        if (head === null) return head;
        let origHead = head;
        let h = head;
        const { count } = getLastNodeInTree(head);
        let itersToRemove = Math.floor(count / 2);
        let counter = 1;

        while (h.next !== null && counter <= itersToRemove) {
            // Need to get last node
            let howMany = count - counter;
            let endNthNode = gettingNthToListNode(origHead, howMany);

            // Could create a swap function... 
            let hValTemp = h.val;
            h.val = endNthNode.val;
            endNthNode.val = hValTemp;
            counter = counter + 1;
            h = h.next;
        }

        return origHead
    }
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = nums => {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in map) {
            return true;
        } else {
            map[nums[i]] = nums[i];
        }
    }

    return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/*
    Find duplicate number and must be spaced less than or equal to k
    [1, 2, 3, 1] - k = 3, => true
*/
export const containsNearbyDuplicate = (nums, k) => {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (!(val in map)) {
            map[val] = i;
        } else {
            if (i - map[val] <= k) {
                return true;
            } else {
                map[val] = i;
            }
        }
    }

    return false;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;
    
    if (root.left === null && root.right === null) {
        return root;
    } else {
        let leftNode = invertTree(root.left);
        let rightNode = invertTree(root.right);
        
        let temp = root.left;
        
        root.left = root.right;
        root.right = temp;
        
        return root;
    }
};

/**
 * @param {number} n
 * @return {boolean}
 */
export const isPowerOfTwo = () => {
    let map = {
        2: 2,
        4: 4,
        8: 8,
        16: 16,
        32: 32
    };

    let mapArray = [ 2, 4, 8, 16, 32 ];

    const generateNew2ndPower = nn => {
        let maxNumb = mapArray[mapArray.length - 1];

        while (maxNumb <= nn) {
            if (maxNumb === nn) return true;
            maxNumb = maxNumb * 2;
            mapArray.push(maxNumb);
            map[maxNumb] = maxNumb;
        }

        return false;
    };

    return n => {
        if (n === 1) return true;
        return n in map ? true : generateNew2ndPower(n);
    }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// isPalindrome
/*
    Let's iterate through end of linked list
    and push each item to stack
    iterate again and compare each poped item with current with head
    if don't match false if all match true
*/
export const isPalindromeLinkedList = head => { 
    if (head === null) return null;
    let stack = [];
    let runner = head;
    while (runner !== null) {
        stack.push(runner.val);
        runner = runner && runner.next && runner.next;
    }

    runner = head;

    while (runner.next !== null) {
        if (runner.val !== stack.pop()) return false;
        runner = runner.next;
    }

    return true;
};