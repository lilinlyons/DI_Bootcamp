def display_board(positions):
    print(' '+ positions[0][0] + ' | ' + positions[0][1] + ' | ' + positions[0][2] + ' ')
    print('---|---|---')
    print(' '+ positions[1][0] + ' | ' + positions[1][1] + ' | ' + positions[1][2] + ' ')
    print('---|---|---')
    print(' '+ positions[2][0] + ' | ' + positions[2][1] + ' | ' + positions[2][2] + ' ')

def player_input(player):
    print("Player " + str(player) + ", please choose the square number you want your next position to be in.")
    move = input("Enter number: ")
    return [player, move]


def check_win(positions):
    if positions[0][0] == positions[0][1] == positions[0][2] == ('X'):
        display_board(positions)
        print("You have won!")
        return True

    elif positions[1][0] == positions[1][1] == positions[1][2] == ('X'):
        display_board(positions)
        print("You have won!")
        return True

    elif positions[2][0] == positions[2][1] == positions[2][2] == ('X'):
        display_board(positions)
        print("You have won!")
        return True

    elif positions[0][0] == positions[1][1] == positions[2][2] == ('X'):
        display_board(positions)
        print("You have won!")
        return True

    elif positions[0][2] == positions[1][1] == positions[2][0] == ('X'):
        display_board(positions)
        print("You have won!")
        return True

    else:
        return False

print("1 | 2 | 3")
print("---------")
print("4 | 5 | 6")
print("---------")
print("7 | 8 | 9")


def move(initial_positions, turn):
    display_board(initial_positions)
    move = player_input(turn)

    coordinates = position_mappings[int(move[1])]

    if move[0] == 1:
        initial_positions[coordinates[0]][coordinates[1]] = 'X'

    elif move[0] == 2:
        initial_positions[coordinates[0]][coordinates[1]] = 'O'

    return initial_positions




position_mappings = {
    1: [0,0],
    2: [0,1],
    3: [0,2],
    4: [1,0],
    5: [1,1],
    6: [1,2],
    7: [2,0],
    8: [2,1],
    9: [2,2]
}

initial_positions = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']]

turn=0
check_win(initial_positions)
while check_win(initial_positions) == False:
    turn += 1
    turn %= 2
    if turn == 1:
        player = 1

    else:
        player=2
    move(initial_positions, player)


