
// Use Parse.Cloud.define to define as many cloud functions as you want.

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
	if(!req.params.id || req.params.id == 0) {
		user.save({
			name: req.params.name,
			dob: req.params.dob,
			mobile: req.params.mobile,
			telephone: req.params.telephone,
			email: req.params.email,
			enterprise: req.params.enterprise,
			address: req.params.address,
			contactTime: req.params.contactTime,
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
			enterprise: req.params.enterprise,
			address: req.params.address,
			contactTime: req.params.contactTime,
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

/*-----------------------------------------------END USER-----------------------------------------------*/


