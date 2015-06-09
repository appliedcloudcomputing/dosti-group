var express = require('express');
var router = express.Router();

//router.get('/adduser', function(req, res, next) {
  router.get('/admincwd', function(req, res, next) {
  console.log("Called Admin Change Password page");
    res.render('admincwd');
    
});

module.exports = router;