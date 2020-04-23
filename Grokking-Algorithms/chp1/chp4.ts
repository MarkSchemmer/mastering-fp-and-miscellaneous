
/*

    D&C === Divide and Conquer 

    1. Create an algorithm that adds an array of numbers
    Use divide and conquer 

    - Creating an base case
    - Add some sort of decrease and conquer type of function call

    Remember when dealing with a recursive function and an array 
    the base case is generally an empty array or 1 element in the array



    2. Write recursive fucntion for getting length of items in list

    3. Find maxium number in a list using recursion 

    4. Implement binary search using recursion make sure to write out the base case as well... 


    At end of chapter

    ?. Create an algorithm for determining the biggest square in a field try and solve this 
    the example of the problem given in the book




    ?. Quicksort, code out quick sort 
        Before I write out this function I need to take some more 
        notes about quicksort 

*/

export const recursiveSum = arr => {
    // base case is when arr is empty or has 1 item
    // other than that I basically add the first item in the array and then slice it out and re-call the function 
    return arr.length === 0 ? 0 : arr.length === 1 ? arr[0] : arr[0] + recursiveSum(arr.slice(1));
};


export const recCountItemsInList = (arr, count = 0) => {
    // Base case arr is empty then return count
    // other wise incremaent count and re-call function
    // Make sure when function is call that you decrease size of arr
    return arr.length === 0 ? count : recCountItemsInList(arr.slice(1), count + 1);
};

export const findMaxInSetRec = (arr, max = null) => {
    if (arr.length === 0) return max;

    if (max === null) {
        max = arr[0];
        return findMaxInSetRec(arr.slice(1), max);
    }

    max = arr[0] > max ?  arr[0] : max;

    return findMaxInSetRec(arr.slice(1), max);
};

/*

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

*/

export const binarySearchRecursive = (arr, item) => {
    let low = 0; 
    let high = arr.length;
    let mid = Math.floor((low + high) / 2);

    const binarysearchHelper = (a, m, h, l) => {
        if (a[m]) {
            m = Math.floor((l + h) / 2);
            if (a[m] === item) return m;
    
            if (a[m] > item) h = m - 1;
            else if (arr[m] < item) l = m + 1;

            return binarysearchHelper(a, m, h, l);
        } else {
            return null;
        }
    }

    return binarysearchHelper(arr, mid, high, low);
};

export const functionalRecQuickSort = arr => {
    let pivot, smallerThanPivot, biggerEqualThanPivot;
    return arr.length < 2 ? arr : (
        pivot = arr[0],
        smallerThanPivot = arr.slice(1).filter(x => x < pivot), 
        biggerEqualThanPivot = arr.slice(1).filter(x => x >= pivot),
        [...functionalRecQuickSort(smallerThanPivot), pivot, ...functionalRecQuickSort(biggerEqualThanPivot)]
    );
};
