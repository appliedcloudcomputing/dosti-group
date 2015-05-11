var FAQ = Parse.Object.extend("FAQ");

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

		console.log("**********************FAQ SAVING CALLED ");
		//SAVING USER
		var faq = new FAQ();
		
		faq.set("question", params.question);
		//pkg.set("pkgdesc", params.pkgDesc);
		faq.set("answer", params.answer);
		
		
		faq.save(null, {
			success: function(faq) {
				console.log("frequently asked question created successfully");
				params.success(Response.SaveSuccess);
			},
			error: function(faq, error) {
				console.log("ERROR IN SAVING FAQ : " + error.message);
				params.error(Response.InternalServerError);
			}
 		});
	//}
};

