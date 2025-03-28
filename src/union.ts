// only use the pipe symbol (|)
let password: string | number = 20

type UserInfo = {
    first: string
    last: string
    age: number
}

type AccountDetails = {
    email: string
    password: string
}

let user: UserInfo | AccountDetails = {
    first: "John",
    last: "Doe",
    age: 22,
}

const itemsList: (number | string)[] = [1, 4, 4, "hello"]
console.log(itemsList)
