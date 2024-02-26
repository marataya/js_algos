type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    enqueue(e: T): void {
        const node = {value: e} as Node<T>
        this.length++
        // if (this.length == 0) { is the same
        if (!this.tail) {
            this.head = this.tail = node
        }

        this.tail.next = node
        this.tail = node
    }

    dequeue(): T | undefined {
        if(!this.head) {
            return undefined
        }

        this.length--
        const head = this.head
        this.head = this.head.next
        //free up the memory
        head.next = undefined
        if (this.length === 0) {
            this.tail = undefined
        }

        return head.value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}
