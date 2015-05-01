var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var currentUser = req.session.user ? JSON.parse(req.session.user) : null;

	if (currentUser) {	
		res.redirect('/users/');
	} else {
		res.render('login', { title: 'Login' });
	}
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
