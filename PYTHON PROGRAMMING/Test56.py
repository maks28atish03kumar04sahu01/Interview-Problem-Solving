# 56. PRINT THE DIGITS OF A NUMBER (INPUT: 153 OUTPUT: 3 5 1)
def digitOfNum(ip):
    while ip != 0:
        rem = ip % 10
        print(rem, end=" ")
        ip //= 10
    print()
digitOfNum(153)
digitOfNum(1234)
digitOfNum(12345)