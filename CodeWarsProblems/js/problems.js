
/*
        8 kyu Multiplication table for number

        Link: https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

        Description: 

            Your goal is to return multiplication table for number that is always an integer from 1 to 10.

            For example, a multiplication table (string) for number == 5 looks like below:

            1 * 5 = 5
            2 * 5 = 10
            3 * 5 = 15
            4 * 5 = 20
            5 * 5 = 25
            6 * 5 = 30
            7 * 5 = 35
            8 * 5 = 40
            9 * 5 = 45
            10 * 5 = 50

            P. S. You can use \n in string to jump to the next line.

            

*/

const multiTable = n => {
    return ([ ...Array(10)].map((n, i) => i + 1).reduce((acc, cur) => acc + `${cur} * ${n} = ${cur * n}\n`, "")).trim("\n");  
};

const res = multiTable(5);

console.log(res);