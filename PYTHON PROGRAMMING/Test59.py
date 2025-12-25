# 59. REVERSE NUMBER
from math import *
def Reverse(num):
    rev = 0
    NUM = num
    while num != 0:
        rem = num % 10
        rev = (rev * 10) + rem
        num = floor(num / 10)
    print(f"Reverse Of {NUM} Is: {rev}")
Reverse(123)
Reverse(1234)
Reverse(12345)