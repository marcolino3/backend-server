// Requires
const express = require('express');
const mongoose = require('mongoose');

// Initialization
const app = express();


// Connection to DB
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

    if (err) throw err;

    console.log('\x1b[36m%s\x1b[0m', 'MongoDB online on port 27017');

});

// Routes
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        message: 'Request ok'
    });

});


// Listen
app.listen(3000, () => {
    console.log('\x1b[36m%s\x1b[0m', 'Express server running on port 3000');
});