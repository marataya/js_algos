import Queue from "./queue.js";

function distribute(nums, queues, n, digit) {
    for (let i = 0; i < n; i++) {
        if (digit === 1) {
            queues[nums[i]%10].enqueue(nums[i])
        }
        else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
        }
    }
}

function collect(queues, nums) {
    var i = 0
    for (let digit = 0; digit < 10; digit++) {
        while(!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue()
        }
    }
}

function displayArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

let queues = []
for (let i = 0; i < 10; i++) {
    queues[i] = new Queue()
}

let nums = []
for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 100)
}

var a = new Queue()
a.enqueue(undefined)
console.log("Before radix sort:")
displayArr(nums)
// nums = [73, 7, 29, 4, 80, 58, 56, 83, 100, 96]
distribute(nums, queues, 10, 1)
collect(queues, nums)
distribute(nums, queues, 10, 10)
collect(queues, nums)

console.log("After radix sort:")
displayArr(nums)
