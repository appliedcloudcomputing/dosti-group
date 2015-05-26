var express = require('express');
var router = express.Router();





router.get('/', function(req, res, next) 
{
   console.log("Change Package");
    var currentUser = Parse.User.current();
   if (currentUser) 
  {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _u = {
       name : currentUser.get("name"),
    }
     var pkgList = [];
      var Package = Parse.Object.extend("Package");
      var userQuery = new Parse.Query(Package);
      userQuery.find({
        success: function(users) 
        {
          console.log('In Change Package SUCCESS');
          if(users) {
            users.forEach(function(user) 
            {
              var _user = {
                pkgid:user.id,
                pkname: user.get('pkname'),
                pkgvalidity:user.get('pkgvalidity'),
                pkgprice:user.get('pkgprice')
                }
              pkgList.push(_user);
            });
            res.render('chngpkg', {pkgList: pkgList, user : _u});
           } else 
           {
            console.log('NO Package PRESENT');
           }
        },
        error: function(error) {
          console.log('ERROR FINDING USERS: ' + error.message);
        }
      });

  }
  else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
});


router.get('/pkgprice', function(req, res, next) {
  console.log("Package Price");
  console.log("Package Name"+req.query.q);


  var Package = Parse.Object.extend("Package");
var query = new Parse.Query(Package);
query.equalTo("pkname",req.query.q );
query.first({
  success: function(results) {

    var _u = {
              pkgprice: results.get('pkgprice'),
              status : 200
            }
console.log(_u);
       res.end(JSON.stringify(_u));

 console.log("Success");
  },
  error: function(error) {
    console.log("Error");
  }
});

 });

module.exports = router;
