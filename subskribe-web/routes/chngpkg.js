var express = require('express');
var router = express.Router();





router.get('/', function(req, res, next) 
{
   console.log("Change Package");
   var currpkg={};
    var currentUser = Parse.User.current();
   if (currentUser) 
  {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _u = {
       name : currentUser.get("name"),
       email : currentUser.get("email")
    }

var SavePackage = Parse.Object.extend("SavePackage");
var query = new Parse.Query(SavePackage);
query.equalTo("email", _u.email);
query.first({
  success: function(results) {
    console.log("In Success");
    currpkg={
      currpkgname : results.get('packname'),
      currpkgvalidity : results.get('packvalidity'),
      currpkgprice : results.get('packprice')
    }
   console.log(JSON.stringify(currpkg));
     },
  error: function(error) {
    console.log("In Error");
  }
});




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
            res.render('chngpkg', {pkgList: pkgList, user : _u,currpkg : currpkg});
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


router.post('/save', function(req, res, next) {
  console.log("Called Save Package Post Method");
  
  console.log("Pkg Name :"+ req.body.newPkgName);
  console.log("Pkg Validity :"+ req.body.newPkgValidity);
  console.log("Pkg Price :"+ req.body.txtPrice);
  console.log("Name :"+ req.body.txtName);
  console.log("User Name :"+ req.body.txtEmail);
  
  

var pkginfo = {
          'name' :req.body.txtName,
          'email' :req.body.txtEmail,
          'fromdate' :req.body.txtFromdate,
          'todate' :req.body.txtTodate,
          'pkgName':req.body.newPkgName,  
          'pkgValidity':req.body.newPkgValidity,
          'pkgPrice': req.body.txtPrice,
           };

 Parse.Cloud.run('savePackage', pkginfo, {
      success: function(message) {
        console.log("Success.....Package Save Successfully");
      },
      error: function(error) {
        console.log("Error..........");
      }
});


});


module.exports = router;
