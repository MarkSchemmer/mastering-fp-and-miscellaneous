// ConsoleApplication1.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

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
    char d1 = charGenerator(nums[0]); char d2 = charGenerator(nums[1]), d3 = charGenerator(nums[2]), d4 = charGenerator(nums[3]),
        d5 = charGenerator(nums[4]), d6 = charGenerator(nums[5]), d7 = charGenerator(nums[6]), d8 = charGenerator(nums[7]), d9 = charGenerator(nums[8]),
        d10 = charGenerator(nums[9]);

    char newStr[] = {'(', d1, d2, d3, ')', ' ', d4, d5, d6, '-', d7, d8, d9, d10, '\0'};
    #pragma warning(suppress : 4996)
    strcpy(phnum, newStr);
    return phnum;
}

char* solution(int n) {
    char *romanNumeral = (char*) malloc( sizeof(char) * 1024 );
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
        else if (n >= 800) {
            strcat(romanNumeral, "DCCC");
            n = n - 800;
        }
        else if (n >= 700) {
            strcat(romanNumeral, "DCC");
            n = n - 700;
        }
        else if (n >= 600) {
            strcat(romanNumeral, "DC");
            n = n - 600;
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
        else if (n >= 80) {
            strcat(romanNumeral, "LXXX");
            n = n - 80;
        }
        else if (n >= 70) {
            strcat(romanNumeral, "LXX");
            n = n - 70;
        }
        else if (n >= 60) {
            strcat(romanNumeral, "LX");
            n = n - 60;
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
        else if (n >= 8) {
            strcat(romanNumeral, "VIII");
            n = n - 8;
        }
        else if (n >= 7) {
            strcat(romanNumeral, "VII");
            n = n - 7;
        }
        else if (n >= 6) {
            strcat(romanNumeral, "VI");
            n = n - 6;
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


int square_sum(const int values[/* count */], size_t count)
{
    int sum = 0;

    for (int i = 0; i < count; i++) {
        int n = values[i];
        sum += n * n;
    }
    
    return sum;
}

int main()
{   
    char newArr[15];
    const int nums[10] = { 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 };
    printf(create_phone_number(newArr, nums));
   
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
