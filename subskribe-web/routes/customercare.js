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
       email : currentUser.get("email")
    }
      res.render('customercare', {user : _user});

  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
  
});


router.post('/save', function(req, res, next) {
    console.log("Called Post Of Query");
    console.log(req.body.txtQueryAbout);
    console.log(req.body.txtQuerySubject);
  console.log(req.body.txtQueryDesc);
  console.log(req.body.txtUsername);
  console.log(req.body.txtName);


  var feeddata ={
    'name' : req.body.txtName,
    'userName' : req.body.txtUsername,
    'about' : req.body.txtQueryAbout,
    'subject' : req.body.txtQuerySubject,
    'desc' : req.body.txtQueryDesc,
    'datetime' : req.body.txtDate,
    
  } ;


Parse.Cloud.run('saveQuery', feeddata, {
      success: function(message) {
        console.log("Success.....Moving To Cloud Code ...... Ask Query");
      },
      error: function(error) {
        console.log("Error..........");
      }
});
});


module.exports = router;