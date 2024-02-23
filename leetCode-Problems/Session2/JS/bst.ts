export class Tree {

    public root = new TreeNode(null, null, null);

    constructor(root?) {
        this.root = root;
    }

    public Add = () => {

    }

    public sortedArrayToBst = nums => {

    }

    public inorderPrint = () => {
        let temp:any = this.root;
        let stack:TreeNode[] = [];

        while (temp !== null || stack.length > 0) {
            if (temp !== null) {
                stack.push(temp);
                temp = temp.left;
            } else if (stack.length > 0) {
                temp = stack.pop();
                console.log(temp.val);
                temp = temp.right;
            }
        }
    }
}

class TreeNode {
    public val;
    public left;
    public right;
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}