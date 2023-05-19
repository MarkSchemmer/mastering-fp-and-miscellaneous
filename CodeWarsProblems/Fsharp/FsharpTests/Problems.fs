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



module SquareSum = 
    open System
    let squareSum (numbers : int list) : int =
        let rec recSquareSum (numbs : int list, sum : int): int =
            match numbs with
            | head :: tail -> recSquareSum(tail, (sum + (head * head)))
            | [ ] -> sum 
        recSquareSum(numbers, 0)


module RomanNumerals = 
    open System 
    let solution(numb: int): String = 
        let rec innerSolution(n, str): String = 
            match n with 
            | nn when nn >= 1000 -> innerSolution(nn - 1000, str + "M")
            | nn when nn >= 900 -> innerSolution(nn - 900, str + "CM")
            | nn when nn >= 500 -> innerSolution(nn - 500, str + "D")
            | nn when nn >= 400 -> innerSolution(nn - 400, str + "CD")
            | nn when nn >= 100 -> innerSolution(nn - 100, str + "C")
            | nn when nn >= 90 -> innerSolution(nn - 90, str + "XC")
            | nn when nn >= 50 -> innerSolution(nn - 50, str + "L")
            | nn when nn >= 40 -> innerSolution(nn - 40, str + "XL")
            | nn when nn >= 10 -> innerSolution(nn - 10, str + "X")
            | nn when nn >= 9 -> innerSolution(nn - 9, str + "IX")
            | nn when nn >= 5 -> innerSolution(nn - 5, str + "V")
            | nn when nn >= 4 -> innerSolution(nn - 4, str + "IV")
            | nn when nn >= 1 -> innerSolution(nn - 1, str + "I")
            | nn when nn <= 0 -> str 
        innerSolution(numb, "")
            