# 43. POWER & BASE (A^n)
from math import pow
def PowerBase(p, b):
    return pow(p, b)
print(int(PowerBase(2, 3)))
print(int(PowerBase(4, 3)))

# 44. ROOT OF A NUMBER (n√A)
from math import pow
def RootNumber(p, r):
    return pow(p, 1 / r)
print(int(RootNumber(8, 3)))
print(int(RootNumber(81, 3)))