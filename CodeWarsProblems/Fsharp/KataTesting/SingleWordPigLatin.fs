module SingleWordPigLatin
    open NUnit.Framework
    open System
    open System.Linq

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
        match ar with
        | str when hasNoneAlphaCharacter((str |> String.concat "").ToLower()) -> null 
        | c::tail when isVowel(c.ToString()) -> str.ToLower() + "way"
        | s when hasNoVowels(str.ToLower()) -> str.ToLower() + "ay"
        | _ -> sol(str.ToLower(), "")

    let doTest (input: string)(expected: string) =
        let actual = pigLatin(input)
        Assert.AreEqual(actual, expected, $"Your solution failed when tested with input string s  = '{input}'")



    (*


         assert.strictEqual(pigLatin("map"), "apmay");
        assert.strictEqual(pigLatin("egg"), "eggway");
        assert.strictEqual(pigLatin("tes3t5"), null);


    *)
    [<TestFixture>]
    [<Order(1)>]
    type SampleTests () =

        [<Test>]
        // should fail. 
        member this.SampleTestSubmissions() =
            doTest "map" "apmay"
            doTest "egg" "eggway"
            doTest "tes3t5" null 