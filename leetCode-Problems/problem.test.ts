import { longestCommonPrefix, isValid, removeDuplicates, maxSubArray, 
    dynamicFib, plusOne, addBinary, mySqrt, climbStairs, climbStairs2, climbStair2Shell, merge, 
    isSameTree, isSymmetric, levelOrderBottom, generate, 
    maxProfit, convertToTitle, titleToNumber, add, factorialGenerator, trailingZeroes, rotate, reverseBits, rob, solution, countPrimes, getPromise, makeSynchronousRequest, getMovieTitles1, isIsomorphic, containsNearbyDuplicate, isPalindromeLinkedList, getMovieTitles2, getMiddleNode, reverseSecondedHalfOfNodeList, mostEfficentLinkedListIsPalindrone, binaryTreePaths, isUgly, convertIntegerOccurences, moveZeroes, RomanConverter, allPermutationsOfString, allPermutationCounter, 
     } from "./problems";
import { Tree, LinkedList } from "./LeetCodeDataStructures";
import { convertBase, convertBinaryToBase10, prepStrNumbForBase10, shouldAddZero, chunks } from "./problemsHelperLibrary";
import { count } from "console";


describe("leetCode # 14", () => {
    it("demo test", () => {
        expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
        expect(longestCommonPrefix(["dog","racecar","car"])).toBe("");
    });
});

describe("leetCode # 20", () => {
    it("demo test", () => {
        expect(isValid("()")).toBe(true);
    });
});

describe("testing # 26", () => {
    it("dummy test for # 26", () => {
        expect(removeDuplicates([1,1,2,2,3,3])).toBe(3);
    });
});

describe("Testing # 53 maxium subArray: ", () => {
    it("testing : [ −2,  1,  −3,  4,  −1,  2,  1,  −5,  4  ] ", () => {
        expect(maxSubArray([ -2, 1, -3, 4, -1, 2, 1, -5, 4 ])).toBe(6);
        expect(maxSubArray([ -2, -1 ])).toBe(-1);
    });

    it("Testing dyanmic Fib of 40", () => {
        // only using memoization I guess...
        const dynamicFibMemoized = dynamicFib();
        expect(dynamicFibMemoized(50)).toBe(12586269025);
        expect(dynamicFibMemoized(40)).toBe(102334155);
        expect(dynamicFibMemoized(43)).toBe(433494437);
        expect(dynamicFibMemoized(49)).toBe(7778742049);
        expect(dynamicFibMemoized(45)).toBe(1134903170);
    });

    it("PlusOne test recursion solution: ", () => {
        expect(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toStrictEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);
        expect(plusOne([9])).toStrictEqual([1, 0]);
        expect(plusOne([9, 9])).toStrictEqual([1, 0, 0]);
        expect(plusOne([9, 9, 9])).toStrictEqual([1, 0, 0, 0]);
    });
});


describe("Testing Add Binary. 67 ", () => {
    it("11 + 1 = '100'", () => {
        expect(addBinary("11", "1")).toBe("100");
        expect(addBinary("1010", "1011")).toBe("10101");
    });
});

describe("Testing Sqrt(x) 69: ", () => {
    let mysqrt;
    beforeAll(() => {
        mysqrt = mySqrt();
    });

    it("Input 4, output 2", () => {
        expect(mysqrt(4)).toEqual(2);
    });

    it("Input 8, output 2", () => {
        expect(mysqrt(8)).toEqual(2);
    });
});

describe("Climbing Stairs 70: ", () => {
    it("dummby test", () => {
        expect(climbStairs(2)).toBe(2);
        expect(climbStairs(3)).toBe(3);
    });

    it("dummby test 2", () => {
        expect(climbStair2Shell(2)).toBe(2);
        expect(climbStair2Shell(3)).toBe(3);
    });

    it("Merge Sorted Array: ", () => {
        let nums1 = [ 1, 2, 3, 0, 0, 0 ];
        let nums2 = [ 2, 5, 6 ];

        merge(nums1, 3, nums2, 3);

        expect(nums1).toStrictEqual([ 1, 2, 2, 3, 5, 6]);
    });

    it("Merge sort array uneven sets: ", () => {
        let nums1 = [ 2, 0 ];
        let nums2 = [ 1 ];

        merge(nums1, 1, nums2, 1);

        expect(nums1).toStrictEqual([ 1, 2 ]);
    });

    it("Last failing test in LeetCode: ", () => {
        let nums1 = [-12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        let nums2 = [-49,-45,-42,-41,-40,-39,-39,-39,-38,-36,-34,-34,-33,-33,-32,-31,-29,-28,-26,-26,
            -24,-21,-20,-20,-18,-16,-16,-14,-11,-7,-6,-5,-4,-4,-3,-3,-2,-2,-1,0,0,0,2,2,6,7,7,8,10,
            10,13,13,15,15,16,17,17,19,19,20,20,20,21,21,22,22,24,24,25,26,27,
            29,30,30,30,35,36,36,36,37,39,40,41,42,45,46,46,46,47,48];

        let result = [ -49,-45,-42,-41,-40,-39,-39,-39,-38,-36,-34,-34,-33,-33,-32,-31,-29,
            -28,-26,-26,-24,-21,-20,-20,-18,-16,-16,-14,-12,
            -11,-7,-6,-5,-4,-4,-3,-3,-2,-2,-1,0,0,0,2,2,6,7,7,8,10,10,13,13,15,15,16,17,
            17,19,19,20,20,20,21,21,22,22,24,24,25,26,27,
            29,30,30,30,35,36,36,36,37,39,40,41,42,45,46,46,46,47,48 ];

        merge(nums1, 1, nums2, 90);

        expect(nums1).toStrictEqual(result);

    });
});


describe("LeetCode: 100. Same Tree, and LeetCode problem 101.", () => {
    const nodesToAdd = [ 1, 2, 3, 4, 5, 6, 7 ];
    it("Test Tree iterate everything and add method", () => {
        const tree = new Tree();

        nodesToAdd.forEach(n => tree.Add(n));

        // tree.iterateThroughTreeLeftToRight();

        expect(true).toBe(true);
    });

    it("Testing two same trees: ", () => {
        const tree1 = new Tree();
        const tree2 = new Tree();

        nodesToAdd.forEach(n => {
            tree1.Add(n);
            tree2.Add(n);
        });

        expect(isSameTree(tree1.head, tree2.head)).toBe(true);
    });

    it("Testing two different trees: ", () => {
        const tree1 = new Tree();
        const tree2 = new Tree();

        nodesToAdd.forEach(n => tree1.Add(n));

        [ 1, 2, 3, 4, 5 ].forEach(n => tree2.Add(n));

        expect(isSameTree(tree1.head, tree2.head)).toBe(false);
    });

    it("104. Maxium depth tree: ", () => {
        const inputs = [ 3, 9, 20, 15, 7 ];
        const tree = new Tree();
        inputs.forEach(n => tree.Add(n));
        const res = tree.iterateThroughTreeLeftToRight();
        // console.log("Max Level: ", res);
        expect(true).toBe(true);
    });

    it("107. Binary Tree Level Order Traversal II", () => {
        const inputs = [ 3, 9, 20, 15, 7 ];
        const tree = new Tree();
        inputs.forEach(n => tree.Add(n));
        levelOrderBottom(tree.head);
        expect(true).toBe(true);
    });
});

describe("118. Pascal's Triangle: ", () => {
    it("returning 5th row test should not run or calc: ", () => {
        expect(generate(5)).toStrictEqual( [1,4,6,4,1]);
    });

    it("returning 6th row test should calc this row and then memoize it: ", () => {
        expect(generate(6)).toStrictEqual(
            [1, 5, 10, 10, 5, 1]
        );
    });
});

describe("121. Best Time to Buy and Sell Stock: ", () => {
    it("Input: [7,1,5,3,6,4] -> output should be 5", () => {
        expect(maxProfit([7,1,5,3,6,4])).toBe(5);
        expect(maxProfit([1,2])).toBe(1);
    });
}); 

describe("168. Excel Column Title: ", () => {
    it("Testing lower than and equal to 26: ", () => {
        // Harder versions here...
        expect(convertToTitle(27)).toBe("AA");
        expect(convertToTitle(28)).toBe("AB");
        // Hardest versions here...
        expect(convertToTitle(701)).toBe("ZY");
        // Mega hard versions here...
        expect(convertToTitle(1500)).toBe("BER");
        expect(convertToTitle(2168)).toBe("CEJ");
        // Tests failed in LeetCode 
        expect(convertToTitle(52)).toBe("AZ");
     });
});

describe("171. Excel Sheet Column Number: ", () => {
    it("First easy test cases: ", () => {
        expect(titleToNumber("A")).toBe(1);
        expect(titleToNumber("B")).toBe(2);
        expect(titleToNumber("Z")).toBe(26);
        expect(titleToNumber("AA")).toBe(27);
        expect(titleToNumber("AB")).toBe(28);
    });
});

describe("Factorial trailing zeros...: ", () => {
    it("Testing add function which is a helper function for this problem: ", () => {
        expect(add("20", "20")).toBe("40");
        expect(add("34", "9")).toBe("43");
        expect(add("1307674368000", "1307674368000")).toBe("2615348736000");
        expect(add("10461394944000", "2615348736000")).toBe("13076743680000");
        expect(add("10461394944000", "1")).toBe("10461394944001");
        expect(add("1", "10461394944000")).toBe("10461394944001");
        expect(add("10", "10")).toBe("20");
        expect(add("999", "1")).toBe("1000");

    }); // I'm thinking add is functioning... 

    it("Testing factorial function.... : ", () => {
        const res1 = factorialGenerator(5);
        // console.log("res1: ", res1);
        expect(res1).toBe("120");
        const res2 = factorialGenerator(15);
        // console.log("res2: ", res2);
        expect(res2).toBe("1307674368000");
        const res3 = factorialGenerator(20);
        // console.log("res3: ", res3);
        expect(res3).toBe("2432902008176640000");
    });

    it("testing trailing zeros: ", () => {
        expect(trailingZeroes(5)).toBe(1);
        expect(trailingZeroes(20)).toBe(4);
    });
});

describe("189. Rotate Array: ", () => {
    it("Example 1", () => {
        expect(rotate([1,2,3,4,5,6,7], 3)).toStrictEqual([5,6,7,1,2,3,4]);
        expect(rotate([-1,-100,3,99], 2)).toStrictEqual([3,99,-1,-100]);
    });
});

describe("Testing library base function for multiple bases: ", () => {
    it("Base 2: ", () => {

        // recieved: "10100101000001111010011100"
        /*
            Need to check binary when converted to base 10 equals input

            If not then add zero 

            Check again

            Do this 6 times
        */
        // should be: "00000010100101000001111010011100"

        let orig = "10100101000001111010011100";
        let should = "00000010100101000001111010011100";
        let testRes = convertBinaryToBase10(orig);
        let counter = 0;

        while (testRes !== 43261596 && counter++ < 6) {
            orig = "0" + orig;
            testRes = convertBinaryToBase10(orig);
        }

        // console.log(
        //     orig
        // );

        // console.log(
        //     orig === should
        // );

        expect(convertBase(43261596, 2))
        .toBe("10100101000001111010011100");

        expect(shouldAddZero(43261596, 2)).toBe(should);
    });

    it("Binary to Decimal: ", () => {
        const res = convertBinaryToBase10("00111001011110000010100101000000".split("").reverse().join("")) / 2;
        expect(res).toBe(964176192);
    });

    it("Binary to Deciaml another test: ", () => {
        const res = convertBinaryToBase10("00000010100101000001111010011100".split("").reverse().join("")) / 2;
        expect(res).toBe(43261596);
    });

    it("Reversed works?: ", () => {
        expect(reverseBits(43261596)).toBe(964176192);
    });
});

describe("198. House Robber and testing Chunk: ", () => {
    let testArr1 = [ 1, 2, 3, 1 ];
    let testArr2 = [ 2, 7, 9, 3, 1 ];
    it("Testing chunk: ", () => {
        const res = chunks(testArr1, 2);
        // console.log("result: ", res);
        expect(res).toStrictEqual(
            [[1, 2], [ 3, 1 ]]
        );
    });

    // it("Testing House Robber 2 cases: ", () => {
    //     expect(rob(testArr1)).toBe(4);
    //     expect(rob(testArr2)).toBe(12);
    // });

    it("Testing task 2: ", () => {
        let s = "ABBBCCDDCCC";
        solution(s, 3);
        expect(true).toBeTruthy();
    });
});

// describe("204. Count Primes: ", () => {
//     it("Testing 10 -> 4", () => {
//         let primer = countPrimes();
//         // expect(primer(10)).toBe(4);
//         // // expect(primer(15)).toBe(6);
//         // // expect(primer(25)).toBe(9);
//         // expect(primer(11)).toBe(4);
//         // expect(primer(12)).toBe(5);
//         expect(primer(13)).toBe(5);
//     });
// });

describe("Testing new interview question... : ", () => {
    it("Test promise: ", async () => {
        // let testPromise = await getPromise("batman", 1);
        // console.log(testPromise);

        // let testPromise2 = await makeSynchronousRequest("spiderman");
        // console.log(testPromise2);

        let testPromise3 = await getMovieTitles1("spiderman");
        
        // log testPromise3
        // console.log(
        //     testPromise3
        // );

        let testPromise4 = await getMovieTitles2("spiderman");

        // console.log(
        //     testPromise4
        // );

        expect(true).toBeTruthy();
    });
});

describe(" Testing primes until n: ", () => {
    it("Testing 10 -> 4: ", () => {
        let primer = countPrimes();
        expect(primer(10)).toBe(4);
        expect(primer(11)).toBe(4);
    });
});

describe("isIsomorphic 205 leetcode problem: ", () => {
    it("egg and add: ", () => {
        expect(isIsomorphic("egg", "add")).toBe(true);
    });

    it("foo and bar: ", () => {
        expect(isIsomorphic("foo", "bar")).toBe(false);
    });

    it("ab and aa", () => {
        expect(isIsomorphic("ab", "aa")).toBe(false);
    });

    it("ab and ca: ", () => {
        expect(isIsomorphic("ab", "ca")).toBe(true);
    });
});

describe("219. Contains Duplicate II: ", () => {
    it("nums = [1,2,3,1,2,3] k = 2", () => {
        expect(containsNearbyDuplicate([ 1, 2, 3, 1, 2, 3 ], 2)).toBe(false);
    });
});


describe("Testing LinkedList: ", () => {
    it("Adding to front: ", () => {
        // let a = [ 1, 2, 3 ];
        // let list = new LinkedList();
        // a.forEach(i => list.addToBack(i));
        // list.interateAndLogEachValue();
        expect(true).toBeTruthy();
    });

    it("Is LinkedList palindrome?: ", () => {
        let a = [ 1, 2, 2, 1 ];
        let list = new LinkedList();
        a.forEach(i => list.addToBack(i));
        expect(isPalindromeLinkedList(list.head)).toBe(true);
        expect(true).toBeTruthy();
    });

    it("Get middle node for LinkedList: ", () => {
        let aa = [ 1, 2, 5, 2, 1 ];
        let list = new LinkedList();
        aa.forEach(i => list.addToBack(i));
        let result = getMiddleNode(list.head);
        // console.log(result);
        expect(result.value).toBe(5);
    });

    it("Reverse seconded half of LinkedList: ", () => {
        let a = [ 1, 2, 5, 2, 1 ];
        let shouldBeResult = [ 1, 2, 5 ]; // get middle node and reverse.
        let list = new LinkedList();
        a.forEach(i => list.addToBack(i));
        let result = reverseSecondedHalfOfNodeList(list.head);

        let runner = result;
        let finalResult  = [];
        while (runner !== null) {
            finalResult.push(runner.value);
            runner = runner.next;
        }

        expect(shouldBeResult).toStrictEqual(finalResult);
    });

    it("Get middle node for LinkedList: even values", () => {
        let aa = [ 1, 2, 2, 1 ];
        let list = new LinkedList();
        aa.forEach(i => list.addToBack(i));
        let result = getMiddleNode(list.head);
        // console.log(result);
        expect(result.value).toBe(2);
    });

    it("Is LinkedList palindrome?: true ", () => {
        let aa = [ 1, 2, 2, 1 ];
        let list = new LinkedList();
        aa.forEach(i => list.addToBack(i));
        expect(mostEfficentLinkedListIsPalindrone(list.head)).toBe(true);
    });

    it("Is LinkedList palindrome?: false ", () => {
        let aa = [ 1, 2, 6, 2, 5 ];
        let list = new LinkedList();
        aa.forEach(i => list.addToBack(i));
        expect(mostEfficentLinkedListIsPalindrone(list.head)).toBe(false);
    });
});

describe("All paths in binary tree to last leaf: ", () => {
    it("all paths test 1", () => {
        let a = [ 3, 2, 4, 1 ];
        let tree = new Tree();
        a.forEach(i => tree.Add(i));

        // console.log(
        //     tree
        // );

        binaryTreePaths()(tree.head);

        expect(true).toBeTruthy();
    });
});


describe("Testing is Ugly: ", () => {
    it("Testing is ugly 6: true. ", () => {
        expect(isUgly(6)).toBeTruthy();
        expect(isUgly(8)).toBeTruthy();
    });
});

describe("Testing occurences in array: ", () => {
    it("test [ 1, 1, 2, 2, 2, 5 ] -> {1: 2, 2: 3, 5: 1}", () => {
        const arr = [ 1, 1, 2, 2, 2, 5 ];
        const result = convertIntegerOccurences(arr);
        // console.log(result);
        expect(true).toBeTruthy(); // I'm just looking for the logging right now... 
    });
});

describe("Testing pushing zeros to array: ", () => {
    it("test 1: ", () => {
        let a = [ 0, 1, 0, 3, 12 ];
        let b = [ 1, 3, 12, 0, 0 ];
        expect(moveZeroes(a)).toStrictEqual(b);
    });
});

describe("Roman class helper: ", () => {

    it("roman string to integer tests: ", () => {
        const romanToInHelper = new RomanConverter();
        expect(romanToInHelper.romanToInt("DCCC")).toBe(800);
        expect(romanToInHelper.romanToInt("DCCCI")).toBe(801);
        expect(romanToInHelper.romanToInt("MMCCXXV")).toBe(2225);
        expect(romanToInHelper.romanToInt("XXV")).toBe(25);
        expect(romanToInHelper.romanToInt("XLVIII")).toBe(48);
    });

    it("Integer to Roman numeral tests: ", () => {
        const romanHelperClass = new RomanConverter();
        const expectGenerator = (input, result) => expect(romanHelperClass.intToRoman(input)).toBe(result);

        expect(romanHelperClass.intToRoman(25)).toBe("XXV");
        expectGenerator(125, "CXXV");
        expectGenerator(125, "CXXV");
        expectGenerator(1255, "MCCLV");
        expectGenerator(39, "XXXIX");
        expectGenerator(99, "XCIX");
    });
});

describe("All permutations tester: ", () => {
    // it("first dummy test: ", () => {
    //     allPermutationsOfString("abc");
    //     expect(true).toBeTruthy();
    // }); Just for dummy logging.
    
    const expectGenerator = (input, result): void => {
        expect(allPermutationsOfString(input).sort()).toStrictEqual(result.sort());
    };

    const testAllPermutationCounter = (input, result): void => {
        expect(allPermutationCounter(input)).toBe(result);
    };

    it("testing abc, all permutations should be 6 and same: ", () => {
        let input = "abc";
        let result = [ "abc", "acb", "cab", "cba", "bca", "bac" ];
        expectGenerator(input, result); // first test here... 
    });

    it("All permutations for Mark: -> ", () => {
        let input = "mark";
        let result = [ 
                "MARK", "AMRK",  "RMAK", "MRAK", "ARMK", "RAMK", "KAMR",
                "AKMR", "MKAR", "KMAR", "AMKR", "MAKR", "MRKA", "RMKA", "KMRA",
                "MKRA", "RKMA", "KRMA", "KRAM", "RKAM", "AKRM", "KARM", "RAKM", "ARKM" 
        ]
        .map(str => str.toLowerCase()).sort();

        expectGenerator(input, result);
        testAllPermutationCounter(input, result.length);
    });

    // it("All permutations for: diction -> ", () => {

    //     const chunkHelper = (str: string, chunk: number): string[][] => {
    //         return str.split("").reduce((acc, cur, idx) => {
    //             const currentItem = cur;
    //             const chunkInner = Math.floor(idx / chunk);
    //             acc[chunkInner] = (acc[chunkInner] || []).concat(currentItem);
    //             return acc;
    //         }, []);
    //     };

    //     const flattenChunk = (strArr: string[]) => strArr.join("").toLowerCase();


    // }); will get Don't need 
});
