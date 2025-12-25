# 74. HCF AND LCM OF TWO NUMBERS
from math import *
def HCFLCM(num1, num2):
    a = num1
    b = num2
    t = 0
    HCF = 0
    LCM = 0
    while b != 0:
        t = b
        b = a % b
        a = t
    HCF = a
    LCM = floor((num1 * num2) / HCF)
    print(f"LCM: {LCM}")
    print(f"HCF: {HCF}")
HCFLCM(12, 15)
HCFLCM(120, 160)