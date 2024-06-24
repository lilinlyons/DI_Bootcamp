# Challenge 1
#
# word = input("Please enter a word: ")
#
# letters = list(word)
# word_dictionary = {}
#
# for index, letter in enumerate(letters):
#     if letter in word_dictionary.keys():
#         word_dictionary[letter].append(index)
#
#
#     else:
#         word_dictionary[letter] = [index]
#
# print(word_dictionary)


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

wallet = int(input('How much money would you like to spend in the shops: '))
can_afford = []
spent = 0

for key in items_purchase.keys():
    # removes dollar from front and comma from thousands
    new_item_price = int(items_purchase[key][1:].replace(',',''))
    items_purchase[key] = new_item_price

    spent+=new_item_price
    if spent <= wallet:

        can_afford.append(key)

    else:
        pass

can_afford = sorted(can_afford)

if bool(can_afford) == False:
    print('Nothing')

else:
    print(can_afford)






