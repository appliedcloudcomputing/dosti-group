var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/userfaq', function(req, res, next) {
   console.log('In User FAQ...');
   var faqlist = [];

      var FAQ = Parse.Object.extend("FAQ");
      var userQuery = new Parse.Query(FAQ);
      res.render('userfaq');
      userQuery.find({
        success: function(users) 
        {
          console.log('FAQ SUCCESS');
          if(users) {
            users.forEach(function(user) 
            {
              var _user = {
               
                question : user.get('question'),
                answer : user.get('answer'),
                
                          }
              faqlist.push(_user);
            });
            res.render('userfaq', {faqlist: faqlist});
           } 

           else 
           {
            console.log('NO FAQ PRESENT');
           }
        },
        error: function(error) {
          console.log('ERROR FINDING FAQ: ' + error.message);
        }
      });

});

module.exports = router;
//var currentUser = Parse.User.current();
 /*if (currentUser) {
   // console.log("CURRENT USER : "+ JSON.stringify(currentUser));
   // var _user = {
       name : currentUser.get("name"),
    }
      res.render('dashboard', {user : _user});

  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  } */  
  


