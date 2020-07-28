
// Valid braces... 

/*

    Method 1. 

    Will have a stack, and a map of opening braces and closing braces...

    Will iterate through string, add opening braces to stack

    If char is not opening brace you need to pop last item

    Check if it's the correct char using brace hash map

    if it's false return false


    other wise check if stack length does not equal 0


    Method 2. But doesnt' work on all cases... 

    Could do regex match and replace until either the string is empty or 
    has some chars left... 

    If some are left then it's false... 

*/

export const validBraces = str => {
    const stack = [];

    const map = {
        "[": "]",
        "{": "}",
        "(": ")"
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char in map) {
            stack.push(char);
        } else {
            const last = stack.pop();

            if (map[last] !== char) { return false; }
        }
    }

    return stack.length === 0;
};


export const validBracesV2 = str => {
    let regex = /\[\]|\(\)|\{\}/i;

    while (str.match(regex)) {
        str = str.replace(regex, "");
    }

    return str.length === 0;
};


// Problem number 2 when two linkedlists intersect even with different lengths...

/*

    If list lists have different length... 

    Go with longer list and iterate through longer and compare with first 
    Node other the shorter until the same length and then
    continue to iterate through the lists until either they're both null 

    or you find a match

    How to find a match of a node??? 

    For simplicity I'm just going to 

*/

const getLastNodeInTree = node => {
    let runner = node;
    let count = 1;

    while (runner.next !== null) {
        runner = runner.next;
        count++;
    }

    return {
        lastNode: runner,
        count
    };
};

const iterUp = (node, count) => {
    while (count > 0) {
        node = node.next;
        count = count - 1;
    }

    return node;
};

export const listIntersect = (list1, list2) => {
    /*
        What am I doing to see where they intersect...

        1. I get last node, if last node doesn't match
           then linkedlists don't intersect...

        2. Then check if either of the nodes are null, if so then also return null
            It shows that the list is invalid

        What to do after... 

        If I don't have length property... ?


        I can add length prop when iterating till the last node

        What I will do is iterate both lists and switch runner to root 
        other list until they intersect... and then return that node...

        That node will be the node where the two lists are intersected... 
    */

    let lastNode1 = getLastNodeInTree(list1);
    let lastNode1Count = lastNode1.count;
    let l1 = lastNode1.lastNode;

    let lastNode2 = getLastNodeInTree(list2);
    let lastNode2Count = lastNode2.count;
    let l2 = lastNode2.lastNode;

    if (l2 !== l1) return null; // If nodes
    if (l1 === null || l2 === null) return null;

    let r1 = list1;
    let r2 = list2;

    let diff = Math.abs(lastNode1Count - lastNode2Count);

    if (lastNode1Count > lastNode2Count) {
        r1 = iterUp(r1, diff);
    } else {
        r2 = iterUp(r2, diff);
    }

    while(r1 && r2) {
        if (r1 === r2) return r1;
        r1 = r1.next;
        r2 = r2.next;
    }

    return false;
};

