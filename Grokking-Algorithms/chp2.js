

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

    So I take one list and then go through list each time add one index... 
    Also don't repeat on any of the values that have been added to the new list 

    Run time is about O(n * n)

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

// For the moment I'm just 
// console.log(sortedDummy);



// testing addToFront
// const list = new LinkedList();

// list
// .addToFront(1)
// .addToFront(2)
// .addToFront(3)
// .addToFront(4)
// .addToBack(10)
// .interateAndLogEachValue();


// Testing addToBack
const list2 = new LinkedList();

list2
.addToBack(1)
.addToBack(2)
.addToBack(3)
.addToBack(4)
// .interateAndLogEachValue();

list2.delete(3);
list2.delete(2);

list2.interateAndLogEachValue();

console.log(
    "The count is: " + list2.getCount()
);

const hasFour = list2.contains(4);
