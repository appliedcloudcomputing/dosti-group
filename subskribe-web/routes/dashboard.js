var express = require('express');
var router = express.Router();

var Response = {
	InvalidLogin: 'Invalid Login!'
}

router.get('/', function(req, res) {

	console.log('Rendering Dashboard page...');
	/*var currentUser = req.session.user ? JSON.parse(req.session.user) : null;	
	if (currentUser) {*/
		res.render('dashboard', { title: 'Dashboard'});
	//} else {
		//res.redirect('/login');
	//}
}); 

router.post('/login', function(req, res, next) {
console.log("*********************** LOGIN POST EXCUTED **********************");
console.log("User name:"+req.body.username);
console.log("Password :"+req.body.password);

console.log("*********Do IT****************");

 var query = new Parse.Query(Parse.User);
var userList = [];
var _user;
 if(req.body.username && req.body.password) {
  console.log("username: " + req.body.username);
  console.log("username: " + req.body.password);
    Parse.User.logIn(req.body.username, req.body.password, {
      success: function(user) {
        console.log("*************LOGIN SUCCESS*************");

        query.equalTo("username",req.body.username);
        query.first({
            success: function(user) {
              console.log("In Success"+ JSON.stringify(user));
               _user={ 
                username : user.get('username'),
                email : user.get('email'),
                contact : user.get('telephone')
              }
              console.log(_user.username);
              userList.push(_user);
               res.render('dashboard',{userList: userList});
            },
            error:function(error){
              console.log(error);

            }
           
          });

         // res.render('dashboard',{userList: userList});
      },
      error: function(user, error) {
        console.log('INSIDE LOGIN ERROR: 500' + error.message);
        var response = {
          message: error.message,
          status: 500
        }
        res.end(JSON.stringify(response));
      }
    });
  } else {
    var response = {
      message: "Bad request!",
      status: 400
    }
    res.end(JSON.stringify(response));
  }
});



module.exports = router;
