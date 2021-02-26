const fs = require('fs')
const file = fs.readFileSync('test.txt', {
    encoding: 'utf8'
})
console.log(file)