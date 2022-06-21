const yargs = require("yargs");

const { addFilm, listFilms } = require("./utils");

const app = (yargsObj) => {
    if (yargsObj.add) {
        // run addFilm function if --add in input to the terminal
        // pass in data that is entered
        addFilm({title: yargsObj.title, actor: yargsObj.actor});
        // run listFilms function if --list in input to the terminal
    } else if (yargsObj.list) {
        listFilms();
    } else {
        console.log("Incorrect command");
    };
};

// call the app function and pass in yargs arguements
app(yargs.argv);
