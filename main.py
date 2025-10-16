from actions import add_numbers
import sys

def main():
    print('------THIS IS THE MAIN FUNCTION--------')

    num_one = input(f"Give me your first number\n")
    num_two = input(f"Give me your second number\n")

    sum = add_numbers(num_one, num_two) 
    print(f"The sum of your two numbers are {sum}")
    
main()
