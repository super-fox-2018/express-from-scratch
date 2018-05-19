const express = require('express');
const routes = express.Router();

routes.get('/', function(req, res) {
    res.render('index')
});

routes.get('/student', function(req, res) {
    res.render('form')
})

routes.post('/student', function(req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let arrStudent = [firstName, lastName, email];
    res.send(arrStudent);
})

routes.get('/teachers', function(req, res) {
    let obj = [{
        fullName: 'David Yunus',
        address: 'Jl. Mangga',
        city: 'Jakarta'
    },
    {
        fullName: 'Daniel Joe',
        address: 'Jl. Jeruk',
        city: 'Bandung'
    },
    {
        fullName: 'Monte Carlo',
        address: 'Jl. Semangka',
        city: 'Manado'
    }
]
    res.render('Data teachers', {data: obj})
})

module.exports = routes;