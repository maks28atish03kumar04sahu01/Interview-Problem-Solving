# 52. PRINT THE THE FOLLOWING SERIES 0 1 8 27 64 125 216... N
def qubeSeries(limit):
    for i in range (0, limit + 1):
        print(i*i*i, end=" ")
    print()
qubeSeries(10)
qubeSeries(20)