
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

export const getLastNodeInTree = node => {
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

    return  null;
};

// Recursive power, naive approach... 

// Implement both recursive and iterative approach, and naivly

// Modular Exponiation naive



// x^n -> x^3 -> x * x * x
// using recursion...
export const naiveExponetiationRec = (x, n) => {
    return n === 0 ? 1 : x * naiveExponetiationRec(x, n - 1);
};

// exponentiation iterative solution... naive approach
export const naiveExponetiationIter = (x, n) => {
    let res = 1;
    while (n-- > 0) {
        res = res * x;
    }

    return res;
};
/*

A more optimized approach to 

While calculating x^n , the basis of Binary Exponentiation relies on whether n is odd or even.

If n is even, then x^n can be broken down to ((x^2)^n/2). Programmatically, finding x^2 is a one-step process. However, the problem is to find ((x^2)^n/2)

Notice how the computation steps were reduced from  to  in just one step? You can continue to divide the power by  as long as it is even.

When  is odd, try and convert it into an even value.  can be written as . This ensures that  is even.

If n is even, replace x^n by (x^2)^n/2.
If n is odd, replace x^n by x * x^n-1.  becomes even and you can apply the relevant formula.
Example

You are required to compute 3^10. The steps are as follows:

1. The power of 3 is 10, which is even. Break it down as follows:

3^10  -> (3^2)^5 -> 9^5 --> 9 * 9^4 ---> 9 * (9^2)^2 ---> 9 * 81^2 ---> result... 

Find . The power of  is , which is odd. Convert it into an even power and then apply the following formula:
 is a one-step computation process

The result is .

This is an efficient method and the ten-step process of determining  
is reduced to a three-step process. At every step,  is divided by . Therefore, the time complexity is O(log N).

*/

export const optimizedExponetiationIter = (x, n) => {
    let res = 1;

    while (n > 0) {
        if (n % 2 === 0) {
            x = x * x;
            n /= 2;
        } else {
            res *= x;
            n -= 1;
        }
    }

    return res;
}

export const optimizedExponetiationRec = (x, n) => {
    return n === 0 ? 1 : n % 2 === 0 
    ? optimizedExponetiationRec(x * x, n / 2) 
    : x * optimizedExponetiationRec(x * x, (n - 1) / 2);
};

// How to store bigger numbers in exponentiation... 

// Solving the GCD

/*
    GCD is the largest positive integer that divides into each of the integers

    For exampel GCD -> g, two integers a, b -> a = 12, b = 8, then the g === 4 -> 4 is the biggest 
    divisor that goes into 8 and 12

    The naive approach is to decend at 2 at a time from the smaller number... 
*/

export const naiveGcdIter = (a, b) => {
    let smaller = a < b ? a : b;
    for (let i = smaller; i >= 1; i -= 2) {
        if (a % i === 0 && b % i === 0) return i;
    }

    return null;
};


/*
    How to have a modular adnvace to this problem?

    How to have a more optimized solution... ?

    I take the smaller number and the bigger put it as m

    and take the bigger number and modulus it with m and then either test both or

    recall using it
*/

export const optimizedGcdIter = (a, b) => {
    let m = a < b ? a : b;
    let sm = m;
    let bg = a < b ? b : a;
    while (m > 1) {
        // console.log(m);
        if (sm % m === 0 && bg % m === 0) return m;
        m = bg % m;
    }

    return null;
}

export const diamondGenerator = rows => {
    let accumStr = "";
    let spaces = rows;
    const space = " ";
    const star = "*";
    const newLine = "\n";
    const genStar = n => star.repeat(n);
    const genSpace = n => space.repeat(n);

    for (let i = 1; i < rows; i++) {
        const sp = genSpace(spaces - i);
        const st = genStar(i);
        accumStr += sp + st + newLine;
    }

    for (let i = rows - 1; i > 0; i--) {
        const sp = genSpace(spaces - i);
        const st = genStar(i);
        accumStr += sp + st + sp + newLine;
    }

    // Need to uncomment to check and see pattern
    // console.log(accumStr);
};

