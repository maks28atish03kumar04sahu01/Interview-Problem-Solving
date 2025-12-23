# 54. PRINT THE 0 TO N IN THE FORM OF (A^p)
from math import pow
def PowerBase(limit, power):
    for i in range (0, limit + 1):
        print(int(pow(i, power)), end=" ")
    print()
PowerBase(10, 3)
PowerBase(20, 4)