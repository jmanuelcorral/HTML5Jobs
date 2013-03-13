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
				navigator.geolocation.getCurrentPosition(
					displayPosition, 
					displayError,
					{ enableHighAccuracy: false, timeout: timeoutVal, maximumAge: 0 }
				);
			}
			else {
				alert("Geolocation no es soportada por el navegador que está utilizando");
			}
        }
    }
})();
//End Plugin