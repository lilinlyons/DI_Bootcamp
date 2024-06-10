
# Exercise 1
my_fav_numbers={4 ,8, 10}

my_fav_numbers.add(1)

my_fav_numbers.add(2)

my_fav_numbers.discard(10)

friend_fav_numbers= {7, 11, 20}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)


# Exercise 2
# Tuples are immutable and therefore, no integers or any other data types can be added


# Exercise 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove('Banana')
basket.remove('Blueberries')
basket.append('Kiwi')

basket.insert(0, 'Apples')
apples_count = basket.count('Apples')

basket.clear()
print(basket)


# Exercise 4
# 1. A float is a floating-point number i.e. it has a decimal point in opposition to an integer

num = [1.5]
i=1.5
while i < 5:
    i+=0.5
    if i.is_integer():
        num.append(int(i))
    else:
        num.append(float(i))


# Exercise 5
for i in range(1,21):
    print(i)

for index,value in enumerate(range(1 ,21)):
    if index % 2 == 0:
        print(value)

    else:
        pass


# Exercise 6
name = 0
while name != 'Lili':
    name = input("Write your name: ")


# Exercise 7
user_fruit_list = input("Input favourite fruits and separate the fruits with a single space, eg. 'apple mango cherry': ")
word_list = user_fruit_list.split(' ')

selected_fruit= input("Name any fruit: ")

while selected_fruit not in word_list:
  print("You need to choose a new fruit. I hope you enjoy")
  selected_fruit= input("Name any fruit: ")

else:
  print("You chose one of your favorite fruits! Enjoy!")


# Exercise 8
input_toppings = input("Enter pizza toppings: ")
print('The topping ' + str(input_toppings)+ ' will be added')
price = 10
toppings = [input_toppings]

while input_toppings != 'quit':
    input_toppings = input("Enter pizza toppings: ")

    if input_toppings == 'quit':
        print("The toppings added are: {}".format(toppings))
        print("The total price is: {}".format(price))
        break

    else:
        print('The topping ' + str(input_toppings)+ ' will be added')
        price +=2.5
        toppings.append(input_toppings)


# Exercise 9

ages = input("What are the ages of your family members separated by spaces: ")
ages = [int(x) for x in input("What are the ages of your family members separated by spaces: ").split()]

total_price = 0
for element in ages:
    if element < 3:
        total_price += 0

    elif 3 <= element <= 12:
        total_price += 10

    else:
        total_price += 15


teenager_names = ['Harry', 'Amy', 'Hannah']
for element in teenager_names[:]:
    teenager_age = int(input("Input your age, "+ element +": "))

    if 16 <= teenager_age <= 21:
        teenager_names.remove(element)

print("Final list: {}".format(teenager_names))


# Exercise 10
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while 'Pastrami sandwich' in sandwich_orders[:]:
    sandwich_orders.remove('Pastrami sandwich')

finished_sandwiches = []

for element in sandwich_orders[:]:
    finished_sandwiches.append(element)
    sandwich_orders.remove(element)

for element in finished_sandwiches:
    print("I made your " + element)

