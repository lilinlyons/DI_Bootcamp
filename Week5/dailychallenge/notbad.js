var sentence = "The movie is not that bad I like it"
var words = sentence.split(" ")

for (var index = 0; index < words.length ; index++) {
    if (words[index] === 'not') {
        var wordNot = index;
        console.log(wordNot);
    } else if (words[index] === 'bad') {
        var wordBad = index;
        console.log(wordBad);
    }
}


if (wordBad > wordNot){
    words.splice(wordNot, wordBad - wordNot + 1, 'good');
    console.log(words);
}
else {
    console.log(words)
}