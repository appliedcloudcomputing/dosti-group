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

               
                pkgid:user.id,

               
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

 
router.post('/save', function(req, res, next) {
console.log("Change Package called");

 var currentUser = Parse.User.current();
   if (currentUser) 
  {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    var  data = {
       name : currentUser.get("name"),
       username : currentUser.get("username"),
       email : currentUser.get("email"),
    } ;

    Parse.Cloud.run('savePackage', data, {
      success: function(message) {
        var response = {
          message: message,
          status: 200
        }
        res.end(JSON.stringify(response));
      },
      error: function(error) {
        var response = {
          message: error.message,
          status: error.code
        }
        res.end(JSON.stringify(response));
      }
    }); 
  } else {
    res.redirect('/login');
  } 
});

  



router.get('/pkgprice', function(req, res, next) {
console.log("Pricing Method called");
console.log("Package Name:"+req.query.q);  
<<<<<<< HEAD
var Package = Parse.Object.extend("Package");
var query = new Parse.Query(Package);
var results;
query.equalTo("pkname", req.query.q);
query.find({
  success: function(results) {
    console.log("Successful");
   
   
  },
  error: function(error) {
    console.log("Failure");
=======
if (currentUser) {  
    var _clients = [];
    var Client = Parse.Object.extend('Client');
    var clientQuery = new Parse.Query(Client);
    clientQuery.equalTo("pkname", req.query.q);
    clientQuery.find({
      success:function(clients) {
        if(clients) {
          
          for(var i = 0; i < clients.length; i++) {
            var response = {};
            console.log('CLIENTS: ' + clients[i].get('pkgprice'));
            //console.log('address1: ' + clients[i].get('address1'));
            response.id = clients[i].id;
            response.name = clients[i].get('pkgprice');
            //response.address1 = clients[i].get('address1');
            //response.address2 = clients[i].get('address2');
            //response.address3 = clients[i].get('address3');
            //console.log("ADDRESS 3 :"+clients[i].get('address3'));
            //response.city = clients[i].get('city');
            _clients.push(response);
          }
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(_clients));
        } else {
          console.log("No Package Found");
        }
      },
      error:function(clients ,error){
        console.log("Get Clients Error : "+ error.code + ", Message: "+ error.message);
      }
    });
  } else {
    res.redirect('/');

  }
});

module.exports = router;
