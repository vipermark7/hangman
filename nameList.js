const fs = require('fs')

const names = JSON.parse(fs.readFileSync('names.json'))
let nameList = []
for (let i = 0; i < names.length; i++) {
    nameList.push(names[i].name)
}
module.exports = nameList