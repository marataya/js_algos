// Sum of digits of a number N
function digital_root(n) {
    return n < 10 ? n : digital_root([...n.toString()].map(Number).reduce((acc, curr) => acc + curr));
}

console.log(digital_root(493193))