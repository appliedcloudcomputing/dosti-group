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

    
   var SavePackage = Parse.Object.extend("SavePackage");
    var query = new Parse.Query(SavePackage);
    query.equalTo("email", _user.email);
    query.first({
      success: function(results) {
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

  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
  
});

module.exports = router;