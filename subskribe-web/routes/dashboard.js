var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("Called DASHBOARD");
  var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _user = {
       name : currentUser.get("name"), 
      username : currentUser.get("username"),
      address : currentUser.get("address"),
      connectiontype : currentUser("connectiontype"),
      dob : currentUser.get("dob"),
      email : currentUser.get("email"),
      mobile : currentUser.get("mobile"),
      telephone : currentUser.get("telephone"),
      personalnote : currentUser.get("personalNote"),
      usertype : currentUser.get("usertype"),
  }
  res.render('dashboard', {user : _user});
  } else {
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
});

  console.log('Rendering dashboard page...');
      


var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _user = {
       name : currentUser.get("name"),
    }
      res.render('dashboard', {user : _user});




  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
  
});
module.exports = router;
