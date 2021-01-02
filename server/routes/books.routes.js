const router = require('express').Router();

router
    .route('/')
    .get((req, res) => {
        // return all saved books as JSON
        console.log('hit the get route in /api/books');
        res.json({ success: true})
    })
    .post((req, res) => {
        // save new book to the database
        console.log("post route hit");
        console.log({reqBody: req.body})
        res.json({ success: true})
    });
router
    .route('/:id')
    .delete((req, res) => {
        console.log("delete route hit");
        const reqDel =  req.params.id
        console.log("params", reqDel);
        res.json({ success: true})
    })

module.exports = router;