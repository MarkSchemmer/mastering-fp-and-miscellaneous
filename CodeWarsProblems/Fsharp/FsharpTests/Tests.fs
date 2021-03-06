module Tests

    open System
    open Xunit
    open Fuchu
    open Problems

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


    let dotest (expect: int, ls: int list): unit =
      let actual = Problems.maxTriSum ls in
      //printfn "Actual %A"  actual
      //printfn "Expect %A "  expect
      Assert.Equal("", expect, actual)


              
    let rand = Random()
              
    let maxTriSumPrivateVersion (nums: int list) =
        nums 
        |> List.distinct
        |> List.sortDescending
        |> List.take 3
        |> List.reduce (fun x y -> x + y)
          
    let randomTests() =
        for i in 1..100 do 
            let newRandList = [ for i in 1..20 do yield rand.Next(-100, 100) ] @ [ rand.Next(0, 10); rand.Next(11, 50); rand.Next(51, 100) ]
            dotest(maxTriSumPrivateVersion(newRandList), newRandList)
              
    randomTests()
            

    [<Fact>]
    let ``MaxTriSum example test cases`` () =
        dotest(17, [3; 2; 6; 8; 2; 3])
        dotest(32, [2; 9; 13; 10; 5; 2; 9; 5])
        dotest(18, [2; 1; 8; 0; 6; 4; 8; 6; 2; 4])
        dotest(-9, [-3; -27; -4; -2; -27; -2])
        dotest(-33, [-14; -12; -7; -42; -809; -14; -12])
        dotest(232, [-13; -50; 57; 13; 67; -13; 57; 108; 67])
        dotest(41, [-7; 12; -7; 29; -5; 0; -7; 0; 0; 29])
        randomTests()
