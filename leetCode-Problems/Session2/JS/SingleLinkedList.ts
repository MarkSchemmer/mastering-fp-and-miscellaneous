export class SingleLinkedList {
    public head: Node; 

    public deleteDuplicates(head) {
        let to = head;

        while (to) {
            let from = to.next;
            if (from && from.val === to.val) {
                to.next = from.next;
                from = null;   
            } else 
                to = to.next;   
        }

        return head;
    }

    public hasCycle = (head:Node) => {
        let cur = head;
        let runner = cur?.next?.next;

        // console.log("cur: ", head?.val);
        // console.log("runner: ", runner?.val);

        // iterate throught the list
        // if runner is null then return true 
        while(cur && runner) {
            if (runner === cur) return true;
            cur = cur?.next;
            runner = runner?.next?.next;
        }

        return false;
    }

    /*
    
         const getLen = (n) => {
    let len = 0;

    while (n) {
        len += 1;
        n = n.next;
    }

    return len;
 }
const getIntersectionNode = (headA, headB) => {

    let lenA = getLen(headA), lenB = getLen(headB);
    console.log(lenA);
    console.log(lenB);

    let runner = headB;

    if (lenA > lenB) {
        let temp = headA;
        headA = headB;
        headB = temp;
        runner = headB;
    }
        while (headA) {
            while (runner) {
                if (runner === headA) return headA
                runner = runner.next;
            }

            headA = headA.next;
            headB = headB?.next;
            runner = headB;
        }

        return null;
    };
    
    */
    // Problem 160
    public getIntersectionNode = (headA: Node, headB: Node) => {

        const getLen = (n) => {
            let len = 0;
                while (n) {
                    len += 1;
                    n = n.next;
                }
                return len;
        }
     
        let lenA = getLen(headA), lenB = getLen(headB);
        console.log(lenA);
        console.log(lenB);

        let runner = headB;

        if (lenA > lenB) {
            let temp = headA;
            headA = headB;
            headB = temp;
            runner = headB;
        }
        
        while (headA) {
            while (runner) {
                if (runner === headA) return headA
                runner = runner.next;
            }

            headA = headA.next;
            headB = headB?.next;
            runner = headB;
        }

        return null;
    }

    // Problem 206. 
    public reverseList = (head:Node) => {
        let newList: Node | null = null;
        let current = head;

        while (current) {
            // declare next node
            let nextNode = current.next;
            // set next node to newList
            current.next = newList;
            // update newList to the current node
            newList = current;
            // update current to next node
            current = nextNode;
        }

        return newList;
    };

    // we need to find the middle node
    // reverse the middle node list
    // compare head with newly reversed node middle list
    // 234. Palindrome Linked List
    public isPalindromeLinkedList = (node: Node) => {
        const findMiddleNode = (n:Node) => {
            let middleNode: Node | null = null;
            let cur = n;
            let rabbit = n;

            while (rabbit) {
                cur = cur.next;
                rabbit = rabbit?.next?.next;
            }

            middleNode = cur;
            return middleNode;
        }

        const reverseList = (n: Node) => {
            let newList: Node | null = null;
            let cur = n;

            while (cur) {
                let nextNode = cur.next;
                cur.next = newList;
                newList = cur;
                cur = nextNode;
            }

            return newList;
        }

        const middleNode = findMiddleNode(node);
        let reversedMiddleNode = reverseList(middleNode);

        while (node && reversedMiddleNode) {
            if (node.val !== reversedMiddleNode.val) return false;
            node = node.next;
            reversedMiddleNode = reversedMiddleNode.next;
        }

        return true;
    }

    // problem 2130
    public pairSum = (head:Node) => {

        const pairs:number[] = [];

        const ithLibrary = {}

        const getLen = (n:Node) => {
            let counter = 0;
            while(n) {
                ithLibrary[counter] = n.val
                n = n.next;
                counter++;
            }

            return counter;
        }

        const len = getLen(head);
        const calculateTwin = (idx) => len - 1 - idx;

        let runner = head;
        let i = 0;

        while(runner) {
            const runnerVal = runner.val;
            const pairVal = ithLibrary[calculateTwin(i)];
            pairs.push(runnerVal + pairVal);

            runner = runner.next;
            i = i + 1;
        }

        return Math.max(...pairs);
    }

    // [ problem 876 ]
    public middleNode = (head: Node) => {
        const isNullOrUndefined = v => v === null || v === undefined;

        const findMiddle = (c, r) => {
            return isNullOrUndefined(r) ? c?.next : 
                isNullOrUndefined(r?.next) ? c?.next : 
                isNullOrUndefined(r?.next?.next) ? c?.next?.next : 
                findMiddle(c?.next, r?.next?.next);
        }
    
        if (isNullOrUndefined(head.next))
            return head;
    
        let cur = head;
        let runner = head?.next?.next;
    
        const midNode = findMiddle(cur, runner);
    
        return midNode;
    }

    public deleteMiddle = (head:Node) => {
        const isNullOrUndefined = v => v === null || v === undefined;
        const findMiddle = (c, r) => {
            return isNullOrUndefined(r) ? c?.next : 
                isNullOrUndefined(r?.next) ? c?.next : 
                isNullOrUndefined(r?.next?.next) ? c?.next?.next : 
                findMiddle(c?.next, r?.next?.next);
        }
        let cur = head;
        let runner = head?.next?.next;
        const middleNode = findMiddle(head, runner);
  
        while (cur) {
            if (cur?.next === middleNode) {
                let next = cur?.next?.next;
                cur.next = next;
                return head;
            }

            cur = cur.next;
        }

        return head;
    };
}

export class Node {
    public val;
    public next;
    constructor(val, next?) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}