class AnagramChecker:
    words = [element.replace('\n', '').lower() for element in open('sowpods.txt', 'r').readlines()]

    def __init__(self, input_word):
        self.input_word = input_word

    def is_valid_word(self):
        if self.input_word.lower() in self.words:
            return True

        else:
            return False

    def is_anagram(self, word1, word2):
        word1, word2 = word1.lower(), word2.lower()
        return sorted(word1) == sorted(word2) and word1 != word2

    def get_anagrams(self):
        anagrams=[]
        for word in self.words:
            if self.is_anagram(word, self.input_word)==True:
                anagrams.append(word)

        return anagrams


