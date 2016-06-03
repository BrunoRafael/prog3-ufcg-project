/**
 * Created by Bruno Rafal on 02/06/2016.
 */
var express = require('express'),
    router = express.Router(),
    bookCtrl = require('../controllers/BookController.js'),
    validator = require('validator');

router.get('/library', (req, res) => {
    bookCtrl.getLibrary((response) => {
        res.json(response);
    });
});

router.put('/update', (req, res) => {
    var book = req.body.book;
    bookCtrl.update(book, function(response){
        res.json(response);
    });
});

router.post('/add', (req, res) => {
    var book = req.body.book;
    book.price = parseFloat(book.price);
    bookCtrl.save(book, function(response){
        res.json(response);
    });
});

router.delete('/remove', function(req, res) {
    var bookId = validator.trim(validator.escape(req.query.bookId));
    bookCtrl.remove(bookId, function(response){
        res.json(response);
    });
});

/*Implementa serviço de requisição de produtos de um determinado estabelecimento. Fazer acontecer com webScoket*/
router.post('/addComment', function(req, res){

});

/*Implementa serviço de requisição de produtos de um determinado estabelecimento. Fazer acontecer com webScoket*/
router.post('/editComment', function(req, res){

});

/*Implementa serviço de requisição de produtos de um determinado estabelecimento. Fazer acontecer com webScoket*/
router.post('/removeComment', function(req, res){

});

router.put('/remove/library', function(req, res){
    bookCtrl.cleanDatabase(function(response){
        res.json(response);
    });
});

router.post('', function(){
    Book.remove({}, function(){

    });

});

module.exports = router;