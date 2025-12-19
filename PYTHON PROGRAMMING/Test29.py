# 29 PRINT MULTIPLICATION TABLE
def func(ip, target):
    for i in range(0, target + 1):
        print(f"{ip} * {i} = {ip * i}")
    print()
func(25, 20)
func(2, 30)