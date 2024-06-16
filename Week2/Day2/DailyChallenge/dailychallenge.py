# Challenge 1
number = int(input("Please insert a number: "))
length = int(input("Please insert a length: "))

count=1
multiple = 1
mutiples_list = [number]

while multiple < (length - 1):
    count+=1
    x=len(mutiples_list)
    mutiples_list.append(count * number)

print(mutiples_list)


# Challenge 2
word = input("Please enter a word with repeat letters: ")
new_elements = word[0]
prev_char = word[0]

for char in word[1:]:
    if char != prev_char:
        new_elements += char
        prev_char = char
print(new_elements)




