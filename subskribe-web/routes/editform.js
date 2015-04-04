var express = require('express');
var router = express.Router();


router.get('/editform', function(req, res, next) {
  console.log("Called Edit Form");
  res.render('franch', {error: ""});
});


router.get('/saveedit', function(req, res, next) {
  console.log("Post Of Edit Form");
  res.render('franch', {error: ""});
});
