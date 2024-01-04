namespace CodeWarsProblems

module Problems =
    open System
    open System.Linq
    open System.Collections

    let descendingOrder n =  
        let ar = (n.ToString().ToCharArray() |> List.ofArray |> List.sort |> List.map(fun i -> i.ToString()) |> List.rev)
        Convert.ToInt32((String.concat "" ar))

    let noneObject : Object = Unchecked.defaultof<_>
    let rec matchIntegers (arr, res) = 
        match arr with 
        | head::tail when head.GetType().ToString() = "System.Int32" -> matchIntegers(tail, head::res)
        | _ -> res 

    let GetIntegersFromList (listOfItems: Object list) = // Happy coding!
        let newList = matchIntegers(listOfItems, [])
        newList

    let isOpenOrSenior (ar: int * int) =
      match ar with
        | (f, s) when f >= 55 && s > 7 -> "Senior"
        | _ -> "Open"

    let OpenOrSenior (xs : (int * int) list) : string list =
        xs |> List.map isOpenOrSenior

    let toCamelCase (text : string) =
        if (text.Length = 0) 
            then text
        else 
            let splitChars = [|"-"; "_"|]
            let splitedArray : string array = text.Split(splitChars, System.StringSplitOptions.RemoveEmptyEntries)
            let firstItem = splitedArray[0]
            let rest : string array = splitedArray 
                                    |> Array.skip 1 
                                    |> Array.map (fun i -> 
                                                    let newStr = i.ToCharArray() 
                                                    newStr.[0] <- Convert.ToChar(newStr[0].ToString().ToUpper())
                                                    let str: string = (newStr |> Array.map (fun i -> i.ToString()) |> Array.reduce(fun s1 s2 -> s1 + s2))
                                                    str)
            firstItem + (rest |> Array.reduce(fun s1 s2 -> s1 + s2)) 


    


    let reverseWords (str: string) =
        let list: List<string> = str.Split(' ') |> List.ofArray |> List.rev
        let l: string = list |> List.reduceBack  (fun s1 s2 -> s1 +  s2 + " ") 
        l

    let reverseString (s: string) = 
        if s.Length = 0 || s = null 
        then 
            s
        else 
            let str: string = s.ToCharArray() |> List.ofArray |> List.map (fun i -> i.ToString()) |> List.rev |>  List.reduceBack (fun  s1 s2 -> s1 + s2)
            str 

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

    let RomanToNumberValue(v: string): int =
        match v with 
        | "I" -> 1
        | "IV" -> 4
        | "V" -> 5
        | "IX" -> 9
        | "X" -> 10
        | "XL" -> 40
        | "L" -> 50
        | "XC" -> 90
        | "C" -> 100
        | "CD" -> 400
        | "D" -> 500
        | "CM" -> 900
        | "M" -> 1000
        | _ -> 0

    let determineNextValues(str1: string, str2: string): bool =
        let n1 = RomanToNumberValue(str1)
        let n3 = RomanToNumberValue(str1+str2)
        if n3 <> 0 then true else false  



    let FromRoman (romanNumeral: string): int = 
        let romanNumeralStack: string list = romanNumeral.ToCharArray() |> List.ofArray |> List.map (fun i -> i.ToString())
        
        let rec inner(stack: List<string>, numb: int): int = 
            match stack with
            | item1::item2::list -> if determineNextValues(item1, item2) then inner(list, numb+RomanToNumberValue(item1+item2)) else inner([item2]@list, numb+RomanToNumberValue(item1))
            | item::list -> inner(list, numb + RomanToNumberValue(item))
            | _ -> numb 

        inner(romanNumeralStack, 0)




