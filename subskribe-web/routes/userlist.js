var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("User Listing Called");
  var userlist = [];

      
      var userQuery = new Parse.Query(Parse.User);
      userQuery.find({
        success: function(users) 
        {
          console.log('USER SUCCESS');
          if(users) {
            users.forEach(function(user) 
            {
              var _user = {
                name : user.get('name'),
                email: user.get('email'),
                username:user.get('username'),
                //telephone :user.get('telephone'),
                mobile:user.get('mobile'),
                address: user.get('address'),
                dob:user.get('dob'),
                connectiontype :user.get('connectiontype'),
                usertype:user.get('usertype')
                          }
              userlist.push(_user);
            });
            res.render('userlist', {userlist: userlist});
           } 

           else 
           {
            console.log('NO USERS PRESENT');
           }
        },
        error: function(error) {
          console.log('ERROR FINDING USERS: ' + error.message);
        }
      });

});


router.post('/list', function(req, res, next) {
  console.log("Called User Listing");




});

module.exports = router;