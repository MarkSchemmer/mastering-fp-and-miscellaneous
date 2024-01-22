module SingleWordPigLatin
    open NUnit.Framework
    open System
    open System.Linq


    let rand = System.Random()
    (*

        Solution: 

            Pig Latin is an English language game where the goal is 
            to hide the meaning of a word from people not aware of the rules.

            So, the goal of this kata is to wite a function that encodes a single word string to pig latin.

            The rules themselves are rather easy:

            The word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".

            The word starts with a consonant -> move consonants from the beginning of 
            the word to the end of the word until the first vowel, then return it plus "ay".

            The result must be lowercase, regardless of the case of the input. 
            If the input string has any non-alpha characters, 
            the function must return None, null, Nothing (depending on the language).

            The function must also handle simple random strings and not just English words.

            The input string has no vowels -> return the original string plus "ay".

            For example, the word 
            "spaghetti" becomes "aghettispay" 
            because the first two letters ("sp") are consonants, 
            so they are moved to the end of the string and "ay" is appended.


            My JS solution I need to convert. 

            const pigLatin = (() => {
                let alpahbet = "abcdefghijklmnopqrstuvwxyz";
                let vowels = "aeiou";

                let hasNoneAlphaCharacter = (str) => {
                    return !(str.split("").every(s => alpahbet.includes(s)));
                }

                let isVowel = (str) => {
                    return vowels.includes(str);
                }

                let hasNoVowels = (str) => {
                    let hasAnyVowels = str.split("").some(s => vowels.includes(s));
                    return hasAnyVowels === false;
                }

                let sol = (s, newStr) => {
                    // take str characters until we hit a vowel... 
                    // Then concat 
                    let [nextChar, ...rest] = s.split("");
                    return isVowel(nextChar) ? nextChar + (rest.join("")) + newStr + "ay" : sol(rest.join(""), newStr + nextChar);
                }

                return s => {
                    s = s.toLowerCase();
                    let [f, ...rest] = s.split("");
                    return hasNoneAlphaCharacter(s) ? null 
                    : isVowel(f) ? s + "way" 
                    : hasNoVowels(s) ? s + "ay" 
                    : sol(s, "");
                }
            })();
    *)

    let shouldMakeUpperCase(s:string):string = 
        let r = System.Random()
        let isUpperOrLower = r.Next(0, 1) = 0
        let ar = s.ToString().ToCharArray()
        if isUpperOrLower 
            then ar.[0] <- Convert.ToChar(ar.[0].ToString().ToUpper())

        ar |> Array.map(fun i -> i.ToString()) |> String.concat ""
    let characterList = "abcdefghijklmnopqrstuvwxyz123WZ[ZX]ZY{ZAB!CDZ@ZEZF#HI$JK%LM^NO&QR*S(T)UV".ToCharArray() |> Array.map (fun i -> i.ToString()) |> Array.toList 
    let makeRandomWord():string = 
         let range = rand.Next(1, 15)
         let word = Enumerable.Range(0, range) |> Seq.map(fun i -> characterList[rand.Next(0, 72)]) |> String.concat ""
         word 
    let makeRandomTestCase():string = 
        let randWord = makeRandomWord()
        shouldMakeUpperCase(randWord).Trim(' ')
        

    let alpahbet = "abcdefghijklmnopqrstuvwxyz";
    let vowels = "aeiou";
    let hasNoneAlphaCharacter(str:string) =
         let hasAnyNoneAlphaCharacters = str.ToCharArray() |> Array.forall(fun i -> alpahbet.Contains(i.ToString()))
         not hasAnyNoneAlphaCharacters
    let isVowel(str:string) =
        vowels.Contains(str)
    let hasNoVowels(str:string) =
        let ar = str.ToCharArray() |> Array.map(fun i -> i.ToString()) |> Array.toList
        ar |> List.forall(fun i -> vowels.Contains(i.ToString()) = false)
    let rec sol(str:string, newStr) =
        let ar = str.ToCharArray() |> Array.map(fun i -> i.ToString()) |> Array.toList
        match ar with // nextChar + (rest.join("")) + newStr + "ay" 
        | nextChar::rest when isVowel(nextChar) -> nextChar + (rest |> String.concat "") + newStr + "ay"
        | nextChar::rest -> sol((rest |> String.concat ""), newStr + nextChar)
        | _ -> newStr
    let pigLatin(str:string) =
        let ar = str.ToCharArray() |> Array.map(fun i -> i.ToString()) |> Array.toList
        let rec sol(str:string, newStr) =
            let ar = str.ToCharArray() |> Array.map(fun i -> i.ToString()) |> Array.toList
            match ar with // nextChar + (rest.join("")) + newStr + "ay" 
            | nextChar::rest when isVowel(nextChar) -> nextChar + (rest |> String.concat "") + newStr + "ay"
            | nextChar::rest -> sol((rest |> String.concat ""), newStr + nextChar)
            | _ -> newStr
        match ar with
        | str when hasNoneAlphaCharacter((str |> String.concat "").ToLower()) -> null 
        | c::tail when isVowel(c.ToString()) -> str.ToLower() + "way"
        | s when hasNoVowels(str.ToLower()) -> str.ToLower() + "ay"
        | _ -> sol(str.ToLower(), "")

    let referenceSolution(str:string) =
        let ar = str.ToCharArray() |> Array.map(fun i -> i.ToString()) |> Array.toList
        let rec sol(str:string, newStr) =
            let ar = str.ToCharArray() |> Array.map(fun i -> i.ToString()) |> Array.toList
            match ar with // nextChar + (rest.join("")) + newStr + "ay" 
            | nextChar::rest when isVowel(nextChar) -> nextChar + (rest |> String.concat "") + newStr + "ay"
            | nextChar::rest -> sol((rest |> String.concat ""), newStr + nextChar)
            | _ -> newStr
        match ar with
        | str when hasNoneAlphaCharacter((str |> String.concat "").ToLower()) -> null 
        | c::tail when isVowel(c.ToString()) -> str.ToLower() + "way"
        | s when hasNoVowels(str.ToLower()) -> str.ToLower() + "ay"
        | _ -> sol(str.ToLower(), "")

    let doTest (input: string)(expected: string) =
        let actual = pigLatin(input)
        Assert.AreEqual(actual, expected, $"Your solution failed when tested with input string s  = '{input}'")

    [<TestFixture>]
    [<Order(1)>]
    type SampleTests () =

        [<Test>]
        // should fail. 
        member this.SampleTestSubmissions() =
            doTest "map" "apmay"
            doTest "egg" "eggway"
            doTest "tes3t5" null 

    [<TestFixture>]
    [<Order(2)>]
    type TestSubmissions() =
        [<Test>]
        member this.wordWithUpperCase() =
            doTest "Hello" "ellohay"
            doTest "CCCC" "ccccay"
        [<Test>]
        member this.ContainerNoneAlpaCharacters() =
            doTest "tes3t5" null
            doTest "123" null
            doTest "ya1" null 
        [<Test>]
        member this.wordStartingwithVowel() =
            doTest "ay" "ayway"
        [<Test>]
        member this.wordStartingWithConsenant() =
            doTest "ya" "ayay"
            doTest "YA" "ayay"
            doTest "yaYAya" "ayayayay"
            doTest "YayayA" "ayayayay"


    [<TestFixture>]
    [<Order(3)>]
    type RandomTestSubmissions () =
        
        [<Test>]
        member this.RandomTestSubmissions() =
                for i in 1..1000 do 
                    let randomTestCase = makeRandomTestCase()
                    Console.WriteLine($"'{randomTestCase}'")
                    let expected = referenceSolution(randomTestCase)
                    doTest randomTestCase expected
