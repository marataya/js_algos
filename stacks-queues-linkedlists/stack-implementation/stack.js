class Stack {
    constructor() {
        this.maxSize = 100
        this.data = []
        this.top = -1
    }

    push(val) {
        if (this.isFull()) {
            return false
        }

        this.top++
        this.data[this.top] = val
        return true
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.data[this.top]
    }

    pop() {
        if (this.isEmpty()) return null
        this.top--
        return this.data.pop()
    }

    isEmpty() {
        return this.top === -1
    }

    isFull() {
        return this.top === this.maxSize - 1
    }
}

module.exports = Stack