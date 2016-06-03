/**
 * Created by Bruno Rafal on 02/06/2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookSchema = new Schema({
    code: String,
    title: String,
    price: Number,
    sinopse: String,
    imgUrl: String,
    authors: [String],
    comments : [String]
});

module.exports = mongoose.model('Book', bookSchema);