# 67. AUTOMORPHIC NUMBER
from math import *
def Automorphic(num):
    if num < 0: num = -num
    squarenum = num * num
    temp = num
    count = 0
    while temp > 0:
        count += 1
        temp = floor(temp / 10)
    lastDigit = squarenum % floor(pow(10, count))
    if lastDigit == num:
        print(f"{num} Is An Automorphic Number.")
    else:
        print(f"{num} Is Not An Automorphic Number.")
Automorphic(25)
Automorphic(37)
