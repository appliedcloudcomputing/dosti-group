var express = require('express');
var router = express.Router();

var Response = {
  InvalidLogin: 'Invalid Login!'
}

router.get('/', function(req, res, next) {
  console.log("Called Login");
  var currentUser = Parse.User.current();
   if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _user = {
       name : currentUser.get("name"), 
       }
     res.render('dashboard', {user : _user});
  } else {
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
});


router.post('/', function(req, res) {
  
  var username = req.body.username;
  var password = req.body.password;
var _user = {
       name : user.get("name"), 
      username : user.get("username"),
      address : user.get("address"),
      connectiontype : user.get("connectiontype"),
      dob : user.get("dob"),
      email : user.get("email"),
      mobile : user.get("mobile"),
      telephone : user.get("telephone"),
      personalnote : user.get("personalNote"),
      usertype : user.get("usertype"),
  }



  Parse.User.logIn(username,password, { 
    
    success: function(user) {
      if(user) {
        console.log("USER FOUND");
        req.session.user = JSON.stringify(user);
        res.render('dashboard',{user : _user});
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