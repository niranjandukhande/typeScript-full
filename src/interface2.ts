// extending interfaces
interface MovieDetails {
    readonly name: string
    ratings: number
    printMovieInfo(name: string, price: number, rating: number): string | number
}

interface MovieGenre extends MovieDetails {
    genre: string
}

const movie1: MovieGenre = {
    name: "Batman",
    ratings: 10,
    genre: "Real",
    printMovieInfo: (name, price, ratings) => {
        return `Movie name: ${name}, Price: ${price}, Ratings: ${ratings}`
    },
}

console.log(movie1.printMovieInfo(movie1.name, 100, movie1.ratings))

// declaration merging

// og interface
interface Car {
    brand: string
    start(): void
}

// declaration merging ( interface extension )
interface Car {
    model: string
    stop(): void
}

const myCarr: Car = {
    brand: "GT R-34",
    model: "Skyline",
    start: () => {
        console.log("vroom vroom")
    },
    stop: () => {
        console.log("not vroom vroom")
    },
}
