# 62. SUM OF DIGITS OF A NUMBER
from math import *
def SumOfDigit(num):
    sum = 0
    NUM = num
    while num != 0:
        rem = num % 10
        sum += rem
        num = floor(num / 10)
    print(f"Sum Of Digits Of {NUM} Is: {sum}")
SumOfDigit(153)
SumOfDigit(123456789)