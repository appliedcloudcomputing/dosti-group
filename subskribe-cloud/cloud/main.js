
// Use Parse.Cloud.define to define as many cloud functions as you want.
var user = require('cloud/user/user.js');
var cwd = require('cloud/user/changepass.js');
var feed = require('cloud/user/feedback.js');
var pkg = require('cloud/admin/creatpkg.js');
var faq = require('cloud/admin/adminfaq.js');
var que = require('cloud/user/savequery.js');
var adduser = require('cloud/admin/adminadduser.js');
var savepack = require('cloud/user/chngpkg.js');
var pay = require('cloud/user/makepayment.js');
var adminadduser = require('cloud/admin/adminadduser.js');
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
	Parse.Cloud.useMasterKey();

	if(!req.params.id || req.params.id == 0){																//if(!req.params.id || req.params.id == 0) {
		user.save({
			name: req.params.name,
			dob: req.params.dob,
			mobile: req.params.mobile,
			telephone: req.params.telephone,
			email: req.params.email,
			conntype : req.params.conntype,
			password: req.params.password,
			address: req.params.address,
			contactme: req.params.contactme,
			personalNote: req.params.personalNote,	
			hideval : req.params.usertype,	
			dates : req.params.dates,
					
			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});



	} else { console.log("Save User Update");
		console.log(req.params.id);
			console.log(req.params.name);
			console.log(req.params.username);
			console.log(req.params.dob);
			console.log(req.params.mobile);
			console.log(req.params.telephone);
			console.log(req.params.conntype);
			console.log(req.params.address);
			//console.log(req.params.conatctme);
			console.log(req.params.email);

		user.update({
			
			id: req.params.id,
			name: req.params.name,
			username : req.params.username,
			dob: req.params.dob,
			mobile: req.params.mobile,
			telephone: req.params.telephone,
			email: req.params.email,
			conntype : req.params.conntype,
			//password : req.params.password,
			address: req.params.address,

			//contactTime: req.params.contactme,
			//personalNote: req.params.personalNote,
			//hideval : req.params.hideval,

			//contactTime: req.params.contactme,
			//personalNote: req.params.personalNote,
			//usertype: req.params.usertype,
			

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
	 	console.log("PARAMETERS : "+ JSON.stringify(req.params));
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
    		name : req.params.name,
            username : req.params.userName,
            subject : req.params.subject,
            desc : req.params.desc,
            dates : req.params.dates,
			success: function(message){
             res.success(message);
        },
                error: function(error){
                    res.error(error);
                }
            });
       
        
    });

	

	

/********************************* admin User Create **********************/
Parse.Cloud.define('adminsaveUser', function(req, res) {
	console.log("Admin save user called main.js");
	console.log("PARAMETERS : "+ JSON.stringify(req.pramas));
	Parse.Cloud.useMasterKey();

	if(!req.params.id || req.params.id == 0){																//if(!req.params.id || req.params.id == 0) {
		adminadduser.save({
			name: req.params.name,
			username: req.params.username,
			email: req.params.email,
			usertype: req.params.usertype,
			password: req.params.password,
			mobile: req.params.mobile,
			telephone: req.params.telephone,
			address: req.params.address,
			personalnote: req.params.personalnote,	
				
					
			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});



	} else { console.log("Save User Update");
		console.log(req.params.id);
			console.log(req.params.name);
			console.log(req.params.username);
			console.log(req.params.dob);
			console.log(req.params.mobile);
			console.log(req.params.telephone);
			console.log(req.params.conntype);
			console.log(req.params.address);
			//console.log(req.params.conatctme);
			console.log(req.params.email);

		adminadduser.update({
			
			id: req.params.id,
			name: req.params.name,
			username : req.params.username,
			dob: req.params.dob,
			mobile: req.params.mobile,
			telephone: req.params.telephone,
			email: req.params.email,
			conntype : req.params.conntype,
			//password : req.params.password,
			address: req.params.address,

			//contactTime: req.params.contactme,
			//personalNote: req.params.personalNote,
			//hideval : req.params.hideval,

			//contactTime: req.params.contactme,
			//personalNote: req.params.personalNote,
			//usertype: req.params.usertype,
			

			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});
	}
});

/********************************* admin adding users **********************



	Parse.Cloud.define('adminsaveUser', function(req, res) {
	console.log("Admin save user called main.js");
	Parse.Cloud.useMasterKey();

	if(!req.params.id || req.params.id == 0){																//if(!req.params.id || req.params.id == 0) {
		user.save({
			name: req.params.name,
			dob: req.params.dob,
			mobile: req.params.mobile,
			telephone: req.params.telephone,
			email: req.params.email,
			conntype : req.params.conntype,
			password: req.params.password,
			address: req.params.address,
			contactme: req.params.contactme,
			personalNote: req.params.personalNote,	
			hideval : req.params.usertype,	
					
			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});


	} else { console.log("Save User Update");
		console.log(req.params.id);
			console.log(req.params.name);
			console.log(req.params.username);
			console.log(req.params.dob);
			console.log(req.params.mobile);
			console.log(req.params.telephone);
			console.log(req.params.conntype);
			console.log(req.params.address);
			//console.log(req.params.conatctme);
			console.log(req.params.email);

		user.update({
			
			id: req.params.id,
			name: req.params.name,
			username : req.params.username,
			dob: req.params.dob,
			mobile: req.params.mobile,
			telephone: req.params.telephone,
			email: req.params.email,
			conntype : req.params.conntype,
			//password : req.params.password,
			address: req.params.address,

			//contactTime: req.params.contactme,
			//personalNote: req.params.personalNote,
			//hideval : req.params.hideval,

			//contactTime: req.params.contactme,
			//personalNote: req.params.personalNote,
			//usertype: req.params.usertype,
			

			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});
	}
});*/




	
/********************************* Admin Creating Package **********************/

Parse.Cloud.define('creatPackage', function(req, res) {
	console.log("Creating Admin Package Main.js");
	if(!req.params.id || req.params.id == 0) {
		pkg.save({

		   'pkgName':req.params.pkgName,
         
          //'pkgDesc': req.params.pkgDesc, 
          
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

   
/********************************* Admin Creating FAQ **********************/

Parse.Cloud.define('addfaq', function(req, res) {
	console.log("adding frequently asked questions main.js");
	if(!req.params.id || req.params.id == 0) {
		faq.save({

		   'question': req.params.question,
         
          
          'answer': req.params.answer,
          
           		
			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});
	}
	});


/********************************* Saving query  ***********************/

Parse.Cloud.define('saveQuery', function(req, res) {
	 	//Parse.Cloud.useMasterKey();
	 	console.log("PARAMETERS : "+ JSON.stringify(req.params))
		console.log("In main js save query");
    que.save({  
    		name : req.params.name,
            username : req.params.userName,
            subject : req.params.subject,
            about : req.params.about,
            desc : req.params.desc,
            dates : req.params.dates,

			success: function(message){
             res.success(message);
        },
                error: function(error){
                    res.error(error);
                }
            });
       
        
    });



/********************************* Selecting And Saving Package  ***********************/

Parse.Cloud.define('savePackage', function(req, res) {
	 	//Parse.Cloud.useMasterKey();
	 	console.log("PARAMETERS : "+ JSON.stringify(req.params))
		console.log("In main js save Package");

		Parse.Cloud.useMasterKey();

		if(!req.params.id || req.params.id == 0){
    savepack.save({  
    		name : req.params.name,
            email : req.params.email,
            pkgName : req.params.pkgName,
            pkgValidity : req.params.pkgValidity,
            pkgPrice : req.params.pkgPrice,
            fromdate : req.params.fromdate,
            todate : req.params.todate,
            dates : req.params.dates,
			success: function(message){
             res.success(message);
        },
                error: function(error){
                    res.error(error);
                }
           // });
        });
} else { console.log("Update Package");
		
		savepack.update({
			
			id: req.params.id,
			name : req.params.name,
            email : req.params.email,
            pkgName : req.params.pkgName,
            pkgValidity : req.params.pkgValidity,
            pkgPrice : req.params.pkgPrice,
            fromdate : req.params.fromdate,
            todate : req.params.todate,
            dates : req.params.dates,
			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});
	}
});


/************************************ Make Payment *******************************/

Parse.Cloud.define('makePayment', function(req, res) {
	 	//Parse.Cloud.useMasterKey();
	 	console.log("PARAMETERS : "+ JSON.stringify(req.params))
		console.log("In main js Make Payment");
    pay.save({  
    		name : req.params.name,
            email : req.params.email,
            planname : req.params.planname,
            validity : req.params.validity,
            amount : req.params.amount,
            dates : req.params.dates,

			success: function(message){
             res.success(message);
        },
                error: function(error){
                    res.error(error);
                }
            });
       
        
    });
