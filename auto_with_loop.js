const numOfFilms = +prompt("How many films have you watched", "");

const personalMovieDb = {
    count: numOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Last film have you watched?", ""),
        b = prompt("What rating would you give?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDb.movies[a] = b;
        console.log("Done!");
    } else {
        console.log("Error!");
        i--;
    }
}

if (personalMovieDb.count < 10) {
    console.log("You watch very few films!")
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    console.log("You are a good viewer!");
} else if (personalMovieDb.count >= 30) {
    console.log("You are kinnaman!");
}else{
    console.log("Something went wrong!");
}

console.log(personalMovieDb);