const express = require('express')
const app = express()
const basicRouter = require('./routes')

app.set('view engine', 'pug')

app.use('/',basicRouter)

app.listen(3000)