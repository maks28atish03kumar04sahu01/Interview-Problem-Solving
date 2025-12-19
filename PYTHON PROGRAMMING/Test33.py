# 33 PRINT THOSE NUMBER FROM RANGE1 TO RANGE2 WHICH ARE DIVISIBLE BY THE GIVEN TARGET
def func(limit1, limit2, target):
    for i in range(limit1, limit2 + 1):
        if(i % target == 0):
            print(i, end=" ")
    print()
func(10, 20, 3)
func(30, 50, 4)
func(60, 80, 7)