var express = require('express');
var router = express.Router();

router.get('/chngpkg', function(req, res, next) {
console.log("Changing Package");
var userList = [];

     
      var userQuery = new Parse.Query(Parse.Package);
       console.log("*****");
      userQuery.find({
        success: function(users) 
        {
          console.log('Package success');
          if(users) {
            users.forEach(function(user) 
            {
              var _user = {

                pkname: user.get('pkname'),
                pkgvalidity:user.get('pkgvalidity')
                          }
              userList.push(_user);
            });
            res.render('chngpkg', {userList: userList});
           } 

           else 
           {
            console.log('NO List PRESENT');
           }
        },
        error: function(error) {
          console.log('ERROR FINDING List: ' + error.message);
        }
      });

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

   
});

module.exports = router;
