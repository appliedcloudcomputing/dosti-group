
// Use Parse.Cloud.define to define as many cloud functions as you want.
var user = require('cloud/user/user.js');
var cwd = require('cloud/user/changepass.js');
var feed = require('cloud/user/feedback.js');
 var admin= require('cloud/Admin/adminreg.js');
 var pkg = require('cloud/Admin/creatpkg.js');

//RESPONSE MESSAGE FOR ALL CLOUD FUNCTIONS
var Response = {
	ParametersEmpty: 'Please provide complete details',
	InternalServerError: 'Oops! Some error occurred! Please try again',
	NotFound: 'Requested resource not found!',
	LoginError: 'Some error in current session!',
	SaveSuccess: 'Resource saved successfully!',
	UpdateSuccess: 'Resource updated successfully!',
	DeleteSuccess: 'Resource deleted successfully!'
};

/*-----------------------------------------------USER-----------------------------------------------*/

Parse.Cloud.define('saveUser', function(req, res) {
	console.log("save user called main.js");
	if(!req.params.id || req.params.id == 0) {
		user.save({
			name: req.params.name,
			dob: req.params.dob,
			mobile: req.params.mobile,
			telephone: req.params.telephone,
			email: req.params.email,
			conntype : req.params.conntype,
			password: req.params.password,
			//enterprise: req.params.enterprise,
			address: req.params.address,
			contactme: req.params.contactme,
			personalNote: req.params.personalNote,		
					
			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});
	} else {
		user.update({
			id: req.params.id,
			name: req.params.name,
			dob: req.params.dob,
			mobile: req.params.mobile,
			telephone: req.params.telephone,
			email: req.params.email,
			conntype : req.params.conntype,
			//enterprise: req.params.enterprise,
			address: req.params.address,
			contactTime: req.params.contactme,
			personalNote: req.params.personalNote,

			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});
	}
});

//BEFORE SAVE
/*
Parse.Cloud.beforeSave('User', function(req, res) {
	var client = req.object;
	var currentUser = client.get('lastUpdatedBy');
	if(currentUser) {
		var tags;
		var name = client.get('name');
		
		tags = '#' + name;
		client.set('tags', tags);
		res.success();
	} else {
		res.error(Response.LoginError);
	}
});
*/
/*-----------------------------------------------END USER-----------------------------------------------*/

/*************************************** Changing Password ********************************/
Parse.Cloud.define('chngPassword', function(req, res) {
	 	Parse.Cloud.useMasterKey();
	 	console.log("PARAMETERS : "+ JSON.stringify(req.pramas))
		console.log("In main js change password");
    cwd.save({    
            newPassword : req.params.newPassword,
            username : req.params.userName,
			success: function(message){
             res.success(message);
        },
                error: function(error){
                    res.error(error);
                }
            });
       
        
    });


/*********************************FEEDBACK*********************************/
		
	Parse.Cloud.define('saveFeedback', function(req, res) {
	 	//Parse.Cloud.useMasterKey();
	 	console.log("PARAMETERS : "+ JSON.stringify(req.pramas))
		console.log("In main js save feedback");
    feed.save({    
            username : req.params.userName,
            subject : req.params.subject,
            desc : req.params.desc,
			success: function(message){
             res.success(message);
        },
                error: function(error){
                    res.error(error);
                }
            });
       
        
    });

	/***************************** Admin Registration ********************************/

	Parse.Cloud.define('saveAdmincc', function(req, res) {
	console.log("save admin called main.js");
	if(!req.params.id || req.params.id == 0) {
		admin.save({

		   'adname':req.params.name,
         // 'dob': req.body.dobMonth +" " + req.body.dobDate + " " + req.body.dobYear, 
          'admobile': req.params.mobile, 
          'adtelephone': req.params.telephone,
          'ademail': req.params.email,
           'adpassword': req.params.password,
         //'enterprise': req.body.hideval,
          'adlocation': req.params.location,
          //'contactTime': "06/01/2015",
          'adnominee': req.params.nominee,		
					
			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});
	} else {
		user.update({
			'name':req.params.firstName,
         // 'dob': req.body.dobMonth +" " + req.body.dobDate + " " + req.body.dobYear, 
          'mobile': req.params.mobileNumber, 
          'telephone':req.params.telephoneNumber,
          'email': req.params.primaryEmailAddress,
           'password': req.params.txtPassword,
         //'enterprise': req.body.hideval,
          'location': req.params.adminLocation,
          //'contactTime': "06/01/2015",
          'nominee':req.params.nominee,	

			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});
	}
});

	
/********************************* admin package create **********************/


	



	/***************************** Admin Registration ********************************/

	Parse.Cloud.define('saveAdmin', function(req, res) {
	console.log("save admin called main.js");
	if(!req.params.id || req.params.id == 0) {
		admin.save({

		   'adname':req.params.name,
         // 'dob': req.body.dobMonth +" " + req.body.dobDate + " " + req.body.dobYear, 
          'admobile': req.params.mobile, 
          'adtelephone': req.params.telephone,
          'ademail': req.params.email,
           'adpassword': req.params.password,
         //'enterprise': req.body.hideval,
          'adlocation': req.params.location,
          //'contactTime': "06/01/2015",
          'adnominee': req.params.nominee,		
					
			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});
	} else {
		user.update({
			'name':req.params.firstName,
         // 'dob': req.body.dobMonth +" " + req.body.dobDate + " " + req.body.dobYear, 
          'mobile': req.params.mobileNumber, 
          'telephone':req.params.telephoneNumber,
          'email': req.params.primaryEmailAddress,
           'password': req.params.txtPassword,
         //'enterprise': req.body.hideval,
          'location': req.params.adminLocation,
          //'contactTime': "06/01/2015",
          'nominee':req.params.nominee,	

			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});
	}
});

	
/********************************* Admin Creating Package **********************/

Parse.Cloud.define('creatPackage', function(req, res) {
	console.log("Creating Admin Package Main.js");
	if(!req.params.id || req.params.id == 0) {
		pkg.save({

		   'pkgName':req.params.pkgName,
         
          'pkgDesc': req.params.pkgDesc, 
          
          'pkgPrice': req.params.pkgPrice,
          
          'pkgValidity': req.params.pkgValidity,

           		
			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});

	} else {
		pkg.update({
			
			'pkgName':req.params.pkgName,
         
          'pkgDesc': req.params.pkgDesc, 
          
          'pkgPrice': req.params.pkgPrice,
          
          'pkgValidity': req.params.pkgValidity,
           
			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});
	}
});

