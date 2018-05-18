'use strict'
const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('index');
})
routes.get('/student', (req, res) => {
    res.render('form');
})

routes.post("/student", function (req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let arrStudent = [firstName, lastName, email];
    res.send(arrStudent);
})


routes.get("/teachers", (req, res) => {
    let obj = [{
        fullname: 'Moskov Tombak',
        address: 'Jln iskandar muda',
        city: 'Jakarta'
    },
    {
        fullname: 'Akai Panda',
        address: 'Jl Iskandar Tua',
        city: 'Bandung'
    },
    {
        fullname: 'Mauwo Gambreng',
        address: 'Jl Gandaria City',
        city: 'Jakarta'
    }
    ]

    res.render('teacher', { data: obj })
})

module.exports = routes;