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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
    const hasPath = (node, count, storage) => {    
        if (node !==  null) {

            count += node.val;

            storage.push((count === targetSum && node.left === null && node.right === null));

            if (node.left)
                hasPath(node.left, count, storage);

            if (node.right)
                hasPath(node.right, count, storage);

            return storage; 
        }
    };

    if (root === null) {
        return false; 
    }

    let results = hasPath(root, 0, []);

    return results.some(i => i === true);
};
// should do minDepth but in an iterative solution. 
// could be fun. 
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
const minDepth = root => {

    const getDepth = (node, count, storage) => {
        if (node.left === null && node.right === null)
            storage.push(count);
        if (node.left)
            getDepth(node.left, count+1, storage);
        if (node.right)
            getDepth(node.right, count+1, storage);
        return storage;
    };
    
    if (root === null) 
        return 0;

    if ((root.left === null && root.right === null))
        return 1;

    let storage =  getDepth(root, 1, []);

    return Math.min(...storage);
};
// Need to note the difference between height and depth. 
// also the difference between a balacned tree and just comparing the depth of it. 
// some nuanced takes. 
// Implement height but iterativly?
// going to implement this using recursion and then using
// the iterative solution. 
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
 * @return {boolean}
 */
// recursion solution
const isBalanced = root => {
    if (root === null) return true;
    // Note a balanced binary tree can't
    // differ more than 1... on the left side and on the right side.
    const balanced = node => {
        if (node === null)
            return true;

        let lh = height(node.left);
        let rh = height(node.right);

        if (Math.abs(lh - rh) <= 1 && balanced(node.left) && balanced(node.right)) {
            return true;
        }
    
        return false;
    };

    const height = node => {
        if (node === null) 
            return 0;

        return Math.max(height(node.left), height(node.right)) + 1;
    };

    return balanced(root);
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
};
/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicatesUseStack = s => {
    let st = s.split("");
    let other = [ st.shift() ];

    while (st.length > 0) {
        let temp = st[0];
        let c = other[0];

        if (temp === c) {
            st.shift();
            other.shift();
        } 
        else {
            other.unshift(st.shift());
        }
    }

    return other.reverse().join("");
};
// For tomorrow do problem 1084 adjacent letters but use a stack. 
// problem -> given a string conists of lower case letters remove any adjacent duplicate letters. 
// bannana -> baana -> bna
// problem 1084 from leetcode. -> use a stack solution for 
// we iterate through the array 1 time instead of using recursion.
const removeDupAjacent = s => {
    s = s.split("");
    for (let i = 1; i < s.length - 1; i++) {
        let prev = s[i-1];
        let cur = s[i];

        if (prev === cur) {
            let firstHalf = s.slice(0, i-1);
            let secondedHalf = s.slice(i+1, s.length);
            return removeDupAjacent([...firstHalf, ...secondedHalf].join(""));
        }
    }

    return s.join("");
}
// const removeDupAjacent = s => {
//     let ar = s.split("");
//     let stack = [];
//     let loopAgain = false;
//     let i = 0, j = 1;
//     while (loopAgain) {
//         while (j < ar.length - 1) {
//             let cur = ar[i];
//             let next = ar[j];

//             if (cur === next) {
//                 loopAgain = true;
//                 i = i + 1;
//                 j = j + 1;

//             } else {
//                 stack.push(cur);
//             }

//             i = i + 1;
//             j = j + 1; 
//         }

//         ar = stack;
//         stack = [];
//     }

//     return stack.join("");
// }
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
/*
    Some notes on recursion... 

    if root is null return 0;

    get the max depth of the side which and get max subtree of the right side

    then compare liks so l > r then add 1 for each comparision. 

*/
const maxDepthRecursion = root => {
    if (root === null) return 0; 

    let l = maxDepthRecursion(root.left);
    let r = maxDepthRecursion(root.right);

    if (l > r)
        return l + 1;
    else
        return r + 1;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// implement using recursion, then also implement iteratively... 
// both solutions will be interesting to try and understand on how to reason on... 
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = root => {

    if (root === null) return 0;

    let depth = 0;
    let q = [ root, null ];

    while (q.length > 0) {
        let temp = q.shift();

        if (temp === null)
            depth++;

        if (temp !== null) {

            if (temp.left)
                q.push(temp.left);

            if (temp.right) 
                q.push(temp.right);

        } else if (q.length > 0)
            q.push(null);
    }

    return depth;
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
 * @return {boolean}
 */
var isSymmetric = root => {
    const isNullOrUndefined = v => v === null || v === undefined;
    let leftSide = root.left;
    let rightSide = root.right;
    const isSameTree = (p, q) => {
        if (isNullOrUndefined(p) && isNullOrUndefined(q)) { return true; }

        if (!isNullOrUndefined(p) && !isNullOrUndefined(q)) {
            return p.val === q.val && isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
        }

        return false;
    }

    return isSameTree(leftSide, rightSide);
};
// A good idea is to do an iterative solution as well... 
// will write that up for tomorrow.  
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
const isNullOrUndefined = v => v === null || v === undefined;

const isSameTree = (p, q) => {

   if (isNullOrUndefined(p) && isNullOrUndefined(q)) {return true;}

    if (!isNullOrUndefined(p) && !isNullOrUndefined(q)) {
        return p.val === q.val && isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right);
    }

   return false;
};
/* 

    Algorithm for Iterative Inorder Traversal:

    Create an empty stack treeStack.

    Initialize currentNode as root.

    Push the currentNode to treeStack and set 
    currentNode = currentNode->left until current is NULL

    If currentNode is NULL and treeStack is not empty then a) 
    Pop the top element from treeStack. b) Print the popped element, 
    set currentNode = popped element->right c) Go to step 3.

    If currentNode is NULL and treeStack is empty then we are done.

    Let's see with an example and understand 
    step by step how the iterative inorder traversal works:

    Consider the following binary tree:

*/ 
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
 * @return {number[]}
 */
const inorderTraversal = root => {
    if (root === null) { return []; }
    if (root && root.left === null && root.right === null) { return [ root.val ]; }

    let inOrderSet = [];
    let stack = []; 
    let currentNode = root;

    while (currentNode !== null || stack.length > 0) {
        if (currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        } else if (currentNode === null) {
            const top = stack[stack.length - 1];
            stack = stack.slice(0, -1);
            inOrderSet.push(top.val);
            currentNode = top.right;
        }
    }

    return inOrderSet;
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
    let temp = nums1.slice(0, m);
    let sorted = [...temp, ...nums2].sort((a, b) => a - b);

    sorted.forEach((v, i) => {
        nums1[i] = v;
    });  
};
let fibSequence = [0, 1, 1, 2, 3, 5, 8];
const genFibonacciSequence = n => {
    if (fibSequence[n+1]) return fibSequence[n+1];
    let len = fibSequence.length - 1;
    while (len <= n + 1) {
        let last = fibSequence[len];
        let lastLast = fibSequence[len - 1];
        let next = last + lastLast;
        fibSequence[fibSequence.length] = next;

        len = fibSequence.length - 1;
    }

    return fibSequence[n+1];
}

const fibRows = [
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1]
    [1, 4, 6, 4, 1]
];



const genFibonaic = n => {
    if (fibRows[n]) {
        return fibRows[n].reduce((acc, cur) => acc + cur, 0);
    }

    let from = fibRows.length;

    for (let i = from; i <= n; i++) {
        let lastRow = fibRows[fibRows.length - 1];
        let newRow = [];
        for (let j = 0, k = 1; k < lastRow.length; j++, k++) {
            let n = lastRow[j] + lastRow[k];
            newRow.push(n);
        }

        fibRows.push([1, ...newRow, 1 ]);
    }

    return fibRows[n].reduce((acc, cur) => acc + cur, 0);
};

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(numb) {
    if (numb === 0) { return 0; }
    if (numb === 1) {return 1; }
    if (numb === 2) { return 1;}
    if (numb === 3) { return 1; }

    let x = 2;
    let sum = x * x;

    while (sum < numb) {
        x = x + 1;
        sum = x * x;
        if (x*x === numb) { return x; }
        if (x * x > numb) { return x-1; }
    }

    return x;
};
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// trim front of all leading zeros.
const addBinary = (a, b) => {
    let result = "";
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0; 

    while (i >= 0 || j >= 0 || carry > 0) {

        const x = parseInt(a[i]) || 0;
        const y = parseInt(b[j]) || 0;
        const z = x + y + carry;

        // decrementing
        --i;
        --j;


        result = z === 3 || z === 1 ? 1 + result : 0 + result;
        carry = z < 2 ? 0 : 1;
    }

    return result;
};
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
    const digsToNumb = numbAr => {
        return BigInt(numbAr.reduce((acc, cur) => acc + cur.toString(), ""));
    }

    const numbToArray = numb => {
        return numb.toString().split("").map(n => parseInt(n));
    }

    let numb = digsToNumb(digits);
    let n = numb + 1n;
    return numbToArray(n);
};
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => {
    let words = s.split(" ").filter(ss => ss.length > 0);
    let lastWord = words[words.length - 1];
    return lastWord.length;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    
    const binarySearch = (tgt, start, end) => {
        if (tgt > nums[end]) { return end+1;}
        if (tgt < nums[start]) {return start;}

        let middle = Math.floor( (end + start) / 2);

        if (nums[middle] === tgt || start > end) { return middle; }

        return tgt > nums[middle] 
            ? binarySearch(tgt, middle+1, end) 
            : binarySearch(tgt, start, middle-1);
    };

    return binarySearch(target, 0, nums.length-1);
};
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