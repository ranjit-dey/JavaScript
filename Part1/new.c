#include<stdio.h>
int func(int, int);
int x = 20;
int main()
{
    printf("\n\n");
{
     x = 10;
    printf("%d", x);
}
x++;
printf("\n\n%d", x);
    printf("\n\n\n");
    return 0;
}