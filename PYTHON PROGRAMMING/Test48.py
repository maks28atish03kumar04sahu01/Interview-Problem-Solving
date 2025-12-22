# 48. PRINT PERFECT SQUARE NUMBERS FROM RANGE1 TO RANGE2
from math import *
def perfectSqaureRange(limit1, limit2):
    start = ceil(sqrt(limit1))
    i = start
    while(i * i <= limit2):
        print(i*i, end=" ")
        i += 1
    print()
perfectSqaureRange(100, 200)
perfectSqaureRange(0, 100)
perfectSqaureRange(100, 1000)