
class Farm:
    def __init__(self, farm_name):
        self.farm_name = farm_name
        self.animal={}

    def add_animal(self, animal, amount=1):
        if animal not in self.animal:
            self.animal[animal] = amount
        else:
            self.animal[animal] += amount

        return self.animal

    def get_info(self):
        print(f'Mcdonald\'s farm')
        for key in self.animal:
            print(f'{key}: {self.animal[key]}')
        print('E-I-E-I-0!')

    def get_animal_types(self):
        return sorted(self.animal)

    def get_short_info(self):
        sorted_animals = list(self.get_animal_types())
        statement = 'McDonald\'s farm has '
        for i in sorted_animals[:-1]:
            statement += (str(i) + 's, ')

        statement += 'and ' + str(sorted_animals[-1])
        print(statement)


macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.get_info()
print(macdonald.get_short_info())


