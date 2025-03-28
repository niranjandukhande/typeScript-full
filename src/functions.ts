// Regular function
function addOne(num: number) {
    return num + 1
}
const result = addOne(3)
console.log(result)

// Arrow function annotations
const mult = (x: number, y: number) => {
    return x * y
}
const res = mult(2, 10)
console.log(res)

// assigning default value to parameters
const greet = (name: string = "PROG") => {
    return `Hello ${name}`
}

// Return Annotations
function double(x: number): number {
    return x * 2
}

const res1 = double(10)
console.log(res1)
