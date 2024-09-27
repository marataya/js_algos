function findMissingLetter(arr) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const startIdx = alphabet.indexOf(arr[0])
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== alphabet[startIdx + i]) {
            return alphabet[startIdx + i]
        }

    }

}

function findMissingLetter1(arr) {
    let start = arr[0].charCodeAt(0);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charCodeAt(0) !== start + i) {
            return String.fromCharCode(start + i)
        }
    }
    return ""
}

module.exports = findMissingLetter1