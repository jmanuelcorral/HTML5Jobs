//Plugin para el dibujo de imagenes
var imageloader = (function(){
	return {
		drawimage: function(file){
			var ctx = document.getElementById('companylogo').getContext('2d');
			var img = new Image;
			img.src = URL.createObjectURL(file);
			img.onload = function() {
				ctx.clearRect (0, 0, 320, 200);
	    		ctx.drawImage(img,0,0,img.width, img.height);
	    		//alert('the image is drawn');
			}
		}
	}
})();

//End Plugin