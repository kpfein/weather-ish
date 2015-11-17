angular.module("weatherish").controller("forecastCtrl", function($scope, weatherService, cityService){

	$scope.getWeather = function(){
		$scope.city = cityService.city;
		weatherService.getCity($scope.city).then(function(data){
			$scope.weather = data;
		});
	}();

	$scope.convertDate = function(dt){
		return new Date(dt * 1000);
	}

});
