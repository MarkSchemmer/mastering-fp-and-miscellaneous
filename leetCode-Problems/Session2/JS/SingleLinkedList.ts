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
}

export class Node {
    public val;
    public next;
    constructor(val, next?) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}