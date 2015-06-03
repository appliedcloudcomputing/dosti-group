var express = require('express');
var router = express.Router();

//router.get('/adminfaq', function(req, res, next) {
  router.get('/leadlist', function(req, res, next) {
  console.log("Called Leadlist page");

  var d = new Date();
  d.setDate(d.getDate() - 1);
  console.log(d);
   //res.render('leadlist');
   
   var feedList = [];

      var Feedback = Parse.Object.extend("Feedback");
      var userFeedback = new Parse.Query(Feedback);
      //var userQuery = new Parse.Query(Parse.Feedback);
      userFeedback
     .startsWith("createdAt", d );
      userFeedback.first({
        success: function(users) 
        {
          console.log('Feedback Found SUCCESS');
          if(users) {
            users.forEach(function(user) 
            {
              var _user = {
                //id : user.id,
                name : user.get('name'),
                username : user.get('username'),
                subject : user.get('subject'),
                
                          }
              feedList.push(_user);
            });
            res.render('leadlist', {feedList: feedList});
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

module.exports = router;