var express  = require('express');
var app      = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

// configuration =================

app.use(express.static(__dirname + '/public')); 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json());

app.listen(3080);
console.log("App listening on port 3080");