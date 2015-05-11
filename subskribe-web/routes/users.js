var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res) {
  res.send('respond with a resource');
});

*/






router.get('/', function(req, res, next) {
  console.log("Called Index");
  res.render('index', {error: ""});
});

router.post('/save', function(req, res, next) {
  console.log("Called User Save");
  
  console.log(req.body.txtFirstName);
  console.log(req.body.txtMobileNumber);
  console.log(req.body.txtTelephoneNumber);
  console.log(req.body.txtDOB);
  console.log(req.body.txtPrimaryEmailAddress);
  console.log(req.body.txtconnectionType);
  console.log(req.body.txtPassword);
  console.log(req.body.txtContactDate);
  console.log(req.body.txtTime);
  console.log(req.body.txtBusinessAddress);
  console.log(req.body.txtPersonalNote);
  console.log(req.body.hideval);

  var data = {
          'name':req.body.txtFirstName, 
          'mobile': req.body.txtMobileNumber, 
          'telephone':req.body.txtTelephoneNumber,
          'dob' : req.body.txtDOB,
          'email': req.body.txtPrimaryEmailAddress,
          'conntype' : req.body.txtconnectionType,
           'password': req.body.txtPassword,
         'contactme' : req.body.txtContactDate + req.body.txtTime,
          'address':  req.body.txtBusinessAddress,
          'personalNote':req.body.txtPersonalNote,
          'usertype' : req.body.hideval,
        };

    Parse.Cloud.run('saveUser', data, {
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
});




module.exports = router;

