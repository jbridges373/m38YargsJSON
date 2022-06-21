const fs = require("fs");

const addFilm = (filmObj) => {
    try {
        const stringObj = JSON.stringify(filmObj);
        fs.writeFileSync('./storage.jason', stringObj)
    } catch (error) {
        console.log(error);
    }
};

const listFilms = () => {
    try {
        const filmList = fs.readFileSync('./storage.json');
        console.log(filmList)
    } catch (error){
        console.log(error);
    }
};

module.exports = {addFilm, listFilms}