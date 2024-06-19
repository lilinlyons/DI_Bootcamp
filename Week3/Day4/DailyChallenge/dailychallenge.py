# Part 1
from typing import Text


class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self):
        words = self.text.split()

        frequency_dict = {}

        for word in words:
            if word in frequency_dict:
                frequency_dict[word] += 1
            else:
                frequency_dict[word] = 1

        return frequency_dict

    def highest_freq(self):
        dictionary = self.word_frequency()
        max_key = max(dictionary, key=dictionary.get)
        max_value = dictionary[max_key]
        return max_value


    def unique_words(self):
        dictionary = [word.lower() for word in self.word_frequency()]
        return set(dictionary)

    @classmethod
    def from_file(cls):
        # Read the content of the file
        with open('the_stranger.txt', 'r') as file:
            text = file.read()

        # Create and return an instance of the class
        return cls(text)

Text('A good book would sometimes cost as much as a good house.').from_file()
print()