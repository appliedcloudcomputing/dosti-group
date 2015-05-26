var express = require('express');
var router = express.Router();

//router.get('/adminquerylist', function(req, res, next) {
  router.get('/', function(req, res, next) {
  console.log("Query Listing Called");
  var queryList = [];

      var Query = Parse.Object.extend("Query");
      var userQuery = new Parse.Query(Query);
      //var userQuery = new Parse.Query(Parse.Feedback);
      userQuery.find({
        success: function(users) 
        {
          console.log('Query SUCCESS');
          if(users) {
            users.forEach(function(user) 
            {
              var _user = {
                id : user.id,
                about : user.get('about'),
                desc : user.get('description'),
                name : user.get('name'),
                subject : user.get('subject'),
                username : user.get('username'),
                datetime : user.get('datetime'),
               
                          }
              queryList.push(_user);
            });
            res.render('adminquerylist', {queryList: queryList});
           } 

           else 
           {
            console.log('NO Query PRESENT');
           }
        },
        error: function(error) {
          console.log('ERROR FINDING Query: ' + error.message);
        }
      });

});


//router.post('/list', function(req, res, next) {
  //console.log("Called User Listing");

router.get('/querydetails', function(req, res, next) {
  console.log("Called Query View");

var Query = Parse.Object.extend("Query");
      var userQuery = new Parse.Query(Query);
      userQuery.equalTo("objectId",req.query.id);
      userQuery.first({
        success: function(users) 
        {
          console.log('Query View SUCCESS');       
              var _user = {
                about : users.get('about'),
                username: users.get('username'),
                name:users.get('name'),
                subject :users.get('subject'),
                description: users.get('description'),
                datetime: users.get('datetime')
                          }           
            res.render('querydetails', {user: _user});                    
        },
        error: function(error) {
          console.log('ERROR FINDING Feedback View: ' + error.message);
        }
      });
 

});

module.exports = router;