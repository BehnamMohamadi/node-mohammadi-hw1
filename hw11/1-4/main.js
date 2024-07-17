const fs = require("node:fs")

fs.unlink("./third-text.txt", err => {
    if (err) return console.log(err)

    
})