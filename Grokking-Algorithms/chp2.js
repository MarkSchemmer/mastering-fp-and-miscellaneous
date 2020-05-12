

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


export class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    addToFront = val => {
        const node = new Node(val);
        if (this.count === 0) {
            this.head = node;
            this.tail = node;
        } else {
            const temp = this.head;
            this.head = node;
            node.next = temp;
        }


        this.count++; // increment count for each 

        return this;
    }

    addToBack = val => {

        const node = new Node(val);

        if (this.count === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail = node;

            // run through the list until the last and connect 
            // The last with the new tail
            let runner = this.head;
            while(runner.next !== null)
                runner = runner.next;

            runner.next = this.tail;
        }

        this.count++;
        return this;
    }

    removeFront = () => {
        if (this.count === 1) {
            this.emptyList();
        } else {
            this.head = this.head.next;
            this.count--;
        }

        return this;
    }

    removeBack = () => {
        if (this.count === 1) {
            this.emptyList();
        } else {
            // Need to iterate to last item in list
            let runner = this.head;

            while (runner.next.next !== null)
                runner = runner.next;
            
            this.tail = runner;
            this.tail.next = null;
            this.count--;
        }

        return this;
    }

    emptyList = () => {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    // have a delete for any position!
    // Head, Tail, and in the middle
    delete = item => {

        if (this.count === 1) {
            this.emptyList();
        } else {
            if (this.head.value === item) {
                this.removeFront();
            } else if (this.tail.value === item) {
                this.removeBack();
            } else {
                let runner = this.head;
                let prev;

                /*
                

                n1 -> n2 -> n3

                Need to remove n2 and connect n1 to n3

                n1 -> n3

                */
                while (runner.next !== null) {

                    if (runner.value === item) {
                        prev.next = runner.next;
                        this.count--;
                        return;
                    }

                    prev = runner;
                    runner = runner.next;
                }
            }
        }
    }

    getCount = () => {
        return this.count;
    }

    contains = item => {
        let runner = this.head;

        while (runner !== null) {
            if (item === runner.value) {
                return true;
            }

            runner = runner.next;
        }

        return false;
    }

    interateAndLogEachValue = () => {
        let runner = this.head;
        while (runner !== null) {
            console.log(runner.value);
            runner = runner.next;
        }
    }
}

class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}


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
