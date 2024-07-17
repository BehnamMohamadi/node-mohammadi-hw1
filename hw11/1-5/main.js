const fs = require("node:fs")

fs.readFile("./user-data.json", "utf-8", (err, data) => {
    if (err) return console.log(err)
    let userData = JSON.parse(data)

    for (const user of userData) {
        if (Object.keys(user).length > 2) return console.log("i need just 2 key of any user")
        if (typeof user.username !== 'string' || typeof user.age !== 'number') {
            return console.log('Invalid data type for user:', user);
        }
    }

    const biggerThan18 = userData.filter((user) => {
        return user.age > 18
    })
    console.log(biggerThan18)
})