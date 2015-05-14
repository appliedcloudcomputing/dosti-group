var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("Called Speed test Page");
  var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _user = {
       name : currentUser.get("name"),
       email : currentUser.get("email"),
    }
    res.render('speedtest', {user : _user});
    }else {
     
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
});

module.exports = router;

