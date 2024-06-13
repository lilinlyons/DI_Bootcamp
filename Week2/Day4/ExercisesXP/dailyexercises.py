# Exercise 1
import random
from random import randint

def display_message():
    return print("I am learning full-stack development!")

display_message()


# Exercise 2

def favourite_book(title):
    return print("One of my favourite books is " + title)


favourite_book("Harry Potter")


# Exercise 3

def describe_city(city, country = "Israel"):
    return print(city + " is in " + country)

describe_city("Tel Aviv")


# Exercise 4

def random_number(num):
    num2 = randint(1, 100)

    if num == num2:
        print("Success!")

    else:
        print("The numbers ", str(num), "and ", str(num2), " do not match")

random_number(5)


# Exercise 5

def make_shirt(size = "Large", text= "I love Python"):
    print("The size of the shirt is", size, "and the text is", text)


make_shirt("medium", "Happy birthday!")
make_shirt()
make_shirt(size="medium")
make_shirt(size="XXS", text="I love cake")


# Exercise 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    for name in magician_names:
        print(name)


def make_great():
    i=0
    for name in magician_names:
        name += " the Great"
        magician_names[i] = name
        i+=1

make_great()
show_magicians()


# Exercise 7

def get_random_temp(season):
    if season == 'winter':
        return random.uniform(-10, 16)

    elif season == 'summer':
        return random.uniform(25, 35)

    elif season == 'autumn':
        return random.uniform(16, 19)

    elif season == 'spring':
        return random.uniform(20, 25)


def main():
    season = input("Please enter a season: ")
    temp = get_random_temp(season)
    print("The temperature right now is", str(temp) ,"degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")

    elif 0 <= temp < 16:
        print("Quite chilly! Don’t forget your coat")

    elif 16 <= temp <= 23:
        print("Don't forget to drink lots of water.")

    elif 24 <= temp < 32:
        print("Remember to wear sunscreen and a hat.")

    elif 32 <= temp < 40:
        print("Try to avoid being outside during 12-4.")

# main()
# Add calendar feature

# Exercise 8

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def star_wars():
    correct = 0
    incorrect = 0
    incorrect_list=[]

    for i in range(0, len(data)):

        print(data[i]['question'])
        answer = input("Please enter your answer: ")

        if data[i]['answer'] == answer:
            correct +=1
            print("Correct answer!")

        elif data[i]['answer'] != answer:
            incorrect+=1
            print("Incorrect answer :(")
            incorrect_list.append(answer)

    return correct, incorrect, incorrect_list


def answer_count():
    correct_answers,  wrong_answers, incorrect_list = star_wars()
    print("The number of correct answers is: ", correct_answers)
    print("The number of incorrect answers is: ", wrong_answers)
    print("The answers that are wrong are: ", incorrect_list)

answer_count()