# 45. nCr & nPr IN JAVA
def fact(ip):
    temp = 1
    for i in range(1, ip + 1):
        temp *= i
    return temp
n = int(input("Enter N Value: "))
r = int(input("Enter R Value: "))
nfact = fact(n)
rfact = fact(r)
nrfact = fact(n - r)
nCr = nfact / (rfact * nrfact)
nPr = nfact / nrfact
print(f"{n}C{r}: {nCr}")
print(f"{n}P{r}: {nPr}")