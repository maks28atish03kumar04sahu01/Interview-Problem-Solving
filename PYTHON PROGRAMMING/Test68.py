# 68. PRIME NUMBER
from math import *
def Prime(num):
    flag = True
    for i in range(2, floor(sqrt(num + 1))):
        if num % i == 0: flag = False
    if not flag:
        print(f"{num} Is Not A Prime Number.")
    else:
        print(f"{num} Is A Prime Number.")
Prime(29)
Prime(28)
Prime(101)
Prime(102)