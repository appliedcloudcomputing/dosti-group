var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log("In User Payment page");
 var currpkg={};
  var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _user = {
       name : currentUser.get("name"),

       email : currentUser.get("email"),
       mobile : currentUser.get("mobile"),
       telephone : currentUser.get("telephone"),
       address : currentUser.get("address"),

    }

    var currpkg={};
    var SavePackage = Parse.Object.extend("SavePackage");

    var query = new Parse.Query(SavePackage);
    query.equalTo("email", _user.email);
    query.first({
      success: function(results) {
/*<<<<<<< HEAD
        console.log("In Success Of Payment");
          currpkg={
            currpkgname : results.get('packname'),
            currpkgvalidity : results.get('packvalidity'),
            currpkgprice : results.get('packprice')
                 }
               
   console.log(JSON.stringify(currpkg));
     },
  error: function(error) {
    console.log("In Error");
  }
});
    
      
      res.render('payment', {user : _user,currpkg : currpkg});
=======*/
      console.log("In Success");
          currpkg={
          currpkgname : results.get('packname'),
          currpkgvalidity : results.get('packvalidity'),
          currpkgprice : results.get('packprice')
                }
          console.log(JSON.stringify(currpkg));
          res.render('payment', {user : _user, currpkg : currpkg});
                },

          error: function(error) {
          console.log("In Error");
  }
});

      


  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
  
});



router.post('/save', function(req, res, next) {
    console.log("Called Payment page");
    console.log(req.body.txtLogin);
  console.log(req.body.txtCurrentplan);
  console.log(req.body.txtValidity);
  console.log(req.body.txtAmount);
  console.log(req.body.txtEmailid);
  console.log(req.body.txtContact);
  console.log(req.body.txtAddress);
  console.log(req.body.txtDate)

  var pay={
    'name' : req.body.txtLogin,
    'email' : req.body.txtEmailid,
    'planname' : req.body.txtCurrentplan,
    'validity' : req.body.txtValidity,
    'amount' : req.body.txtAmount,
    'dates' : req.body.txtDate,

  };

  Parse.Cloud.run('makePayment', pay, {
      success: function(message) {
        console.log("Success.....Moving To Cloud Code ...... Payment");
      },
      error: function(error) {
        console.log("Error..........");
      }
});
});

module.exports = router;