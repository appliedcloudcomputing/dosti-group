var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res) {
  res.send('respond with a resource');
});

*/
router.get('/cwd', function(req, res, next) {
  console.log("Called Changed Password");
  res.render('cwd', {error: ""});
});


router.post('/cwd', function(req, res, next) {
  console.log("Called CWD.JS");
  console.log(req.body.oldPassword);
	console.log("Old PAssword :"+ req.body.oldPassword);
	console.log("New PAssword :"+ req.body.newPassword);
	
Parse.User.requestPasswordReset(req.body.oldPassword, {
  success: function() {
    var user = new User();
		user.set("password", req.body.newPassword);
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
});

module.exports = router;