from actions import add_numbers
from actions import Wizard
import sys

def main():
    print('------Welcome to Hogwarts. Who are you?--------')

    name = input(f"What is your name?\n")
    house = input(f"Which house do you belong to?\n")
    specialty = input(f"And what is your specialty?\n")

    player_one = Wizard(name, house, specialty)

    print(f"It's nice to meet you, {player_one.name}")
main()
