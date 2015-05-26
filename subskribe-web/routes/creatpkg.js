var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("Called Create package page");
    res.render('creatpkg');
    
        
});

router.post('/save', function(req, res, next) {
  console.log("Called Create package post method");
  //console.log(req.body.oldPassword);
	//console.log("Pkg Name :"+ req.body.txtPkgName);
	console.log("Pkg Name :"+ req.body.txtPkgName);
	console.log("Pkg Desc :"+ req.body.txtPkgDesc);
	console.log("Pkg Validity :"+ req.body.txtValidity);
  console.log("Pkg Price :"+ req.body.txtPrice);

var pkgdata = {
          'pkgName':req.body.txtPkgName, 
         // 'pkgDesc': req.body.txtPkgDesc, 
          'pkgValidity':req.body.txtValidity,
          'pkgPrice': req.body.txtPrice,
           };

 Parse.Cloud.run('creatPackage', pkgdata, {
      success: function(message) {
        console.log("Success.....Package Created Successfully");
      },
      error: function(error) {
        console.log("Error..........");
      }
});


});

module.exports = router;

