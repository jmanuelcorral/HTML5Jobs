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
			fileselect.addEventListener("change", fileselecthandler, false);
			// is XHR2 available?
			var xhr = new XMLHttpRequest();
			if (xhr.upload) {
				// file drop
				filedrag.addEventListener("dragover", filedraghover, false);
				filedrag.addEventListener("dragleave", filedraghover, false);
				filedrag.addEventListener("drop", fileselecthandler, false);
				filedrag.style.display = "block";
			}
			}
		}
	}
})();
//End Plugin