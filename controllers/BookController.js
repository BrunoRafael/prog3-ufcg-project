var config = require('../config'),
    Book = require('../models/Book.js');
var successMsg =  'Informações salvas com sucesso.',
    errorMsg = 'Não foi possível salvar os dados.';

var defaultBooks = [{code: '45878787', title: 'Nárnia', authors: ['auth1', 'auth2'], price: 22.90, sinopse : 'Entrando no guarda roupas', imgUrl: 'http://www.hdwallpapers.in/walls/the_chronicles_of_narnia-HD.jpg'},
                    {code: '00258787', title: 'As raposas do sul', authors: ['Roberto augusto'], price: 65.90, sinopse: 'As raposas mais temidas do universo', imgUrl: 'http://www.fundosanimais.com/1920x1080/raposa-neve.jpg'},
                    {code: '45444787', title: 'Um sol de manhã', authors: ['Gilliard Pereira'], price: 35, sinopse: 'História de amor entre dois estudantes de engenharia', imgUrl: 'http://falagilson.hp6.com.br/wp-content/uploads/2014/04/sol-manha-800x533.jpg'},
                    {code: '45898787', title: 'Vencendo as dificuldades da vida', authors: ['Silvio Santos'], price:26.89, sinopse: 'Como vencer e ganhar dinheiro em meio a dificuldade', imgUrl: 'http://nanoincub.com.br/media/k2/items/cache/948378d6a67ac0d7c7c6728581b072ab_XL.jpg'},
                    {code: '44178787', title: 'O senhor dos anéis - a sociedade do anel', authors: ['J. R. R. Tolkien'], price: 26.89, sinopse: 'O anel que pode destuir tudo', imgUrl: 'http://s30.postimg.org/3vzm2j5w1/o_senhor_dos_aneis_a_sociedade_do_anel_poster_co.png'},
                    {code: '10178787', title: 'O menino maluquinho', authors: ['Ziraldo'], price: 39.89, sinopse: 'Menino maluco que sonha pelos cotovelos', imgUrl: 'http://www.revistagarimpocultural.com.br/wp-content/uploads/2013/06/Menino_Maluquinho_1.jpg'},
                    {code: '00878787', title: 'Um dia depois de amanhã', authors: ['Carlos Fonseca', 'Elisa smith'], price: 58.89, sinopse: 'A situação do planeta é grave', imgUrl: 'https://upload.wikimedia.org/wikipedia/pt/b/bb/The_day_after_tomorrow_poster_promocional.jpg'},
                    {code: '36933387', title: 'Anjos e demônios', authors: ['Dan Brown'], price: 15.89, sinopse: 'Uma história oculta nos bastidores do mandato papal', imgUrl: 'https://jovemnerd.com.br/wp-content/uploads/img_anjos_demonios_0310_gde.jpg'},
                    {code: '42178787', title: 'Picapau - Cataratas do Niágra', authors: ['José das Neves', 'Julio Niagra', 'Carlos Leitão'], price: 10, sinopse: 'A descida do picapau nas cataratas do niágra', imgUrl: 'http://img.ibxk.com.br/2014/08/21/21143024923534.jpg?w=1040'},
                    {code: '12128787', title: 'A pantera cor de rosa', authors: ['Hawley Pratt', 'Friz Freleng'], price: 8.99, sinopse: 'As divertidas histórias da pantera em gibi', imgUrl: 'http://publicador.tvcultura.com.br/upload/tvcultura/programas/programa-pantera.jpg'}
                    ];

exports.save = function(book, callback){
    var newBook = new Book(book);
    Book.findOne({code: book.code}).then(function(err, book) {
        if (book) {
            callback({success: false, msg: 'Já existe um livro com este código'});
        } else if(err){
            callback({success: false, data: bookSaved, msg:successMsg });
        }else {
            newBook.save((err, bookSaved) => {
                if(err){
                    callback({success: true, data: err, msg: errorMsg});
                } else {
                    callback({success: false, data: bookSaved, msg: successMsg });
                }
            }
        );
        }
    });

};

exports.getLibrary = function(callback){
    Book.find().sort({
        _id: -1
    }).exec(function (err, books) {
        if (err) {
            callback({ success: false, data: err });
        } else {
            callback({ success: true, data: books });
        }
    });
};

exports.remove = function(bookId, callback){
    Book.findByIdAndRemove(bookId, function(err, book){
        if(err){
            callback({success: false, data: err, msg: errorMsg});
        } else {
            callback({success: true, data: book});
        }
    });
};

exports.update = function(newBook, callback){
    Book.findOneAndUpdate({_id: newBook._id}, newBook, function(err, bookSaved){
        if(err){
            callback({success: true, data: err, msg: 'Não foi possível atualizar as informações'});
        }else {
            callback({success: true, data: bookSaved, msg: successMsg});
        }
    });
};

exports.addComment = function(bookId, comment){
    Book.findOneAndUpdate({_id: params.promotion_id}, { $push: { 'comments': vomment }}, { new: true })
        .then(function(err, comment){

        });
};

exports.cleanDatabase = function(callback){
    Book.remove({}, function(err){
        if(err){
            callback({success:false, data: err})
        } else {
            for(var index in defaultBooks){
                var b = new Book(defaultBooks[index]);
                b.save();
            }

            callback({success: true});
        }
    });
};