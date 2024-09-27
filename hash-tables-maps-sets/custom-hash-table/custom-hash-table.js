class HashTable {
    constructor(limit = 14) {
        this.storage = []
        this.limit = limit
    }

    _hash(key, max) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % max
    }

    printTable() {
        console.log(this.storage);
    }

    set(key, value) {
        const idx = this._hash(key, this.limit)

        if (this.storage[idx] === undefined) {
            this.storage[idx] = [[key, value]]
        } else {
            let inserted = false
            for (let i = 0; i < this.storage[idx].length; i++) {
                if (this.storage[idx][i][0] === key) {
                    this.storage[idx][i][1] = value
                    inserted = true
                }
            }
            if (inserted === false) {
                this.storage[idx].push([key, value])
            }
        }
    }

    get(key) {
        const idx = this._hash(key, this.limit)

        if (this.storage[idx] === undefined) {
            return undefined
        } else {
            for (let i = 0; i < this.storage[idx].length; i++) {
                if (this.storage[idx][i][0] === key) {
                    return this.storage[idx][i][1]
                }
            }
        }
    }

    has(key) {
        const idx = this._hash(key, this.limit)

        if (this.storage[idx]) {
            for (let i = 0; i < this.storage[idx].length; i++) {
                if (this.storage[idx][i][0] === key) {
                    return true
                }
            }
        }
        return false
    }

    clear() {
        this.storage = []
    }

    remove(key) {
        const idx = this._hash(key, this.limit)

        if (this.storage[idx]) {
            if (this.storage[idx].length === 1 && this.storage[idx][0][0] === key) {
                delete this.storage[idx]
            } else {
                for (let i = 0; i < this.storage[idx].length; i++) {
                    if (this.storage[idx][i][0] === key) {
                        delete this.storage[idx][i]
                    }
                }
            }
        }
    }

    values() {
        const values = []
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i]) {
                for (const [key, value] of this.storage[i]) {
                    values.push(value)
                }
            }
        }
        return values
    }


}


module.exports = HashTable