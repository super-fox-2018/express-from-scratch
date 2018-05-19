const express = require('express')
let homepage = require('./routers')
var bodyParser = require('body-parser');
let student = require('./routers/students.js')
let teacher = require('./routers/teacher.js')

const app = express()
app.set('view engine', 'pug')
app.use(homepage, student, teacher)
app.use(bodyParser.json());

app.listen(3000, () => console.log('Example app listening on port 3000!'))
