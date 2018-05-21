'use strict'
const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res){
    res.send("Wellcome")
})

routes.get('/home', function(req, res){
    res.render('home.ejs')
})

routes.get('/student-form', function(req, res){
    res.render('student.ejs')
})

routes.post('/student', function(req, res){
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    res.send("Thank you for submitting " + firstName + " " + lastName)
})

routes.get('/teacher', function(req, res){
    res.render('teacher.ejs')
})

module.exports = routes
