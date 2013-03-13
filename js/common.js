

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

	$("#setdata").click(function(){
		CURRENT_OFFER = offerManager.Persistence().getter();
		offerManager.traceTools(CURRENT_OFFER).displayOfferInfoLog();
	});

	$("#getdata").click(function(){
		if (CURRENT_OFFER != undefined){
			offerManager.Persistence(CURRENT_OFFER).setter();
		}
	});

	$("#removedata").click(function(){
		$("#jobtitle").val("");
		$("#jobdescription").val("");
		$("#jobrequirements").val("");
		$("#jobsalary").val("");
		$("#incorporationdate").val("");
	});
});

