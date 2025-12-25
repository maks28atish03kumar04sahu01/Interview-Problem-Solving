# 70. PRIME NUMBERS FROM RANGE1 TO RANGE2
from math import *
def Prime(num):
    flag = True
    for i in range(2, floor(sqrt(num + 1))):
        if num % i == 0: flag = False
    return flag
def PrimeSeries(limit1, limit2):
    for i in range(limit1, limit2 + 1):
        if Prime(i):
            print(i, end=" ")
    print()
PrimeSeries(100, 200)
PrimeSeries(500, 600)