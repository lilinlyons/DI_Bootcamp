import random
class Game:
    def __init__(self):
        self.valid_choices = ["rock", "paper", "scissors"]
        self.results = None

    def get_user_item(self):
        while True:
            self.player = input("Please choose rock, paper or scissors: ").strip()


            if self.player.lower() in self.valid_choices:
                return self.player
            else:
                print("Invalid choice. Please try again.")

    def get_computer_item(self):
        self.computer_choice = random.choice(self.valid_choices)
        return self.computer_choice

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            print(f"You selected {user_item} and the computer chose {computer_item}. It is a draw!")
            return 'draw'
        elif (user_item == "rock" and computer_item == "scissors") or \
                (user_item == "scissors" and computer_item == "paper") or \
                (user_item == "paper" and computer_item == "rock"):
            print(f"You selected {user_item} and the computer chose {computer_item}. You win!")
            return 'win'
        else:
            print(f"You selected {user_item} and the computer chose {computer_item}. Computer win!")
            return 'loss'

    def play(self):
        user = self.get_user_item()
        computer = self.get_computer_item()
        result = self.get_game_result(user, computer)
        return result
