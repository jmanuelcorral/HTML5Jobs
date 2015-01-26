var Company = function(name, description, email, phone){
	this.name = name;
	this.description = description;
	this.email = email;
	this.phone = phone;
};

var company_helpers = function (companyinfo) {
	return {
		displayCompanyInfoLog : function () {
			console.log("nombre:" + companyinfo.name);
			console.log("description:" + companyinfo.description);
			console.log("email:" + companyinfo.email);
			console.log("phone:" + companyinfo.phone);
		},
		displayCompanyInfoAlert : function () {
			var cadena =  ("nombre: " + companyinfo.name + 
							" description: " + companyinfo.description + 
							" email: " + companyinfo.email + 
							" phone: " + companyinfo.phone);
			alert(cadena);
		}
	};
};

var company_validation = function(ctobeValidated){
	var validateEmail = function(){
		var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
		return(String(ctobeValidated.email).search(pattern) != -1);
	};
	return {
		isValid : function () {
			return validateEmail();
		}
	}
};
