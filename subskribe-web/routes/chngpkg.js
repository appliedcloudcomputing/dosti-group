var express = require('express');
var router = express.Router();
var pkgs = Parse.Object.extend("Package");
router.get('/chngpkg', function(req, res, next) {

  console.log("Called Create package page");
  var currentUser = Parse.User.current();

  if (currentUser) 
  {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var _u = {
       name : currentUser.get("name"),
    }
     var userList = [];
      
      var userQuery = new Parse.Query(Parse.User);
      userQuery.find({
        success: function(users) 
        {
          console.log('USER SUCCESS');
          if(users) {
            users.forEach(function(user) 
            {
              var _user = {

                email: user.get('email'),
                username:user.get('username')
               
                          }
              userList.push(_user);
            });
            res.render('userList', {userList: userList, user : _u});

  console.log("Called Change package page");
      var pkgList = [];
      
      var pkgQuery = new Parse.Query(Parse.Package);
      pkgQuery.find({
        success: function(pkgs) 
        {
          console.log('USER SUCCESS');
          if(pkgs) {
            pkgs.forEach(function(pkgs) 
            {
              var _user = {

                pkname: pkgs.get('pkname'),
                pkgvalidity: pkgs.get('pkgvalidity'),
                
                          }
              pkgList.push(_user);
            });
            res.render('chngpkg', {pkgList: pkgList});

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


  }else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   

  res.render('chngpkg', {error: ""});
});


  });  
  




router.post('/save', function(req, res, next) {
  console.log("Called Change pkg package post method");
  //console.log(req.body.oldPassword);
	//console.log("Pkg Name :"+ req.body.txtPkgName);
  
	console.log("Pkg Decription :"+ req.body.txtDesc);
	console.log("Pkg Price :"+ req.body.txtPrice);
	console.log("Pkg Validity :"+ req.body.txtValidity);
  console.log("Current Pkg :"+ req.body.txtCurrent);

  var price=req.body.txtValidity * req.body.txtCurrent;
  console.log ("Price is="+ price);

	var pkgdata ={
   // 'pkgName' : req.body.txtPkgName,
    'pkgDesc' : req.body.txtDesc,
    'pkgPrice' : price,
    pkgCurrent : req.body.txtCurrent,
    'pkgValidity' : req.body.txtValidity,
    'pkgType' : req.body.pkgType,
  }	;

   
});

module.exports = router;
