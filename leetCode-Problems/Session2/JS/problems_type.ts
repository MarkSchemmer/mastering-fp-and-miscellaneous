/**
 * - problem 136 -
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = (nums: number[]) => {
    if (nums.length === 1) return nums[0];
    
    const repeatDictionary = nums.reduce((acc, cur) => {
        if (cur in acc) { acc[cur] = acc[cur] += 1; } else { acc[cur] = 0; }
        return acc;
    }, {});

    const [k, v] = Object.entries(repeatDictionary).filter(([key, val]) => val === 0)[0];

    return parseInt(k);
};

/**
 * Problem 169 - Majority number
* @param {number[]} nums
* @return {number}
*/
export const majorityElement = (nums) => {
   const pairs = nums.reduce((a, c) => c in a ? (a[c]+=1,a) : (a[c] = 0,a), {});
   const [k, v] = (Object.entries(pairs).sort((a:any, b:any) => b[1] - a[1]))[0];
   return parseInt(k);
}

const reverseList = (head:any) => {
    let newList = null;
    let current = head;

    while (current) {
        let nextNode = current.next; // create the next node..

        current.next = newList; // assigns the next pointer to newList

        newList = current; // makes newList equal to current
        
        // last step assign current to next node
        current = nextNode;

    }

    return newList;
}

// Problem 217 -> passed. 
export const containsDuplicate = (nums:any[]) => {
    return Array.from(new Set(nums)).length === nums.length;
};

/**
 * @param {number} n
 * @return {boolean}
 */
export const isPowerOfTwo = (() => {
    const cache = {
        0: 1,
        1: 2
    };

    const isPower = (n) => {
        let res = 2;
        while (res < n) {
            res = res * 2;
        }

        return res;
    }
    
    return (n) => {
        if (n in cache) return true;
        let result = isPower(n);
        return result === n ? (cache[n] = result, true) : false
    };
})();

// Note do power of 3 and power of 4 but make a generic function for it... 
// and optimize that function moving forward
// modify this function above in next coding session
/*
        1. change the if statement, if n < power then is false
        2. assign n to cache then true or false value and lookup from there. 
        3. make generic for all powers 
        4. optimize... 
*/ 

export const genericIsPower = (power) => {
    const cache = {
        1: true
    };

    const isPower = (n) => {
        let res = power;
        
        while (res < n) {
            res = res * power;
        }

        return res;
    }
    
    return (n) => {
        if (n in cache) return cache[n];
        if (n < power) return false;
        let result = isPower(n);
        cache[n] = result === n;
        return cache[n];
    };
};

// Next problem to solve = https://leetcode.com/problems/palindrome-number/description/
// isPalindrome

// Problem 9.
// string manipulation
export const isPalindromeHelper = () => { 
    
    const reverseNumb = (n) => {
        return parseInt([ ...n.toString().split('') ].reverse().join(''));
    }

    return {
        stringMethodPalindrome: (n) => {
            n = n < 0 ? n * - 1 : n;
            const reversedNumb = reverseNumb(n);
            return n === reversedNumb;
        },
        MathPalindrome: (n) => {
            if (n < 0) return false;
           
            let temp = n;
            let strNumb = "";

           
            while (temp > 0) {
                // get the last number
                let lastNumb = temp % 10;
                // decrement the counter
                temp = Math.floor(temp / 10);
                // concatenate the 
                strNumb += lastNumb;
            }

            const reversed = parseInt(strNumb);
            return reversed === n;
        }
    }
}