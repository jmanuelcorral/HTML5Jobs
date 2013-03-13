var Offer = function(jobtitle, jobdescription, jobrequirements, jobsalary, incorporationdate) {
//Propiedades de Offer
};
//Creamos offerManager como un Namespace, el truco está hacerlo como un Literal Object vacío
var offerManager = {};
offerManager.traceTools = function (offer_info) {
	return {
		displayOfferInfoLog : function(){
	
		},
		displayOfferInfoAlert : function(){
			/*
			var cadena = 	"title: " + offer_info.title + 
							" description: " + offer_info.description +
							" requirement: " + offer_info.requirement +
							" salary: " + offer_info.salary + 
							" incorporationdate: " + offer_info.incorporationdate;
			*/
			alert(cadena);
		}
	};
};

offerManager.Validation = function(offerdata) {
	return {
		fieldsAreNotNull : function(){
			var isNotNull = true;
			//Falta comprobar si los campos son o no son null
			return isNotNull;
		}
	}
}

offerManager.Persistence = function(offer_info) {
	var getFromForm = function(){
		//llamada al constructor con los valores de la página
		//devolver dicha llamada
	}
	var setInForm = function(){
		//Set de los valores del objeto en el Formulario
	}
	var saveInServer = function(){
		//De momento no hay que implementarlo, próxima clase
	}
	return{
		getter:getFromForm,
		setter: setInForm,
		save : saveInServer
	}
}
