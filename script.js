const numOfFilms = +prompt("How many films have you watched", "");

const personalMovieDb = {
    count: numOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt("Last film have you watched?", ""),
    b = prompt("What rating would you give?", ""),
    c = prompt("Last film have you watched?", ""),
    d = prompt("What rating would you give?", "");

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);