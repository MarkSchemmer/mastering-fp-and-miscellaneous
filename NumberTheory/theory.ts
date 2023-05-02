
// Concepts of chapter 1
// Summation
// Factorial
// Product such as: II 
// Binominal coeficient
// Pascal Triangle

// Additional proofs to be done as well. 

let factorialIterative = () => {
    let map = {};

    let subFactorial = (nn) => {
        let prev = nn;
        while (nn > 1) {
            nn = nn - 1;
            prev = prev * nn;
        }
        return prev;
    };

    return n => {
        if (n < 0) throw new Error("cannot be less than 0.");
        if (n === 0 || n === 1) return 1;
        if (n in map) return map[n];
        let result = subFactorial(n);
        map[n] = result;
        return result;
    };
};

export let FactorialIterative = factorialIterative();

let range = (lowerLimit: number, upperLimit: number): number[] => {
    if (lowerLimit >= upperLimit) throw new Error("lower limit cannot be greater than or equal to upperlimit.");

    let set: number[] = [];

    for(let i = lowerLimit; i <= upperLimit; i++) {
        set.push(i);
    }

    return set;
}

export let summation = (lowerLimit, upperLimit, fn) : number => {
    let numb = 0;
    let newRange = range(lowerLimit, upperLimit);

    let sum = newRange.reduce((acc, cur) => {
        let mutation = fn(cur);
        return acc + mutation;
    }, numb);

    return sum;
}

export let product = (lowerLimit: number, upperLimit: number, fn): number => {
    let numb = 1;
    let newRange = range(lowerLimit, upperLimit);

    let productResult = newRange.reduce((acc, cur) => {
        let mutation = fn(cur);
        return acc * mutation;
    }, numb);

    return productResult;
};

export let binomialCoefficient = (() => 
{
    let map = {};
    return (m: number, k: number): number => {
        if (k > m) throw new Error(" k <= m is false.");
        if (k === null || m === null) throw new Error("k or m is null. ");
        
        let key = m.toString() + k.toString();
        if (key in map) return map[key];
        let result = FactorialIterative(m) / (FactorialIterative(k) * FactorialIterative(m - k));
        map[key] = result;
        return result;
    }
})();


export let pascalsTriangle = (() => {
        let key = [
            [1],
            [ 1, 1 ],
            [ 1, 2, 1 ]
        ];

        let calcNewRow = (lastRow: number[]): number[] => {

            let newRow: number[] = [];

            for (let i = 0, j = 1; j <= lastRow.length - 1; i++, j++) {
                newRow.push(lastRow[i] + lastRow[j]);
            }

            return [ 1, ...newRow, 1 ];
        }

        let calculateToNthRow = (n: number) => {
            let lastRowCalculatedInPascalTri = key.length - 1;
            while (lastRowCalculatedInPascalTri <= n) {
                // do calculation of new row.
                let lastRow = key[lastRowCalculatedInPascalTri];
                let newRow = calcNewRow(lastRow);
                lastRowCalculatedInPascalTri = lastRowCalculatedInPascalTri + 1;
                key[lastRowCalculatedInPascalTri] = newRow
            }
        }

        return (nthRow: number) => {
            if (key[nthRow]) return key[nthRow];
            calculateToNthRow(nthRow);
            return key[nthRow];
        } 
})();


let printPascalsTriangleToNthRow = fn => n => {
    let str = "";
    let i = 0;
    while (i <= n) {
        let row = fn(i);
        row.forEach((v) => str = str + " " + v + " ");
        str += "\n";
        i++;
    }
    console.log(str);
    return str;
}

export let PrintPascalsTriangleToNthRow = printPascalsTriangleToNthRow(pascalsTriangle);



/*

    Can move disk (-) in either direction just a legal move. 

    Even number of disks

        A - B
        A - C
        B - C

    Odd number of disks

        A - C
        A - B
        B - C

    
    Disk is object

    Peg is object

    3 Peg<Disk> each Peg is a stack data structure
    Disk is an object which will have a value such as 
    weight

*/ 


export let towerOfHanoi = (nthLevel) => {

}