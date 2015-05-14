var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("User FAQ View");
    var currentUser = Parse.User.current();
   if (currentUser) 
  {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _u = {
       name : currentUser.get("name"),
    }
     var faqList = [];
      var FAQ = Parse.Object.extend("FAQ");
      var userQuery = new Parse.Query(FAQ);
      userQuery.find({
        success: function(users) 
        {
          console.log('In View FAQ SUCCESS');
          if(users) {
            users.forEach(function(user) 
            {
              var _user = {
                question : user.get('question'),
                answer : user.get('answer')
                }
              faqList.push(_user);
            });
            res.render('userfaq', {faqList: faqList, user : _u});
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

  }else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
});


module.exports = router;



