# Challenge 1
commaSepStr = input ("Enter a comma separated String:")
list1 = commaSepStr.split(",")

def removeLspace(list):
    return [item.lstrip() for item in list]

def removeRspace(list):
    return [item.rstrip() for item in list]

noextraleftspace_list = removeLspace(list1)
noextrarightspace_list = removeRspace(noextraleftspace_list)

result = sorted(noextrarightspace_list)


# Challenge 2
sentence = input("Input a sentence: ").split()

def longest_word(sentence):
    longest_word = max(sentence, key=len)
    return longest_word

longest_word = longest_word(sentence)

