## 22 ARITHMETIC OPERATION CALCULATOR IN PROGRAMMING
def func(num1, num2):
    while True:
        choice = input("Enter Your Choice (+, -, *, /, %, exit): ")

        match choice:
            case "+":
                print(f"{num1} + {num2} = {num1 + num2}")

            case "-":
                print(f"{num1} - {num2} = {num1 - num2}")

            case "*":
                print(f"{num1} * {num2} = {num1 * num2}")

            case "/":
                if num2 == 0:
                    print("Division by zero is not allowed")
                else:
                    print(f"{num1} / {num2} = {num1 / num2}")

            case "%":
                if num2 == 0:
                    print("Modulo by zero is not allowed")
                else:
                    print(f"{num1} % {num2} = {num1 % num2}")

            case "exit":
                print("Exiting calculator...")
                break

            case _:
                print("Invalid choice! Please try again.")

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
func(num1, num2)