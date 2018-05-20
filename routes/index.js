const routes = require('express').Router();

routes.get('/', (req, res) => {
  // res.status(200).json({ message: 'Connected!' })
  // res.send('Cheers love, the cavalry\'s here!');
  res.render('index.ejs');
})

routes.get('/student', (req, res) => {
  // res.send('Input student data form')
  res.render('student.ejs', {studentTitle: 'Input student data'})
})

routes.post('/student', (req, res) => {
  // res.send('Got a POST request');
  let firstName = req.body.firstName,
      lastName = req.body.lastName,
      email = req.body.email;

  let student = {
    firstName: firstName,
    lastName: lastName,
    email: email 
  };

  let display = `First name: ${student.firstName}
  Last name: ${student.lastName}
  Email: ${student.email}`
  // res.send(students)
  res.render('submitted.ejs', {
    headerTitle: 'Data result',
    result: display
  })
})

routes.get('/teacher', (req, res) => {
  // res.send('Display teachers data')
  let teacher = [{
    firstName: 'Tony',
    lastName: 'Stark',
    city: 'New York',
    email: 'tony@avengers.com'
  }, {
    firstName: 'Bruce',
    lastName: 'Banner',
    city: 'New York',
    email: 'bruce@avengers.com'
  }, {
    firstName: 'Jack',
    lastName: 'Morisson',
    city: 'Gibraltar',
    email: 'jack76@overwatch.com'
  }, {
    firstName: 'Hanzo',
    lastName: 'Shimada',
    city: 'Japan',
    email: 'ryuugawagatekiwokurau@shimada.com'
  }]

  res.render('teacher.ejs', {
    headerTitle: 'Teacher data',
    data: teacher
  })
})

module.exports = routes;