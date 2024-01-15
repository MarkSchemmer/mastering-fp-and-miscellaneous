module SimplePigLatin

    open NUnit.Framework
    open System
    open Microsoft.FSharp.Collections
// NUnit is used to test F# 6.0.

    let rand = System.Random()

    let pigIt(s:string):string = 
            let alpahbet = "abcdefghijklmnopqrstuvwxyz";
            let pigify(str:string):string = 
                if str.Length = 1 
                then 
                    if alpahbet.Contains(str.ToString().ToLower()) = true 
                        then 
                            $"{str}ay" 
                    else 
                        $"{str}"
                else 
                    let str_ = str.ToCharArray() |> Array.map(fun i -> i.ToString()) |> Array.toList
                    let f = str_[0]
                    let rest = str_ |> List.skip 1 
                    (rest |> String.concat "") + f + "ay"
            s.Split(" ") |> Seq.map (fun i -> pigify(i)) |> String.concat " "


    let randomCases = [
        ["Acta est fabula"; "ctaAay steay abulafay"];
        ["Barba non facit philosophum"; "arbaBay onnay acitfay hilosophumpay"];
        ["Cucullus non facit monachum"; "ucullusCay onnay acitfay onachummay"];
        ["Dura lex sed lex"; "uraDay exlay edsay exlay"];
        ["Errare humanum est"; "rrareEay umanumhay steay"];
        ["Fluctuat nec mergitur"; "luctuatFay ecnay ergiturmay"];
        ["Gutta cavat lapidem"; "uttaGay avatcay apidemlay"];
        ["Hic et nunc"; "icHay teay uncnay"];
        ["In vino veritas"; "nIay inovay eritasvay"];
        ["Lux in tenebris lucet"; "uxLay niay enebristay ucetlay"];
        ["Morituri nolumus mori"; "orituriMay olumusnay orimay"];
        ["Nunc est bibendum"; "uncNay steay ibendumbay"];
        ["O tempora o mores !"; "Oay emporatay oay oresmay !"];
        ["Panem et circenses"; "anemPay teay ircensescay"];
        ["Quis custodiet ipsos custodes ?"; "uisQay ustodietcay psosiay ustodescay ?"];
        ["Requiescat in pace"; "equiescatRay niay acepay"];
        ["Sic transit gloria mundi"; "icSay ransittay loriagay undimay"];
        ["Timeo Danaos et dona ferentes"; "imeoTay anaosDay teay onaday erentesfay"];
        ["Ultima necat"; "ltimaUay ecatnay"];
        ["Veni vidi vici"; "eniVay idivay icivay"]
    ]

    let doTest (input: string)(expected: string) =
        let actual = pigIt(input)
        Assert.AreEqual(actual, expected, $"Your solution failed when tested with input string s  = '{input}'")

    [<TestFixture>]
    [<Order(1)>]
    type TestSubmissions () =

        [<Test>]
        member this.EmptyString() =
            doTest "" ""
        [<Test>]
        member this.OneLetterString() =
            doTest "i" "iay"
            doTest "a" "aay"
        [<Test>]
        member this.TestSubmissions() =
            doTest "Pig latin is cool" "igPay atinlay siay oolcay"
            doTest "This is my string" "hisTay siay ymay tringsay"
            doTest "This is my string" "hisTay siay ymay tringsay"
        member this.singleWordString() =
            doTest "is" "siay"
            doTest "Pig" "igPay"
            doTest "my" "ymay"
            doTest "solution" "olutionsay"
            
            
    [<TestFixture>]
    [<Order(2)>]
    type RandomTestSubmissions () =
        [<Test>]
        member this.randomTests() =
            let randomBase = randomCases |> List.sortBy (fun i -> rand.Next())
            for i in randomBase do 
                let actual = i[0]
                let expected = i[1]
                doTest actual expected



    