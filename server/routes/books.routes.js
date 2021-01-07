const router = require('express').Router();
const { Book } = require('../models');

router
    .route('/')
    .get((req, res) => {
        // return all saved books as JSON
        Book
            .find({})
            .then(data => {
                console.log({ data });
                res.json({ success: true, data })
            })
    })
    .post((req, res) => {
        // save new book to the database
        Book
            .create({
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                image: req.body.image,
                link: req.body.link
            })
            .then(data => {
                res.json({ success: true, data })
            })
            .catch(error => {
                console.log('error adding to db', {error})
            })


    });
router
    .route('/:id')
    .delete((req, res) => {
        // Delte book from the database
        const reqDel =  req.params.id
        Book
            .findByIdAndDelete(reqDel)
            .then(data => {
                res.json({ success: true})
            })
            .catch(err => {
                console.log("error deleting id", err)
            })
    })
// * route

module.exports = router;