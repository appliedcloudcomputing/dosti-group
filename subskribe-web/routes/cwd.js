var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res) {
  res.send('respond with a resource');
});

*/
router.get('/', function(req, res, next) {
  console.log("Called Changed Password");
  var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _user = {
       name : currentUser.get("name"),
       username : currentUser.get("username"),
      
    }
  res.render('cwd',  {user : _user});
  
  
  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }  
});


router.post('/save', function(req, res, next) {
  console.log("Called CWD.JS");
  console.log(req.body.oldPassword);
	console.log("Old PAssword :"+ req.body.oldPassword);
	console.log("New PAssword :"+ req.body.newPassword);
  var oldpass = req.body.oldPassword;
  var newpass = req.body.newPassword;
  var confirmpass = req.body.confirmPassword;

  console.log("Old PAssword :"+ oldpass);
  console.log("New PAssword :"+ newpass);
  console.log("Confirm PAssword :"+ confirmpass);
  
  var changedata={
    userName : req.body.userName,
    newPassword : req.body.newPassword
  };

    Parse.Cloud.run('chngPassword', changedata, {

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