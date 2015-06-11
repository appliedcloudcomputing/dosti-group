var express = require('express');
var router = express.Router();

var Response = {
  InvalidLogin: 'Invalid Login!'
}

router.get('/', function(req, res, next) {

  var currentUser = req.session.user ? JSON.parse(req.session.user) : null; 
  if (currentUser) {
    res.render('dashboard', { username:''});
  } else {
    res.redirect('login');
  }
}); 


router.post('/', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  

  Parse.User.logIn(username,password, {
     success: function(user) {
      if(user) {
        console.log("USER FOUND");
        if(user.get("usertype") == "Admin"){
          console.log("Admin Login............. Inner If");
          res.redirect('/admindashboard');

        }
        else if(user.get("usertype") == "User"){
          console.log("Inner Else");
          res.redirect('/dashboard');
        }
        //req.session.user = JSON.stringify(user);
        console.log("Outer If");
       // res.redirect('/dashboard');
      }
      
       else {
        console.log("Outer Else");
        console.log("USER NOT FOUND");
        res.render('login', {title: 'Login', message: Response.InvalidLogin}); 
      }           
    },
    error: function(user, error) {
      console.log("ERROR ****:"+ error.code + " message:"+ error.message);
      res.render('login', {title: 'Login', message: Response.InvalidLogin});
    }
  });
}); 
  
 /* var username = req.body.username;
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

        //req.session.user = JSON.stringify(user);
        res.redirect('/dashboard');

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
});*/

module.exports = router;