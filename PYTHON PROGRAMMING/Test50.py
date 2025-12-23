# 50. PRINT THE FOLLOWING SERIES 0 1 4 9 16 25 36... N
def squareSeries(limit):
    for i in range (0, limit + 1):
        print(i*i, end=" ")
    print()
squareSeries(10)
squareSeries(20)