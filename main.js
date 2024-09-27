class Cuboid {
    constructor(length, width, height) {
        this.length = length
        this.width = width
        this.height = height
    }

    get surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }

    get volume() {
        return this.length * this.width * this.height
    }
}

class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length)
    }
}

// Example usage:
const cuboid = new Cuboid(2, 3, 4)
console.log(cuboid.surfaceArea) // 52
console.log(cuboid.volume)      // 24

const cube = new Cube(3)
console.log(cube.surfaceArea)   // 54
console.log(cube.volume)        // 27