'use strict'
const express = require('express')
let routes = express.Router()
let app = express()



routes.get('/',function(req,res){
    res.render('teacher.ejs')
})

module.exports = routes

//render buat ngirim file ejs