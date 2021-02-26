const express = require('express')
const logger = require('morgan')
const app = express()

const mw = (req, res, next) => {
    throw Error('error')
}

const errorMw = (err, req, res, next) => {
    console.log(err.message)
}

app.use(logger('dev')) //morgan 이 지원하는 로그 포맷 default, short, tiny, dev  4가지가 있음
app.use(mw)
app.use(errorMw)

app.listen(3000, () => console.log('running'))