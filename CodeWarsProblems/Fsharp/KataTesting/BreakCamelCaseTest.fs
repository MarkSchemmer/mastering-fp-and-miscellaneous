module BreakCamelCase

    open NUnit.Framework
    open System

    let rand = System.Random()

    let words = [ 
                "Nouns"; "Time"; "Person"; "Year"; "Way"; "Day"; "Thing";
                "Man"; "World"; "Life"; "Hand"; "Part"; "Child"; "Eye";
                "Woman"; "Place"; "Work"; "Week"; "Case"; "Point"; "Able";
                "Government"; "Company"; "Number"; "Group"; "Other"; "Same";
                "Fact"; "Verbs"; "Be"; "Have"; "Do"; "Say"; "Get"; "Make";
                "Go"; "Know"; "Take"; "See"; "Come"; "Think"; "Look"; "Want";
                "Give"; "Use"; "Find"; "Tell"; "Ask"; "Work"; "Seem"; "Feel";
                "Try"; "Leave"; "Call"; "Adjectives"; "Good"; "New"; "First";
                "Last"; "Long"; "Great"; "Little"; "Own"; "Problem"; "Old";
                "Right"; "Big"; "High"; "Different"; "Small"; "Large"; "Bad";
                "Next"; "Early"; "Young"; "Important"; "Few"; "Public" 
            ]
    // make method to randomly choose if word should be uppercase or not. 

    let shouldMakeUpperCase s:string = 
        let r = System.Random()
        let isUpperOrLower = r.Next(0, 1) = 0
        let ar = s.ToString().ToCharArray()
        if isUpperOrLower 
            then ar.[0] <- Convert.ToChar(ar.[0].ToString().ToUpper())

        ar |> Array.map(fun i -> i.ToString()) |> String.concat ""

    // My internal solution for random tests 
    let solution s:string = 
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

    [<TestFixture>]
    [<Order(3)>]
    type RandomTestCases () =
        [<Test>]
        member this.randomTestCases() =
            for i in 0..100 do
                let n = (rand.Next(0,4)) + 1
                let builder = [0..n] |> List.map(fun i -> shouldMakeUpperCase([rand.Next(0, 78)])) |> String.concat ""
                let expected = solution builder
                doTest builder expected



    