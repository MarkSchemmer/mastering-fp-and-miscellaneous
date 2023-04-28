namespace CodeWarsProblems

module Problems =
    open System
    open System.Collections

    let maxTriSum (nums: int list) =
        nums 
        |> List.distinct
        |> List.sortDescending
        |> List.take 3
        |> List.reduce (fun x y -> x + y)


module YouCantCodeSolution =
    open System
    let doubleInteger (n: int) =
        n * 2