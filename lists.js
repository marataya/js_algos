const fs = require('fs')
const readline = require('readline')
function List() {
    this.listSize = 0
    this.pos = 0
    this.dataStore = []
    this.clear = clear
    this.find = find
    this.toString = toString
    this.append = append
    this.insert = insert
    this.remove = remove
    this.contains = contains
    this.front = front
    this.end = end
    this.prev = prev
    this.next = next
    this.length = length
    this.currPos = currPos
    this.moveTo = moveTo
    this.getElement = getElement
    this.length = length
}

function length() {
    return this.listSize
}

function append(e) {
    this.dataStore[this.listSize++] = e
}

function find(e) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === e) {
            return i
        }
    }
    return -1
}

function contains(e) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === e) {
            return true
        }
    }
    return false
}

function remove(e) {
    var foundPos = this.find(e)
    if (foundPos > -1) {
        this.dataStore.splice(foundPos, 1)
        --this.listSize
        return true
    }
    return false
}

function insert(e, after) {
    var insertPos = this.find(after)
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, e)
        ++this.listSize
        return true
    }
    return false
}

function clear() {
    delete this.dataStore
    this.dataStore = []
    this.listSize = this.pos = 0
}

function toString() {
    return this.dataStore
}

function front() {
    this.pos = 0
}

function end() {
    this.pos = this.listSize - 1
}

function prev() {
    if (this.pos > 0) {
        --this.pos
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos
    }
}

function currPos() {
    return this.pos
}

function moveTo(pos) {
    this.pos = pos
}

function getElement() {
    return this.dataStore[this.pos]
}

function Customer(name, movie) {
    this.name = name
    this.movie = movie
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()["name"] + ", " + list.getElement()["movie"])
        } else console.log(list.getElement())
        if (list.currPos() == list.length() - 1) break
    }
}

function checkOut(name, movie, filmList, customerList) {
    if (moviesList.contains(movie)) {
        var c = new Customer(name, movie)
        customerList.append(c)
        filmList.remove(movie)
    } else {
        console.log(movie + " is not available")
    }
}

var names = new List()
names.append("Barbara")
names.append("James")
names.append("Somole")
console.log(names.toString())
names.remove("Barbara")
console.log(names.toString())
names.insert("Lomox", "James")
console.log(names.toString())
console.log(names.contains("Lomox"))
console.log(names.contains("Lomox"))
names.next()
names.next()
console.log(names.getElement())
console.log(names.listSize)
for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement())
    if (names.currPos() == names.length() - 1) break
}

names.clear()
console.log(names.toString())


var movies = fs.readFileSync('films.txt', 'utf8').split('\n')

var moviesList = new List()
var customers = new List()
for (let i = 0; i < movies.length; i++) {
    moviesList.append(movies[i].replace(/^\d+\.\s*/, ""))
}
console.log("Available movies:")
displayList(moviesList)

var input = []
var name
var movie
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', line => {
    input.push(line)
    // if (input.length == 2) rl.close()
})
rl.on('SIGINT', () => {
    rl.close()
})

rl.on('close', () => {
    movie = input.pop()
    name = input.pop()
    checkOut(name, movie, moviesList, customers)
    console.log("Customer Rentals:")
    displayList(customers)
    console.log("Movies Now Available:")
    displayList(moviesList)
})


