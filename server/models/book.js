const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    // set up properties for new book schema
    title: {
        type: String,
        required: true
    },
    author: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;