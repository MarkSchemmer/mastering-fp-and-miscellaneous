// Have to redo everything
// a: redo the recursive hanoi disks 
// b: Implement -> map, contains, filter, reduce, find, every, some, powerN, myRPipeLine
// c: Implement html dom
// d: Implement searching file structure 
// e: Implement -> hanoi disks iterative version
// f: Implement -> thunk and trampoline
// g: Then finally do all questions at the end of this chapter
// h: 


export const isEven = n => n % 2 === 0;

export const contains = (arr, key) => {
    return arr.length === 0 ? false : arr[0] === key ? true : contains(arr.slice(1), key);
};

export const powerN = (sum, n) => {
    return n === 1 ? sum : isEven(n) ? powerN(sum * sum, n / 2) : powerN(sum, n - 1) * sum;
};


export const functionalQuickSort = arr => {
    let bigger, smaller, pivot;
    return arr.length < 2 ? arr : (
        pivot = arr[0],
        smaller = arr.slice(1).filter(i => i < pivot),
        bigger = arr.slice(1).filter(i => i >= pivot),
        [...functionalQuickSort(smaller), pivot, ...functionalQuickSort(bigger)]
    );
};

export const myRMap = (arr1, fn) => {
    const myInnerRMap = (arr, idx) => {
        return idx === arr1.length ? arr : (arr[idx] = fn(arr[idx], idx, arr1), myInnerRMap(arr, idx + 1));
    };

    return myInnerRMap(arr1, 0);
};

export const myRFilter = (arr1, fn) => {
    const myInnerRFilter = (arr, idx) => {
        return idx === arr1.length ? 
                               arr : 
                               myInnerRFilter(arr.concat(fn(arr1[idx], idx, arr1) ? arr1[idx] : []) , idx + 1);
    };

    return myInnerRFilter([], 0);
};

export const myRecReduce = (arr1, fn, source) => {
    const myInnerRecReduce = (arr, idx, sc) => {
        return idx === arr1.length ? sc : (sc = fn(sc, arr[idx], idx, arr1), myInnerRecReduce(arr, idx + 1, sc));
    };

    return myInnerRecReduce(arr1, 0, source);
};