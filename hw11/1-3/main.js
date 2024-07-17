const {
    constants
} = require('node:buffer');

const checkExist1 = function () {
    const fs = require('node:fs');

    fs.stat('text.txt', err => {
        if (err) return console.log("your file does not exist");

        console.log("your file is available");
    });
}


const checkExist2 = function () {
    const fs = require('node:fs');

    fs.open('text.txt', "r", err => {
        if (err) return console.log("your file does not exist");

        console.log("your file is available");
    });
}



const checkExist3 = () => {
    const fs = require("node:fs")

    fs.access("./text1.txt", constants.F_ok, (err) => {
        if (err) return console.log("your file does not exist");

        console.log("your file is available");
    })
}



checkExist3();