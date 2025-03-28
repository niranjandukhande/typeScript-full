// type varName(annotations/types) = {property: value}
const person: { firstName: string; lastName: string; age: number } = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
}

// Objects as function return value
// Factory function
function printUser(): { name: string; age: number; location: string } {
    return {
        name: "Prog",
        age: 22,
        location: "India",
    }
}
