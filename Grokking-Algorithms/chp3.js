
// Grokking Algorithms -> Recursion

/*
    Programs to write in this chapter

    - Recursive function that runs forever, such decrementing timer that printers forever
      Just to do as an example

    - Add a base case as to stop the previous function to show how to stop a recursive function 

    - Create a factorial recursive function

    - 2
*/


const recursiveFunctionForever = n => (console.log(n + "th call"), recursiveFunctionForever(n - 1));


// recursiveFunctionForever(20); // runs forever until the call stack exception

const recursiveFunctionLogsUntilZero = n => {
    console.log(n);

    return n === 0 ? n : recursiveFunctionLogsUntilZero(n - 1);
};

// recursiveFunctionLogsUntilZero(20); // should log until 


// factorial recursive function
const factorialRecursive = n => {
    return n === 1 ? n : n * factorialRecursive(n - 1);
};

console.log(
    factorialRecursive(3)
);

// non-recursive factorial solution 

// A quick example of: 

/*


*/
