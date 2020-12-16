module Tests

    open System
    open System.Collections
    open Xunit
    open Fuchu
    open Problems

    let preformTest(num, list) = 
        Assert.Equal("Should be equal: {num}", num, maxTriSum(list))

    let randomTests() =
        let rand = new Random()
        for i in 1..100 do 
            let newRandList = [ for i in 1..20 do rand.Next(-100, 100) ] @ [ rand.Next(0, 10); rand.Next(11, 50); rand.Next(51, 100) ]
            preformTest(maxTriSum(newRandList), newRandList) // Need to compare 
            

    [<Fact>]
    let ``MaxTriSum example test cases`` () =
        preformTest(17, [3; 2; 6; 8; 2; 3])
        preformTest(32, [2; 9; 13; 10; 5; 2; 9; 5])
        preformTest(18, [2; 1; 8; 0; 6; 4; 8; 6; 2; 4])
        preformTest(-9, [-3; -27; -4; -2; -27; -2])
        preformTest(-33, [-14; -12; -7; -42; -809; -14; -12])
        preformTest(232, [-13; -50; 57; 13; 67; -13; 57; 108; 67])
        preformTest(41, [-7; 12; -7; 29; -5; 0; -7; 0; 0; 29])
        randomTests()