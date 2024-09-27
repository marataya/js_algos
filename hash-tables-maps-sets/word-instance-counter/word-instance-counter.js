const HashTable = require("../custom-hash-table/custom-hash-table")

function wordInstanceCounter(str, word) {
  const words = str.toLowerCase().split(/\W+/)

  const wordFreqs = new HashTable()
  const targetWord = word.toLowerCase()

  let count = 0
  for (const currentWord of words) {
    if (currentWord === "") continue

    if (wordFreqs.has(currentWord)) wordFreqs.set(currentWord, wordFreqs.get(currentWord) + 1)
    else {
      wordFreqs.set(currentWord, 1)
    }

    if (currentWord === targetWord) {
      count = wordFreqs.get(currentWord)
    }
  }
  return count
}

module.exports = wordInstanceCounter