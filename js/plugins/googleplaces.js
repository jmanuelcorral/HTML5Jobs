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