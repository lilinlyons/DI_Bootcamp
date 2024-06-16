# Exercise 1

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

mary = Cat(cat_name='Mary', cat_age=5)
tom = Cat(cat_name='Tom', cat_age=9)
harry = Cat(cat_name='Harry', cat_age=3)

cats = [mary, tom, harry]

def get_cat_age(cat: Cat) -> int:
    return cat.age

oldest_cat = max(cats, key=get_cat_age)

print(f'The oldest cat is {oldest_cat.name} with an age of {oldest_cat.age} years/')


class Dogs:
    def __init__(self, name: str, height: int | float) -> None:
        self.name = name
        self.height = height

    def bark(self):
        return print(f'{self.name} goes woof!')

    def jump(self):
        x = self.height * 2
        return print(f'{self.name} jumps {x} cm heigh!')



davids_dog = Dogs('Rex', 50)
print(davids_dog.name)
print(davids_dog.height)

davids_dog.bark()
davids_dog.jump()


sarahs_dog = Dogs('Teacup', 20)
print(sarahs_dog.name)
print(sarahs_dog.height)

sarahs_dog.bark()
sarahs_dog.jump()

if sarahs_dog.height > davids_dog.height:
    print(sarahs_dog.name)

else:
    print(davids_dog.name)


# Exercise 3

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics


    def sing_me_a_song(self):
        for word in self.lyrics:
            print(word)

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"]).sing_me_a_song()


# Exercise 4

class Zoo:
    def __init__(self, zoo_name):
        self.animals = ['Ape', 'Bear', 'Cat', 'Cougar', 'Eel', 'Emu']
        self.name = zoo_name

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        else:
            print('This animal already exists')
        return self.animals
    def get_animals(self):
        for animal in self.animals:
            print(animal)

    def sell_animals(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

        else:
            print(f"{animal_sold} is not in the zoo")

        return self.animals

    def sort_animals(self):
        sorted_list = sorted(self.animals)
        res = {index: [word for word in sorted_list if word.startswith(value)] for index, value in enumerate(sorted(list(set([word[0] for word in sorted_list]))))}
        return res

    def get_groups(self):
        animal_dict = self.sort_animals()
        for value in animal_dict.values():
            print(value)


ramat_gan_safari = Zoo('ramat gan zoo')
ramat_gan_safari.add_animal('Giraffe')
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animals('Giraffe')
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()



