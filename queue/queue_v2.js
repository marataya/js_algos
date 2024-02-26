export default function Queue_v2() {
    this.dataStore = []
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.front = front
    this.back = back
    this.toString = toString
    this.empty = empty
    this.count = count
}

function enqueue(e) {
    this.dataStore.push(e)
}

function dequeue() {
    return this.dataStore.shift()
}

function front() {
    return this.dataStore[0]
}
function back() {
    return this.dataStore[this.dataStore.length-1]
}

function toString() {
    return this.dataStore.join(", ")
}

function empty() {
    if (this.dataStore.length === 0) return true
    else return false
}

function count() {
    return this.dataStore.length
}
