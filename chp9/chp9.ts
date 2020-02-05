// Have to redo everything
// a: redo the recursive hanoi disks 
// b: Implement -> map, contains, filter, reduce, find, every, some
// c: Implement html dom
// d: Implement searching file structure 
// e: Implement -> hanoi disks iterative version
// f: Implement -> thunk and trampoline
// e: Then finally do all questions at the end of this chapter


export const contains = (arr, key) => {
    return arr.length === 0 ? undefined : arr[0] === key ? key : contains(arr.slice(1), key);
}