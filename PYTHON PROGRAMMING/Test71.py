# 71. CONVERT DECIMAL NUMBER TO ANY BASE OF NUMBER

decimal_number = int(input("Enter Decimal Value: "))

binary = format(decimal_number, 'b')
print(f"Decimal {decimal_number} To Binary {binary}")

octal = format(decimal_number, 'o')
print(f"Decimal {decimal_number} To Octal {octal}")

hexadecimal = format(decimal_number, 'x')
print(f"Decimal {decimal_number} To Hexa Decimal {hexadecimal}")