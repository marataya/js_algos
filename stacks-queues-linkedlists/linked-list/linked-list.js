class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    add(data) {
        const node = new Node(data)
        if (this.head === null) {
            this.head = node
        } else {
            this.tail.next = node
        }
        this.tail = node
    }

    get(idx) {
        let current = this.head
        while(idx-- > 0) {
            current = current.next
        }

        return current.data
    }

    insertAt(idx, data) {
        if (idx === 0) {
            const node = new Node(data)
            node.next = this.head
            this.head = node
        } else {
            let current = this.head
            let previous = null
            
            while(idx-- > 0) {
                previous = current
                current = current.next
            }

            const node = new Node(data)
            node.next = current
            previous.next = node
        }
    }
    removeFrom(idx) {
        if (idx === 0) {
            this.head = this.head.next
        } else {
            let current = this.head
            let previous = null
            
            while(idx-- > 0) {
                previous = current
                current = current.next
            }

            previous.next = current.next
        }
    }
    printAll() {
        let current = this.head
        while(current !== null) {
            console.log(current.data);
            current = current.next
        }
    }
}

module.exports = { Node, LinkedList }