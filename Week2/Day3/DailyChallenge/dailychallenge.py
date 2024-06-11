# Challenge 1

word = input("Please enter a word: ")

letters = list(word)
word_dictionary = {}
i=0

for letter in letters:
    if letter in word_dictionary.keys():
        word_dictionary[letter].append(i)


    else:
        word_dictionary[letter] = [i]

    i+=1

print(word_dictionary)


# Challenge 2


items_purchase = {
    "Apple": "$4",
    "Honey": "$3",
    "Fan": "$14",
    "Ice Cream": "$23",
    "Pan": "$100",
    "Spoon": "$2",
    "TV": "$80"
}

wallet = 75
can_afford = []

for key in items_purchase.keys():
    # removes dollar from front and comma from thousands
    new_item_price = int(items_purchase[key][1:].replace(',',''))
    items_purchase[key] = new_item_price

    if new_item_price <= wallet:
        can_afford.append(key)

    else:
        pass

can_afford = sorted(can_afford)

if bool(can_afford) == False:
    print('Nothing')

else:
    print(can_afford)






