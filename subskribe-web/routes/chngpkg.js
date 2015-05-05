var express = require('express');
var router = express.Router();
var pkgs = Parse.Object.extend("Package");
router.get('/', function(req, res, next) {
  console.log("Called Change package page");
  var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _user = {
       name : currentUser.get("name"),
    }
      res.render('chngpkg', {user : _user});

  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
  
}); 
  



router.post('/save', function(req, res, next) {
  console.log("Called Change pkg package post method");
  //console.log(req.body.oldPassword);
	//console.log("Pkg Name :"+ req.body.txtPkgName);
  
	console.log("Pkg Decription :"+ req.body.txtDesc);
	console.log("Pkg Price :"+ req.body.txtPrice);
	console.log("Pkg Validity :"+ req.body.txtValidity);
  console.log("Current Pkg :"+ req.body.txtCurrent);

  var price=req.body.txtValidity * req.body.txtCurrent;
  console.log ("Price is="+ price);

	var pkgdata ={
   // 'pkgName' : req.body.txtPkgName,
    'pkgDesc' : req.body.txtDesc,
    'pkgPrice' : price,
    pkgCurrent : req.body.txtCurrent,
    'pkgValidity' : req.body.txtValidity,
    'pkgType' : req.body.pkgType,
  }	;

   Parse.Cloud.run('saveAdminpkgcc', pkgdata, {
      success: function(message) {
        console.log("Success.....Moving To Cloud Code");
      },
      error: function(error) {
        console.log("Error..........");
      }
});
});

module.exports = router;
