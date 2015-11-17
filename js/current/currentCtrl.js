angular.module("weatherish").controller("currentCtrl", function($scope, weatherService, cityService){

	$scope.getWeather = function(){
		$scope.city = cityService.city;
		weatherService.getCity($scope.city).then(function(data){
			$scope.weather = data;
		});
	}();

	$scope.temp = function(temp){
		return Math.round(temp);
	}



});