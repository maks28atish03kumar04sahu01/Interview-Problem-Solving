# 44. FACTORIAL OF A NUMBER
def factorial(ip):
    temp = 1
    for i in range(1, ip + 1):
        temp *= i
    print(f"Factorial Of {ip} Is: {temp}")
factorial(5)
factorial(6)
factorial(10)