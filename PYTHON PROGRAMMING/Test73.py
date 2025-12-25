# 73. PRINT NUMBERS FROM RANGE1 TO RANGE2 AND DISPLAY THOSE NUMBERS WHICH ARE MULTIPLES OF A GIVEN NUMBER
def interview2(limit1, limit2, target):
    for i in range(limit1, limit2 + 1):
        if i % target == 0:
            print(i, end=" ")
    print()
interview2(100, 200, 35)
interview2(500, 800, 40)