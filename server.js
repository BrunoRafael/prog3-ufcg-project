var express = require('express');
var router = express.Router();
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var path = require('path');
var url_conn = '';

//if (process.env.PORT) {
    url_conn = config.mongo_uri.heroku;
    mongoose.connect(url_conn);
/*} else if (process.env.NODE_ENV == 'test') {
    url_conn = config.mongo_uri.test;
    mongoose.connect(url_conn);
} else {
    url_conn = config.mongo_uri.dev;
    mongoose.connect(url_conn);
}*/

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco de dados'));
db.once('open', console.error.bind(console, 'Conexao com banco de dados aberta com: ' + url_conn));

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