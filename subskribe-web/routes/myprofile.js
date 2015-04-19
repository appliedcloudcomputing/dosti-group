var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _user = {
       name : currentUser.get("name"),
       username : currentUser.get("username"),
       address : currentUser.get("address"),
       connectiontype : currentUser.get("connectiontype"),
       contacttime : currentUser.get("contacttime"),
       dob : currentUser.get("dob"),
       email : currentUser.get("email"),
       mobile : currentUser.get("mobile"),
       telephone : currentUser.get("telephone"),
       personalnote : currentUser.get("personalNote"),
       usertype : currentUser.get("usertype"), 
    }
      res.render('myprofile', {user : _user});

  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
  
});
module.exports = router;     

/*var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _user = {
       name : currentUser.get("name"),
       username : currentUser.get("username"),
       address : currentUser.get("address"),
       connectiontype : currentUser.get("connectiontype"),
       contacttime : currentUser.get("contactTime"),
       dob : currentUser.get("dob"),
       email : currentUser.get("email"),
       mobile : currentUser.get("mobile"),
       telephone : currentUser.get("telephone"),
       personalnote : currentUser.get("personalnote"),
       usertype : currentUser.get("usertype"),

    }
      res.render('myprofile', {user : _user});

  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
  
});*/

module.exports = router;