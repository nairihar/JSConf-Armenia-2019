class Movie {
    constructor(name, year) {
        this.name = name;
        this.year = year;

        this.about = () => {
            return `${name} movie has been shot in ${year}`;
        }
    }
}

const hp = new Movie('Harry Potter', 2001);
const insatiable = new Movie('Insatiable', 2018);



// function createMovieInstance(name, year) {
//     const about = () => {
//         return `${name} movie has been shot in ${year}`;
//     }

//     return {
//         name, year,
//         about,
//     }
// }
