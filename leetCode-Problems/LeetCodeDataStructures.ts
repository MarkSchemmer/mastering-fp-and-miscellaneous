
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