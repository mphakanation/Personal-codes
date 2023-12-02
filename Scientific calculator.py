import math

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return 'Error! Division by zero is not allowed'
    else:
        return x / y

def power(x, y):
    return x ** y

def square_root(x):
    return math.sqrt(x)

def natural_logarithm(x):
    return math.log(x)

def sine(x):
    return math.sin(x)

def cosine(x):
    return math.cos(x)

def tangent(x):
    return math.tan(x)

while True:
    print("\n\nScientific Calculator\n")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Power")
    print("6. Square Root")
    print("7. Natural Logarithm")
    print("8. Sine")
    print("9. Cosine")
    print("10. Tangent")
    print("11. Exit")

    choice = input("\nEnter the number of the operation you want to perform: ")

    if choice == '11':
        break

    num1 = float(input("\nEnter the first number: "))
    num2 = float(input("\nEnter the second number: "))

    if choice == '1':
        print("\nThe sum of the numbers is: ", add(num1, num2))
    elif choice == '2':
        print("\nThe difference of the numbers is: ", subtract(num1, num2))
    elif choice == '3':
        print("\nThe product of the numbers is: ", multiply(num1, num2))
    elif choice == '4':
        print("\nThe quotient of the numbers is: ", divide(num1, num2))
    elif choice == '5':
        print("\nThe first number raised to the power of the second number is: ", power(num1, num2))
    elif choice == '6':
        print("\nThe square root of the number is: ", square_root(num1))
    elif choice == '7':
        print("\nThe natural logarithm of the number is: ", natural_logarithm(num1))
    elif choice == '8':
        print("\nThe sine of the number is: ", sine(num1))
    elif choice == '9':
        print("\nThe cosine of the number is: ", cosine(num1))
    elif choice == '10':
        print("\nThe tangent of the number is: ", tangent(num1))
    else:
        print("\nError! Invalid operation. Please try again.")