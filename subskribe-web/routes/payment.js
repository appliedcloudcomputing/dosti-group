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
<<<<<<< HEAD

    
   var SavePackage = Parse.Object.extend("SavePackage");
=======
    var currpkg={};
    var SavePackage = Parse.Object.extend("SavePackage");
>>>>>>> 1a15b6335acbcb370978adc3e51406ffc1d399d0
    var query = new Parse.Query(SavePackage);
    query.equalTo("email", _user.email);
    query.first({
      success: function(results) {
<<<<<<< HEAD
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
=======
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

      
>>>>>>> 1a15b6335acbcb370978adc3e51406ffc1d399d0

  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
  
});

module.exports = router;