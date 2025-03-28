type type1 = {
    name: string
    age: number
}

type type2 = {
    id: number
    title: string
}

type PersonAndEmployee = type1 & type2

const alice1: PersonAndEmployee = {
    name: "Alice",
    age: 22,
    id: 111,
    title: "Manager",
}

console.log(`${alice1.name} ${alice1.age} ${alice1.id} ${alice1.title}`)
