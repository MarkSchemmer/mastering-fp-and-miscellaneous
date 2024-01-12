module BreakCamelCase

    open NUnit.Framework
    open System

    let rand = System.Random()

    // My internal solution for random tests 
    let solution s:string = 
        let rec breakCase(oldString: string, newString: string) = 
            let strAr = oldString.ToCharArray() |> Array.map(fun i -> i.ToString()) |> Array.toList
            match strAr with
            | head::tail -> breakCase((tail |> String.concat ""), 
                                     (if head = head.ToUpper() then newString + " " + head else newString + head))
            | _ -> newString
        breakCase(s, "")

    let breakCamelCase s:string = 
        if s = null || s.ToString().Length = 0 
            then "" 
        else 
            let rec breakCase(oldString: string, newString: string, index: int) = 
                let strAr = oldString.ToCharArray() |> Array.map(fun i -> i.ToString()) |> Array.toList
                match strAr with
                | head::tail -> breakCase((tail |> String.concat ""), 
                                        (if head = head.ToUpper() && index <> 0 then newString + " " + head else newString + head), index+1)
                | _ -> newString
            breakCase(s, "", 0)

    let doTest (actual: string)(expected: string) =
        let act = breakCamelCase(actual)
        Assert.AreEqual(act, expected, $"expected = {expected} \n Actual = {act} \n Actual must equal expected")

    [<TestFixture>]
    [<Order(1)>]
    type SampleTests () =
        [<Test>]
        member this.LeadingStringLowerCase() =
            doTest "hellWorld" "hell World"
            doTest "howAreYouDoing" "how Are You Doing"
            doTest "something" "something"

    [<TestFixture>]
    [<Order(2)>]
    type TestCases () =
        [<Test>]
        member this.EmptyString() =
            doTest "" ""
        [<Test>]
        member this.breakingCamelCaseWithNull() =
            doTest null ""
        [<Test>]
        member this.LeadingStringLowerCase() =
            doTest "helloWorld" "hello World"
            doTest "howAreYouDoing" "how Are You Doing"
            doTest "something" "something"
        [<Test>]
        member this.LeadingStringUpperCase() =
            doTest "HelloWorld" "Hello World"
            doTest "Something" "Something"
            doTest "HowAreYouDoing" "How Are You Doing"



    