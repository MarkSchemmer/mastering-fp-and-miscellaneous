import { longestCommonPrefix, isValid, removeDuplicates, maxSubArray, 
    dynamicFib, plusOne, addBinary, mySqrt, climbStairs, climbStairs2, climbStair2Shell, merge, isSameTree, isSymmetric, levelOrderBottom, generate, maxProfit } from "./problems";
import { Tree } from "./LeetCodeDataStructures";


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
