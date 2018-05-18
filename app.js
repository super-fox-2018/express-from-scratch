'use strict'

const express = require('express');
const routes = require('./routes')
let app = express();

// Connect all our routes to the application
app.use('/', routes);

app.listen(3000, () => console.log('Listening on port 3000'));