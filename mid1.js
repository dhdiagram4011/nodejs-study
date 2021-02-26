const express = require('express')
const app = express()

const mw = (req, res, next) => {
    console.log('mw!')
    next() //필히 호출
}

app.use(mw) //미들웨어 사용
app.listen(3000, () => console.log('running'))