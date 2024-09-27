function areAllCharactersUnique(str) {
    const charCount = {}
    for (const ch of str) {
        if (charCount[ch]) {
            return false
        }
        charCount[ch] = true
    }
    return true

}

module.exports =  areAllCharactersUnique
