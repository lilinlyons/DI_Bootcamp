import random
# Exercise 1


def get_words_from_file(file):
    words = open(file, 'r').readlines()
    words = [element.replace('\n', '') for element in words]
    # The words are given as strings
    return words

get_words_from_file('sowpods.txt')


def get_random_sentence(length):
    words = get_words_from_file('sowpods.txt')
    random_words = random.sample(words, length)
    return random_words

get_random_sentence(5)




class RandomSentence:
    def __init__(self, length):
        self.length = length
        self.words = get_random_sentence(self.length)


    def sentence_builder(self):
        lowercase_words = [word.lower() for word in self.words]
        print(' '.join(lowercase_words))



RandomSentence(5).sentence_builder()


def main():
    print('This program returns a sentence of random words.')
    length = input('How many words do you want in the sentence? It has to be between 2 and 20: ')
    if int(length) < 2:
        raise ValueError ("The value you entered is too small")
    elif int(length) > 20:
        raise ValueError ("The value you entered is too big")

    else:
        RandomSentence(int(length)).sentence_builder()

#
if __name__ == "__main__":
    main()



# Exercise 2

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""


dictionary = json.loads(sampleJson)
salary = dictionary['company']['employee']['payable']['salary']
dictionary['company']['employee']['birth_date'] = ''

json_file_path = 'data.json'
with open(json_file_path, 'w') as file:
    json.dump(dictionary, file, indent=4)
