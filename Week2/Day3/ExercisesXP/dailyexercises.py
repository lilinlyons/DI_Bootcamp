# Exercise 1

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dictionary = dict(zip(keys, values))


# Exercise 2
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
#
# price=0
# for key in family.keys():
#     if family[key] < 3:
#         print(str(key) + " goes in for free")
#
#     elif  3 <= family[key] <= 12:
#         print(str(key) + " has to pay $10 for a ticket")
#         price += 10
#
#     else:
#         print(str(key) + " has to pay $15 for a ticket")
#         price += 15

# Do the bonus


# Exercise 3
brand = {
'name': 'Zara',
'creation_date': 1975,
'creator_name': 'Amancio Ortega Gaona',
'type_of_clothes': ['men', 'women', 'children', 'home'],
'international_competitors': ['Gap', 'H&M', 'Benetton'],
'number_stores': 7000,
'major_color':
    {'France': 'blue',
'Spain': 'red',
'US': ['pink', 'green']}}

brand['number_stores'] = 2

print("Zara clients are men, women and children. It is a high-street brand")

for key in brand.keys():
    if key=='international_competitors':
        brand['international_competitors'].append('Desigual')

else:
    pass

del brand['creation_date']

print(brand['international_competitors'][-1])
print(brand['major_color'])
print(len(brand))
print(brand.keys())

more_on_zara = {'creation_date': 1975,
                'number_stores': 10000}
def add_dictionaries(d1, d2):
    d2.update(d1)
    return d2

brand = add_dictionaries(more_on_zara, brand)
print(brand['number_stores'])

# takes the more_on_zara value for the stores



# Exercise 4
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

disney_users_A = {}
i=0

for user in users:
    disney_users_A[user] = i
    i += 1

print(disney_users_A)



disney_users_B = {}
i=0

for user in users:
    disney_users_B[i] = user
    i += 1

print(disney_users_B)



def sort_names(names):
    disney_users_C = {}
    users = sorted(names)
    i=0
    for user in users:
        disney_users_C[user] = i
        i += 1
    print(disney_users_C)
    return disney_users_C

sort_names(users)






disney_users_4i = {}
i=0

for user in users:

    if 'i' in user:

        disney_users_4i[user] = i
        i += 1

    else:
        pass

print(disney_users_4i)




disney_users_4ii = {}
i=0

for user in users:

    if user.startswith(('M', 'P')):

        disney_users_4ii[user] = i
        i += 1

    else:
        pass

print(disney_users_4ii)