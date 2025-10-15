from actions import add_numbers
import sys

def main():
    print('------THIS IS THE MAIN FUNCTION--------')
    sum = add_numbers(sys.argv[1], sys.argv[2])
    print(sum)

main()
