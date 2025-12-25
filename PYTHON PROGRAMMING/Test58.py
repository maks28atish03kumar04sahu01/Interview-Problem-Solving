# 58. ARMSTRONG NUMBER
from math import *
def Armstrong(num):
    NUM = num
    res = num
    rem1 = 0
    rem2 = 0 
    count = 0 
    sum = 0
    while num != 0:
        rem1 = num % 10
        count += 1
        num //= 10
    while NUM != 0:
        rem2 = NUM % 10
        sum += int(pow(rem2, count))
        NUM //= 10
    if res == sum:
        print(f"{sum} Is An Armstrong Number.")
    else:
        print(f"{res} Is Not An Armstrong Number.")
Armstrong(153)
Armstrong(553)
Armstrong(1634)