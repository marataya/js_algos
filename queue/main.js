import Queue from "./queue.js";
import {dance, getDancers} from "./dancers.js";

var q = new Queue()
q.enqueue("Meredith")
q.enqueue("Cynthia")
q.enqueue("Jennifer")
console.log(q.toString())
console.log("Front of queue: " + q.front())
console.log("Back of queue: " + q.back())

var maleDancers = new Queue()
var femaleDancers = new Queue()
getDancers(maleDancers, femaleDancers)
console.log(maleDancers)
console.log(femaleDancers)

dance(maleDancers, femaleDancers)
if (maleDancers.count() > 0) {
    console.log("There are " + maleDancers.count() + " male dancer waiting to dance")
}
if (femaleDancers.count() > 0) {
    console.log("There are " + femaleDancers.count() + " male dancer waiting to dance")
}


