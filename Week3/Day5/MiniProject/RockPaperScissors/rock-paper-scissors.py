from game import Game

def get_user_menu_choice():
    print("Menu:")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")

def print_results(results):
    print(results)
    print('Thank you for playing!')



def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    while True:
        get_user_menu_choice()
        choice = input("Enter your choice (1, 2 or 3): ").strip()

        if choice == '1':
            result = Game().play()
            results[result] += 1

        elif choice == '2':
            print(results)

        else:
            print_results(results)
            break



if __name__ == "__main__":
    main()