//Plugin para geolocalizacion
var geoplugin = (function(){
	var displayPosition = function(position){
		var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		var options = {
			zoom: 8,
			center: pos,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("locationmap"), options);
		var marker = new google.maps.Marker({
			position: pos,
			map: map,
			title: "Company Location"
		});
		var contentString = "<b>Timestamp:</b> " + parseTimestamp(position.timestamp) + "<br/><b>Ubicacion del usuario:</b> lat " + position.coords.latitude + ", long " + position.coords.longitude + ", precision " + position.coords.accuracy;
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	};
	var displayError = function(error){
		var errors = { 
			1: 'Permiso denegado',
			2: 'Posicion no disponible',
			3: 'Timeout'
		};
		alert("Error: " + errors[error.code]);
	};
	var parseTimestamp = function(timestamp){
		var d = new Date(timestamp);
		var day = d.getDate();
		var month = d.getMonth() + 1;
		var year = d.getFullYear();
		var hour = d.getHours();
		var mins = d.getMinutes();
		var secs = d.getSeconds();
		var msec = d.getMilliseconds();
		return day + "." + month + "." + year + " " + hour + ":" + mins + ":" + secs + "," + msec;
	};
	 return {
        init: function() {
           if (navigator.geolocation) {
				var timeoutVal = 10 * 1000 * 1000;
				//Llamada a la api de html5 para obtener la posición,
				//Mostrarla en el Mapa de Google, y en caso de error, 
				//Mostrar un error por pantalla. 
				);
			}
			else {
				alert("Geolocation no es soportada por el navegador que está utilizando");
			}
        }
    }
})();
//End Plugin

//Plugin para el dibujo de imagenes
var imageloader = (function(){
	return {
		drawimage: function(file){
			//Codigo que dibuja un file en un canvas
		}
	}
})();

//End Plugin


//Plugin para el drag'n'drop
var dragndrop= (function() {

	// output information
	var output = function(msg) {
		console.log(msg);
	};

	// file drag hover
	var filedraghover = function(e) {
		e.stopPropagation();
		e.preventDefault();
		e.target.className = (e.type == "dragover" ? "hover" : "");
	};

	// file selection
	var fileselecthandler = function(e) {
		// cancel event and hover styling
		filedraghover(e);
		// fetch FileList object
		var files = e.target.files || e.dataTransfer.files;
		// process all File objects
		for (var i = 0, f; f = files[i]; i++) {
			parsefile(f);
			imageloader.drawimage(f);
		}
	};

	// output file information
	var parsefile = function(file) {
		output(
			"File information: " + file.name +
			"type: " + file.type +
			"size: " + file.size +
			" bytes"
		);
	};

	var displayerror = function(){
		alert("Error, funcionalidad no soportada.");
	};

	var detect = function(){
		if (!window.File || !window.FileList || !window.FileReader)
		{
			displayerror();
			return false;
		}
		return true;
	}
	return {
	// initialize
		init: function(_fileselect, _filedrag, _submitbutton) {
			if (detect)
			{
			var fileselect = document.getElementById(_fileselect),
				filedrag = document.getElementById(_filedrag),
				submitbutton = document.getElementById(_submitbutton);
			// file select
			//Asignación del evento change del input file
			// is XHR2 available?
			var xhr = new XMLHttpRequest();
			if (xhr.upload) {
				// file drop
				//Eventos de drag and drop
				filedrag.style.display = "block";

				// remove submit button
				submitbutton.style.display = "none";
			}
			}
		}
	}
})();
//End Plugin

//Plugin para slide-toggle menu en la mediaquery de mobile
jQuery(document).ready(function($){

	/* prepend menu icon */
	$('nav').prepend('<div class="menu-icon">Menu</div>');
	
	/* toggle nav */
	$(".menu-icon").click(function(){
		$("nav>ul").slideToggle();
		$(this).toggleClass("active");
	});
});


//
//Plugin para Consultar una calle en google places
var AddressSearch = (function(){

var defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-33.8902, 151.1759), new google.maps.LatLng(-33.8474, 151.2631));
var input = document.getElementById('caddress');
var options = {
  bounds: defaultBounds,
  types: ['address']
};

return {
 	autocomplete : new google.maps.places.Autocomplete(input, options)
}
})();

//Fin Plugin