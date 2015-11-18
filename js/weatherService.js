angular.module("weatherish").service("weatherService", function($http, $q){


	var openKey= "eafb47ac95ef929b614855a7339d9570";
	var forecastIOKey = "a33e7199c2f8943cc7ab2aae33da2669"; 


	this.getCity = function(city){
		var deferred = $q.defer();
		var cityComplete;
		var cityCompleted;
		$http({
			method: "GET",
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + openKey
		}).then(function(result){
			cityComplete = result.data;
			// console.log(cityComplete);
			$http({
				method: "JSONP",
				url: "https://api.forecast.io/forecast/" + forecastIOKey + "/" + cityComplete.coord.lat + "," + cityComplete.coord.lon + "?callback=JSON_CALLBACK" 
			}).then(function(results){
				cityCompleted = results.data;
				console.log(cityCompleted);
				deferred.resolve(cityCompleted);
			});
		});
		return deferred.promise;
	};


});




