var Offer = function(jobtitle, jobdescription, jobrequirements, jobsalary, incorporationdate) {
	this.title = jobtitle;
	this.description = jobdescription;
	this.requirement = jobrequirements;
	this.salary = jobsalary;
	this.incorporationdate = incorporationdate
};
//Creamos offerManager como un Namespace, el truco está hacerlo como un Literal Object vacío
var offerManager = {};
offerManager.traceTools = function (offer_info) {
	return {
		displayOfferInfoLog : function(){
			console.log("title:" + offer_info.title);
			console.log("description:" + offer_info.description);
			console.log("requirement:" + offer_info.requirement);
			console.log("salary:" + offer_info.salary);
			console.log("incorporationdate:" + offer_info.incorporationdate);
		},
		displayOfferInfoAlert : function(){
			var cadena = 	"title: " + offer_info.title + 
							" description: " + offer_info.description +
							" requirement: " + offer_info.requirement +
							" salary: " + offer_info.salary + 
							" incorporationdate: " + offer_info.incorporationdate;

			alert(cadena);
		}
	};
};

offerManager.Validation = function(offerdata) {
	return {
		fieldsAreNotNull : function(){
			var isNotNull = true;
			isNotNull = isNotNull && (offerdata.title != "");
			isNotNull = isNotNull && (offerdata.description != "");
			isNotNull = isNotNull && (offerdata.requirement != "");
			isNotNull = isNotNull && (offerdata.salary != "");
			isNotNull = isNotNull && (offerdata.incorporationdate != "");
			return isNotNull;
		}
	}
}

offerManager.Persistence = function(offer_info) {
	var getFromForm = function(){
		return new Offer ($("#jobtitle").val(),
						  $("#jobdescription").val(),
						  $("#jobrequirements").val(),
						  $("#jobsalary").val(),
						  $("#incorporationdate").val());
	}
	var setInForm = function(){
		$("#jobtitle").val(offer_info.title);
		$("#jobdescription").val(offer_info.description);
		$("#jobrequirements").val(offer_info.requirement);
		$("#jobsalary").val(offer_info.requirement);
		$("#incorporationdate").val(offer_info.incorporationdate);
	}
	var saveInServer = function(){
		var jsonSerializedValue = JSON.Stringify(offer_info);
		alert(jsonSerializedValue);
	}
	return{
		getter:getFromForm,
		setter: setInForm,
		save : saveInServer
	}
}

offerManager.UI = function(){
		$("#setdata").click(function(){
			CURRENT_OFFER = offerManager.Persistence().getter();
			offerManager.traceTools(CURRENT_OFFER).displayOfferInfoLog();
		});

		$("#getdata").click(function(){
			if (CURRENT_OFFER != undefined){
				offerManager.Persistence(CURRENT_OFFER).setter();
			}
		});

		$("#removedata").click(function(){
			$("#jobtitle").val("");
			$("#jobdescription").val("");
			$("#jobrequirements").val("");
			$("#jobsalary").val("");
			$("#incorporationdate").val("");
		});
};

$(document).ready(offerManager.UI);