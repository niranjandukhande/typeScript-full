// a function that always throws an
function throwError(msg: string): never {
    throw new Error(msg)
}

// a function that has an infinite loop
function infiniteLoop(): never {
    while (true) {}
}

// a variable that can never have a value
let x: never

function neverReturns(): never {
    while (true) {}
}

x = neverReturns()
