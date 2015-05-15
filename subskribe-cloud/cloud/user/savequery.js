var Query = Parse.Object.extend("Query");

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




		console.log("****** Saving Query ************ ");

		var que = new Query();
		que.set("name", params.name);
		que.set("username", params.username);
		que.set("subject", params.subject);
		que.set("description", params.desc);
		que.set("about", params.about);
		que.set("datetime", params.datetime);
		

		que.save(null, {
			success: function(que) {
				console.log("query Save successfully");
				params.success(Response.SaveSuccess);
			},
			error: function(que, error) {
				console.log("ERROR IN SAVING query : " + error.message);
				params.error(Response.InternalServerError);
			}
 		});
};