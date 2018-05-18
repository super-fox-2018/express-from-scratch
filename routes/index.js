// const fs = require('fs');
const express = require('express')
const router = express()


router.get('/', function(req, res) {
  res.send('Welcome to Hacktiv8')
})

router.get('/student/add', function(req, res) {
  res.render('form')
})

router.post('/student', function(req, res) {
  let obj = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone
  }
  res.send(obj)
})

router.get('/teacher', (req, res) => {
  let obj = [{
      fullname: 'Bram Prasetyo',
      gender: 'Male',
      address: 'Cempaka Putih',
      city: 'Jakarta'
    },
    {
      fullname: 'Alfian Zamroni',
      gender: 'Male',
      address: 'Depok',
      city: 'Depok'
    },
    {
      fullname: 'Wulan Dini',
      gender: 'Female',
      address: 'Cibubur',
      city: 'Jakarta'
    }
  ]
  res.render('teacher',{
    data:obj
  })

})


module.exports = router
