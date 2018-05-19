const express = require('express')
var bodyParser = require('body-parser');
const app = express.Router()

app.get('/students', (req, res) => {
  res.render('form');
})



app.post('/students', function(req, res) {
  let input = req.body;
  res.render('dataresult', {

    data: {
      Name: req.body.name,
      Class: req.param('class'),
      Email: req.param('email'),
      Address: req.param('address'),
    }
  });
});








module.exports = app
