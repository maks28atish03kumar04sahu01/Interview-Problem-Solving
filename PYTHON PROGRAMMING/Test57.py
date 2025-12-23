# 57. PRINT THE DIGITS OF A NUMBER (INPUT: 153 OUTPUT: 1 5 3)
def digitofNum(ip):
    temp = 1
    while ip / temp >= 10:
        temp *= 10
    while temp > 0:
        print(int(ip / temp), end=" ")
        ip %= temp
        temp //= 10
    print()
digitofNum(123)
digitofNum(1234)
digitofNum(12345)