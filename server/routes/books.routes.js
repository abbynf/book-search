const router = require('express').Router();
const { Book } = require('../models');

router
    .route('/')
    .get((req, res) => {
        // return all saved books as JSON
        console.log('hit the get route in /api/books');
        Book
            .find({})
            .then(data => {
                console.log("TODO GET RECEIVED");
                console.log({ data });
                res.json({ success: true, data })
            })
    })
    .post((req, res) => {
        // save new book to the database
        console.log("post route hit");
        console.log({reqBody: req.body})

        Book
            .create({
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                image: req.body.image,
                link: req.body.link
            })
            .then(data => {
                console.log({ data });
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
        console.log("delete route hit");
        const reqDel =  req.params.id
        Book
            .findByIdAndDelete(reqDel)
            .then(data => {
                console.log(data)
                res.json({ success: true})
            })
            .catch(err => {
                console.log("error deleting id", err)
            })
    })
// * route

module.exports = router;