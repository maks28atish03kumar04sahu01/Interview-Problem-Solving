# 51. PRINT THE RANGE1 TO RANGE2 IN THR FORM OF (A^2)
def squareRange(limit1, limit2):
    for i in range (limit1, limit2 + 1):
        print(i*i, end=" ")
    print()
squareRange(10, 20)
squareRange(50, 60)