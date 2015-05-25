var express = require('express');
var router = express.Router();

router.get('/homepage', function(req, res, next) {
  console.log("This is Home Page Welcome To hell");
    res.render('homepage');
    
});

module.exports = router;
