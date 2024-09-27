function wordFrequencyCounter(str) {
    const words = str.toLowerCase().split(/\W+/)

    const wordFreqs = new Map()

    for (const word of words) {
        if (word === "") continue

        if (wordFreqs.has(word)) {
            wordFreqs.set(word, wordFreqs.get(word) + 1)
        } else {
            wordFreqs.set(word, 1)
        }
    }

    return wordFreqs
}


module.exports = wordFrequencyCounter