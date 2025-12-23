# 55. PRINT THE RANGE1 TO RANGE2 IN THE FORM OF (A^p)
from math import pow
def PowerBaseRange(limit1, limit2, power):
    for i in range(limit1, limit2 + 1):
        print(int(pow(i, power)), end=" ")
    print()
PowerBaseRange(10, 20, 4)
PowerBaseRange(50, 60, 5)