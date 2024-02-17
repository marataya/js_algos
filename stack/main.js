// const {Stack_v1} = require('./stack_v1')
// const {Stack_v2} = require('./stack_v2')

import Stack_v1 from './stack_v1.js'
import Stack_v2 from './stack_v2.js'

var stack = new Stack_v1()
stack.push(5)
stack.push(7)
stack.push(9)
console.log(stack.top)
console.log(stack.peek())
stack.pop()
console.log(stack.top)
console.log(stack.peek())
stack.pop()
console.log(stack.top)
console.log(stack.peek())
stack.pop()
console.log(stack.top)
console.log(stack.peek())
stack.pop()
console.log(stack.top)
console.log(stack.peek())


console.log(">>>>Stack version 1")
var s = new Stack_v1();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());

console.log(">>>>Stack version 2")
var s = new Stack_v2();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());
