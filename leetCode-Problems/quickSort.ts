export const quickSort = arr => {
    let smaller, bigger, pivot;
    return arr.length < 2 ? arr : (
        pivot = arr[0],
        smaller = arr.slice(1).filter(n => n < pivot),
        bigger = arr.slice(1).filter(n => n >= pivot),
        [ ...quickSort(smaller), pivot, ...quickSort(bigger) ]
    );
}

const quickSortOptimized = (array) => {
    const stack = [array]; // we create a stack of array to sort
    const sorted = [];

    // we iterate over the stack until it get emptied
    while (stack.length) {
        const currentArray = stack.pop(); // we take the last array in the stack

        if (currentArray.length == 1) { // if only one element, then we add it to sorted
            sorted.push(currentArray[0]);
            continue;
        }
        const [first, ...rest] = currentArray; // otherwise we take the first element in the array

        // then separate all elements smaller and bigger than the first
        const smaller = [], bigger = [];
        for (var i = 0; i < rest.length; i++) {
            const value = rest[i];
            if (value < first) { // smaller
                smaller.push(value);
            } else { // bigger
                bigger.push(value);
            }
        }

        if (bigger.length) {
            stack.push(bigger); // we add bigger to the stack to be sorted first
        }
        stack.push([first]); // we add first in the stack, when it will get unstacked, then bigger will have been sorted
        if (smaller.length) {
            stack.push(smaller); // we add smaller to the stack to be sorted last
        }
    }

    return sorted;
}


// QuickSort trampolined...

export const thunk = (fn, ...args) => {
    return () => fn(...args);
}

export const trampoline = fn => (...args) => {
    fn = fn(...args);
    while (typeof fn === "function") fn = fn();
    return fn;
}

const trampolineQuickSort = trampoline(quickSort);