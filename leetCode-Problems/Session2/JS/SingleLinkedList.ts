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
}

class Node {
    public val;
    public next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}