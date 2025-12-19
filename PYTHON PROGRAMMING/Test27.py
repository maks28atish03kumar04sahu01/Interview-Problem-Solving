# 27 PRINT SUM OF ALL ODD NUMBER BETWEEN 0 TO N
def func(limit):
    sum = 0
    for i in range(0, limit + 1):
        if i % 2 != 0:
            sum += i
            print(i,end=" ")
    print()
    print(f"sum: {sum}")
func(10)
func(20)
func(30)