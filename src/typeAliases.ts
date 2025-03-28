type Person = {
    name: string
    age: number
}

const printPerson = (person: Person): void => {
    console.log(`Name: ${person.name}, Age: ${person.age}`)
}

const myPerson: Person = { name: "Alice", age: 22 }
printPerson(myPerson)

// optional properties
type Person1 = {
    name: string
    age: number
    email?: string
}

const alice: Person1 = { name: "Alice", age: 22 }
const bob: Person1 = { name: "Bob", age: 22, email: "bob@example.com" }
