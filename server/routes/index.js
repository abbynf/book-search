const router = require('express').Router();
const books = require('./books.routes');
const path = require('path')

router.use('/api/books', books);

module.exports = router;