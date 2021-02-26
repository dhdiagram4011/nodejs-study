 const express = require('express')
 const app = express()

 //  app.get('/', (req, res) => { res.send('express.js로 만든 서버입니다')
 //  })

 app.get('/', (req, res) => { res.send('index page') })
 app.get('/test', (req, res) => { res.send('test page') })
 app.get('/member', (req, res) => { res.send('member page') })
 app.get('/board', (req, res) => { res.send('board page') })

 app.listen(3000, () => {
     console.log(`3000번 port로 실행한 서버 입니다`)
 })