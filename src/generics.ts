// without using generics
const printString = (x: string) => console.log(x)
const printNumber = (x: number) => console.log(x)
const printBoolean = (x: boolean) => console.log(x)

console.log(printString("hello"))
console.log(printNumber(2))
console.log(printBoolean(true))

// here we can use any, but using any not conventional
// the above problem can be solved using generics

// using generics
function printInfo<T>(x: T): T {
    return x
}

const str = printInfo<string>("Hello") // Hello
const num = printInfo<number>(22) // 22
const bool = printInfo<boolean>(true) // true
