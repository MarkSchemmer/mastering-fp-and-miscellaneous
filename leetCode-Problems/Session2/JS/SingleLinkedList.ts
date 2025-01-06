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
}

export class Node {
    public val;
    public next;
    constructor(val, next?) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}