var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res) {
  res.send('respond with a resource');
});

*/

/*router.get('/', function(req, res, next) {
  console.log("Called Index");
  res.render('index', {error: ""});
});*/

router.get('/Franch', function(req, res, next) {
  console.log("Called Index");
  res.render('Franch', {error: ""});
});


router.get('/', function(req, res, next) {
  console.log("Called Index");
  res.render('index', {error: ""});
});

router.post('/save', function(req, res, next) {
  console.log("Called User Save");
  console.log(req.body.txtPassword);
	console.log("name :"+ req.body.firstName +" " + req.body.middleName + " " + req.body.lastName);
  var data = {
          'name':req.body.firstName +" " + req.body.middleName + " " + req.body.lastName,
          'dob': req.body.dobMonth +" " + req.body.dobDate + " " + req.body.dobYear, 
          'mobile': req.body.mobileNumber, 
          'telephone':req.body.telephoneNumber,
          'email': req.body.primaryEmailAddress,
           'password': req.body.txtPassword,
         'enterprise': req.body.hideval,
          'address': req.body.txtFlat+" "+req.body.txtBuild+" "+req.body.txtArea+" "+req.body.txtSubArea+" "+req.body.txtCity+" "+req.body.txtPin,
          //'contactTime': "06/01/2015",
          'personalNote':req.body.personalNote,
          
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

