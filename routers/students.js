const express = require('express')
var bodyParser = require('body-parser');
const app = express.Router()

app.get('/students', (req, res) => {
  res.render('form');
})

//
// app.get('/result', (req, res) => {
//   res.render('dataresult');
//
// })

//
// app.post('/students', function(req, res) {
//   let result = ''
//   // req.body.class = 'coba banget'
//   result += "sksklsjss"
//   // result += req.body.email
//   // result += req.body.address
//
//   res.render('form', {
//     show: '${result}'
//   })
// });




app.post('/students', function(req, res) {
  let input = req.body;
  res.render('dataresult', {
    name: `Name: ${input.name}`,
    age: `class: ${input.class}`,
    email: `Email: ${input.email}`
  });
});








module.exports = app
