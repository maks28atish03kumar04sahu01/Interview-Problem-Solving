# 7. SWAPPING OF TWO VARIABLES' VALUES USING A THIRD VARIABLE
input1 = int(input("Enter Input1: "))
input2 = int(input("Enter Input2: "))
temp = 0

print(f"Current Input1 Value: {input1}")
print(f"Current Input2 Value: {input2}")

temp = input2
input2 = input1
input1 = temp

print(f"Updated Input1 Value: {input1}")
print(f"Updated Input2 Value: {input2}")