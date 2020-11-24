#include <stdio.h>
#include <stddef.h>

void while_example () {
    int i = 0; 

    while (i < 25) {
        printf("%d \n", i);
        i = i + 1;
    }

    // end of program.
}

void print_vowel_in_str (char strArr[]) {
    // Need to loop through strArr
    int i = 0;
    for (i = 0; strArr[i] != '\0'; i++) {
        
        // Now we have the switch
        char chr = strArr[i];

        switch (chr) {
            case 'a':
            case 'A': 
                printf("A is a vowel at position %d ", i);
                break;
            case 'e':
            case 'E':
                printf("E is a vowel at position %d ", i);
                break;
            case 'i':
            case 'I':
                printf("I is a vowel at position %d ", i);
                break;
            case 'o':
            case 'O':
                printf("O is a vowel at position %d ", i);
                break;
            case 'u':
            case 'U':
                printf("U is a vowel at position %d ", i);
                break;
            
            default:
                printf("at position %d the letter %c is not a vowel ", i, chr);
        }
    }
}

int main (int argc, char *argv[])
{
    // int distance = 100;
    // printf("You are %d miles away. \n", distance);
    // charPosition('b');
    // while_example();

    // Let's test vowel print...

    char word[15] = { 'h', 'e', 'l', 'i', 'o', 'w', 'o', 'r', 'l', 'd', '\0' };

    print_vowel_in_str(word);

    return 0;
}

// Whtie loop example


// CW Link to problem: https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/c

// Make a char array from 'a' to 'z'

// const char aplphabet[26] = { '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' };

// const int charPosition (char c) {
//     int n = 0;
//     int i = 1;
//     for (i = 1; i < 26; i++) {
//         printf("the char is: %s \n", aplphabet[i]);
//     }
//     return 1;
// }

// const int* name_value(size_t n, const char *const words[n]) {
//   //  <----  hajime!
//   // Create an array and return index + 1. so a function which finds the character and returns index plus 1
//   // map through array and convert then multiply number by index + 1 positon and return int array.
// }