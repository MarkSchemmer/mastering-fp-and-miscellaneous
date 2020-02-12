import { range } from "../chp5/chp5-questions.test";
import { isNullOrUndefined } from "../utils";

// Have to redo everything
// a: redo the recursive hanoi disks 
// b: Implement -> map, contains, filter, reduce, find, every, some, powerN, myRPipeLine -> done
// c: Implement html dom
// d: Implement searching file structure 
// e: Implement -> hanoi disks iterative version -> done
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

export const myRFind = (arr1, key) => {
    const myInnerRFind = (arr) => {
        return arr.length === 0 ? undefined : arr[0] === key ? arr[0] : myInnerRFind(arr.slice(1));
    };

    return myInnerRFind(arr1);
};

export const myRPipeLine = (first?, ...rest) => {
    return rest.length === 0 ? first : (...args) => myRPipeLine(...rest)(first(...args));
};

export const myRSome = (arr1, fn) => {
    const myInnerRSome = (arr, idx = 0) => {
        return arr.length === 0 ? false : fn(arr[0], idx) ? true : myInnerRSome(arr.slice(1), idx + 1);
    };

    return myInnerRSome(arr1);
};

export const myREvery = (arr1, fn) => {
    const myInnerREvery = (arr, idx = 0) => {
        return arr.length === 0 ? true : fn(arr[0], idx) ? myInnerREvery(arr.slice(1), idx + 1) : false;
    };

    return myInnerREvery(arr1);
};

// Towers of hanoi iterative version

export class Hanoi {
    public source = [];
    public auxillary = [];
    public destination = [];
    public numberOfDisks = null;
    public totalMoves = null;

    private board = [
        this.source,
        this.auxillary,
        this.destination
    ];

    constructor(n) {
        this.board[0] = range(1, n);
        this.numberOfDisks = n;
        this.totalMoves = Math.pow(2, n) - 1;
    }

    private validMove = (diskPole1, diskPole2) => {
        const diskOnPole1 = diskPole1[0], diskOnPole2 = diskPole2[0];

        if (isNullOrUndefined(diskOnPole1)) {
            diskPole1.unshift(diskPole2.shift());
        } else if (isNullOrUndefined(diskOnPole2)) {
            diskPole2.unshift(diskPole1.shift());
        } else if (diskOnPole1 < diskOnPole2) {
            diskPole2.unshift(diskPole1.shift());
        } else {
            diskPole1.unshift(diskPole2.shift());
        }
    }

    public makeAllMoves = () => {

        const isDiskEven = isEven(this.numberOfDisks);

        for (let i = 1; i <= this.totalMoves; i++) {
            const [ source, auxillary, destination ] = this.board;
            if (!isDiskEven) {
                if (i % 3 === 1) { this.validMove(source, destination); }

                if (i % 3 === 2) { this.validMove(source, auxillary); }

                if (i % 3 === 0) { this.validMove(auxillary, destination); }

            } else {
                if (i % 3 === 1) { this.validMove(source, auxillary); }

                if (i % 3 === 2) { this.validMove(source, destination); }

                if (i % 3 === 0) { this.validMove(destination, auxillary); }
            }
        }

        return this.board;
    }
}

// Iterating file structure
const defaultPath = "D:\\My_Files\\courses\\mastering-fp"

export const readFiles = (path: string = defaultPath, history = []) => {
    const fs = require("fs");
    const files = fs.readdirSync(path);
    files.forEach(file => {
        const newPath = path + "\\" + file;
        if (file.startsWith(".")) {
            history.push(file);
        } else if (fs.lstatSync(newPath).isDirectory() && file !== "node_modules") {
            readFiles(newPath, history);
        } else {
            history.push(file);
        }
    });
    console.log(history);
    return history.length;
};

// Iterating dom
// Then onto question of end of chapter
