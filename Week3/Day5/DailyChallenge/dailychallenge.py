import random

class Cards:
    def __init__(self):
        self.value = ['A', '2', '3', '4', '5', '6', '7', '8', '9','10' ,'J', 'Q', 'K']
        self.suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades']

    def deck(self):
        deck = []
        for suit in self.suit:
            for number in self.value:
                card = f'{number} of {suit}'
                deck.append(card)

        return deck

class Deck:
    def __init__(self, pack):
        self.pack = pack

    def shuffle(self):
        if len(self.pack) == 52:
            print('The pack is complete.')
        else:
            print(f'Card pack is incomplete, only {len(self.pack)} cards available out of 52.')


        random.shuffle(self.pack)
        return self.pack
    def deal(self):
        if not self.pack:
            return 'No cards left to deal.'

        card = random.choice(self.pack)
        self.pack.remove(card)
        return card


cards = Cards().deck()
Deck(cards).deal()
