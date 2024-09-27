class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
        } else {
            node.prev = this.tail
            this.tail.next = node
        }
        this.tail = node
        this.length++
    }

    prepend(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.length++
    }

    get(idx) {
        let current = this.head
        while (idx-- > 0) {
            current = current.next
        }

        return current.data
    }

    insertAt(idx, data) {
        // if idx is invalid return
        if (idx < 0 || idx > this.length) { return null }

        if (idx === 0) {
            return this.prepend(data)
        }

        if (idx === this.length) {
            return this.append(data)
        }


        let current = this.head

        while (idx-- > 1) {
            current = current.next
        }
        const node = new Node(data)
        node.next = current.next
        node.prev = current
        current.next.prev = node
        current.next = node

        this.length++
    }

    get(idx) {
        // if idx is invalid return
        if (idx < 0 || idx >= this.length) { return null }

        let current = this.head

        while (idx-- > 0) {
            current = current.next
        }
        return current?.data
    }


    remove(idx) {
        if (idx < 0 || idx >= this.length) { return null }


        if (idx === 0) {
            this.head = this.head.next
            if (this.head) {
                this.head.prev = null
            } else {
                this.tail = null
            }
        } else if (idx === this.length - 1) {
            //Removing the last node
            this.tail = this.tail.prev
            if (this.tail) {
                this.tail.next = null
            } else {
                this.head = null
            }
        } else {
            let current = this.head
            while (idx-- > 0) {
                current = current.next
            }

            current.prev.next = current.next
            current.next.prev = current.prev
        }
    }

    contains(data) {
        let current = this.head
        while(current) {
            if (current.data === data) {
                return true
            }
            current = current.next
        }
        return false
    }


    printAll() {
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

module.exports = { Node, DoublyLinkedList }