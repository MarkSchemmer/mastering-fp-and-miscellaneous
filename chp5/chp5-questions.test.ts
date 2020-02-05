
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

enum GameType {
    CHESS = "CHESS",
    CHECKERS = "CHECKERS",
    BOWLING = "BOWLING",
}

interface PlayerData {
    name: string;
    plays: GameType 
}

const playerData: PlayerData[] = [
    { name: "Fred", plays: GameType.CHESS },
    { name: "Barney", plays: GameType.CHECKERS },
    { name: "Wilma", plays: GameType.CHESS },
    { name: "Betty", plays: GameType.CHESS},
    { name: "Susan", plays: GameType.CHECKERS },
    { name: "Dean", plays: GameType.BOWLING },
    { name: "Mark James", plays: GameType.CHESS },
    { name: "Ruth Aguilar", plays: GameType.CHESS },
];

const isChessPlayer = (player: PlayerData): boolean => player.plays === GameType.CHESS;
const onlyChessPlayers = (playerList: PlayerData[]): PlayerData[] => playerList.filter(isChessPlayer);

const putPlayerNameInLi = (total: string, player: PlayerData): string => {
    return total + "<li> " + player.name + " </li> \n";
};

const generateHtmlOfPlayers = (playerList: PlayerData[]): string => {
    return `<div>
                    <ul>
                        ${ onlyChessPlayers(playerList).reduce(putPlayerNameInLi, "")}
                    </ul>
            </div>`;
};

const resultOfPlayers = generateHtmlOfPlayers(playerData);

// console.log(resultOfPlayers);

describe("dummy test", () => {
    it("here I am", () => {
        expect(true).toBe(true);
    });
});


/*
    Emulating map() with reduce, and then write unit tests for it. 

    Need to create a map() function using .reduce()... 

    Main point of map is tht it takes a domain and returns a codomain...

    Problem 5.3
*/

const myMap = (arr, fn) => arr.reduce((newMappedItem, currentItem, index, array) => {
    return newMappedItem.concat(fn(currentItem, index, array));
}, []);

const dup = (item: number): number => item * 2;


describe("Unit tests for myMap() ", () => {
    let dummyInput: number[] = null;

    beforeEach(() => {
        dummyInput = [10, 3, 4, 6, 7, 28];
    });

    it("myMap using dup?", () => {
        expect(myMap(dummyInput, dup)).toStrictEqual(dummyInput.map(x => x * 2));
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

export const range = (x: number, y: number, incrementer: number = 1) => {
    const which = x < y;
    const _x = which ? x : y;
    const _y = which ? y : x;

    const calculator = (__x: number = _x, __y: number = _y, rango = []) => {
        const newMappedArray = __x <= __y ? acendingOrDecendingArr(rango, __x, which) : rango;
        return __x >= __y ? newMappedArray : calculator(__x + incrementer, __y, newMappedArray);
    }

    return calculator(_x, _y);
};

const acendingOrDecendingArr = (arr, elem, which) => which ? [...arr, elem] : [elem, ...arr];

describe("range work?", () => {
    it("can generate a range 1...5?", () => {
        const result = range(1, 5);
      //  console.log("The result : ", result);
        expect(result).toStrictEqual([1, 2, 3, 4, 5]);
    });

    it("can generate opposite range?", () => {
        const result2 = range(5, 1);
      //  console.log("The result2: ", result2);
        expect(result2).toStrictEqual([5, 4, 3, 2, 1]);
    });

    it(" incrementer test, range(1, 10, 2) ", () => {
        const result3 = range(1, 10, 2);
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


const startData = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ];

const productCsv = data => data.reduce((csvFile, currentLine) => {
    return csvFile + currentLine.toString() + "\n"
}, "");

describe("produce csv works?", () => {
    it("startData -> ", () => {
        expect(productCsv(startData)).toBe("1,2,3,4\n5,6,7,8\n9,10,11,12\n");
    });
});