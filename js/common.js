$(document).ready(function(){
	$("#btngeo").click(function(){
		geoplugin.init();
		$("#locationmap").fadeIn();
	});

	dragndrop.init("inputfile","dropzone","submitbutton");

	$("#submitbutton").click(function(){
		var name = $("#cname").val();
		var desc = $("#cdescription").val();
		var mail = $("#cemail").val();
		var phone = $("#cphone").val();
		var companyinfo = new Company(name, desc, mail, phone);
		var helper = company_helpers(companyinfo);
		helper.displayCompanyInfoLog()
		//helper.displayCompanyInfoAlert();
	});
});

