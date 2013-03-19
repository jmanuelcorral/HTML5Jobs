var candidate ={
};

var availableCities = [
{cityId:"1", cityname:"Barcelona", citydistrict: "ALMERIA", cityZipcode: "08014"},
{cityId:"2", cityname:"Barcelona", citydistrict: "AVINGUDA HOSPITAL MILITAR", cityZipcode: "08023"},
{cityId:"3", cityname:"Barcelona", citydistrict: "AVINGUDA MADRID, DE", cityZipcode: "08028"},
{cityId:"4", cityname:"Barcelona", citydistrict: "BERLINES", cityZipcode: "08006"},
{cityId:"5", cityname:"Barcelona", citydistrict: "BOTELLA", cityZipcode: "08001"},
{cityId:"6", cityname:"Barcelona", citydistrict: "CABANES", cityZipcode: "08004"},
{cityId:"7", cityname:"Barcelona", citydistrict: "CANTABRIA", cityZipcode: "08020"},
{cityId:"8", cityname:"Barcelona", citydistrict: "CASP", cityZipcode: "08010"},
{cityId:"9", cityname:"Barcelona", citydistrict: "COMALADA", cityZipcode: "08032"},
{cityId:"10", cityname:"Barcelona", citydistrict: "GRAN VIA CORTS CATALANES, DE LES", cityZipcode: "08075"},
{cityId:"11", cityname:"Barcelona", citydistrict: "JARDINS DE LA REINA VICTORIA", cityZipcode: "08007"},
{cityId:"12", cityname:"Barcelona", citydistrict: "MALLORCA", cityZipcode: "08008"},
{cityId:"13", cityname:"Barcelona", citydistrict: "MARINA, DE LA", cityZipcode: "08018"},
{cityId:"14", cityname:"Barcelona", citydistrict: "MARINA, DE LA", cityZipcode: "08013"},
{cityId:"15", cityname:"Barcelona", citydistrict: "MARINADA, LA", cityZipcode: "08017"},
{cityId:"16", cityname:"Barcelona", citydistrict: "MARQUES DE LAMADRID", cityZipcode: "08035"},
{cityId:"17", cityname:"Barcelona", citydistrict: "MESTRES CASALS I MARTORELL", cityZipcode: "08003"},
{cityId:"18", cityname:"Barcelona", citydistrict: "MOLL CATALUNYA, DE", cityZipcode: "08039"},
{cityId:"19", cityname:"Barcelona", citydistrict: "MOLL DE LA MARINA", cityZipcode: "08005"},
{cityId:"20", cityname:"Barcelona", citydistrict: "MONISTROL", cityZipcode: "08012"}
];


var candidateManager = {};

candidateManager.viewModel = {
	currentCandidate : candidate,
	currentAvailableCities : availableCities,
	selectedCity : ko.observable("1")
};

candidateManager.traceTools = function (candidate_info) {
	return {
		displayCandidateInfoLog : function(){
			console.log(JSON.stringify(candidate_info));
		},
		displayCandidateInfoAlert : function(){
			alert(JSON.stringify(candidate_info));
		}
	};
};
