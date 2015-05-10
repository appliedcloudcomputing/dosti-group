var Feedback = Parse.Object.extend("Feedback");

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




		console.log("****** Saving Feedback ************ ");

		var feed = new Feedback();
		feed.set("name", params.name);
		feed.set("username", params.username);
		feed.set("subject", params.subject);
		feed.set("description", params.desc);

		feed.save(null, {
			success: function(feed) {
				console.log("Feedback Save successfully");
				params.success(Response.SaveSuccess);
			},
			error: function(feed, error) {
				console.log("ERROR IN SAVING Feedback : " + error.message);
				params.error(Response.InternalServerError);
			}
 		});
};