var express = require('express');
var router = express.Router();

//router.get('/adminfeedbacklist', function(req, res, next) {
  router.get('/', function(req, res, next) {
    console.log("Admin Feedback Listing");
var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
   var _user = {
      name : currentUser.get("name"),
   }
      res.render('adminfeedbacklist', {error: ""});

  } else {
     //show the signup or login page
  res.render('login', {title: 'Login', message: Response.InvalidLogin});
} 
  console.log("Feedback Listing Called");
  var userlist = [];

      var Feedback = Parse.Object.extend("Feedback");
      var userQuery = new Parse.Query(Feedback);
      //var userQuery = new Parse.Query(Parse.Feedback);
      userQuery.find({
        success: function(users) 
        {
          console.log('Feedback SUCCESS');
          if(users) {
            users.forEach(function(user) 
            {
              var _user = {
                id : user.id,
                name : user.get('name'),
                username:user.get('username'),
                subject :user.get('subject'),
                desc : user.get('description'),
               
                          }
              userlist.push(_user);
            });
            res.render('adminfeedbacklist', {userlist: userlist});
           } 

           else 
           {
            console.log('NO Feedback PRESENT');
           }
        },
        error: function(error) {
          console.log('ERROR FINDING Feedback: ' + error.message);
        }
      });

});


//router.post('/list', function(req, res, next) {
  //console.log("Called User Listing");

router.get('/feedbackdetails', function(req, res, next) {
  console.log("Called Feedback View");

var Feedback = Parse.Object.extend("Feedback");
      var userQuery = new Parse.Query(Feedback);
      userQuery.equalTo("objectId",req.query.id);
      userQuery.first({
        success: function(users) 
        {
          console.log('Feedback View SUCCESS');       
              var _user = {
                username: users.get('username'),
                name:users.get('name'),
                subject :users.get('subject'),
                description: users.get('description'),
                datetime: users.get('createdAt')
                          }           
            res.render('feedbackdetails', {user: _user});                    
        },
        error: function(error) {
          console.log('ERROR FINDING Feedback View: ' + error.message);
        }
      });
 

});

module.exports = router;