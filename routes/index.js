const routes = require('express').Router();

routes.get('/', (req, res) => {
  // res.status(200).json({ message: 'Connected!' })
  res.send('Cheers love, the cavalry\'s here!');
})

routes.get('/student', (req, res) => {
  res.send('Input student data form')
})

routes.post('/student', (req, res) => {
  res.send('Got a POST request');
})

routes.get('/teachers', (req, res) => {
  res.send('Display teachers data')
})

module.exports = routes;