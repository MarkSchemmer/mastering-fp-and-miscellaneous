import { longestCommonPrefix, isValid, removeDuplicates, maxSubArray, 
    dynamicFib, plusOne, addBinary, mySqrt, climbStairs, climbStairs2, climbStair2Shell, merge, 
    isSameTree, isSymmetric, levelOrderBottom, generate, 
    maxProfit, convertToTitle, titleToNumber, add, factorialGenerator, trailingZeroes, rotate, 
     } from "./problems";
import { Tree } from "./LeetCodeDataStructures";
import { convertBase, convertBinaryToBase10 } from "./problemsHelperLibrary";


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
        console.log("res1: ", res1);
        expect(res1).toBe("120");
        const res2 = factorialGenerator(15);
        console.log("res2: ", res2);
        expect(res2).toBe("1307674368000");
        const res3 = factorialGenerator(20);
        console.log("res3: ", res3);
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

// describe("Testing library base function for multiple bases: ", () => {
//     // it("Base 2: ", () => {
//     //     expect(convertBase(43261596, 2))
//     //     .toBe("00000010100101000001111010011100");
//     // });

//     it("Binary to Decimal: ", () => {
//         expect(convertBinaryToBase10("00111001011110000010100101000000")).toBe(964176192);
//     });
// });