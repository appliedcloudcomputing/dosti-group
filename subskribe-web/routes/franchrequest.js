var express = require('express');
var router = express.Router();

//router.get('/adminfeedbacklist', function(req, res, next) {
  router.get('/franchrequest', function(req, res, next) {

  console.log("Franchisee Request Listing Called");
  var franchlist = [];

      var User = Parse.Object.extend("User");
      var userQuery = new Parse.Query(User);
      userQuery.equalTo("usertype", "Franchisee");
      userQuery.find({
        success: function(users) 
        {
          console.log('Franchisee Request List SUCCESS');
          if(users) {
            users.forEach(function(user) 
            {
              var _user = {
                id : user.id,
                name : user.get('name'),
                username:user.get('username'),
                address :user.get('address'),
                mobile : user.get('mobile'),
                telephone : user.get('telephone'),
               
                          }
              franchlist.push(_user);
            });
            res.render('franchrequest', {franchlist: franchlist});
           } 

           else 
           {
            console.log('NO Franchisee Request PRESENT');
           }
        },
        error: function(error) {
          console.log('ERROR FINDING Franchisee Request: ' + error.message);
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