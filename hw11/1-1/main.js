 const writer = (text) => {
     if (typeof text !== "string") {

     }
     const fs = require("node:fs")

     fs.readFile("./text.txt", "utf-8", (err, content) => {
         if (err) return console.log(err.message)

         fs.writeFile("./text.txt", content + text, err => {
             if (err) return console.log(err.message)

         })
     })
 }



 const writer2 = (text) => {
     const fs = require("node:fs")

     fs.readFile("./text.txt", "utf-8", (err, _content) => {
         if (err) return console.log(err.message)

         fs.appendFile("./text.txt", text, err => {
             if (err) return console.log(err.message)

         })
     })
 }



 writer2(" How are you")