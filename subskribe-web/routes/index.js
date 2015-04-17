var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("Called Login");
  res.render('login', {error: ""});
});

router.get('/userenquiry', function(req, res, next) {
  console.log("Called Registration");
  res.render('userenquiry', {error: ""});
});

router.get('/franchiseenquiry', function(req, res, next) {
  console.log("Called franchiseenquiry");
  res.render('franchiseenquiry', {error: ""});
});


module.exports = router;
