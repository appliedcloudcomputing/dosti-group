var express = require('express');
var router = express.Router();

router.get('/adminlogin', function(req, res, next) {
  console.log("This is Home Page Welcome To hell");
    res.render('adminlogin');
    
});

router.post('/', function(req, res, next) {
  	console.log("Called Admin Login Form");
  	console.log(req.body.txtUserName);
	console.log(req.body.txtPassword);

	if("dodo@gmail.com" == req.body.txtUserName && "123456" == req.body.txtPassword)
	{
		console.log("Success");
	}
	else
	{
		console.log("Failure");
	}
	 res.render('admindashboard');
});

module.exports = router;
