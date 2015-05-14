var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   console.log('Calling Customer Care Page...');
      

var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _user = {
       name : currentUser.get("name"),
    }
      res.render('customercare', {user : _user});

  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
  
});

module.exports = router;