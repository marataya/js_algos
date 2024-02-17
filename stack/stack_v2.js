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
    this.dataStore[this.top++] = e
}

function pop() {
    return this.dataStore[this.top--]
}

function peek() {
    return this.dataStore[this.top - 1]
}

function clear() {
    this.top = 0
}

function length() {
    return this.top
}
