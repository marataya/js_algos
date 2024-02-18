import Queue from "./queue.js";
import {dance, getDancers} from "./dancers.js";

var q = new Queue()
q.enqueue("Meredith")
q.enqueue("Cynthia")
q.enqueue("Jennifer")
console.log(q.toString())
q.dequeue()
console.log(q.toString())
console.log("Front of queue: " + q.front())
console.log("Back of queue: " + q.back())

var maleDancers = new Queue()
var femaleDancers = new Queue()
getDancers(maleDancers, femaleDancers)
console.log(maleDancers)
console.log(femaleDancers)
console.log(maleDancers.dequeue())
console.log(maleDancers.empty())

dance(maleDancers, femaleDancers)


