import random

from Week3.Day2.Exercises.ExercisesXP import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained


    def train(self):
        super().bark()
        self.trained=True

    def play(self, *dogs_names: "Dog"):
        print(f"{dogs_names} all play together")


    def do_a_trick(self):
        if self.trained == True:
            items= [f'{self.name} does a barrel roll', f'{self.name} stands on his back legs', f'{self.name} shakes your hand', f'{self.name} plays dead']
            return random.choice(items)


print(PetDog("Harry", 50, 50, trained=True).do_a_trick())