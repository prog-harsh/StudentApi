const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 4000;


mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to mongodb atlaas");
});
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());

app.use('/api', require('./routes/api'));

app.use(function(err, req, res, next) {
    res.status(422).send({ error: err.message });
});

app.listen(port, function() {
    console.log(`Started up at port ${port}`);
});