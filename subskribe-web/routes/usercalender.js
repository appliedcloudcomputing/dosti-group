var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res) {
  res.send('respond with a resource');
});

*/
router.get('/', function(req, res, next) {
  console.log("Called User Calender");
  var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _user = {
       name : currentUser.get("name"),
       username : currentUser.get("username"),
      
    }
  res.render('usercalender',  {user : _user});
  
  
  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }  
});

module.exports = router;