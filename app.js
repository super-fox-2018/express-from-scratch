'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/', routes);

app.listen(3000, () => console.log('Express started on port 3000'));
