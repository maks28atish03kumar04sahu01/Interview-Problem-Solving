# 63. PALINDROME NUMBER
from math import *
def Palindrome(num):
    NUM = num
    rev = 0
    while num != 0:
        rem = num % 10
        rev = (rev * 10) + rem
        num = floor(num / 10)
    if NUM == rev:
        print(f"{NUM} Is A Palindrome Number.")
    else:
        print(f"{NUM} Is Not A Palindrome Number.")
Palindrome(121)
Palindrome(153)