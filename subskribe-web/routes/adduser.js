var express = require('express');
var router = express.Router();

//router.get('/adduser', function(req, res, next) {
  router.get('/', function(req, res, next) {
  console.log("Called Admin Add User page");
    res.render('adduser');
    
});



router.post('/save', function(req, res, next) {
  console.log("Called Admin Add User");
  
  console.log(req.body.txtFullName);
  console.log(req.body.txtUserName);
  console.log(req.body.txtEmail);
  console.log(req.body.ddUserType);
  console.log(req.body.txtPassword);
  console.log(req.body.txtRePassword);
  console.log(req.body.txtTelePhone);
  console.log(req.body.txtMobile);
  console.log(req.body.txtAddress);
  console.log(req.body.txtNote);
  

  var data = {
          'name':req.body.txtFullName, 
          'username': req.body.txtUserName, 
          'email':req.body.txtEmail,
          'usertype' : req.body.ddUserType,
          'password': req.body.txtPassword,
         'telephone' : req.body.txtTelePhone,
          'mobile':  req.body.txtMobile,
          'address':req.body.txtAddress,
          'personalnote' : req.body.txtNote,
        };

    Parse.Cloud.run('adminsaveUser', data, {
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