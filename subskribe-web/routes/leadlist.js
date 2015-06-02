var express = require('express');
var router = express.Router();


  router.get('/leadlist', function(req, res, next) {
var d= new Date();
console.log(d);

  	var feedbacklist = [];

  	 var Feedback = Parse.Object.extend("Feedback");
      var userQuery = new Parse.Query(Feedback);
     userQuery.startsWith("createdAt", d );
      userQuery.first({
        success: function(users) 
        {
          console.log('Feedback Listing SUCCESS');
          if(users) {
            users.forEach(function(user) 
            {
              var _feedlist = {
               
                name : user.get('name'),
                username:user.get('username'),
                subject :user.get('subject'),
                desc : user.get('description')
               
                          }
              feedbacklist.push(_feedlist);
            });
            res.render('leadlist', {feedbacklist: feedbacklist});
           } 

           else 
           {
            console.log('NO Today`s Feedback PRESENT');
           }
        },
        error: function(error) {
          console.log('ERROR In FINDING Today`s Feedback: ' + error.message);
        }
      });
});

  module.exports = router;