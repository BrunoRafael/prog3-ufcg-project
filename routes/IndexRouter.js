/**
 * Created by Bruno Rafal on 02/06/2016.
 */
var express = require('express'),
    router = express.Router();
router.get('/', function(req, res){
    res.redirect('/index.html');
});

router.get('/teste' , function(request, response){
    return response.json('cheguei aqui');
});

module.exports = router;