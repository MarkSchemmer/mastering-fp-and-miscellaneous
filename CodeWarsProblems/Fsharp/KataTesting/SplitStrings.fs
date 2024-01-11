module SplitStrings

open NUnit.Framework

let splitStrings(s: string) = 
    let ar: List<string> = s.ToString().ToCharArray() 
                            |> Array.map (fun i -> i.ToString()) |> Array.toList

    let rec inner (a: List<string>, acc: List<string>) =
        match a with 
        | f::s::tail ->  inner(tail, acc@[f+s])
        | f::tail -> inner(tail, acc@[f+"_"])
        | _ -> acc 

    inner(ar, [])


let doTest (actual: string)(expected: List<string>) =
      let act = splitStrings(actual)
      Assert.AreEqual(splitStrings(actual), expected, $"expected = {expected} \n Actual = {act}")


[<TestFixture>]
[<Order(1)>]
type BasicTests () =

    member this.BasicTests() =
        doTest "abcde" ["ab"; "cd"; "e_"]