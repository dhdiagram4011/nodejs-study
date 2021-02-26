const express = require('express')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))

app.listen(3000, () => console.log('running'))

/*  실행결과
❯ node morgan.js   
running
GET / 404 2.393 ms - 139
*/