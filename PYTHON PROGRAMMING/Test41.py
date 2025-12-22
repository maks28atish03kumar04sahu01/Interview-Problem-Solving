# 41. FIBONACCI SERIES
def fibonacci(limit):
    num0 = 0
    num1 = 1
    temp = 0
    print(num0, num1, end=" ")
    for i in range (3, limit + 1):
        temp = num0 + num1
        num0 = num1
        num1 = temp
        print(temp,end=" ")
    print()
fibonacci(10)
fibonacci(20)