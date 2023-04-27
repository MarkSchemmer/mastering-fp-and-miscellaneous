#include <iostream>
#include <vector>
#include <string>

using namespace std;

int32_t double_integer(int32_t n) 
{
    return n * 2;
}

int main()
{

    int doubleFour = double_integer(2);
    printf("2 doubled is 4  -> result %d ", doubleFour);
}

