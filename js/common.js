$(document).ready(function(){
	$("#btngeo").click(function(){
		geoplugin.init();
		$("#locationmap").fadeIn();
	});

	dragndrop.init("inputfile","dropzone","submitbutton");

	$("#submitbutton").click(function(){
		//Construyo un objeto companyinfo y lo relleno;
		var helper = company_helpers(companyinfo);

		//puedo llamar a cualquiera de estas 2 propiedades
		//helper.displayCompanyInfoLog()
		//helper.displayCompanyInfoAlert();
	});
});

