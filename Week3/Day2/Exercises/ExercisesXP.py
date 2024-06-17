# Exercise 1
from typing import Dict


class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    pass

all_cats = [Bengal(name='Harry', age=15), Chartreux(name='Leo', age=9), Siamese( name='Slinky', age=3)]

sara_pets = Pets(all_cats)
sara_pets.walk()


# Exercise 2
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return print(f'{self.name} is barking')

    def run_speed(self):
        return self.weight / (self.age * 10)

    def fight(self, other_dog: "Dog"):
        print(other_dog.run_speed() * other_dog.weight)
        print(self.run_speed() * self.weight)
        if other_dog.run_speed() * other_dog.weight > self.run_speed() * self.weight:
            return print(f'{other_dog.name} has won!')

        else:
            print(f'{self.name} has won!')



dog1 = Dog("Lucy", 7, 50)
dog2 = Dog("Charlie", 2, 10)
dog3 = Dog("Marley", 10, 40)

dog1.fight(dog2)



# Exercise 4

class Family:
    def __init__(self, members: [Dict], last_name: (str)):
        self.last_name = last_name
        self.members= members

    def born(self, **new_child: Dict):
        self.members.append(new_child)
        print()

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] > 18

    def family_presentation(self):
        print(self.last_name)
        print(self.members)


instance = Family([
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
], 'Potter')

instance.born(name='Tom', age=15, gender='Male', is_child=True)
instance.family_presentation()


# Exercise 5
class TheIncredibles(Family):
    def __init__(self, members: [Dict], last_name: (str)):
        super().__init__(members, last_name)

    def use_power(self, name):
        if super().is_18(name) == True:
            for member in self.members:
                if member['name'] == name:
                    print(member['power'])

        else:
            raise Exception(f"{name} is not 18 years old.")


    def incredible_presentation(self):
        print('Here is our powerful family')
        print(super().family_presentation())


incredibles = TheIncredibles(    [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
], 'The Incredibles')

incredibles.incredible_presentation()
incredibles.born(name='Baby Jack', age=1, gender='Male', is_child=True, power='Unknown Power', incredible_name='Jack Jack')
incredibles.incredible_presentation()