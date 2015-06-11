var User = Parse.Object.extend("User");

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
		|| !params.address || !params.contactTime || !params.personalNote) 
	{
		params.error(Response.ParametersEmpty);
	} else {*/
		console.log("In Save");
		console.log("**********************SAVING CALLED ");
		//SAVING USER
		var user = new User();
		user.set("name", params.name);
		user.set("dob", params.dob);
		user.set("mobile", params.mobile);
		user.set("telephone", params.telephone);
		user.set("email", params.email);
		user.set("password",params.password);
		user.set("connectiontype", params.conntype);
		user.set("address", params.address);
		user.set("contactTime", params.contactme);
		user.set("personalNote", params.personalNote);
		user.set("username",params.email);
		user.set("usertype",params.hideval);
		user.set("dates",params.dates);
		user.save(null, {
			success: function(user) {
				console.log("User Save successfully");
				params.success(Response.SaveSuccess);
			},
			error: function(user, error) {
				console.log("ERROR IN SAVING USER : " + error.message);
				params.error(Response.InternalServerError);
			}
 		});
	//}
};

exports.update = function(params) {
	console.log("In User update Section");



	if(!params || !params.id || !params.name || !params.dob || !params.mobile || !params.telephone || !params.email 
		|| !params.address) {
		params.error(Response.ParametersEmpty);
	} else {

		var currentUser = Parse.User.current();
		if(!currentUser){
			params.error(Response.LoginError);
		}
			
		console.log("In Update");

		var userQuery = new Parse.Query(User);
		//console.log("Aap Ho");
		//userQuery.get(params.id, {  
			userQuery.equalTo("email", params.email);
		userQuery.first({ 
				success: function(user) {
				if(user) {
					user.set("name", params.name);
					user.set("dob", params.dob);
					user.set("mobile", params.mobile);
					user.set("telephone", params.telephone);
					user.set("email", params.email);
					user.set("connectiontype", params.conntype);
					user.set("address", params.address);

					//user.set("personalNote", params.personalNote);
					user.set("lastUpdatedBy", currentUser);
					user.set("username", params.username);
					//user.set("password", password);
					//	user.set("usertype", usertype);

					user.save(null, {
						success: function(user) {
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

