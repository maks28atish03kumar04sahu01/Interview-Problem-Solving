# 19 PRINT ODD NUMBERS FROM 0 TO N
def func(limit):
    for i in range(0, limit + 1):
        if i % 2 != 0:
            print(i, end=" ")
    print()
func(10)
func(20)
func(30)