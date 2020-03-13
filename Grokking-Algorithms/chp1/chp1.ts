/*
    Binary search:

        Search a sorted list and returns the location of the element otherwise it returns null
        Binary search starts in the middle and then divides the array in half each time until it finds the value
        In computer science log always means log2 so log  n would log2 n 

        so if a binary search is log n and we have a set of 8

        then it would be log2 8 which would be 3 

        Also remember that 


        A couple of notes to remember from the author

        He uses Logarithms a lot make sure this concept is fully understood

        Also a binary search only works if the set is sorted

        Excercises for this chapter: 

        0: build binary search, but do not use recursion

        1.1: suppose you have a sorted list of 128 names how many searchs would a binary search take to find the name?

        1.2: If list size is doubled what's amount of searches now?
*/



export const range = (x: number, y: number, incrementer: number = 1) => {
    const acendingOrDecendingArr = (arr, elem, which) => which ? [...arr, elem] : [elem, ...arr];
    const which = x < y;
    const _x = which ? x : y;
    const _y = which ? y : x;

    const calculator = (__x: number = _x, __y: number = _y, rango = []) => {
        const newMappedArray = __x <= __y ? acendingOrDecendingArr(rango, __x, which) : rango;
        return __x >= __y ? newMappedArray : calculator(__x + incrementer, __y, newMappedArray);
    };

    return calculator(_x, _y);
};

export const binarySearch = (arr, item) => {
    let low = 0; 
    let high = arr.length;
    let mid = Math.floor((low + high) / 2);

    while (arr[mid]) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === item) return mid;

        if (arr[mid] > item) high = mid - 1;
        else if (arr[mid] < item) low = mid + 1;
    }

    return null;
};

const set = range(1, 100);
const result = binarySearch(set, 34);
console.log(result);
console.log(set[result]);

/*
    1.1: Maxium number of steps of 128 names?

    log2 128 = 7

    1.2 double 128 => 256 -> log2 256 -> 8

    so will iterate 7 times max in 128.. and will iterate 8 times max in 256


    overall this algorithm wasn't that hard to reason about in the end... 

    Big 0 of Binary Search is log n
*/
