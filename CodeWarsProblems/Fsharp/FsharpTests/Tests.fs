module Tests 
    open CodeWarsProblems
    open System
    open Xunit
    open Fuchu
    //let preformTest(num, list) = 
    //    Assert.Equal("Should be equal: {num}", num, maxTriSum(list))

    //let preformTest(num, list) = 
    //    testCase ("Should be equal: " + num.ToString()) <| fun _ -> Assert.Equal("Should be equal: " + num.ToString(), num, maxTriSum(list))
        
    //let dotest (expect: int, ls: int list): unit =
    //      let actual = maxTriSum ls in
    //      //printfn "Actual %A"  actual
    //      //printfn "Expect %A "  expect
    //      Assert.Equal("", expect, actual)

    //let randomTests() =
    //    let rand = new Random()
    //    for i in 1..100 do 
    //        let newRandList = [ for i in 1..20 do rand.Next(-100, 100) ] @ [ rand.Next(0, 10); rand.Next(11, 50); rand.Next(51, 100) ]
    //        dotest(maxTriSum(newRandList), newRandList) 


    // let dotest (expect: int, ls: int list): unit =
    //   let actual = Problems.maxTriSum ls in
    //   //printfn "Actual %A"  actual
    //   //printfn "Expect %A "  expect
    //   Assert.Equal("", expect, actual)


              
    // let rand = Random()
              
    // let maxTriSumPrivateVersion (nums: int list) =
    //     nums 
    //     |> List.distinct
    //     |> List.sortDescending
    //     |> List.take 3
    //     |> List.reduce (fun x y -> x + y)
          
    // let randomTests() =
    //     for i in 1..100 do 
    //         let newRandList = [ for i in 1..20 do yield rand.Next(-100, 100) ] @ [ rand.Next(0, 10); rand.Next(11, 50); rand.Next(51, 100) ]
    //         dotest(maxTriSumPrivateVersion(newRandList), newRandList)
              
    // randomTests()
            

    // [<Fact>]
    // let ``MaxTriSum example test cases`` () =
    //     dotest(17, [3; 2; 6; 8; 2; 3])
    //     dotest(32, [2; 9; 13; 10; 5; 2; 9; 5])
    //     dotest(18, [2; 1; 8; 0; 6; 4; 8; 6; 2; 4])
    //     dotest(-9, [-3; -27; -4; -2; -27; -2])
    //     dotest(-33, [-14; -12; -7; -42; -809; -14; -12])
    //     dotest(232, [-13; -50; 57; 13; 67; -13; 57; 108; 67])
    //     dotest(41, [-7; 12; -7; 29; -5; 0; -7; 0; 0; 29])
    //     randomTests()

    let MyreverseString (s: string) = 
        if s.Length = 0 || s = null 
        then 
            s
        else 
            let str: string = s.ToCharArray() |> List.ofArray |> List.map (fun i -> i.ToString()) |> List.rev |>  List.reduceBack (fun  s1 s2 -> s1 + s2)
            str


    [<Fact>]
    let `` doubleInteger tests `` () =
        Assert.Equal("", 4, YouCantCodeSolution.doubleInteger(2))
        Assert.Equal("", 8, YouCantCodeSolution.doubleInteger(4))
        Assert.Equal("", -20, YouCantCodeSolution.doubleInteger(-10))
        Assert.Equal("", 0, YouCantCodeSolution.doubleInteger(0))
        Assert.Equal("", 200, YouCantCodeSolution.doubleInteger(100))


    [<Fact>]
    let `` Random Tests `` () =
        let rand = System.Random()
        let randomNumbs : List<int> = List.init 100 (fun _ -> rand.Next(-1000, 1000))

        for i in randomNumbs do
            let actual = YouCantCodeSolution.doubleInteger(i)
            let expected = i * 2
            Assert.Equal("", actual, expected)

    [<Fact>]
    let `` RandomTests `` () =
      let rand = System.Random()
      let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ   "
      for i in [1..100] do 
        let strLen = rand.Next(1, 100)
        let newStr = [ for j in 1..strLen do yield s[rand.Next(0, 20)].ToString() ] |> List.reduce((fun s1 s2 -> s1 + s2))
        Assert.Equal("", Problems.reverseString(newStr), MyreverseString(newStr))
            

    [<Fact>]
    let `` sqaureSum `` () =
        Assert.Equal("", 14, SquareSum.squareSum([ 1; 2; 3 ]))


    
    [<Fact>]
    let `` toCamelCase `` () =
        Assert.Equal("", "", Problems.toCamelCase "")
        // Assert.Equal("", "theStealthWarrior", toCamelCase "the_stealth_warrior")
        Assert.Equal("", "theStealthWarrior", Problems.toCamelCase "the_stealth_warrior")
        // Assert.Equal("", "TheStealthWarrior", toCamelCase "The-Stealth-Warrior")
        Assert.Equal("", "TheStealthWarrior", Problems.toCamelCase "The-Stealth-Warrior")


    [<Fact>]
    let `` friend List `` () =
        Assert.Equal("", Problems.friend ["Ryan"; "Kieran"; "Mark"] , Problems.friend ["Ryan"; "Mark"])


    [<Fact>]
    let `` StringSplit `` () = 
        Assert.Equal("", Problems.splitStrings("abcde"), ["ab"; "cd"; "e_"])
        Assert.Equal("", Problems.splitStrings("abcdef"), ["ab"; "cd"; "ef"])
        Assert.Equal("", Problems.splitStrings(""), [])