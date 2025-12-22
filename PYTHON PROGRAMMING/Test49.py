# 49. TERNARY OPERATOR
def TernaryOperator (num1, num2):
    res = (num1 > num2) if  f"{num1} Greater Thane {num2}" else f"{num2} Greater Than {num1}"
    return res
print(f"Res: {TernaryOperator(10, 5)}")
print(f"Res: {TernaryOperator(10, 20)}")