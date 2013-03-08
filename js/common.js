$(document).ready(function(){
	$("#btngeo").click(function(){
		geoplugin.init();
		$("#locationmap").fadeIn();
	});

	dragndrop.init("inputfile","dropzone","submitbutton");
	geosearch.autocomplete;
});

