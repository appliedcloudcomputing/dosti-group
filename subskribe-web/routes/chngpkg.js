var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {
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
<<<<<<< HEAD
                pkid: user.id,
=======
                pkgid:user.id,
>>>>>>> 5a2a78235a8f954b52948be6648bc0df4d48d82c
                pkname: user.get('pkname'),
                pkgvalidity:user.get('pkgvalidity'),
                pkgprice:user.get('pkgprice')
                }
              pkgList.push(_user);
            });
            res.render('chngpkg', {pkgList: pkgList, user : _u});
           } 

           else 
           {
            console.log('NO Package PRESENT');
           }
        },
        error: function(error) {
          console.log('ERROR FINDING USERS: ' + error.message);
        }
      });

  }else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
});

 
/*router.post('/save', function(req, res, next) {
console.log("Change Package called");*/
  
  
<<<<<<< HEAD
/*console.log("Pkg Decription :"+ req.body.newPkgName);
=======
console.log("Pkg Decription :"+ req.body.PkgName);
>>>>>>> 5a2a78235a8f954b52948be6648bc0df4d48d82c
	//console.log("Pkg Price :"+ req.body.newPkgPrice);
console.log("Pkg Validity :"+ req.body.newPkgValidity);
  
});*/


router.get('/pkgprice', function(req, res, next) {
console.log("Pricing Method called");
console.log("Package Name:"+ req.query.q);  

var Package = Parse.Object.extend("Package");
var userQuery = new Parse.Query(Package);
      userQuery.equalTo("pkname",req.query.q);
      userQuery.first({
  success: function(users) {
    console.log("In Success");
    var _user={
      pkgprice : users.get('pkgprice')
    }
    //res.render('chngpkg', {user: _user});
   
  },
  error: function(error) {
    alert("Error:" );
  }
});
});


module.exports = router;
