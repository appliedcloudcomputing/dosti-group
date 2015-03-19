var express = require('express');
var router = express.Router();

var Response = {
	InvalidLogin: 'Invalid Login!'
}

router.get('/', function(req, res) {

	console.log('Rendering Dashboard page...');
	/*var currentUser = req.session.user ? JSON.parse(req.session.user) : null;	
	if (currentUser) {*/
		res.render('dashboard', { title: 'Dashboard'});
	//} else {
		//res.redirect('/login');
	//}
}); 


module.exports = router;