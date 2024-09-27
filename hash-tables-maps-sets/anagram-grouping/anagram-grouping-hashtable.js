const HashTable = require("../custom-hash-table/custom-hash-table")


function anagramGrouping(words) {
    const anagramGroups = new HashTable()

    for (const word of words) {
        const sortedChars = word.split("").sort().join("")
        if (anagramGroups.has(sortedChars)) {
            anagramGroups.get(sortedChars).push(word)
        } else {
            anagramGroups.set(sortedChars, [word])
        }
    }
    return anagramGroups.values()
}

module.exports = anagramGrouping