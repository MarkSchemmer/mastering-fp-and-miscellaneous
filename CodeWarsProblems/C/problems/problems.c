

#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdbool.h>

/*
    Convert a string to a number. 

    So I can iterate the string

    Then I take a char as the index starting at 0

    put that in a sub function 

    it will (input * 10^nth) where we pass in the input (number) and
    we pass n (nth) the place we are in the for loop.

*/

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



//Write a function `greet` that returns "hello world!"

char* greet() {
  return "hello world!";
}


typedef struct Point {
    double x;
    double y;
} point;

double distance_between_points(point a, point b) {

    //  <----  hajime!
    return sqrt((pow(b.x - a.x, 2) + pow(b.y - a.y, 2)));
}

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
     // printf("%c", src[i]);
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

/*

    - Make my own divider function
    - Make my own round up function




    Basically the logic will be a | b such that a = b*c

    also 

    a | b 

    b | c

    a | c

    Also when dividing 
*/
int centuryFromYear(int year) 
{
  int b = 1;
  int base = 100;

  while ((base * (b+1)) <= year) {
    b++;
  }
  
  return year - (base * b) == 0 ? b : b+1;
}

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



bool solution(const char *string, const char *ending)
{

    int len1 = strlen(string);
    int len2 = strlen(ending);

    int diff = len1 - len2;

    int counter2 = 0;

    while (diff < len1) {
      if (string[diff] != ending[counter2]) return false;

      counter2++;
      diff++;
    }

    return true;
}


char* string_concat(char* str1, char* str2) {
  int counter2 = 0;
  int str2Len = strlen(str2);
  int counter = strlen(str1);

  while (counter2 < str2Len) {
    str1[counter] = str2[counter2];
    counter++;
    counter2++;
  }

  return str1;
}

char *are_you_playing_banjo(const char *name) {
  char *playBanjo = " plays banjo";
  char *noBanjo = " does not play banjo";

  int nameLen = strlen(name);
  int noBanjoLen = strlen(noBanjo);

  char *newString = malloc((nameLen + noBanjoLen) * sizeof(char));
 
  char *str = string_concat(newString, name);

  return name[0] == 'R' || name[0] == 'r' ? string_concat(str, playBanjo) : string_concat(str, noBanjo);
}

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

int main()
{

    // int doubleFour = double_integer(2);
    // printf("2 doubled is 4  -> result %d ", doubleFour);
    string_to_number("1234");
}

