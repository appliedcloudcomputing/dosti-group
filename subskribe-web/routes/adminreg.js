var express = require('express');
var router = express.Router();

router.get('/adminreg', function(req, res, next) {
  console.log("Called Admin Registration");
  res.render('adminreg', {error: ""});
});

router.post('/adminreg', function(req, res, next) {
  	console.log("Called Admin Registration");
  	console.log(req.body.firstName);
	console.log(req.body.mobileNumber);
	console.log(req.body.nominee);

	var admindata = {
          'name':req.body.firstName,
         // 'dob': req.body.dobMonth +" " + req.body.dobDate + " " + req.body.dobYear, 
          'mobile': req.body.mobileNumber, 
          'telephone':req.body.telephoneNumber,
          'email': req.body.primaryEmailAddress,
           'password': req.body.txtPassword,
         //'enterprise': req.body.hideval,
          'location': req.body.adminLocation,
          //'contactTime': "06/01/2015",
          'nominee':req.body.nominee,
          
        };

         Parse.Cloud.run('saveAdmincc', admindata, {
      success: function(message) {
        console.log("Success.....Moving To Cloud Code Admin Register");
      },
      error: function(error) {
        console.log("Error..........");
      }
});
});


module.exports = router;