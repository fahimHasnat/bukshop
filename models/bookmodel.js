'use strict';

const mongoose = require('mongoose');

const bookModel = function(){
    let bookSchema = mongoose.Schema({
        title: String,
        category: String,
        author: String,
        publisher : String,
        description: String,
        cover: String,
        price: Number
    });
    // Shorten Text
    bookSchema.methods.truncText = function(length){
        return this.description.substring(0, length);
    }
    return mongoose.model('Book', bookSchema);
};

module.exports = new bookModel();