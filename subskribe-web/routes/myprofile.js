var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    console.log(currentUser.get('name'));
    var _user = {
        id : currentUser.id,
       name : currentUser.get("name"),
       username : currentUser.get("username"),
       address : currentUser.get("address"),
       connectiontype : currentUser.get("connectiontype"),
       contacttime : currentUser.get("contactTime"),
       dob : currentUser.get("dob"),
       email : currentUser.get("email"),
       password : currentUser.get("password"),
       mobile : currentUser.get("mobile"),
       telephone : currentUser.get("telephone"),
       personalnote : currentUser.get("personalNote"),
       usertype : currentUser.get("usertype"), 
    }
      res.render('myprofile', {user : _user});
      console.log(currentUser.id);
  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
  
});

router.post('/save', function(req, res, next) {
  console.log("Called Update User");
  

  var updatedata = {
          'id' : req.body.txtId,
          'name':req.body.txtName,
          'username' : req.body.txtuserName,
          'address' : req.body.txtAddress,
          'conntype' : req.body.txtConnectiontype,
          //'contactme' : req.body.txtContacttime,
          'dob' : req.body.txtDob,
          'email': req.body.txtEmail, 
          'mobile': req.body.txtMobile, 
          'telephone':req.body.txtTelephone,
          
        };
    console.log(updatedata.id);
    Parse.Cloud.run('saveUser', updatedata, {
      success: function(message) {
        var response = {
          message: message,
          status: 200
        }
        res.end(JSON.stringify(response));
      },
      error: function(error) {
        var response = {
          message: error.message,
          status: error.code
        }
        res.end(JSON.stringify(response));
      }
    });
});

module.exports = router;     

