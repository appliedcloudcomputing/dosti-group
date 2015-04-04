var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  	console.log('Rendering index page...');
	var currentUser = req.session.user ? JSON.parse(req.session.user) : null;

	if (currentUser) {	
		//res.redirect('/users/');
	} else {
		res.render('login', { title: 'Login' });
	}
});


module.exports = router;
