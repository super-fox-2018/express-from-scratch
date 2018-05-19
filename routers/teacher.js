const express = require('express')
const app = express.Router()


app.get('/teacher', (req, res) => {
  res.render('tables');

});
module.exports = app
