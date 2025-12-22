# 47. PRINT PERFECT SQUARE NUMBERS FROM 0 TO N
def perfectSquareN(limit):
    i = 0
    while i * i <= limit:
        print(i*i, end=" ")
        i += 1
    print()
perfectSquareN(10)
perfectSquareN(100)