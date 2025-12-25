# 69. PRIME NUMBERS FROM 0 TO N
from math import *
def Prime(num):
    flag = True
    for i in range(2, floor(sqrt(num + 1))):
        if num % i == 0: flag = False
    return flag
def PrimeSeries(limit):
    for i in range(2, limit + 1):
        if Prime(i):
            print(i, end=" ")
    print()
PrimeSeries(100)
PrimeSeries(200)