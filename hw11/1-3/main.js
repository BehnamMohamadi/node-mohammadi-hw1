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

checkExist2();