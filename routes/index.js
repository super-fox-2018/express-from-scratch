let express = require('express');
let routes = express.Router();

routes.get('/', function(req, res) {
  res.render('home.ejs', {
    home: 'Welcome to Express School Front Page',
    paragraph: 'This website uses nodeJS and Express'
  });
});

routes.get('/students', function(req, res) {
  res.render('students.ejs', {
    title: 'Student Form'
  });
});

routes.post('/students', function(req, res) {
  let input = req.body;
  res.render('studentResult.ejs', {
    title: 'Your Information',
    paragraph: 'These are your info that you submitted',
    name: `Name: ${input.name}`,
    age: `Age: ${input.age}`,
    email: `Email: ${input.email}`
  });
});

routes.get('/teachers', function(req, res) {
  res.render('teachers.ejs', {
    title: 'Teacher\'s information',
    caption: 'Contact these teachers for more information'
  });
});

module.exports = routes;
