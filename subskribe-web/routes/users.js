var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res) {
  res.send('respond with a resource');
});

*/




router.get('/franch', function(req, res, next) {
  console.log("Called Index");
  res.render('franch', {error: ""});
});


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

  var data = {
          'name':req.body.txtFirstName,
         // 'dob': req.body.dobMonth +" " + req.body.dobDate + " " + req.body.dobYear, 
          'mobile': req.body.txtMobileNumber, 
          'telephone':req.body.txtTelephoneNumber,
          'dob' : req.body.txtDOB,
          'email': req.body.txtPrimaryEmailAddress,
          'conntype' : req.body.connectionType,
           'password': req.body.txtPassword,
         //'enterprise': req.body.hideval,
         'contactme' : req.body.txtContactDate + req.body.txtTime,
          'address':  req.body.txtBusinessAddress,
          //'contactTime': "06/01/2015",
          'personalNote':req.body.txtPersonalNote,
          
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

