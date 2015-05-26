var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log("In User Payment page");
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
      res.render('payment', {user : _user});

  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
  
});

module.exports = router;