const router = require('express').Router();
const books = require('./books.routes');

router.use('/api/books', books);

module.exports = router;