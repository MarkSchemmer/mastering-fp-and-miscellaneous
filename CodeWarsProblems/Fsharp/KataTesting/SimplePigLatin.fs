module SimplePigLatin
    open NUnit.Framework
    open System
    open System.Linq
    open Microsoft.FSharp.Collections
    // NUnit is used to test F# 6.0.
    let rand = System.Random()

    let removeNoneAlphaFromFront(s:string) =
        let alpahbet = "abcdefghijklmnopqrstuvwxyz";
        let ar = s.ToCharArray() |> Array.map(fun i -> i.ToString()) |> Array.toList
        let front = ar.TakeWhile(fun i -> alpahbet.Contains(i, StringComparison.OrdinalIgnoreCase) = false) |> String.concat ""
        let tempMiddle = ar.SkipWhile(fun i ->  alpahbet.Contains(i, StringComparison.OrdinalIgnoreCase) = false)
        let word = tempMiddle.TakeWhile(fun i -> alpahbet.Contains(i, StringComparison.OrdinalIgnoreCase) = true) |> String.concat ""
        let back = tempMiddle.SkipWhile(fun i -> alpahbet.Contains(i, StringComparison.OrdinalIgnoreCase) = true) |> String.concat ""
        (front, word, back)
    let pigIt(s:string):string = 
            if String.IsNullOrEmpty(s) 
            then 
                s
            else  
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
                        let (front, word, back) = removeNoneAlphaFromFront(str)
                        let str_ = word.ToCharArray() |> Array.map(fun i -> i.ToString()) |> Array.toList
                        let f = str_[0]
                        let rest = str_ |> List.skip 1 
                        front + (rest |> String.concat "") + f + "ay" + back
                s.Split(" ") |> Seq.map (fun i -> pigify(i.Trim(' '))) |> String.concat " "


    let sol(s:string):string = 
            if String.IsNullOrEmpty(s) 
            then 
                s
            else  
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
                s.Split(" ") |> Seq.map (fun i -> pigify(i.Trim(' '))) |> String.concat " "

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
        [<Test>]
        member this.singleWordString() =
            doTest "is" "siay"
            doTest "Pig" "igPay"
            doTest "my" "ymay"
            doTest "solution" "olutionsay"
    (*

        word -> ordway
        trailing. -> railingtay.
        .leading -> .eadinglay
        (parens) -> (arenspay)
        (!"(£word)??") -> (!"(£ordway)??")

    *)
        [<Test>]
        member this.wordWithNoneAlphaCharacter() =
            doTest "word" "ordway"
            doTest ".leading" ".eadinglay"
            doTest "trailing." "railingtay."
            doTest "(parens)" "(arenspay)"
            doTest "(!\"(£word)??\")" "(!\"(£ordway)??\")"
    (*
         it should "pass random tests" in {
                import util.Random
                
                def makeRandomWord: String = 
                Iterator.fill(Random.between(1, 7))(Random.between('a', 'z' + 1).toChar).mkString
                
                def makeTestCase: (String, String) = 
                val words = Seq(makeRandomWord) ++ Seq.fill(Random.nextInt(5))(makeRandomWord.capitalize)
                (words.mkString, words.mkString(" "))
                
                Iterator.fill(100)(makeTestCase) foreach {
                (s, expected) =>
                    assert(breakCamelCase(s) == expected, s"for breakCamelCase(\"$s\")")
                }
            }
    *)
    let shouldMakeUpperCase(s:string):string = 
        let r = System.Random()
        let isUpperOrLower = r.Next(0, 1) = 0
        let ar = s.ToString().ToCharArray()
        if isUpperOrLower 
            then ar.[0] <- Convert.ToChar(ar.[0].ToString().ToUpper())

        ar |> Array.map(fun i -> i.ToString()) |> String.concat ""

    let alpahbet = "abcdefghijklmnopqrstuvwxyz".ToCharArray() |> Array.map (fun i -> i.ToString()) |> Array.toList 
    let makeRandomWord():string = 
         let range = rand.Next(1, 7)
         let word = Enumerable.Range(0, range) |> Seq.map(fun i -> alpahbet[rand.Next(0, 25)]) |> String.concat ""
         word 
    let makeRandomTestCase():string = 
        let wordRange = rand.Next(1, 5)
        let words = Enumerable.Range(0, wordRange) |> Seq.map (fun i -> 
                                                                    let randWord = makeRandomWord()
                                                                    shouldMakeUpperCase(randWord))
        ((words |> String.concat " ")).Trim(' ')

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
        [<Test>]
        member this.moreExtremeRandomTests() =
                for i in 1..100 do 
                    let randomTestCase = makeRandomTestCase()
                    // Console.WriteLine($"'{randomTestCase}'")
                    let expected = sol(randomTestCase)
                    doTest randomTestCase expected



    