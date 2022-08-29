const express = require('express');
const router = express.Router();

//Get Routes
//home api
router.get('/',(req,res) => {
    // res.send('<h1>Welcome to Garrett\'s Node.js project</h1> <h2>Here are my projects:</h2><ol><li>www.thesocialbook.com</li></ol');
    res.render('index',{title: 'My Express App', message: 'Hello World'});
});

module.exports = router;
