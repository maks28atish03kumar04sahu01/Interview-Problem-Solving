# 72. PRINT NUMBERS FROM 1 TO N AND DISPLAY THOSE NUMBERS WHICH ARE MULTIPLES OF A GIVEN NUMBER
def interview1(limit, target):
    for i in range(0, limit + 1):
        if i % target == 0:
            print(i, end=" ")
    print()
interview1(100, 14)
interview1(200, 35)