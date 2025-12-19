# 12. PRINT WHETHER THE NUMBER IS POSITIVE, NEGATIVE, OR ZERO
def func(num):
    if num > 0:
        print(f"{num} is positive number")
    elif num < 0:
        print(f"{num} is negative number")
    else:
        print(f"{num} value is zero")
func(12)
func(-12)
func(0)