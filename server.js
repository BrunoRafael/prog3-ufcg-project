var express = require('express');
var app = express();
var cors = require('cors');

app.use(express.static(__dirname + '/public'));
app.use(cors());

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.get('/test', function(req, res){
  res.json({msg: "ei"});
});

/*Serviço rodando na porta 1337*/
var ip = process.env.IP || 'localhost';
var port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log('App is running on http://' + ip + ':' + port);
});
