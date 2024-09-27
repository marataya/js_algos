function permutations(str) {
    const result = []
    if (str.length === 0) {
        result.push("")
        return result
    }

    for (let i = 0; i < str.length; i++) {
        const firstCh= str[i]
        restOfStr = str.slice(0, i) + str.slice(i+1)
        const subPermutations = permutations(restOfStr)
        for (let j = 0; j < subPermutations.length; j++) {
            result.push(firstCh + subPermutations[j])
            
        }
    }

    return result

}

module.exports = permutations