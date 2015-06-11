var express = require('express');
var router = express.Router();

//router.get('/adminfaq', function(req, res, next) {
  router.get('/', function(req, res, next) {
  console.log("Called Add FAQ page");
  var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
   var _user = {
      name : currentUser.get("name"),
   }
      res.render('adminfaq', {error: ""});

  } else {
     //show the signup or login page
  res.render('login', {title: 'Login', message: Response.InvalidLogin});
}   

});

router.post('/save', function(req, res, next) {
  console.log("Called Add FAQ post method");
  //console.log(req.body.oldPassword);
	//console.log("Pkg Name :"+ req.body.txtPkgName);
	console.log("Question :"+ req.body.txtQuestion);
	console.log("Answer :"+ req.body.txtAnswer);
	
var faq = {
          'question': req.body.txtQuestion,  
          'answer': req.body.txtAnswer,
          
           };

 Parse.Cloud.run('addfaq', faq, {
      success: function(message) {
        console.log("Success.....Question added Successfully");
      },
      error: function(error) {
        console.log("Error..........");
      }
});


});

module.exports = router;