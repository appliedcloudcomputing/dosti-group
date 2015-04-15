var express = require('express');
var router = express.Router();



var Response = {
	InvalidLogin: 'Invalid Login!'
}

router.get('/', function(req, res, next) {
  console.log("Called DASHBOARD");
  res.render('dashboard', {error: ""});
});


/*router.post('/saveedit', function(req, res, next) {
  console.log("*********************** Edit Users Information **********************");
  
});

router.get('/editform', function(req, res, next) {
console.log("In edit details");
var currentUser = req.session.user ? JSON.parse(req.session.user) : null; 
  if (currentUser) {
    var _user = {
       name : currentUser.get("name"),
    }
res.render('editform',{user : _user});
}
else {
    res.redirect('/login');
  }

});*/

module.exports = router;
