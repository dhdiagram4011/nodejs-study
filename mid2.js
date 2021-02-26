const express = require('express')
const app = express()

const mw = (req, res, next) => {
    console.log('mw!')
    next()
}
const mw2 = (req, res, next) => {
    console.log('mw2!')
    next()
}

app.use(mw)
app.use(mw2)

app.listen(3000, () => console.log('running'))