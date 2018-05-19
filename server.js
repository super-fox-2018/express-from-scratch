const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);

app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log('Listening on port 3000')
});