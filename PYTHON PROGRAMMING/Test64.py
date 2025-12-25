# 64. FACTORS OF A NUMBER
def Factor(num):
    for i in range(1, num+1):
        if num % i == 0:
            print(i, end=" ")
    print()
Factor(14)
Factor(55)
Factor(100)