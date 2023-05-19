
module RomanNumeralsTests
    open CodeWarsProblems
    open System
    open Xunit
    open Fuchu


    [<Fact>]
    let `` Sample test cases `` () =
        Assert.Equal("", "I", RomanNumerals.solution(1))
        Assert.Equal("", "IV", RomanNumerals.solution(4))
        Assert.Equal("", "M", RomanNumerals.solution(1000))
        Assert.Equal("", "MCMXC", RomanNumerals.solution(1990))
        Assert.Equal("", "MMVII", RomanNumerals.solution(2007))

    [<Fact>]
    let `` Test cases `` () = 
        Assert.Equal("", RomanNumerals.solution(1004), "MIV")
        Assert.Equal("", RomanNumerals.solution(2004), "MMIV")
        Assert.Equal("", RomanNumerals.solution(3003), "MMMIII")
        Assert.Equal("", RomanNumerals.solution(1991), "MCMXCI")
        Assert.Equal("", RomanNumerals.solution(1992), "MCMXCII")
        Assert.Equal("", RomanNumerals.solution(2091), "MMXCI")
        Assert.Equal("", RomanNumerals.solution(1996), "MCMXCVI")
        Assert.Equal("", RomanNumerals.solution(2843), "MMDCCCXLIII")
        Assert.Equal("", RomanNumerals.solution(964), "CMLXIV")
        Assert.Equal("", RomanNumerals.solution(345), "CCCXLV")
        Assert.Equal("", RomanNumerals.solution(979), "CMLXXIX")
        Assert.Equal("", RomanNumerals.solution(746), "DCCXLVI")
        Assert.Equal("", RomanNumerals.solution(390), "CCCXC")
        Assert.Equal("", RomanNumerals.solution(376), "CCCLXXVI")
        Assert.Equal("", RomanNumerals.solution(189), "CLXXXIX")
        



