var express = require('express');
var router = express.Router();

//router.get('/adduser', function(req, res, next) {
  router.get('/adminlist', function(req, res, next) {
  console.log("Called Admin listing page");

   var adminlist = [];

      var User = Parse.Object.extend("User");
      var userQuery = new Parse.Query(User);
      userQuery.equalTo("usertype", "Admin");
      userQuery.find({
        success: function(users) 
        {
          console.log('Admin Listing SUCCESS');
          if(users) {
            users.forEach(function(user) 
            {
              var _user = {
                id : user.id,
                name : user.get('name'),
                username:user.get('username'),
                email :user.get('email'),
                mobile : user.get('mobile'),
               	telephone :user.get('telephone'),
                address : user.get('address'),
               
                          }
              adminlist.push(_user);
            });
            res.render('adminlist', {adminlist: adminlist});
           } 

           else 
           {
            console.log('NO Admin List PRESENT');
           }
        },
        error: function(error) {
          console.log('ERROR FINDING Admin List: ' + error.message);
        }
      });


    
    
});

  module.exports = router;
