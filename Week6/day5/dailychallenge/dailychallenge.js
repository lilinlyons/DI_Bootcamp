function anagram(string1, string2){
    // The regex gets rid of extra spaces in the word
    string1 = string1.trim().toLowerCase().replace(/\s+/g, '');
    string2 = string2.trim().toLowerCase().replace(/\s+/g, '');

    if (string1.length !== string2.length) {
        return false;
    }

    // Sort the characters in each string and compare the results
    let sortedString1 = string1.split('').sort().join('')
    let sortedString2 = string2.split('').sort().join('')

    return sortedString1 === sortedString2
}

console.log(anagram('Astronomer', ' Moon Starer'))