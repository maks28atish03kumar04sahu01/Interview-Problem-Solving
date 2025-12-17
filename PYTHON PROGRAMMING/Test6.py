# 6. RETURNING MULTIPLE VALUES IN A FUNCTION
def multFunc(ip1, ip2):
    Add = ip1 + ip2
    Sub = ip1 - ip2
    Mult = ip1 * ip2
    Div = ip1 / ip2
    Mod = ip1 % ip2
    return Add, Sub, Mult, Div, Mod

add, sub, mult, div, mod = multFunc(250, 13)
print("Addition:", add)
print("Subtraction:", sub)
print("Multiplication:", mult)
print("Division:", div)
print("Modulus:", mod)