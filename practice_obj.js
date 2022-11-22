

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDb.count = +prompt("How many films have you watched", "");

        while (personalMovieDb.count == "" || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt("How many films have you watched", "");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectMyPersonalLevel: function () {
        if (personalMovieDb.count < 10) {
            console.log("You watch very few films!")
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
            console.log("You are a good viewer!");
        } else if (personalMovieDb.count >= 30) {
            console.log("You are kinnaman!");
        } else {
            console.log("Something went wrong!");
        }
    },
    showMyDb: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },
    togglVisibleMyDB: function () {
        if (personalMovieDb.privat) {
            personalMovieDb.privat = false;
        } else {
            personalMovieDb.privat = true;
        }
    },
    writeYourGrneres: function () {
        for (let i = 1; i < 2; i++) {
            // for (let i = 1; i <= 3; i++) {
            // let genre = prompt(`Your favorite genre is ${i}`);

            // if (genre === "" || genre == null) {
            //     console.log("You entered incorrect data...");
            //     i--;
            // } else {
            //     personalMovieDb.genres[i - 1] = genre;
            // }
            let genres = prompt(`Your favorite genre separated by commas ?`);

            if (genres === "" || genres == null) {
                console.log("You entered incorrect data...");
                i--;
            } else {
                personalMovieDb.genres = genres.split(", ");
                personalMovieDb.genres.sort();

            }
        }
        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Your favorite genre is ${i + 1} - it ${item}`);
        });
    }
};


