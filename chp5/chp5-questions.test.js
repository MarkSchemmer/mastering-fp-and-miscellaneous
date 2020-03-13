"use strict";
/*
    Generating HTML code with restrictions
    Problem 5.2.

    Need to output a html like so below

        <div>
            <ul>
                li items here hte players names
            </ul>
        </div>

        and only players that play chess
*/
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var GameType;
(function (GameType) {
    GameType["CHESS"] = "CHESS";
    GameType["CHECKERS"] = "CHECKERS";
    GameType["BOWLING"] = "BOWLING";
})(GameType || (GameType = {}));
var playerData = [
    { name: "Fred", plays: GameType.CHESS },
    { name: "Barney", plays: GameType.CHECKERS },
    { name: "Wilma", plays: GameType.CHESS },
    { name: "Betty", plays: GameType.CHESS },
    { name: "Susan", plays: GameType.CHECKERS },
    { name: "Dean", plays: GameType.BOWLING },
    { name: "Mark James", plays: GameType.CHESS },
    { name: "Ruth Aguilar", plays: GameType.CHESS },
];
var isChessPlayer = function (player) { return player.plays === GameType.CHESS; };
var onlyChessPlayers = function (playerList) { return playerList.filter(isChessPlayer); };
var putPlayerNameInLi = function (total, player) {
    return total + "<li> " + player.name + " </li> \n";
};
var generateHtmlOfPlayers = function (playerList) {
    return "<div>\n                    <ul>\n                        " + onlyChessPlayers(playerList).reduce(putPlayerNameInLi, "") + "\n                    </ul>\n            </div>";
};
var resultOfPlayers = generateHtmlOfPlayers(playerData);
// console.log(resultOfPlayers);
describe("dummy test", function () {
    it("here I am", function () {
        expect(true).toBe(true);
    });
});
/*
    Emulating map() with reduce, and then write unit tests for it.

    Need to create a map() function using .reduce()...

    Main point of map is tht it takes a domain and returns a codomain...

    Problem 5.3
*/
var myMap = function (arr, fn) { return arr.reduce(function (newMappedItem, currentItem, index, array) {
    return newMappedItem.concat(fn(currentItem, index, array));
}, []); };
var dup = function (item) { return item * 2; };
describe("Unit tests for myMap() ", function () {
    var dummyInput = null;
    beforeEach(function () {
        dummyInput = [10, 3, 4, 6, 7, 28];
    });
    it("myMap using dup?", function () {
        expect(myMap(dummyInput, dup)).toStrictEqual(dummyInput.map(function (x) { return x * 2; }));
    });
});
/*

    Ranging far and wide 5.4

    Build a range() function that can generate a range()

    It must be able to handle the following test cases

    - generate a range ->
        range(x, y, z) where x < y
        and x > y and then as well include a step (z) which will handle the increments

*/
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
var acendingOrDecendingArr = function (arr, elem, which) { return which ? __spreadArrays(arr, [elem]) : __spreadArrays([elem], arr); };
describe("range work?", function () {
    it("can generate a range 1...5?", function () {
        var result = exports.range(1, 5);
        //  console.log("The result : ", result);
        expect(result).toStrictEqual([1, 2, 3, 4, 5]);
    });
    it("can generate opposite range?", function () {
        var result2 = exports.range(5, 1);
        //  console.log("The result2: ", result2);
        expect(result2).toStrictEqual([5, 4, 3, 2, 1]);
    });
    it(" incrementer test, range(1, 10, 2) ", function () {
        var result3 = exports.range(1, 10, 2);
        //        console.log("result3: ", result3);
        expect(result3).toStrictEqual([1, 3, 5, 7, 9]);
    });
});
/*
    Doing the alphabt: 5.5

        The issue is that the JavaScript String.fromCharCode() takes multiple parameters but if you
        pass .map(String.fromCharCode) in a point free style, the .map will pass multiple parameters
        that maybe are not totally intended...
*/
/*
    Producing a CSV 5.6.

        domain -> [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ];
        codomain -> "1,2,3,4\n5,6,7,8\n
*/
var startData = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
var productCsv = function (data) { return data.reduce(function (csvFile, currentLine) {
    return csvFile + currentLine.toString() + "\n";
}, ""); };
describe("produce csv works?", function () {
    it("startData -> ", function () {
        expect(productCsv(startData)).toBe("1,2,3,4\n5,6,7,8\n9,10,11,12\n");
    });
});
