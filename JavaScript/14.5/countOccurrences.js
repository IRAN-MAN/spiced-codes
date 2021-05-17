function countOccurencesInWord(word) {
    var countLetters = {};
    word.split("").forEach(function (letter) {
        if ((countLetters[letter] = countLetters[letter])) {
            countLetters[letter]++;
        } else {
            countLetters[letter] = 1;
        }
    });
    // console.log(countLetters);
    return countLetters;
}

countOccurencesInWord("aaabbcddddd");
