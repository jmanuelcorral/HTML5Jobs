

$(document).ready(function(){
	//Variable global
	var CURRENT_OFFER;

	$("#submitbutton").click(function(){
		var name = $("#cname").val();
		var desc = $("#cdescription").val();
		var mail = $("#cemail").val();
		var phone = $("#cphone").val();
		var companyinfo = new Company(name, desc, mail, phone);
		var validation = company_validation(companyinfo);
		var helper = company_helpers(companyinfo);
		helper.displayCompanyInfoLog();
		//helper.displayCompanyInfoAlert();
		alert(validation.isValid());
	});
	
	ko.applyBindings(candidateManager.viewModel);

});

