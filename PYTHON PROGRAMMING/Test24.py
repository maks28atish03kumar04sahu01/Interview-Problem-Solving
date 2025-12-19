# 24 PRINT SUM OF ALL NUMBERS BETWEEN RANGE1 TO RANGE2
def func(limit1, limit2):
    sum = 0
    for i in range(limit1, limit2 + 1):
        sum += i
    print(f"sum: {sum}")
func(20, 40)
func(50, 70)
func(90, 100)
func(0, 100)
