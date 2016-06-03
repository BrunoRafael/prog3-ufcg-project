var express = require('express');
var router = express.Router();
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var path = require('path');

if (process.env.PORT) {
    mongoose.connect(config.mongo_uri.heroku);
} else if (process.env.NODE_ENV == 'test') {
    mongoose.connect(config.mongo_uri.test);
} else {
    mongoose.connect(config.mongo_uri.dev);
}

var db = mongoose.connection;
db.once('open', console.error.bind(console, 'Conexao com banco de dados aberta com: '));

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.set('view', __dirname + '/view');

var server = require('http').createServer(app);

/*Serviço rodando na porta 1337*/
var ip = process.env.IP || 'localhost';
var port = process.env.PORT || 3080;

server.listen(port, () => {
    console.log('App is running on http://' + ip + ':' + port);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var bookRoutes = require('./routes/BookRouter');
var indexRoutes = require('./routes/IndexRouter');

/*Rotas sem autenticação*/
app.use('/', indexRoutes);
app.use('/api/book', bookRoutes);

exports = module.exports = app;