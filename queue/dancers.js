    import fs from 'fs'
import Queue from "./queue.js";

function Dancer(name, sex) {
    this.name = name
    this.sex = sex
}

export function getDancers(males, females) {
    var names = fs.readFileSync('./input_for_dancers.txt', 'utf-8').split('\n').filter(x => x !== "")
    console.log(names)
    for (let i = 0; i < names.length; i++) {
        var dancer = names[i].split(" ")
        var sex = dancer[0]
        var name = dancer[1]
        if (sex === "M") {
            males.enqueue(new Dancer(name, sex))
        }
        else {
            females.enqueue(new Dancer(name, sex))
        }
    }
}

export function dance(males, females) {
    console.log("The dance partners are:")
    while(!males.empty() && !females.empty()) {
        var person = females.dequeue()
        console.log("Female dancer is: " + person.name)
        person = males.dequeue()
        console.log("Male dancer is: " + person.name)
    }

}

