var express = require('express');
var router = express.Router();

router.get('/creatpkg', function(req, res, next) {
  console.log("Called Create package page");
  res.render('creatpkg', {error: ""});
});


router.post('/creatpkg', function(req, res, next) {
  console.log("Called Create package post method");
  console.log(req.body.oldPassword);
	console.log("Pkg Name :"+ req.body.txtPkgName);
	console.log("Pkg Decription :"+ req.body.txtDesc);
	console.log("Pkg Price :"+ req.body.txtPrice);
	console.log("Pkg Validity :"+ req.body.txtValidity);



	var pkgdata ={
    'pkgName' : req.body.txtPkgName,
    'pkgDesc' : req.body.txtDesc,
    'pkgPrice' : req.body.txtPrice,
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
