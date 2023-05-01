#include <iostream>
#include <vector>
#include <string>

using namespace std;


/*
    Convert a string to a number. 

    So I can iterate the string

    Then I take a char as the index starting at 0

    put that in a sub function 

    it will (input * 10^nth) where we pass in the input (number) and
    we pass n (nth) the place we are in the for loop.

*/

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

  for (i = sizeof(src) - 1; i >= 0; i--) {
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


int32_t double_integer(int32_t n) 
{
    return n * 2;
}

int main()
{

    // int doubleFour = double_integer(2);
    // printf("2 doubled is 4  -> result %d ", doubleFour);

    string_to_number("1234");
}

