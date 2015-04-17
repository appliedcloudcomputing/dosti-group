var express = require('express');
var router = express.Router();



var Response = {
	InvalidLogin: 'Invalid Login!'
}

router.get('/', function(req, res, next) {
  console.log("Called DASHBOARD");
  res.render('dashboard', {error: ""});
});



module.exports = router;
