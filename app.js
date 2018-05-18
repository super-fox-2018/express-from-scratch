'use strict'
const express = require('express')
let app = express()
let index = require('./index.js')
let teacher = require('./routes/teacher.js')
let student = require('./routes/routeStudent.js')
let home = require('./routes/routeHome.js')

app.use('/',index)
app.use('/home',home)
app.use('/teacher',teacher)
app.use('/student',student)
app.listen(3000)