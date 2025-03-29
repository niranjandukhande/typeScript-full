// interface definition
interface Personn {
    firstName: string
    lastName: string
    age: number
}

// usage
const examplePerson: Personn = {
    firstName: "Prog",
    lastName: "Solos",
    age: 22,
}

// interface for function
interface MathOperation {
    (x: number, y: number): number
}

const add: MathOperation = (a, b) => {
    return a + b
}

const subtract: MathOperation = (a, b) => a - b

console.log(add(5, 3))
console.log(subtract(5, 3))

// interface for classes
interface Vehicle {
    start(): void
    stop(): void
}

class Car implements Vehicle {
    start() {
        console.log("Car Started")
    }
    stop() {
        console.log("Car Stopped")
    }
}

const myCar = new Car()
myCar.start()
myCar.stop()

interface Song {
    songName: string
    singerName: string
    printSongInfo(songName: string, singerName: string): string
}

const song1: Song = {
    songName: "Believer",
    singerName: "Imagine_Dragons",
    printSongInfo: (songName, singerName) => {
        return `Song: ${songName}, SingerName: ${singerName}`
    },
}

console.log(song1.printSongInfo("wow", "this"))
