/**
 * Created by Bruno Rafal on 02/06/2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var commentSchema = new Schema({
    userName: String,
    text: String,
    bookId: {
        type: Schema.ObjectId,
        ref: 'Book'
    }
});

module.exports = mongoose.model('Comment', commentSchema);