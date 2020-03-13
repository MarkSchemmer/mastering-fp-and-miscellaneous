"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var acendingOrDecendingArr = function (arr, elem, which) { return which ? __spreadArrays(arr, [elem]) : __spreadArrays([elem], arr); };
exports.range = function (x, y, incrementer) {
    if (incrementer === void 0) { incrementer = 1; }
    var which = x < y;
    var _x = which ? x : y;
    var _y = which ? y : x;
    var calculator = function (__x, __y, rango) {
        if (__x === void 0) { __x = _x; }
        if (__y === void 0) { __y = _y; }
        if (rango === void 0) { rango = []; }
        var newMappedArray = __x <= __y ? acendingOrDecendingArr(rango, __x, which) : rango;
        return __x >= __y ? newMappedArray : calculator(__x + incrementer, __y, newMappedArray);
    };
    return calculator(_x, _y);
};
exports.binarySearch = function (arr, item) {
    var low = 0;
    var high = arr.length;
    var mid = Math.floor((low + high) / 2);
    while (arr[mid]) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === item)
            return mid;
        if (arr[mid] > item)
            high = mid - 1;
        else if (arr[mid] < item)
            low = mid + 1;
    }
    return null;
};
var set = exports.range(1, 100);
var result = exports.binarySearch(set, 34);
console.log(result);
console.log(set[result]);
