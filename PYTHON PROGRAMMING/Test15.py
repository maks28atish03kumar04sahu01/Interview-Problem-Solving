# 15 PRINT THE LARGEST NUMBER BETWEEN THREE NUMBERS
def func(num1, num2, num3):
    if num1 > num2 and num1 > num3:
        print(f"{num1} greatest number between three number.")
    elif num2 > num1 and num2 > num3:
        print(f"{num2} greatest number between three number.")
    else:
        print(f"{num3} greatest number between three number.")
func(17, 15, 12)
func(12, 15, 13)
func(20, 22, 24)