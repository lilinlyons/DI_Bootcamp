from anagram_checker import AnagramChecker

def display_menu():
    print("Menu:")
    print("1. Input a word")
    print("2. Exit")

def main():
    while True:
        display_menu()
        choice = input("Enter your choice (1 or 2): ").strip()

        if choice == '1':
            word = input("Enter the word: ")
            if len(word.split()) > 1:
                raise ValueError ('Only one word can be entered.')

            elif any(char.isdigit() for char in word):
                raise TypeError ('Only alphabetic characters are allowed.')

            else:
                anagrams = AnagramChecker(word).get_anagrams()
                anagrams = ", ".join(anagrams)
                print(f"Your word is: {word}")
                print(f"The anagrams for this are {anagrams}")
        elif choice == '2':
            print("Exiting the program. Goodbye!")
            break

        else:
            print("Invalid choice. Please enter 1 or 2.")

if __name__ == "__main__":
    main()