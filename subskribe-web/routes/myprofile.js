var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    
    var _user = {
        id : currentUser.get("objectId"),
       name : currentUser.get("name"),
       username : currentUser.get("username"),
       address : currentUser.get("address"),
       connectiontype : currentUser.get("connectiontype"),
       contacttime : currentUser.get("contactTime"),
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



router.post('/update', function(req, res, next) {
console.log("In Update Post");

var currentUser = Parse.User.current();
 if (currentUser) 
  {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
 var updatedata = {
    name:req.body.txtName,
    username:req.body.txtuserName,
    address:req.body.txtAddress,
    conntype:req.body.txtConnectiontype,
    contacttime:req.body.txtContacttime,
    dob:req.body.txtDob,
    email:req.body.txtEmail,
    mobile:req.body.txtMobile,
    telephone:req.body.txtTelephone,
  };

Parse.Cloud.run('saveUser', updatedata, {
      success: function(message) {
        console.log("Success.....Moving To Cloud Code");
      },
      error: function(error) {
        console.log("Error..........");
      }
});

}
else{
  console.log("Error");
}
});  

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