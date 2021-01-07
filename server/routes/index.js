const router = require('express').Router();
const books = require('./books.routes');
const path = require('path')

router.use('/api/books', books);
router
    .route('*')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    })

module.exports = router;