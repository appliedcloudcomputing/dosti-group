Parse.Cloud.define('saveUser', function(req, res) {
	console.log("save user called main.js");
	if(!req.params.id || req.params.id == 0) {
		user.save({
			name: req.params.name,
			//dob: req.params.dob,
			mobile: req.params.mobile,
			telephone: req.params.telephone,
			email: req.params.email,
			password: req.params.password,
			enterprise: req.params.enterprise,
			address: req.params.address,
			//contactTime: req.params.contactTime,
			personalNote: req.params.personalNote,		
					
			success: function(message) {
				res.success(message);
			},
			error: function(error) {
				res.error(error);
			}
		});
	} 

	else {
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
