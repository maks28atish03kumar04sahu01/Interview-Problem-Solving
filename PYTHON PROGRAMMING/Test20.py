# 20 PRINT EVEN NUMBERS FROM RANGE1 TO RANGE2
def func(limit1, limit2):
    for i in range(limit1, limit2 + 1):
        if i % 2 == 0:
            print(i, end=" ")
    print()
func(10, 20)
func(30, 50)
func(60, 90)