function maxSubarraySum(arr, k) {
    let maxSum = -Infinity
    for (let i = 0; i <= arr.length - k; i++) {
        let currentSum = 0

        for (let j = i; j < i + k; j++) {
            currentSum += arr[j]
        }
        console.log(currentSum)
        // console.log(maxSum)
        if (maxSum < currentSum) maxSum = currentSum
    }

    return maxSum
}

module.exports = maxSubarraySum