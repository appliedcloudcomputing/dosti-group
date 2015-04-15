var express = require('express');
var router = express.Router();

var Response = {
  InvalidLogin: 'Invalid Login!'
}

router.get('/', function(req, res, next) {
  console.log("Called Index");
  res.render('login', {error: ""});
}); 


router.post('/', function(req, res) {
  
  var username = req.body.username;
  var password = req.body.password;

  Parse.User.logIn(username,password, { 
    success: function(user) {
      if(user) {
        console.log("USER FOUND");
        //req.session.user = JSON.stringify(user);
        res.render('dashboard');
      } else {
        console.log("USER NOT FOUND");
        res.render('login', {title: 'Login', message: Response.InvalidLogin}); 
      }           
    },
    error: function(user, error) {
      console.log("ERROR :"+ error.code + " message:"+ error.message);
      res.render('login', {title: 'Login', message: Response.InvalidLogin});
    }
  });
});

module.exports = router;