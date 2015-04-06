var Package = Parse.Object.extend("Package");

var Response = {
	ParametersEmpty: "Please provide complete details",
	InternalServerError: "Oops! Some error occurred! Please try again",
	NotFound: "Requested resource not found!",
	LoginError: "Some error in current session!",
	SaveSuccess: "Resource saved successfully!",
	UpdateSuccess: "Resource updated successfully!",
	DeleteSuccess: "Resource deleted successfully!"
};


exports.save = function(params) {
	console.log("*******************************************************PARAMETERS :"+ JSON.stringify(params));
	/*if(!params || !params.name || !params.dob || !params.mobile || !params.telephone || !params.email 
		|| !params.enterprise || !params.address || !params.contactTime || !params.personalNote) {
		params.error(Response.ParametersEmpty);
	} else {*/

		console.log("**********************SAVING CALLED ");
		//SAVING USER
		var pkg = new Package();
		
		pkg.set("pkname", params.pkgName);
		pkg.set("pkgdesc", params.pkgDesc);
		pkg.set("pkgprice", params.pkgPrice);
		pkg.set("pkgvalidity", params.pkgValidity);
		
		
		pkg.save(null, {
			success: function(pkg) {
				console.log("Package created successfully");
				params.success(Response.SaveSuccess);
			},
			error: function(pkg, error) {
				console.log("ERROR IN SAVING package : " + error.message);
				params.error(Response.InternalServerError);
			}
 		});
	//}
};

exports.update = function(params) {
	console.log("User updated successfully");
	if(!params || !params.id || !params.name || !params.dob || !params.mobile || !params.telephone || !params.email 
		|| !params.enterprise || !params.address || !params.contactTime || !params.personalNote) {
		params.error(Response.ParametersEmpty);
	} else {
		var currentUser = Parse.User.current();
		if(!currentUser)
			params.error(Response.LoginError);

		var userQuery = new Parse.Query(User);
		userQuery.get(params.id, {
			success: function(user) {
				if(admin) {
					admin.set("name", params.name);
					admin.set("dob", params.dob);
					admin.set("mobile", params.mobile);
					admin.set("telephone", params.telephone);
					admin.set("email", params.email);
					admin.set("enterprise", params.enterprise);
					admin.set("address", params.address);
					admin.set("contactTime", params.contactTime);
					admin.set("personalNote", params.personalNote);
					admin.set("lastUpdatedBy", currentUser);
					admin.save(null, {
						success: function(admin) {
							params.success(Response.UpdateSuccess);
						},
						error: function(user, error) {
							console.log("ERROR IN UPDATING USER : " + error.message);
							params.error(Response.InternalServerError);
						}
			 		});
				} 
				else {
					params.error(Response.NotFound);
				}
			},
			error: function(error) {
				params.error(Response.InternalServerError);
			}
		});
	}
};