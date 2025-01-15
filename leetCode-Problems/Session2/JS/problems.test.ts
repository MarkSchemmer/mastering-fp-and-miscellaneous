import { isPowerOfTwo, majorityElement, singleNumber } from "./problems_type";
import { SingleLinkedList, Node } from "./SingleLinkedList";

describe("dummy test", () => {
    it("dummy", () => {
        expect(1).toBe(1);
    });
});

describe("single number [Problem : 136]", () => {
    it("test 1", () => {
        expect(singleNumber([2, 2, 1])).toBe(1);
    });
});

describe("has cyle [Problem : 141]", () => {
    it("test 1", () => {
        const list = new SingleLinkedList();
        const n1 = new Node(0);
        const n2 = new Node(1);
        const n3 = new Node(2);
        const n4 = new Node(3);

        n1.next = n2;
        n2.next = n3;
        n3.next = n4;
        n4.next = n2; // coding in the cycle here... 

        expect(list.hasCycle(n1)).toBeTruthy();
    })
});

describe("majority number [Problem - 169]", () => {
    it("Test 1", () => {
        expect(majorityElement([2, 2, 1])).toBe(2);
    });
});

describe("is Power of 2 [Problem - 231]", () => {
    it("Test 1", () => {
        expect(isPowerOfTwo(1)).toBeTruthy();
        expect(isPowerOfTwo(16)).toBeTruthy();
        expect(isPowerOfTwo(3)).toBeFalsy();
    });
});