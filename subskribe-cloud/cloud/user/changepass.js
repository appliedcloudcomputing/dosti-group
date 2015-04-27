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
	if(!params || !params.name || !params.dob || !params.mobile || !params.telephone || !params.email 
		|| !params.enterprise || !params.address || !params.contactTime || !params.personalNote) {
		params.error(Response.ParametersEmpty);
	} else {

		console.log("**********************Changing password ");
		var query = new Parse.Query(Parse.User);
		query.equalTo("username", params.username);  // find user
		query.first({
		  success: function(_user) {
		    // set password
		    if(_user){
		    	_user.set("password",params.newPassword);
		    	_user.save(null,{
		    		success:function(user){
		    			console.log("User Save successfully");
		    			params.success(Response.SaveSuccess);
		    		},
		    		error:function(user,error){
		    			console.log("Error :"+ error.code + " Message: "+ error.message);
		    		}
		    	});
		    }
		    else{
		    	console.log("UNABLE TO FIND USER");
		    	params.error("Unable to find user");
		    }
		  },
		  error:function(_user,error){
		  		console.log("Error :"+ error.code + " Message: "+ error.message);
		  }
		});
/*

		var user = new User();
			//user.set("password", params.newPassword);
			//user.set("username" , params.username);
			 user.set("password", params.newPassword);
         // user.setPassword(params.newPassword);
		user.save(null, {
			success: function(user) {
				console.log("password changed successfully");
				params.success(Response.SaveSuccess);
			},
			error: function(user, error) {
				console.log("ERROR IN Changing changePassword : " + error.message);
				params.error(Response.InternalServerError);
			}
 		});
*/	//}
};

