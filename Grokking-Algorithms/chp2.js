

// In this chapter 

/*

    Selection Sort
    Linked List

*/

// Selection Sort

/*
    Selection sort  is taking an array that is unsorted

    And finding the least value and adding it from current to a new one

    then moving on to the next

    In this selection sort I'm just using a pointer instead of poping 

*/

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let leastItem = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[leastItem]) {
                leastItem = j;
            }
        }

        swap(arr, i, leastItem);
    }

    return arr;
};

const dummyArray = [
    1, 10, 8, 22, 189, 0, -5, 3, 2, 1, 6, 7, 8, 98 
];

const sortedDummy = selectionSort(
    dummyArray
);

console.log(sortedDummy);