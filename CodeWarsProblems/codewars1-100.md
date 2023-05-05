
I'm doing 100 Codewars problems in the following languages

- C#
- F#
- TypeScript/JS
- Go
- C

When I complete a problem I paste a link with a description here, then I will post my solution in that language and I will update the tracker on how many problems I have solved.

# How pproblems solved: 11/100

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


# 6

[Convert a String to number -> completed in C](https://www.codewars.com/kata/544675c6f971f7399a000e79/solutions/c)

```c

#include <stdio.h>

int charGenerator (char c) {
    switch (c)
    {
        case '1': return 1;
        case '2': return 2;
        case '3': return 3;
        case '4': return 4;
        case '5': return 5;
        case '6': return 6;
        case '7': return 7;
        case '8': return 8;
        case '9': return 9;
        default: return 0;
    }
}

int calculateNthPower (int n) {
    if (n == 0) return 1;

    int constant = 10;
    int sum = 1;
    while (n > 0) {
        sum = sum * constant;
        n = n - 1;
    }
printf(" %d ", sum);
    return sum;
}



int string_to_number(const char *src) {
  
  int finalSum = 0;
  int indexCounter = 0;
  int i;

  for (i = strlen(src) - 1; i >= 0; i--) {
    printf("%c", src[i]);
     int nthPower = calculateNthPower(indexCounter);
     int getIntegerFromChar = charGenerator(src[i]);
     
     if (src[i] == '-') {
        finalSum = finalSum * -1;
     } else {
        finalSum = finalSum + (getIntegerFromChar * nthPower);
     }

     indexCounter = indexCounter + 1;
  }
printf("final solution here: %d", finalSum);
  return finalSum;
}


```

# 7 

[Remove First and Last Character](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/solutions/c)

```c

char* remove_char(char* dst, const char* src)
{
  /* src is the input string */
  /* your solution should write the result into dst and return it */  
  int len = (int) strlen(src);
  char *s2 = malloc((len) * sizeof(char));
  int i;
  for (i = 1; i < len; i++) {
    s2[i - 1] = src[i];
  }

  s2[len - 2] = '\0';
  strcpy(dst, s2);
  free(s2);
  return dst;
}

```

# 8 

[ASCII Total](https://www.codewars.com/kata/572b6b2772a38bc1e700007a/solutions/c)

```c

int uni_total(const char *s) {
  int sum = 0;
  int i;
  int code;
  int len = strlen(s);
  
  for (i = 0; i < len; i++) {
    code = s[i];
    sum += code;
  }
  
  return sum;
}

```


# 9 

[Geometry Basics: Distance between points in 2D](https://www.codewars.com/kata/58dced7b702b805b200000be)

```c

#include <math.h>

typedef struct Point {
    double x;
    double y;
} point;

double distance_between_points(point a, point b) {

    //  <----  hajime!
  return sqrt((pow(b.x - a.x, 2) + pow(b.y - a.y, 2)));
}

```

# 10

[
Function 1 - hello world](https://www.codewars.com/kata/523b4ff7adca849afe000035)

```c

//Write a function `greet` that returns "hello world!"

char* greet() {
  return "hello world!";
}

```

# 11

[Grasshopper - Personalized Message](https://www.codewars.com/kata/5772da22b89313a4d50012f7)

```c

#include <stdio.h>
#include <string.h>

int myStringCompare (char* str1, char* str2) {
  int idx = 0;
  int len1 = strlen(str1);
  int len2 = strlen(str2);

  if (len1 != len2) return -1;

  while (idx < len1) {
    if (str1[idx] != str2[idx]) return -1;

    idx++;
  }

  return 0;
}

const char* greet(const char *name, const char *owner) {
  if (myStringCompare(name, owner) == 0) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

```

# 12 - [Fake Binary](https://www.codewars.com/kata/57eae65a4321032ce000002d/solutions/c?filter=me&sort=best_practice&invalids=false)

```c

#include <stdio.h>

int charGenerator (char c) {
    switch (c)
    {
        case '1': return 1;
        case '2': return 2;
        case '3': return 3;
        case '4': return 4;
        case '5': return 5;
        case '6': return 6;
        case '7': return 7;
        case '8': return 8;
        case '9': return 9;
        default: return 0;
    }
}

void fakeBin(const char *digits, char *binary) {
  // Please place result in the memory pointed to by
  // the binary parameter. binary has enough memory to
  // accommodate the answer as well as the null-terminating
  // character.
  int len = strlen(digits);
  int counter = 0;
  while(counter < len) {
    int newDigit = charGenerator(digits[counter]);
    int newBinary = newDigit < 5 ? '0' : '1';
    binary[counter] = newBinary;
    counter++;
  }
  
 	binary[counter] = '\0';
}


```


# 13 - [Century From Year](https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/solutions/c?filter=me&sort=best_practice&invalids=false)


```c
#include <stdio.h>

int centuryFromYear(int year) 
{
  int b = 1;
  int base = 100;

  while ((base * (b+1)) <= year) {
    b++;
  }
  
  return year - (base * b) == 0 ? b : b+1;
}

```


# 14 - [Find Nearest sqaure number](https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/solutions/c?filter=me&sort=best_practice&invalids=false)

```c

#include <stdio.h>

int nearest_sq(int n)
{
  if (n == 1) { return 1; }
  if (n == 2) { return 1; }
  if (n == 3) { return 2; }
  
  int nn = 3;

  while (nn*nn <= n) {
    nn++;
  }

  if (nn*nn == n) return n;
  
  printf("nn = %d \n", nn);

  int upperN = nn;
  int lowerN = nn-1;

  int upperNDifference = (upperN*upperN) - n;
  printf("upperdifference = %d \n", upperNDifference);

  int lowerNDifference = n - (lowerN*lowerN);
  printf("lowerDifference = %d \n", lowerNDifference);

  return upperNDifference > lowerNDifference ? lowerN*lowerN : upperN*upperN;
}

```


# 15 - [String ends with?](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions/c?filter=me&sort=best_practice&invalids=false)

```c

#include <stdbool.h>
#include <stdio.h>

bool solution(const char *string, const char *ending)
{
    int len1 = strlen(string);
    int len2 = strlen(ending);
  
    if (len2 > len1) return false;

    int diff = len1 - len2;

    int counter2 = 0;

    while (diff < len1) {
      if (string[diff] != ending[counter2]) return false;

      counter2++;
      diff++;
    }

    return true;
}


```


# 16 - [Are you Playing Banjo](https://www.codewars.com/kata/53af2b8861023f1d88000832/solutions/c?filter=me&sort=best_practice&invalids=false)


```c

#include <stdio.h>
#include <string.h>

char *are_you_playing_banjo(const char *name) {
  char *playBanjo = " plays banjo";
  char *noBanjo = " does not play banjo";

  int nameLen = (int)strlen(name);
  int noBanjoLen = (int)strlen(noBanjo);

  char *str = malloc((nameLen + noBanjoLen) * sizeof(char));

  strcpy(str, name);
  
  char *banjo = name[0] == 'R' || name[0] == 'r' ? playBanjo : noBanjo;
  
  strcat(str, banjo);
  
  return str;
}

```


# 17 [Regex validate PIN code](https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/solutions/c?filter=me&sort=best_practice&invalids=false)

```c


bool properLen (char* pin) {
  int pinLen = strlen(pin);
  return pinLen == 4 || pinLen == 6 ? true : false; 
}


bool validChar (char c) {
    switch (c)
    {
        case '1': 
        case '2': 
        case '3': 
        case '4': 
        case '5': 
        case '6': 
        case '7': 
        case '8': 
        case '9': 
        case '0':
          return true;
        default: return false;
    }
}


bool validate_pin(const char *pin) {

    bool validPin = true;
    validPin &= properLen(pin);

    for (int i = 0; pin[i] != '\0'; i++) {
      validPin &= validChar(pin[i]);
    }

    return validPin;

}

```