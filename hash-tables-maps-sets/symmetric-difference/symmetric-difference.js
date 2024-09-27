function symmetricDifference(arr1, arr2) {
    const result = []

    const s1 = new Set(arr1)
    const s2 = new Set(arr2)

    for (const el of arr1) {
        if (!s2.has(el)) result.push(el)
    }
    
    for (const el of arr2) {
        if (!s1.has(el)) result.push(el)
    }
    return result
}

module.exports = symmetricDifference