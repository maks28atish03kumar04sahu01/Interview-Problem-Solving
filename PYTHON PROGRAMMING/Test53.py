# 53. PRINT THE RANGE1 TO RANGE2 IN THE FORM OF (A^3)
def qubeRange(limit1, limit2):
    for i in range (limit1, limit2 + 1):
        print(i*i*i, end=" ")
    print()
qubeRange(10, 20)
qubeRange(50, 60)