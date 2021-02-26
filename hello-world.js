const util = require('util')

const name = 'world'
const msg = util.format('Hello %s', name)

console.log(msg)