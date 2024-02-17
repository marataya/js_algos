Array.matrix = function (numrows, numcols, initial) {
    var arr = []
    for (let i = 0; i < numrows; i++) {
        var columns = []
        for (let j = 0; j < numcols; j++) {
            columns[j] = initial
        }
        arr[i] = columns
    }
    return arr
}

console.log(Array.matrix(5, 7, 0))

var grades = [[12, 45, 5], [15, 15, 22, 2], [1, 2]]
var total = 0
var average = 0
for (let i = 0; i < grades.length; i++) {
    for (let j = 0; j < grades[i].length; j++) {
        total += grades[i][j]
    }
    average = total / grades[i].length
    console.log("Average of " + parseInt(i + 1) + " = "+ average.toFixed(2))
    total = 0
    average = 0
}

function Point(x,y) {
    this.x = x
    this.y = y
}

function displayPts(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].x + " "+ arr[i].y)
    }
}

var p1 = new Point(1, 2)
var p2 = new Point(3, 7)
var p3 = new Point(7, 7)
var p4 = new Point(10, 2)

var points = [p1, p2, p3, p4]
displayPts(points)
