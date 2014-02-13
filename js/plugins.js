$(document).ready(function(){

	$.getScript("/html5jobs/js/plugins/dragndrop.js",function(data, textStatus, jqxhr) {
	   	if (jqxhr.status === 200){
   			dragndrop.init("inputfile","dropzone","submitbutton");
   			console.log("dragndrop loaded");
   		}
	});
	
	$.getScript("/html5jobs/js/plugins/geolocation.js", function(data, textStatus, jqxhr){
		if (jqxhr.status === 200){
	   		$("#btngeo").click(function(){
				geoplugin.init();
				$("#locationmap").fadeIn();
	   		});
	   		console.log("geolocation loaded");
	   	}
	});

	$.getScript("/html5jobs/js/plugins/googleplaces.js", function(data, textStatus, jqxhr){
		if (jqxhr.status === 200){
   			console.log("google places loaded");
	   	};
	});

	$.getScript("/html5jobs/js/plugins/slidetoggle.js", function(data, textStatus, jqxhr){
		if (jqxhr.status === 200){
   			console.log("slide toggle loaded");
	   	};
	});
});