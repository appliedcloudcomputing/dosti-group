var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 var currentUser = Parse.User.current();
  if (currentUser) {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
    console.log(currentUser.get('name'));
    var _user = {
        id : currentUser.id,
       name : currentUser.get("name"),
       username : currentUser.get("username"),
       address : currentUser.get("address"),
       connectiontype : currentUser.get("connectiontype"),
       contacttime : currentUser.get("contactTime"),
       dob : currentUser.get("dob"),
       email : currentUser.get("email"),
       password : currentUser.get("password"),
       mobile : currentUser.get("mobile"),
       telephone : currentUser.get("telephone"),
       personalnote : currentUser.get("personalNote"),
       usertype : currentUser.get("usertype"), 
    }
      res.render('myprofile', {user : _user});
      console.log(currentUser.id);
  } else {
      // show the signup or login page
    res.render('login', {title: 'Login', message: Response.InvalidLogin});
  }   
  
});




router.post('/update', function(req, res, next) {
console.log("In Update Post");

var currentUser = Parse.User.current();
 if (currentUser) 
  {
    console.log("CURRENT USER : "+ JSON.stringify(currentUser));
 var updatedata = {
    name:req.body.txtName,
    username:req.body.txtuserName,
    address:req.body.txtAddress,
    conntype:req.body.txtConnectiontype,
    contacttime:req.body.txtContacttime,
    dob:req.body.txtDob,
    email:req.body.txtEmail,
    mobile:req.body.txtMobile,
    telephone:req.body.txtTelephone,
  };

Parse.Cloud.run('saveUser', updatedata, {
      success: function(message) {
        console.log("Success.....Moving To Cloud Code");
      },
      error: function(error) {
        console.log("Error..........");
      }
});

}
else{
  console.log("Error");
}
});  


router.post('/save', function(req, res, next) {
  console.log("Called Update User");
  

  var updatedata = {
          'id' : req.body.txtId,
          'name':req.body.txtName,
          'username' : req.body.txtuserName,
          'address' : req.body.txtAddress,
          'conntype' : req.body.txtConnectiontype,
          //'contactme' : req.body.txtContacttime,
          'dob' : req.body.txtDob,
          'email': req.body.txtEmail, 
          'mobile': req.body.txtMobile, 
          'telephone':req.body.txtTelephone,
          
        };
    console.log(updatedata.id);
    Parse.Cloud.run('saveUser', updatedata, {
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


router.post('/uploadImage',function(req,res){
  console.log("Upload image called");
  console.log("File : "+req.body.uploadImage);
  console.log(req.body.txtId);

  
  var base64Data = new Buffer(req.body.uploadImage);
  console.log(" "+base64Data.name);
  var parseFile = new Parse.File("a.JPEG",{base64: new Buffer(req.body.uploadImage).toString('base64')});
  console.log("File  : "+parseFile.toString('base64'));
 
  parseFile.save().then(function() {
    console.log("***************** FILE SAVE SUCCESS ********************");
              Parse.Cloud.useMasterKey();
              var query = new Parse.Query(Parse.User);
              query.equalTo("objectId",req.body.txtId);
              query.first({
                success: function(results) 
                {
                 results.set("profileImg",parseFile);
                 results.save(null, {
                   success: function(results) {
                   res.end("Uploaded success fully");
                   },
                   error: function(gameScore, error) {
                       console.log('Failed to create new object, with error code: ' + error.description);
                       }
                   });
                }
              })
  }, function(error) {
    console.log("************** FILE SAVE ERROR *************** :"+error.message);
  });
});

module.exports = router;     

