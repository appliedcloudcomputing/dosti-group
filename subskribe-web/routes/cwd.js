var express = require('express');
var router = express.Router();
var User = Parse.Object.extend("User");
/* GET users listing. */
/*router.get('/', function(req, res) {
  res.send('respond with a resource');
});

*/
router.get('/', function(req, res, next) {
  console.log("Called Changed Password");
  res.render('cwd', {error: ""});
});


router.post('/save', function(req, res, next) {
  console.log("Called CWD.JS");
  console.log(req.body.oldPassword);
	console.log("Old PAssword :"+ req.body.oldPassword);
	console.log("New PAssword :"+ req.body.newPassword);


  var data ={
    'userName' : req.body.userName,
    'oldPassword' : req.body.oldPassword,
    'newPassword' : req.body.newPassword
  }	;

   Parse.Cloud.run('chngPassword', data, {
      success: function(message) {
        console.log("Success.....Moving To Cloud Code");
      },
      error: function(error) {
        console.log("Error..........");
      }
});
});
module.exports = router;