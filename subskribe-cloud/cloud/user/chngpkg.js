var SavePackage = Parse.Object.extend("SavePackage");

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
		console.log(params.name);
		console.log(params.email);
		console.log(params.pkgName);
		console.log(params.pkgValidity);
		console.log(params.pkgPrice);
		console.log(params.fromdate);
		console.log(params.todate);
		//SAVING USER
		var savepkg = new SavePackage();
		savepkg.set("name", params.name);
		savepkg.set("email", params.email);
		savepkg.set("packname", params.pkgName);
		savepkg.set("packvalidity", params.pkgValidity);
		savepkg.set("packprice", params.pkgPrice);
		savepkg.set("fromdate",params.fromdate);
		savepkg.set("todate", params.todate);
		
		savepkg.save(null, {
			success: function(user) {
				console.log("Package Save successfully");
				params.success(Response.SaveSuccess);
			},
			error: function(user, error) {
				console.log("ERROR IN SAVING Package : " + error.message);
				params.error(Response.InternalServerError);
			}
 		});
	//}
};

exports.update = function(params) {
	console.log("Package updated successfully");
	console.log("In Update");
	console.log("*******************************************************PARAMETERS :"+ JSON.stringify(params));
		//var userQuery = new Parse.Query(User);
		//userQuery.get(params.id, { 
		var SavePackage = Parse.Object.extend("SavePackage");
		var query = new Parse.Query(SavePackage);
		query.equalTo("email", params.email);
		query.first({ 
				success: function(savepkg) {
				if(savepkg) {
					savepkg.set("name", params.name);
					savepkg.set("email", params.email);
					savepkg.set("packname", params.pkgName);
					savepkg.set("packvalidity", params.pkgValidity);
					savepkg.set("packprice", params.pkgPrice);
					savepkg.set("fromdate",params.fromdate);
					savepkg.set("todate", params.todate);
					savepkg.save(null, {
						success: function(user) {
							params.success(Response.UpdateSuccess);
						},
						error: function(user, error) {
							console.log("ERROR IN UPDATING PACAKGE : " + error.message);
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

};

