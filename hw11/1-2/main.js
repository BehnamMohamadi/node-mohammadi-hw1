const createNewFile = function (text) {
  const fs = require("node:fs")

  fs.writeFile('./second-text.txt', text, err => {
    if (err) return console.log(err.message)

  });
}

createNewFile("say hello to world")