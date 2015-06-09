var Payment = Parse.Object.extend("Payment");

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




		console.log("****** Making Payment ************ ");

		var pay = new Payment();
		pay.set("name", params.name);
		pay.set("email", params.email);
		pay.set("planname", params.planname);
		pay.set("validity", params.validity);
		pay.set("amount", params.amount);
		pay.set("dates", params.dates);

		pay.save(null, {
			success: function(pay) {
				console.log("Payment Done successfully");
				params.success(Response.SaveSuccess);
			},
			error: function(pay, error) {
				console.log("ERROR IN Making Payment : " + error.message);
				params.error(Response.InternalServerError);
			}
 		});
};