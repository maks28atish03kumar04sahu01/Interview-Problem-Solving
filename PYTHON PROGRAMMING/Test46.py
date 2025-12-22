# 46. PRINT AND CHECK WHETHER THE NUMBER IS PERFECT SQUARE OR NOT
from math import *
def perfectSquare (ip):
    sqrtip = floor(sqrt(ip))
    testip = sqrtip * sqrtip
    if testip == ip:
        print(f"{ip} Is A Perfect Square Number.")
    else:
        print(f"{ip} Is Not A Perfect Square Number.")
perfectSquare(4)
perfectSquare(8)
perfectSquare(16)
perfectSquare(69)
perfectSquare(100)