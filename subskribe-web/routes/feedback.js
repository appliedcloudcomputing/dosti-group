var express = require('express');
var router = express.Router();


router.get('/feedback', function(req, res, next) {
  console.log("Called FeedBack JS");
  res.render('feedback', {error: ""});
});


router.post('/feedback', function(req, res, next) {
  	console.log("Called Post Of Feedback");
  	console.log(req.body.txtUsername);
	console.log(req.body.txtSubject);
	console.log(req.body.txtDesc);


	var feeddata ={
    'userName' : req.body.txtUsername,
    'subject' : req.body.txtSubject,
    'desc' : req.body.txtDesc,
  }	;


Parse.Cloud.run('saveFeedback', feeddata, {
      success: function(message) {
        console.log("Success.....Moving To Cloud Code ...... FeedBack");
      },
      error: function(error) {
        console.log("Error..........");
      }
});
});

module.exports = router;