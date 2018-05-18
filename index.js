const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const routes = require('./routes');


app.use(bodyParser.urlencoded({ extended : true }));

app.set('view engine', 'pug');

app.use('/', routes);

app.listen(3000, () => {
  console.log('Listening to port 3000');
});