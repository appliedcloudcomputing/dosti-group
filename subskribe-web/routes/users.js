var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res) {
  res.send('respond with a resource');
});

*/




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


//****************Login Code************
router.get('/login', function(req, res, next) {
  res.render('login', {error: ""});
});

router.post('/login', function(req, res, next) {

console.log("User name:"+req.body.username);
     console.log("Password :"+req.body.password);



 

 if(req.body.username && req.body.password) {
  console.log("username: " + req.body.username);
  console.log("username: " + req.body.password);
    Parse.User.logIn(req.body.username, req.body.password, {
      success: function(user) {
        res.render('dashboard');
        console.log('INSIDE SUCCESS');
        console.log('INSIDE SUCCESS: 200');
        //req.session.user = JSON.stringify(user);
        var response = {
          message: "Login successful!",
          status: 200
        }
        res.end(JSON.stringify(response));
      },
      error: function(user, error) {
        console.log('INSIDE ERROR: 500' + error.message);
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

