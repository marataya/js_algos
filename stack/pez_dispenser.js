import Stack from "./stack_v1.js";

export function filter_yellow(dispenser) {
    var s = new Stack()
    var s1 = new Stack()
    var result = []
    for (let i = 0; i < dispenser.length; i++) {
        if (dispenser[i] !== 'Y') s.push(dispenser[i])
    }
    while (s.length() > 0) {
        s1.push(s.pop())
    }
    while (s1.length() > 0) {
        result.push(s1.pop())
    }
    return result
}
