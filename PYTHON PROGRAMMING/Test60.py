# 60. STRONG NUMBER
from math import *
def Strong(num):
    temp = 1
    NUM = num
    count = 0
    while num != 0:
        rem = num % 10
        for i in range (1, rem + 1):
            temp *= i
        count += temp
        temp = 1
        num = floor(num / 10)
    if NUM == count:
        print(f"{NUM} Is A Strong Number.")
    else:
        print(f"{NUM} Is Not A Strong Number.")
Strong(145)
Strong(265)