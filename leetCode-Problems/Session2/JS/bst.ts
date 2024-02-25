export class Tree {

    public root = new TreeNode(null, null, null);

    constructor(root?) {
        this.root = root;
    }

    public inorderPrintRecursion = root => {
        if (root !== null) {
            this.inorderPrintRecursion(root.left);
            console.log(root.val);
            this.inorderPrintRecursion(root.right);
        }
    }

    public Add = value => {
        let node = new TreeNode(value, null, null);

        if (this.root === null) {
            this.root = node;
            return; // break out of the function.
        } 

        let rootNode = this.root;
        let temp;
        while (rootNode !== null) {
            temp = rootNode;
            if (node.val > rootNode.val) {
                rootNode = rootNode.right;
            }
            else { 
                rootNode = rootNode.left;
            }

            if (rootNode === null) {
                if (node.val > temp.val) {
                    temp.right = node;
                } else {
                    temp.left = node; 
                }
            }
        }
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

    public depthRecursion = root => {

        if (root === null) return 0;
        
        let l:number = this.depthRecursion(root.left);
        let r:number = this.depthRecursion(root.right);

        if (l > r) {
            return l + 1;
        } else {
            return r + 1;
        }
    }

    public depthIterative = () => {
        let stack = [ this.root, null ];
        let depth = 0;
        while (stack.length > 0) {
            
            let temp = stack.shift();

            if (temp === null)
                depth++;

            if (temp !== null) {
                if (temp?.left)
                    stack.push(temp.left);
                if (temp?.right)
                    stack.push(temp.right);

            } else if (stack.length > 0) {
                stack.push(null);
            }
        }

        return depth;
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