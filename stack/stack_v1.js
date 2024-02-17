export default function Stack() {
    this.dataStore = []
    this.top = 0
    this.push = push
    this.pop = pop
    this.peek = peek
    this.clear = clear
    this.length = length
}

function push(e) {
    this.dataStore.push(e)
    this.top++
}

function pop() {
    var result = this.dataStore.pop()
    this.top = this.length() == 0 ? 0 : this.top - 1
    return result
}

function peek() {
    return this.dataStore[this.top - 1]
}

function clear() {
    delete this.dataStore
    this.dataStore = []
    this.top = 0
}

function length() {
    /*Return length of stack*/
    return this.top
}


// exports.Stack_v1 = Stack
