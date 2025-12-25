# 66. PERFECT SQUARE NUMBER
from math import *
def PerfectSquare(num):
    sqrtnum = floor(sqrt(num))
    flag = (sqrtnum * sqrtnum == num)
    if flag:
        print(f"{num} Is A Perfect Square Number.")
    else:
        print(f"{num} Is Not A Perfect Number.")
PerfectSquare(36)
PerfectSquare(15)
PerfectSquare(36)