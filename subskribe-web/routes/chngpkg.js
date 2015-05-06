var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var pkgs = Parse.Object.extend("Package");



router.get('/', function(req, res, next) {
   console.log("Change Package");
    var currentUser = Parse.User.current();
   if (currentUser) 
  {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _u = {
       name : currentUser.get("name"),
    }
     var userList = [];
      var Package = Parse.Object.extend("Package");
      var userQuery = new Parse.Query(Package);
      userQuery.find({
        success: function(users) 
        {
          console.log('USER SUCCESS');
          if(users) {
            users.forEach(function(user) 
            {
              var _user = {

                pkname: user.get('pkname'),
                pkgvalidity:user.get('pkgvalidity'),
                pkgprice:user.get('pkgprice')
                }
              userList.push(_user);
            });
            res.render('chngpkg', {userList: userList, user : _u});
           } 

           else 
           {
            console.log('NO USERS PRESENT');
           }
        },
        error: function(error) {
          console.log('ERROR FINDING USERS: ' + error.message);
        }
      });

  }else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
});

 
  





router.post('/save', function(req, res, next) {
  console.log("Change Package called");
  
  
	console.log("Pkg Decription :"+ req.body.newPkgName);
	console.log("Pkg Price :"+ req.body.newPkgPrice);
	console.log("Pkg Validity :"+ req.body.newPkgValidity);
  

  

/*var pkgdata ={
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
});*/
});

module.exports = router;
