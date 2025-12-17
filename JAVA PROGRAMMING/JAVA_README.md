# JAVA PROBLEMS RELATED TO MATHS AND BASICS

## 1. PRINT "HELLO WORLD!" AND "WELCOME TO PROGRAMMING LANGUAGE"

1. create `main()` function

2. create a Function called `func()`

3. Print or return the value `Welcome To Java Programming Language.`

4. inside `main()` function add `System.out.println("Hello World");`

5. Call the `func()` function inside the `main()` function

## 2. TAKE NOTHING, RETURN NOTHING TYPE FUNCTION IN PROGRAMMING

1. create `main()` function

2. create a function called `TNRN()`

3. print a statement so that when the  user calls the function, it will display

4. in `main()` function call the `TNRN()` function

5. Take Nothing Return Nothing is a type of function where during function call user will not send any argument to the function and function will not return any type of value during function call.

## 3. TAKE NOTHING RETURN SOMETHING TYPE FUNCTION IN PROGRAMMING

1. create `main()` function

2. create a function called `TNRS()`

3. Return a statement so that user can assign a variable to that function to print the value

4. in `main()` function call the `TNRS()` function

5. Take Nothing Return Something is a type of function where during function call user will not send any argument to the function and function will return some value during assign that function to any variable.

## 4. TAKE SOMETHING RETURN NOTHING TYPE FUNCTION IN PROGRAMMING

1. create `main()` function

2. create a function called `TSRN(String s)`

3. Operation something using the `String s` and print the result inside the function.

4. in `main()` function call the `TSRN("Take Something Return Nothing")` and send a string argument to the function.

5. Take Something Return Nothing is a type of function where during function call user will add arguments to the function. and function will print the result inside it instead of return the results to the user.

## 5. TAKE SOMETHING RETURN SOMETHING TYPE FUNCTION IN PROGRAMMING

1. create `main()` function

2. create a function called `TSRS(String s)`

3. Instead of print the resultant value return the resultant value.

4. In `main()` function assign the `TSRS(String s)` to a variable and print the variable. so it will print the resultant which is returned by the function.

5. Take Something Return Something is a type of function where user will send input as an argument to the function and in the end function will return the value to the user so user can assign the function to a variable and get the result by print that variable.

## 6. RETURNING MULTIPLE VALUES IN A FUNCTION

1. create a class called `Result`

2. inside the class create a constructor and initialize the variables. (`ADD`, `SUB`, `MULT`, `DIV`).

3. inside `Test` class create a function called `Calculate` which return the object `Result`.

4. inside the `Calculate` perform the `ADD`, `SUB`, `MULT`, `DIV` operations and return those value to the `Result` class.

5. In `main()` function take 2 input `ip1` and `ip2`.

6. Create a object (`r`) of `Result` class and send `ip1` and `ip2` to `Result` class.

7. Print the `ADD`, `SUB`, `MULT`, `DIV` using `r` like `r.ADD`, `r.SUB`, `r.MULT`, `r.DIV`.

## 7. SWAPPING OF TWO VARIABLES' VALUE USING THIRD VARIABLE

1. create a `main()` function and take 2 input `ip1` and `ip2`

2. print the current value of `ip1` and `ip2`

3. create another variable called `temp` and add the logic

```
        temp1 = num1
        num1 = num2;
        num2 = temp;
```

4. print the updated value of `ip1` and `ip2`

## 8. SWAPPING OF TWO VARIABLES' VALUE WITHOUT USING THIRD VARIABLE

1. create a `main()` function and take 2 input `ip1` and `ip2`

2. print the current value of `ip1` and `ip2`

3. Add the given logic for the swapping of two number.

```
        num1 = num1 + num2
        num2 = num1 - num2
        num1 = num1 - num2
```

4. print the updated value of `ip1` and `ip2`

## 9. ARITHMETIC OPERATIONS IN PROGRAMMING

1. create `main()` function.

2. Take Input1 (`ip1`) & Input2(`ip2`) using `Scanner` class

3. Print the Arithmetic Operations like the below given lines

```
        Addition = ip1 + ip2
        Subtraction = ip1 - ip2
        Multiplication = ip1 * ip2
        Division = ip1 / ip2
        Modulo = ip1 % ip2
```

4. Print the Arithmetic Operations using `System.out.println()`

## 10. QUESTIONS BASED ON RELATIONAL OPERATORS

1. create `main()` function.

2. Take input `ip` for check the operations

3. Perform The Required Relational Operations Using If Else Conditions

4. Print the results.
 
## 11. USER INPUT IN PROGRAMMING LANGUAGES

1. create `main()` function.

2. Took Different Types Of Input like `int`, `float`, `String`, `Boolean`

3. Print those values using `System.out.println()`

## 12. PRINT WHETHER THE NUMBER IS POSITIVE, NEGATIVE OR ZERO

1. create a `main()` function.

2. Take Input `ip` using `Scanner` class.

```
if(ip > 0) {
    print(ip is positive)
} else if(ip < 0) {
    print(ip is negative)
} else {
    print(ip is zero)
}
```
## 13. PRINT WHETHER THE NUMBER IS EVEN OR ODD

1. create a `main()` function.

2. Take input `ip` using `Scanner` class.

```
if(ip % 2 == 0) {
    print(ip is even number)
} else {
    print(ip is odd number)
}
```

## 14. PRINT THE LARGEST NUMBER BETWEEN TWO NUMBERS

1. create a `main()` function.

2. take two input `ip1` and `ip2` using scanner class.

```
// PART 01
if(ip1 > ip2) {
    print(ip1 greater than ip2)
} else {
    print(ip2 greater than ip1)
}
```

```
// PART 02
String res = (ip1 > ip2) ? "ip1 greater than ip2" : "ip2 greater than ip1";
print(res)
```

## 15. PRINT THE LARGEST NUMBER BETWEEN THREE NUMBERS

1. create a `main()` function.

2. take three input `ip1`, `ip2`, `ip3` using scanner class.

```
if(ip1 > i2 && ip1 > ip3) {
    print(ip1 greatest between three number)
} else if(ip2 > ip1 && ip2 > ip3) {
    print(ip2 greatest between three number)
} else {
    print(ip3 greatest between three number)
}
```

```
int greatest = (ip1 > ip2 && ip1 > ip3) ? ip1 : (ip2 > ip1 && ip2 > ip3) ? ip2 : ip3
print(greatest is the greatest number between three number)
```

## 16. PRINT NUMBERS FROM 0 TO N USING ANY LOOPING TECHNIQUE

1. create `main()` function.

2. take input `range` by using scanner class.

```
for(int i = 0; i <= range; i++) {
    print(i)
}
```

## 17. PRINT NUMBERS FROM RANGE1 TO RANGE2 USING ANY LOOPING TECHNIQUE

1. create `main()` function.

2. take 2 input `range1` and `range2` using scanner class.

```
for(int i = range1; i <= range2; i++) {
    print(i)
}
```

## 18. PRINT EVEN NUMBERS FROM 0 TO N

1. create `main()` function.

2. take input `range` using scanner class.

```
for(int i = 0; i <= range; i++) {
    if(i % 2 == 0) {
        print(i)
    }
}
```

## 19. PRINT ODD NUMBERS FROM 0 TO N

1. create `main()` function.

2. take input `range` using scanner class.

```
for(int i = 0; i <= range; i++) {
    if(i % 2 != 0) {
        print(i)
    }
}
```

## 20. PRINT EVEN NUMBERS FROM RANGE1 TO RANGE2

1. create `main()` function.

2. take 2 input `range1` and `range2` using scanner class.

```
for(int i = range1; i <= range2; i++) {
    if(i % 2 == 0) {
        print(i)
    }
}
```

## 21. PRINT ODD NUMBERS FROM RANGE1 TO RANGE2

1. create `main()` function.

2. take 2 input `range1` and `range2` using scanner class.

```
for(int i = range1; i <= range2; i++) {
    if(i % 2 != 0) {
        print(i)
    }
}
```

## 22. ARITHMETIC OPERATION CALCULATOR IN PROGRAMMING

1. create `main()` function.

2. take two input `ip1()` and `ip2()`

3. create a `while` loop and give the condition as a `true`

4. take another input called `operation` and take input for (+, -, *, /, %)

5. add a siwtch case and perform the operations like (`+`, `-`, `*`, `/`, `%`)

6. in default case add System.exit(0) so that it will break the while loop and stop the operation.

```
while (true) {
        System.out.println("Enter Operation: ");
        String op = in.next();
        switch (op) {
                case "+":
                    System.out.println("Result: " + (ip1 + ip2));
                    break;
                case "-":
                    System.out.println("Result: " + (ip1 - ip2));
                    break;
                case "*":
                    System.out.println("Result: " + (ip1 * ip2));
                    break;
                case "/":
                    if (ip2 == 0) {
                        System.out.println("Division by zero not allowed");
                    } else {
                        System.out.println("Result: " + (ip1 / ip2));
                    }
                    break;
                case "%":
                    if (ip2 == 0) {
                       System.out.println("Modulo by zero not allowed"); 
                    } else {
                        System.out.println("Result: " + (ip1 % ip2));
                    }
                    break;
                default:
                    System.out.println("Invalid Operation! Program Terminated.");
                    in.close();
                    System.exit(0);
        }
}
```
