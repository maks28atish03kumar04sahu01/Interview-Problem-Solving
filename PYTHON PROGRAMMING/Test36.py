# 36 PRINT SUM OF THOSE NUMBER FROM 0 TO N WHICH ARE NOT DIVISIBLE BY THE GIVEN TARGET
def func(limit, target):
    sum = 0
    for i in range(0, limit + 1):
        if(i % target != 0):
            print(i,end=" ")
            sum += i
    print()
    print(f"sum: {sum}")
func(10, 3)
func(20, 4)
func(30, 7)