import { validBraces, validBracesV2, listIntersect, naiveExponetiationRec, naiveExponetiationIter, optimizedExponetiationIter, optimizedExponetiationRec, naiveGcdIter, optimizedGcdIter } from "./problems";

class Node {
    public value;
    public next;
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

describe("Interview question for valid braces version 1 ", () => {
    const str1 = "{{{[]}}}"; // true
    const str2 = "(){}[][[]](({{[[]]}}))"; // true
    const str3 = "{}{{{{))))}" // false
    it("Does v1 work? ", () => {
        expect(validBraces(str1)).toBe(true);
        expect(validBraces(str2)).toBe(true);
        expect(validBraces(str3)).toBe(false);
    });

    it("Does v2 work properly? ", () => {
        expect(validBracesV2(str1)).toBe(true);
        expect(validBracesV2(str2)).toBe(true);
        expect(validBracesV2(str3)).toBe(false);
    });

    it("Testing of does nodes intersect work properly...", () => {
        const n1 = new Node(1);
        const n2 = new Node(2);
        const n3 = new Node(3);
        const n4 = new Node(4);
        const n5 = new Node(5);

        // console.log(n4);

        const n8 = new Node(8);
        const n9 = new Node(9);
        const n10 = new Node(10);

        const set1 = n1;
        set1.next = n2;
        set1.next.next = n3;
        set1.next.next.next = n4;
        set1.next.next.next.next = n5;

        const set2 = n8;
        set2.next = n9;
        set2.next.next = n4;
        // lists should intersect... 
        // expect statement here...
        expect(listIntersect(set1, set2)).toBe(n4);
    });

    it("Testing naive exponetiation approach recursivly: ", () => {
        expect(naiveExponetiationRec(3, 10)).toBe(59049);
    });

    it("Testing naive exponetiation approach iterativly: ", () => {
        expect(naiveExponetiationIter(3, 10)).toBe(59049);
    });

    it("testing more optimized appraoch iterative way: ", () => {
        expect(optimizedExponetiationIter(3, 10)).toBe(59049);
        expect(optimizedExponetiationIter(3, 12)).toBe(531441);
    });

    it("Testing more optimized approach recursivly: ", () => {
        expect(optimizedExponetiationRec(3, 10)).toBe(59049);
        expect(optimizedExponetiationRec(3, 12)).toBe(531441);
    });

    it("Testing GCD naive iter approach: ", () => {
        expect(naiveGcdIter(12, 8)).toBe(4);
        expect(naiveGcdIter(3, 9)).toBe(3);
        expect(naiveGcdIter(25, 15)).toBe(5);
    });

    it("Testing GCD more optimized iter approach: ", () => {
        expect(optimizedGcdIter(12, 8)).toBe(4);
        expect(optimizedGcdIter(3, 9)).toBe(3);
        expect(optimizedGcdIter(25, 15)).toBe(5);
        expect(optimizedGcdIter(120, 110)).toBe(10);
        expect(optimizedGcdIter(10, 6)).toBe(2);
    });
});


describe("Interview test question preparation: ", () => {

});