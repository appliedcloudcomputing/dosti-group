var express = require('express');
var router = express.Router();

router.get('/adduser', function(req, res, next) {
  console.log("Called Admin Add User page");
    res.render('adduser');
    
});
module.exports = router;