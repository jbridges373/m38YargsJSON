const fs = require("fs");

const addFilm = (filmObj) => {
    try {
        // we use JSON.stringify to turn our object into a string. 
        const stringyObj = JSON.stringify(filmObj);
        // we use file sync package "fs" to create a file called storage.json
        // and add whatever data we pass into our terminal
        fs.writeFileSync('./storage.json', stringyObj);
        // catch any errors that may occur in the try block
    } catch (error) {
        console.log(error);
    }
};

const listFilms = () => {
    try {
        // we use filesync "fs" and the built in readFileSync to 
        // read the data in the .json file
        const filmList = fs.readFileSync('./storage.json');
        // parse the data so it is readable in the terminal
        const list = JSON.parse(filmList);
        console.log(list);
    } catch (error){
        console.log(error);
    };
};

// export our functions to use them in the rest of the app
module.exports = {addFilm, listFilms}