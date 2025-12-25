# 61. PERFECT NUMBER
def Perfect(num):
    sum = 0
    for i in range(1, num):
        if num % i == 0: sum += i
    if num == sum: 
        print(f"{num} Is A Perfect Number.")
    else:
        print(f"{num} Is Not A Perfect Number.")
Perfect(28)
Perfect(27)