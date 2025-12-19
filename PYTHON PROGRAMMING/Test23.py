# 23 PRINT SUM OF ALL NUMBERS BETWEEN 0 TO N
def func(limit):
    sum = 0
    for i in range(0, limit + 1):
        sum += i
    print(f"Sum: {sum}")
func(10)
func(50)
func(100)