
I'm doing 100 Codewars problems in the following languages

- C#
- F#
- TypeScript/JS
- Rust
- C -> 25 problems

When I complete a problem I paste a link with a description here, then I will post my solution in that language and I will update the tracker on how many problems I have solved.

# How pproblems solved: 31%

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


# 18 - [Transportation on vacation](https://www.codewars.com/kata/568d0dd208ee69389d000016/solutions/c?filter=me&sort=best_practice&invalids=false)


```c 

unsigned rental_car_cost(unsigned d)
{
    return (40u * d) + (d >= 7 ? -50u : d >= 3 ? -20u : 0);
}

```


# 19 - [Shortest  Word](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9)

```c

#include <sys/types.h>
#include <string.h>
#include <stdio.h>


ssize_t find_short(const char *s)
{
  int digitCounter = 0;
  int shortestCounter = 0;
  int len = (int)strlen(s);
  for (int i = 0; i < len; i++) {
    if (s[i] != ' ') {
      digitCounter = digitCounter + 1;
    } else {
      if (shortestCounter == 0) {
        shortestCounter = digitCounter;
      } else {
        if (digitCounter < shortestCounter) {
          shortestCounter = digitCounter;
        }
      }
      
      digitCounter = 0;
    } 
  }
  
  if (digitCounter < shortestCounter || shortestCounter == 0) {
    shortestCounter = digitCounter; 
  }
  
  printf("%d", shortestCounter);
  return (long)shortestCounter;
}

// Better refactor below: 

ssize_t find_short(const char *s)
{
    int min = INT_MAX;
    char delim[] = " ";
    char *token = strtok((char*)s, delim);
    while(token != NULL) {
        int len = (int)strlen(token);
        if (min > len)
            min = len;
        token = strtok(NULL, delim);
    }
    return min;
}

```

# 20 - [Beginner - Lost Without a Map](https://www.codewars.com/kata/57f781872e3d8ca2a000007e)

```c

#include <stddef.h>
#include <stdio.h>

// return a *new, dynamically allocated* array with each element doubled.
int *maps(const int *arr, size_t size) {
  
  int arrLen = (int)size; 
  
  int *ar = malloc(arrLen * sizeof(int));
  
  for (int i = 0; i < arrLen; i++) {
    ar[i] = (int)(arr[i] * 2);
    printf("%d", ar[i]);
  }
  
  int * p = ar;
  
  printf("\n");
  
  return (p);
}

```


# 21 - [Is he gonna survive](https://www.codewars.com/kata/59ca8246d751df55cc00014c)

```c

#include <stdbool.h>
#include <stdint.h>

bool hero(uint32_t bullets, uint32_t dragons) {
  return dragons * 2 <= bullets ? true : false; 
}

```


# 22 - [Reversed sequence](https://www.codewars.com/kata/5a00e05cc374cb34d100000d)


```c


/* Note: allocate memory yourself */

#include <stdlib.h>

unsigned short *reverse_seq(unsigned short num)
{
    unsigned short * nums = malloc((num*20) * sizeof(short));
  
    int counter = 0;
    int n = num;
    while (n > 0) {
      nums[counter] = num - counter;
      n--;
      counter++;
    }
  
  return nums;
}


```


# 23 - [Round up to the next multiple of 5](https://www.codewars.com/kata/55d1d6d5955ec6365400006d)

```c
int rounder (int n, int incrementer) {
  while (n % 5 != 0) {
    n += incrementer;
  }
  
  return n;
}

int round_to_next5(int n) {
  
    if (n == 0 || n == -1) return 0;
  
    if (n == 5) return 5;
  
    
  
    int next5 = rounder(n, 1);
  
  
    return next5;

}

```

# 24 - [Double Char](https://www.codewars.com/kata/56b1f01c247c01db92000076)

```c
#include <string.h>
#include <stdlib.h>
#include <stdio.h>


char *double_char (const char *string, char *doubled)
{
  printf("%s \n", string);
  // char*newD = malloc(sizeof(doubled) * sizeof(char));
  int len = (int)strlen(string);
  int next = 1;
  for (int i = 0; i < len && string[i] != '\0'; i++, next += 2) {
    char c = string[i];
    doubled[next - 1] = c;
    doubled[next] = c;
  }
  //  *doubled = '\0'; // write to double
  // newD[next - 1] = '\0';
  // strcpy(doubled, newD);
  // free(newD);
  doubled[next - 1] = '\0'; 
  return doubled; // return it
}

```

# 25 - [Training JS #7: if..else and ternary operator](https://www.codewars.com/kata/57202aefe8d6c514300001fd)

```c
unsigned short sale_hotdogs(unsigned short n) {

     int multiplyer = n < 5 ? 100 : n >= 5 && n < 10 ? 95 : n >= 10 ? 90 : 100;

   return multiplyer * n;

}

```

# 26 - [Calculate average](https://www.codewars.com/kata/57a2013acf1fa5bfc4000921)

```c
#include <sys/types.h>
#include <string.h>
#include <limits.h>
#include <stdio.h>

double find_average(const double array[/* length */], unsigned length)
{
  if (array == NULL || length == NULL || length == 0) return 0.0;
  
  double sum = 0.0;
  
  int counter = 0;
  
  int len = (int)length;
  
  while(counter < len) {
    sum += array[counter];
    
    counter++;
  }
  
  return sum / len;
}

```

# 27 - [Keep Hydrated](https://www.codewars.com/kata/582cb0224e56e068d800003c)

```c
int Liters(double time) {
  return 0.5 * time;
}

```

# 28 - [Is a number a prime?](https://www.codewars.com/kata/5262119038c0985a5b00029f)

```c
#include <stdbool.h>
#include <math.h>
#include <stdio.h>

int size = 14;
int prime_arr[14] = { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 };


int divisibleByPrime(int num) {
  for (int i = 0; i < size; i++) {
    if (prime_arr[i] == num) { return 0;}
    if (num % prime_arr[i] == 0) {
      return 1;
    }
  }
  
  return 2; 
}

bool is_prime(int num)
{
    if (num < 0) { return false; }
    if (num == 1 || num == 0) { return false; }
    int memoTest = divisibleByPrime(num);
  
    if (memoTest == 0) {
      return true;
    }
  
    if (memoTest == 1) {
      return false;
    }

    int lower = (int)floor(sqrt(num));
  
    if (lower % 2 == 0) { lower = lower - 1; }

    for (int i = prime_arr[size-1] + 2; i <= lower; i += 2) {
        if (num % i == 0) { return false; }
    } 

    return true;
}

```

# 29 - [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83)

```c
#include <stdio.h>
#include <string.h>

char charGenerator(int c) {
    switch (c)
    {
        case 1: return '1';
        case 2: return '2';
        case 3: return '3';
        case 4: return '4';
        case 5: return '5';
        case 6: return '6';
        case 7: return '7';
        case 8: return '8';
        case 9: return '9';
        default: return '0';
    }
}

char* create_phone_number(char phnum[15], const int nums[10])
{
    char d1 = charGenerator(nums[0]); char d2 = charGenerator(nums[1]), d3 = charGenerator(nums[2]), 
    d4 = charGenerator(nums[3]), d5 = charGenerator(nums[4]), d6 = charGenerator(nums[5]), 
    d7 = charGenerator(nums[6]), d8 = charGenerator(nums[7]), d9 = charGenerator(nums[8]),
    d10 = charGenerator(nums[9]);

    char newStr[] = {'(', d1, d2, d3, ')', ' ', d4, d5, d6, '-', d7, d8, d9, d10, '\0'};
    #pragma warning(suppress : 4996)
    strcpy(phnum, newStr);
    return phnum;
}

```

# 30 - [Roman Numeral Encoder](https://www.codewars.com/kata/51b62bf6a9c58071c600001b)

```c
char* solution(int n) {
    char *romanNumeral = (char*) malloc( sizeof(char) * 102400 );
    int romanCounter = 0;
    while (n > 0) 
    {
        if (n >= 1000) {
            strcat(romanNumeral, "M");
            n = n - 1000;
        }
        else if (n >= 900) {
            strcat(romanNumeral, "CM");
            n = n - 900;
        }
        else if (n >= 500) {
            strcat(romanNumeral, "D");
            n = n - 500;
        }
        else if (n >= 400) {
            strcat(romanNumeral, "CD");
            n = n - 400;
        }
        else if (n >= 100) {
            strcat(romanNumeral, "C");
            n = n - 100;
        }
        else if (n >= 90) {
            strcat(romanNumeral, "XC");
            n = n - 90;
        }
        else if (n >= 50) {
            strcat(romanNumeral, "L");
            n = n - 50;
        }
        else if (n >= 40) {
            strcat(romanNumeral, "XL");
            n = n - 40;
        }
        else if (n >= 10) {
            strcat(romanNumeral, "X");
            n = n - 10;
        }
        else if (n >= 9) {
            strcat(romanNumeral, "IX");
            n = n - 9;
        }
        else if (n >= 5) {
            strcat(romanNumeral, "V");
            n = n - 5;
        }
        else if (n >= 4) {
            strcat(romanNumeral, "IV");
            n = n - 4;
        }
        else if (n >= 1) {
            strcat(romanNumeral, "I");
            n = n - 1;
        }
    }

    return romanNumeral;
}

```

# 31 - [Square(n) Sum](https://www.codewars.com/kata/515e271a311df0350d00000f)

```js
const squareSum = numbers => numbers.reduce((a, c) => a += Math.pow(c, 2), 0);
```

# 32 - [Square(n) Sum](https://www.codewars.com/kata/515e271a311df0350d00000f)

```c

int square_sum(const int values[/* count */], size_t count)
{
	  int sum = 0;

    for (int i = 0; i < count; i++) {
        int n = values[i];
        sum += n * n;
    }
    
    return sum;
}

```

# 33 - [Square(n) Sum](https://www.codewars.com/kata/515e271a311df0350d00000f)

```fs

open System

let squareSum (numbers : int list) : int =
    let rec recSquareSum (numbs : int list, sum : int): int =
        match numbs with
        | head :: tail -> recSquareSum(tail, (sum + (head * head)))
        | [ ] -> sum 
    recSquareSum(numbers, 0)

```

# 34 - [Roman Numerals Encoder (Translation)](https://www.codewars.com/kumite/6466d977c6ec5c6f4d3e4bcd?sel=6466d977c6ec5c6f4d3e4bcd)

```fs

module RomanNumeralsTests
open System
open RomanNumerals
open NUnit.Framework

let rand = new System.Random()

let MySolution(numb: int): String = 
    let rec innerSolution(n, str): String = 
        match n with 
        | nn when nn >= 1000 -> innerSolution(nn - 1000, str + "M")
        | nn when nn >= 900 -> innerSolution(nn - 900, str + "CM")
        | nn when nn >= 500 -> innerSolution(nn - 500, str + "D")
        | nn when nn >= 400 -> innerSolution(nn - 400, str + "CD")
        | nn when nn >= 100 -> innerSolution(nn - 100, str + "C")
        | nn when nn >= 90 -> innerSolution(nn - 90, str + "XC")
        | nn when nn >= 50 -> innerSolution(nn - 50, str + "L")
        | nn when nn >= 40 -> innerSolution(nn - 40, str + "XL")
        | nn when nn >= 10 -> innerSolution(nn - 10, str + "X")
        | nn when nn >= 9 -> innerSolution(nn - 9, str + "IX")
        | nn when nn >= 5 -> innerSolution(nn - 5, str + "V")
        | nn when nn >= 4 -> innerSolution(nn - 4, str + "IV")
        | nn when nn >= 1 -> innerSolution(nn - 1, str + "I")
        | nn when nn <= 0 -> str
        | _ -> str
    innerSolution(numb, "")
    
[<TestFixture(Description = "Random Tests")>]
type RandomTests() =
    [<Test>]
    member this.Assertions() =
        for i in 1..100 do
          let newRand = rand.Next(1, 3000)
          Assert.AreEqual(MySolution(newRand), solution(newRand))


[<TestFixture(Description = "Fixed Tests")>]
type FixedTests() =
    [<Test>]
    member this.Assertions() =
        Assert.AreEqual("I", solution(1))
        Assert.AreEqual("IV", solution(4))
        Assert.AreEqual("M", solution(1000))
        Assert.AreEqual("MCMXC", solution(1990))
        Assert.AreEqual("MMVII", solution(2007))
        
[<TestFixture(Description = "Test Cases")>]
type TestCasesTests() =
    [<Test>]
    member this.Assertions() =
        Assert.AreEqual("I", solution(1))
        Assert.AreEqual("IV", solution(4))
        Assert.AreEqual("M", solution(1000))
        Assert.AreEqual("MCMXC", solution(1990))
        Assert.AreEqual("MMVII", solution(2007))
        Assert.AreEqual(solution(1004), "MIV")
        Assert.AreEqual(solution(2004), "MMIV")
        Assert.AreEqual(solution(3003), "MMMIII")
        Assert.AreEqual(solution(1991), "MCMXCI")
        Assert.AreEqual(solution(1992), "MCMXCII")
        Assert.AreEqual(solution(2091), "MMXCI")
        Assert.AreEqual(solution(1996), "MCMXCVI")
        Assert.AreEqual(solution(2843), "MMDCCCXLIII")
        Assert.AreEqual(solution(964), "CMLXIV")
        Assert.AreEqual(solution(345), "CCCXLV")
        Assert.AreEqual(solution(979), "CMLXXIX")
        Assert.AreEqual(solution(746), "DCCXLVI")
        Assert.AreEqual(solution(390), "CCCXC")
        Assert.AreEqual(solution(376), "CCCLXXVI")
        Assert.AreEqual(solution(189), "CLXXXIX")

```

# 35 - [Roman Numerals Decoder](https://www.codewars.com/kata/51b6249c4612257ac0000005)

```fs

    let RomanToNumberValue(v: string): int =
        match v with 
        | "I" -> 1
        | "IV" -> 4
        | "V" -> 5
        | "IX" -> 9
        | "X" -> 10
        | "XL" -> 40
        | "L" -> 50
        | "XC" -> 90
        | "C" -> 100
        | "CD" -> 400
        | "D" -> 500
        | "CM" -> 900
        | "M" -> 1000
        | _ -> 0

    let determineNextValues(str1: string, str2: string): bool =
        let n1 = RomanToNumberValue(str1)
        let n3 = RomanToNumberValue(str1+str2)
        if n3 <> 0 then true else false  



    let FromRoman (romanNumeral: string): int = 
        let romanNumeralStack: string list = romanNumeral.ToCharArray() 
                                             |> List.ofArray |> List.map (fun i -> i.ToString())
        
        let rec inner(stack: List<string>, numb: int): int = 
            match stack with
            | item1::item2::list -> if determineNextValues(item1, item2) 
                                    then inner(list, numb+RomanToNumberValue(item1+item2)) 
                                    else inner([item2]@list, numb+RomanToNumberValue(item1))
            | item::list -> inner(list, numb + RomanToNumberValue(item))
            | _ -> numb 

        inner(romanNumeralStack, 0)

```

# 36 - [Roman Numeral Helper](https://www.codewars.com/kata/51b66044bce5799a7f000003)

```fs
open System
open System.Linq
open System.Collections


let RomanToNumberValue(v: string): int =
    match v with 
    | "I" -> 1
    | "IV" -> 4
    | "V" -> 5
    | "IX" -> 9
    | "X" -> 10
    | "XL" -> 40
    | "L" -> 50
    | "XC" -> 90
    | "C" -> 100
    | "CD" -> 400
    | "D" -> 500
    | "CM" -> 900
    | "M" -> 1000
    | _ -> 0

let determineNextValues(str1: string, str2: string): bool =
    let n1 = RomanToNumberValue(str1)
    let n3 = RomanToNumberValue(str1+str2)
    if n3 <> 0 then true else false  

let FromRoman (romanNumeral: string) = 
    let romanNumeralStack: string list = romanNumeral.ToCharArray() |> List.ofArray |> List.map (fun i -> i.ToString())

    let rec inner(stack, numb): int = 
        match stack with
        | item1::item2::list -> if determineNextValues(item1, item2) then inner(list, numb+RomanToNumberValue(item1+item2)) else inner([item2]@list, numb+RomanToNumberValue(item1))
        | item::list -> inner(list, numb + RomanToNumberValue(item))
        | _ -> numb 

    inner(romanNumeralStack, 0)

let ToRoman (numb: int): String = 
    let rec innerSolution(n, str): String = 
        match n with 
        | nn when nn >= 1000 -> innerSolution(nn - 1000, str + "M")
        | nn when nn >= 900 -> innerSolution(nn - 900, str + "CM")
        | nn when nn >= 500 -> innerSolution(nn - 500, str + "D")
        | nn when nn >= 400 -> innerSolution(nn - 400, str + "CD")
        | nn when nn >= 100 -> innerSolution(nn - 100, str + "C")
        | nn when nn >= 90 -> innerSolution(nn - 90, str + "XC")
        | nn when nn >= 50 -> innerSolution(nn - 50, str + "L")
        | nn when nn >= 40 -> innerSolution(nn - 40, str + "XL")
        | nn when nn >= 10 -> innerSolution(nn - 10, str + "X")
        | nn when nn >= 9 -> innerSolution(nn - 9, str + "IX")
        | nn when nn >= 5 -> innerSolution(nn - 5, str + "V")
        | nn when nn >= 4 -> innerSolution(nn - 4, str + "IV")
        | nn when nn >= 1 -> innerSolution(nn - 1, str + "I")
        | nn when nn <= 0 -> str
        | _ -> str
    innerSolution(numb, "")

```

# 37 - [Roman Numerals](https://www.codewars.com/kata/59ea10e87729993f87001647)

```js

const romanToNumeral = (romanNumeral) => {

    let map = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L" : 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000 
    };
    let sum = 0;
    let r = romanNumeral.split("");
    while (r.length > 0) {
        let [f, s, ...res] = r;
        
        if (f && s && f+s in map) {
            sum = sum + map[f+s];
            r = res;
        } else {
            sum = sum + map[f];
            r = s === undefined ? [] : [s, ...res]; 
        }
    }

    return sum;
}

Object.setPrototypeOf(Number.prototype, new Proxy({}, {
  get(target, prop, receiver) {
    let end = romanToNumeral(prop);
    return [ ...Array(end).keys()]
  }
}));

```

# 38 - [PaginationHelper](https://www.codewars.com/kata/515bb423de843ea99400000a)

```cs

using System;
using System.Collections.Generic;
using System.Linq;

public class ComplexItem<T>
    {
        public T item;
        public Guid ID;

        public ComplexItem(T item)
        {
            this.item = item;
            this.ID = Guid.NewGuid();
        }
    }

    public class PaginationHelper<T>
    {


        public class Page<T>
        {
            public int pageNumber;
            public List<ComplexItem<T>> itemsOnPage;

            public Page(int pgNumb, List<ComplexItem<T>> items)
            {
                this.pageNumber = pgNumb;
                this.itemsOnPage = items;
            }
        }

        // TODO: Complete this class

        /// <summary>
        /// Constructor, takes in a list of items and the number of items that fit within a single page
        /// </summary>
        /// <param name="collection">A list of items</param>
        /// <param name="itemsPerPage">The number of items that fit within a single page</param>
        /// 

        private IList<ComplexItem<T>> list;
        private List<Page<T>> pages = new List<Page<T>>();
        private int itemsPerPage;
        public PaginationHelper(IList<T> collection, int itemsPerPage)
        {
            this.list = collection.Select((T i) => new ComplexItem<T>(i)).ToList();
            this.itemsPerPage = itemsPerPage;


            this.pages = this.generatePages(this.list);
        }

        private List<Page<T>> generatePages<T>(IList<ComplexItem<T>> l)
        {
            List<Page<T>> pgs = new List<Page<T>>();
            int pageNumb = 1;
            while (l.Count > 0)
            {
                var takingPart = l.Take(this.itemsPerPage).ToList();
                var nextPart = l.Skip(this.itemsPerPage);

                pgs.Add(new Page<T>(pageNumb, takingPart));


                pageNumb = pageNumb + 1;
                l = nextPart.ToList();
            }

            return pgs;
        } 

        /// <summary>
        /// The number of items within the collection
        /// </summary>
        public int ItemCount
        {
            get
            {
                return this.list.Count;
            }
        }

        /// <summary>
        /// The number of pages
        /// </summary>
        public int PageCount
        {
            get
            {
                return this.pages.Count;
            }
        }

        /// <summary>
        /// Returns the number of items in the page at the given page index 
        /// </summary>
        /// <param name="pageIndex">The zero-based page index to get the number of items for</param>
        /// <returns>The number of items on the specified page or -1 for pageIndex values that are out of range</returns>
        public int PageItemCount(int pageIndex)
        {
            try
            {
                return this.pages[pageIndex].itemsOnPage.Count;
            } 
            catch(Exception e)
            {
                return -1;
            }
        }

        /// <summary>
        /// Returns the page index of the page containing the item at the given item index.
        /// </summary>
        /// <param name="itemIndex">The zero-based index of the item to get the pageIndex for</param>
        /// <returns>The zero-based page index of the page containing the item at the given item index or -1 if the item index is out of range</returns>
        public int PageIndex(int itemIndex)
        {
            try
            {
                ComplexItem<T> itemToFind = this.list[itemIndex];

                // if (itemToFind == null) { throw new Exception(""); } 

                var pageItem = this.pages.FirstOrDefault((Page<T> pg) =>
                {
                    return pg.itemsOnPage.Any((ComplexItem<T> item) => {
                        ComplexItem<T> i = item;
                        if (i == null) { return false; }

                        return i.ID.Equals(itemToFind.ID);
                     });
                });

                // if (pageItem == null) { throw new Exception("");  }

                return pageItem.pageNumber - 1;
            } 
            catch (Exception e)
            {
                return -1;
            }
        }
    }

```

# 39 -  [PaginationHelper - (JavaScript) - Incomplete](https://www.codewars.com/kata/515bb423de843ea99400000a)

```js


function e7()
{
  var lut = []; for (var i=0; i<256; i++) { lut[i] = (i<16?'0':'')+(i).toString(16); }
    var d0 = Math.random()*0xffffffff|0;
    var d1 = Math.random()*0xffffffff|0;
    var d2 = Math.random()*0xffffffff|0;
    var d3 = Math.random()*0xffffffff|0;
    return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+
    lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+
    lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
    lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
}

class ComplexItem {
    constructor(item) {
        this.item = item;
		    this.Id = e7(); 
    }
}

class Page {
	constructor(items, pgNumb) {
		this.items = items;
		this.pgNumb = pgNumb;
	}
}

 class PaginationHelper {

	constructor(collection, itemsPerPage) {
		// The constructor takes in an array of items and a integer indicating how many
		// items fit within a single page
    this.c = [ ...collection ];
		this.list = collection.map((i) => new ComplexItem(i));
		this.itemsPerPage = itemsPerPage;
		this.pages = this.generatePages([ ...this.list ], this.itemsPerPage); 
	}

	generatePages = (l, itemsPerPage) => {
		
		let pages = [];
		let page = 0;

		while (l.length > 0) {
			let take = [...l].splice(0, itemsPerPage);
			l = [...l].splice(itemsPerPage);
      if (take.length > 0)
			  pages.push(new Page(take, page));
			page = page + 1;
		}

		return pages;
	}

	itemCount() {
	// returns the number of items within the entire collection
    // console.log("mark here. ");
		return this.c.length;
	}

	pageCount() {
    // console.log(this.pages);
	// returns the number of pages
		return this.pages.length; 
	}

	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
		try {
      console.log("pageIndex: ", pageIndex);
      if (pageIndex < 0) {
        return -1;
      }
			let complexItem = this.pages[pageIndex].items.length; 
			return complexItem;
		} catch(e) {
			return -1;
		}
	}

	pageIndex(itemIndex) {
    // console.log(itemIndex);
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
		try {
			let item = this.list[itemIndex];
      
      console.log("pageIndex: ", item.Id);

			let pageWithItem = this.pages.filter(pg => {
        return pg.items.some(i => i.Id === item.Id);
      });
      // if (pageWithItem === null || pageWithItem === undefined)
      //     return -1;
      
      // console.log("page with item: ", pageWithItem);

			return pageWithItem[0].pgNumb;
		}
		catch(e) {
			return -1;
		}
	}
}

```

# 40 -  [PaginationHelper - (F#)](https://www.codewars.com/kata/515bb423de843ea99400000a)

```fs


```



# 41 -  [Reversed Words - (JS)](https://www.codewars.com/kata/51c8991dee245d7ddf00000e)

```js
  function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }
```



# 42 -  [Reversed Words - (C#)](https://www.codewars.com/kata/51c8991dee245d7ddf00000e)

```cs
  using System;
  using System.Linq;

  public class Kata
  {
    public static string ReverseWords(string str)
    {
      return (
      str.Split(' ')
      .Reverse()
      .Aggregate("", (acc, cur) => acc + cur + " ")
      )
      .Trim(' ');
    }
  }
```


# 43 -  [Reversed Words - (F#)](https://www.codewars.com/kata/51c8991dee245d7ddf00000e)

```fs
let reverseWords (str: string) =
    let list: List<string> = str.Split(' ') 
    |> List.ofArray |> List.rev
    let l: string = list 
    |> List.reduceBack  (fun s1 s2 -> s1 + " " + s2) 
    l
```


# 44 - [Reversed Words - (C)](https://www.codewars.com/kata/51c8991dee245d7ddf00000e)

```c

 



```


# 45 - [Reverse Strings - (JavaScript)](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)

```js

let solution = s => s.split('').reverse().join('');

```

# 46 - [Reverse Strings - (C#)](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)

```cs

using System;
using System.Linq;

public static class Kata
{
  public static string Solution(string s) 
  {
    return s.ToCharArray().Reverse().Aggregate("", (a, c) => a + c);
  }
}

```

# 47 - [Reverse Strings - (F#)](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)

```fs
module Kata
    open System
    open System.Linq
    open System.Collections
    
    let reverseString (s: string) =
        if s.Length = 0 || s = null 
        then 
            s
        else 
            let str: string = s.ToCharArray() 
            |> List.ofArray 
            |> List.map (fun i -> i.ToString()) 
            |> List.rev 
            |>  List.reduceBack (fun  s1 s2 -> s1 + s2)
            str

```

# 48 - [Reverse Strings - (C)](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)

```c
#include <stdio.h>
#include <string.h>

char *strrev (char *string)
{
    int sLenEnd = strlen(string) - 1;
    int start = 0;
    // char* temp[] = "";

    while (sLenEnd > start) 
    {
        char * temp = string[start];

        string[start] = string[sLenEnd];
        string[sLenEnd] = temp;

        sLenEnd = sLenEnd - 1;
        start = start + 1;
    }

    return string;
}

```



# 49 - [Two Oldest Ages - (JavaScript)](https://www.codewars.com/kata/511f11d355fe575d2c000001)

```js
let slowSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] < arr[j]) {
				let temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		}
	}

	return arr;
}

let twoOldestAges = ages => {
	let sortedAges = slowSort(ages);
	let [first, second, ...rest] = sortedAges;
	return [ second, first ];
}

```

# 50 - [Two Oldest Ages - (C#)](https://www.codewars.com/kata/511f11d355fe575d2c000001)

```cs
  public static int[] TwoOldestAges(int[] ages)
  {
    var sortedAges = ages.OrderByDescending(x => x).ToArray();
    return new int[] { sortedAges[0], sortedAges[1] };
  }
```

# 51 - [Two Oldest Ages - (C)](https://www.codewars.com/kata/511f11d355fe575d2c000001)

```c

```

# 52 - [Two Oldest Ages - (F#)](https://www.codewars.com/kata/511f11d355fe575d2c000001)

```fs

```

