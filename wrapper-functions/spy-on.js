function spyOn(func) {
    // Initialize metadata storage
    let callCount = 0;
    let calledWithArgs = [];
    let returnValues = [];

    // Create the spy function
    function spy(...args) {
        callCount++;
        calledWithArgs.push(...args);
        const result = func.apply(this, args);
        returnValues.push(result);
        return result;
    }

    // Add methods to the spy function
    spy.callCount = function () {
        return callCount;
    };

    spy.wasCalledWith = function (val) {
        return calledWithArgs.includes(val);
    };

    spy.returned = function (val) {
        return returnValues.includes(val);
    };

    return spy;
}

// Example usage:
function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn(adder);

console.log(adderSpy(2, 4)); // returns 6
console.log(adderSpy(3, 5)); // returns 8
console.log(adderSpy.callCount()); // returns 2
console.log(adderSpy.wasCalledWith(4)); // true
console.log(adderSpy.wasCalledWith(0)); // false
console.log(adderSpy.returned(8)); // true
console.log(adderSpy.returned(0)); // false