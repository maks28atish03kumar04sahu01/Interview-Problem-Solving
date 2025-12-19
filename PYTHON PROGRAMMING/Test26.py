# 26 PRINT SUM OF ALL EVEN NUMBER BETWEEN RANGE1 TO RANGE2
def func(limit1, limit2):
    sum = 0
    for i in range(limit1, limit2 + 1):
        if i % 2 == 0:
            sum += i
            print(i, end=" ")
    print()
    print(f"sum: {sum}")
func(10, 20)
func(30, 40)
func(0, 100)