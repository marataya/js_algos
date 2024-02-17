import Stack from "./stack_v1.js";

export default function mulBase(num, base) {
    var s = new Stack()
    do {
        s.push(num % base)
        num = Math.floor(num  /= base)
    } while (num > 0)
    var converted = ""
    while (s.length() > 0) {
        converted += s.pop()
    }
    return converted
}
