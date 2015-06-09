var express = require('express');
var router = express.Router();

//router.get('/adminfaq', function(req, res, next) {
  router.get('/pastchanges', function(req, res, next) {
  console.log("Called Past Chnages page");
  res.render('pastchanges');
});

module.exports = router;
