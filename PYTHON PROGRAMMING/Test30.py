# 30 PRINT WHETHER THE NUMBER IS DIVISIBLE BY THE GIVEN TARGET OR NOT
def func(ip, target):
    if ip % target == 0:
        print(f"{ip} is divisible by {target}")
    else:
        print(f"{ip} is not divisible by {target}")
func(36, 3)
func(18, 4)