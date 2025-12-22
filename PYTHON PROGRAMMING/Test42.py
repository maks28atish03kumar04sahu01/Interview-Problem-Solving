# 42. NTH TERM OF FIBONACCI SERIES
def fibonaccin(limit):
    num0 = 0
    num1 = 1
    temp = 0
    for i in range(3, limit + 1):
        temp = num0 + num1
        num0 = num1
        num1 = temp
    print(f"{limit}th fibonacci number is: {temp}")
fibonaccin(10)
fibonaccin(20)