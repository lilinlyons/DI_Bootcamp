# Daily Challenge



def alpha_character_check(letter):
    if str(letter).isalpha() == True:
        return letter

    else:
        return ''



matrix =  [
    [7, 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', '','#'],
    ['s', 'M', ''],
    ['$', 'a', ''],
    ['#', 't', '%'],
    ['^', 'r', '!']
]


def symbol_checker():

    coordinate=[]
    for j in range(0,3):
        for i in range(0,8):
            letter = matrix[i][j]

            # check if the character is a letter. Only return a letter if not, a space is returned
            letter = alpha_character_check(letter)


            if str(letter).isalnum() == False:
                coordinate.append('')
            else:
                coordinate.append(letter)

    return coordinate


# I am struggling with the repeated characters
def delete_spaces():
    decoded_matrix = symbol_checker()
    i = 0
    j = 0
    new_elements=''

    while(j<len(decoded_matrix)):

        if( decoded_matrix[i]==decoded_matrix[j]=='' and decoded_matrix[j + 1] == ''):
            j+=1
            new_elements += ''

        elif((decoded_matrix[j]!=decoded_matrix[i]) or (j==len(decoded_matrix)-1)):
            new_elements+=decoded_matrix[i]
            print(new_elements)

            i=j
            j+=1

    new_elements += decoded_matrix[j-1]
    print(new_elements)


delete_spaces()