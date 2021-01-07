const express = require('express');
const routes = require('./routes');
const app = express();
require('./config/db')();
const path = require('path')

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"))
    })
}


app.listen(PORT, () => {
    console.log('app running on PORT: ' + PORT)
});