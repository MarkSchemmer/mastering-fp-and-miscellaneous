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

// need to make a function that determines if the # is a palindrome
// isPalindrome
// Need a method that generates a # of the given length... 
// gen # number length
// determine the range 
// get all palindromes and store them in a 
export const kthPalindrome = (queries, intLength) => {
    const isPalindrome = (numb, even, m) => {
        let n = numb.toString();
        m = isEven ? m : m - 1;
        for (let s = m-1, e = m; s > 0 && e < n.length; s--, e++) {
            if (n[s] !== n[e]) return false;
        }

        return true;
    }
    
    const genBaseNumb = (n) => {
        let numb = 1;
        let counter = 1;
        while (counter++ < n)
            numb = numb * 10;

        return numb;
    };

    let palindromes = [];
    let start = genBaseNumb(intLength);
    let end = start * 10;
    let isEven = intLength % 2 === 0;
    let mid = Math.floor(intLength / 2);

    for(let i = start; i < end; i++) {
        if (isPalindrome(i, isEven, mid))
            palindromes.push(i);
    }

    return queries.map(x => palindromes[x-1] || -1);
};

export const kthPalindromeV2 = (queries, intLength) => {
    let midBase = Math.floor((intLength + 1) / 2);
    let maxBase = Math.pow(10, midBase) - 1;
    let minBase = Math.pow(10, midBase - 1);
    let amountOfPalindromes = maxBase - minBase + 1;

    return queries.map(x => {
        if (x > amountOfPalindromes) return -1 
        let newBase = minBase + x - 1;
        let isEven = intLength % 2 === 0 ? 0 : 1;
        let reversedHalf = newBase.toString().split('').slice(0, newBase.toString().length - isEven).reverse().join('');
        // console.log(reversedHalf)
        return parseFloat(newBase + reversedHalf);
    })
}

// fizzbuzz problem 412. 
export const fizzBuzz = n => Array.from({ length: n }, (_, idx) => idx + 1)
                .map(
                    (idx) => idx % 15 === 0 ? "FizzBuzz" : idx % 5 === 0 ? "Buzz": idx % 3 === 0 ? "Fizz" : (idx).toString()
                )

// problem - 2677
export const chunk = (arr, size) => arr.reduce((acc, cur, idx) => {
    const index = Math.floor(idx / size);
    acc[index] ? (acc[index].push(cur)) : acc[index] = [ cur ];
    return acc; 
}, []);   

const reverseVowels = (s) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const strWithoutVowels = s.split('').map(c => vowels.includes(c.toLowerCase()) ? null : c)
    const reversedOrderOfVowels = s.split('').filter(c => vowels.includes(c.toLowerCase())).reverse()

    const newStr = strWithoutVowels.map((c) => {
        if (c === null) {
            const v = reversedOrderOfVowels.shift();
            return v;
        } else {
            return c;
        }
    }).join('');

    return newStr;
};

// Problem - 242. Valid Anagram
export const isAnagram = (s, t) => {
    if (s.length === 1 && s === t) return true;
    if (s === t) return false;
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    return s === t;
};