import Queue_v2 from "./queue_v2.js";
import {dance, getDancers} from "./dancers.js";

var q = new Queue_v2()
q.enqueue("Meredith")
q.enqueue("Cynthia")
q.enqueue("Jennifer")
console.log(q.toString())
console.log("Front of queue: " + q.front())
console.log("Back of queue: " + q.back())

var maleDancers = new Queue_v2()
var femaleDancers = new Queue_v2()
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


