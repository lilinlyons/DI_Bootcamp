# Challenge 1

number = int(input("Please insert a number: "))
length = int(input("Please insert a length: "))

i=1
x = 1
mutiples_list = [number]

while x < (length - 1):
    i+=1
    x=len(mutiples_list)
    mutiples_list.append(i * number)

print(mutiples_list)


# Challenge 2
word = input("Please enter a word with repeat letters: ")
separate_letters = list(word)

i = 0
j = 0
new_elements=''

while(j<len(word)):

    if( word[i]==word[j] ):
        j+=1

    elif((word[j]!=word[i]) or (j==len(word)-1)):
        new_elements+=word[i]

        i=j
        j+=1

new_elements += word[j-1]

print(new_elements)





