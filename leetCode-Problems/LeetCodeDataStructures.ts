
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


export class Leaf {

    constructor(val = null) {
        this.val = val;
    }

    public val = null;
    public left = null;
    public right = null;
}

export class Tree {
    public head = null;


    public subAddLeaf = (leaf: Leaf, leafToAdd: Leaf) => {
        if (leaf.val <= leafToAdd.val) {
            if (leaf.right === null) {
                leaf.right = leafToAdd;
            } else {
                this.subAddLeaf(leaf.right, leafToAdd);
            }
        } else {
            if (leaf.left === null) {
                leaf.left = leafToAdd;
            } else {
                this.subAddLeaf(leaf.left, leafToAdd);
            }
        }
    }

    public Add = node => {
        let newLeaf = new Leaf(node);

        if (this.head === null) {
            this.head = newLeaf;
        } else {
            this.subAddLeaf(this.head, newLeaf);
        }
    }

    public iterateThroughTreeLeftToRight = (node: Leaf = this.head, level = 0) => {
        if (node === null) return 0;
        else {
            let leftDepth = this.iterateThroughTreeLeftToRight(node.left, level + 1);
            let rightDepth = this.iterateThroughTreeLeftToRight(node.right, level + 1);
            if (leftDepth > rightDepth) return leftDepth + 1; else return rightDepth + 1;
        }
    }

}





export class LinkedList {

    public head;
    public tail;
    public count;

    constructor () {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    addToBack = val => {

        const node = new Node(val);

        if (this.count === 0) {
            this.head = node;
        } else {
            // run through the list until the last and connect 
            // The last with the new tail
            let runner = this.head;

            while(runner.next !== null) {
                runner = runner.next;
            }

            
            runner.next = node;
            console.log(runner.next.value);
        }

        this.count++;
        return this;
    }

    emptyList = () => {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    getCount = () => {
        return this.count;
    }

    contains = item => {
        let runner = this.head;

        while (runner !== null) {
            if (item === runner.value) {
                return true;
            }

            runner = runner.next;
        }

        return false;
    }

    interateAndLogEachValue = () => {
        let runner = this.head;
        while (runner !== null) {
            console.log(runner.value);
            runner = runner.next;
        }
    }
}

export class Node {
    public value;
    public next;
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}