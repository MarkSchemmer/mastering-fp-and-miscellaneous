
I'm doing 100 Codewars problems in the following languages

- C#
- F#
- TypeScript/JS
- Go
- C

When I complete a problem I paste a link with a description here, then I will post my solution in that language and I will update the tracker on how many problems I have solved.

# How pproblems solved: 5/100

## 1

[You Can't Code Under Pressure #1 -> completed in C](https://www.codewars.com/kata/53ee5429ba190077850011d4/solutions/c?filter=me&sort=best_practice&invalids=false)


## Solution

```c
int32_t double_integer(int32_t n) 
{
    return n * 2;
}
```

## 2

[You Can't Code Under Pressure #1 -> completed in JavaScript/TypeScript](https://www.codewars.com/kata/53ee5429ba190077850011d4/solutions/javascript)

```ts
function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
}
```


## 3

[You Can't Code Under Pressure #1 -> completed in C#](https://www.codewars.com/kata/53ee5429ba190077850011d4/solutions/csharp?filter=me&sort=best_practice&invalids=false)

```cs
public class Program 
{
    public static int DoubleInteger(int n)
    {
        return n * 2;
    }
}
```

Also please note, I will be calculating my analytics at the end of this chart. 

# 4

[You Can't Code Under Pressure #1 -> completed in F#](https://www.codewars.com/kumite/644b2c3c5de7d57901d5eb56?sel=644b2c3c5de7d57901d5eb56)

## F# translation

```fs


module ExampleKata 
  open System
  let doubleInteger (n: int) = n * 2

module ExampleTests

open ExampleKata
// NUnit is used to test F# 6.0.
open NUnit.Framework

open System

[<TestFixture>]
type FixedTests() =
    [<Test>]
    member this.TestOne() =
        Assert.AreEqual(2, doubleInteger 1)
        Assert.AreEqual(4, doubleInteger(2))
        Assert.AreEqual(8, doubleInteger(4))
        Assert.AreEqual(-20, doubleInteger(-10))
        Assert.AreEqual(0, doubleInteger(0))
        Assert.AreEqual(200, doubleInteger(100))
        
        
        
[<TestFixture>]
type RandomTests () =
    [<Test>]
    member this.TestTwo() =
      let rand = System.Random()
      let randomNumbs : List<int> = [ for i in 1..100 -> rand.Next(1, 1000) ] 
                                   |> List.map (fun (x : int) -> if x % 2 = 0 then x * -1 else x) 

      for i in randomNumbs do
          let actual = doubleInteger(i)
          let expected = i * 2
          Assert.AreEqual(actual, expected)

```

# 5

[You Can't Code Under Pressure #1 -> completed in GO]

```go

package kata

func DoubleInteger(i int) int {
  return i * 2
}

```