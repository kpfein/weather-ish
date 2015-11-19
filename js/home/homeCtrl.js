angular.module("weatherish").controller("homeCtrl", function($scope, weatherService){

	$scope.getWeather = function(cityInput){
		$scope.city = $scope.cityInput.toUpperCase();
		weatherService.getCity($scope.cityInput).then(function(data){
			$scope.cityInput = "";
			$scope.w = data;
		});
	};

	$scope.forecast = "Current Weather";


	$scope.temp = function(temp){
		return Math.round(temp);
	}

	$scope.convertDate = function(dt){
		return new Date(dt * 1000);
	}

	$scope.round = function(x){
		return Math.round(x);
	}

	$scope.celsius = function(a){
		return Math.round((a - 32) * (5/9));
	}

	$scope.percentage = function(x){
		return Math.round(x * 100);
	}

	$scope.kilo = function(z){
		return (z * 1.69034).toFixed(2);
	}

	$scope.kph = function(f){
		return Math.round(f * 1.69034);
	}

	$scope.direction = function(y){
		var x;
		if(((y >= 348.75) && (y < 360)) || ((y <= 11.24) && (y > 0))){ 
			x = "N";
		} else if ((y >= 12.25) && (y <= 33.74)) {
			x = "NNE";
		} else if ((y >= 33.75) && (y <= 56.24)) {
			x = "NE";
		} else if ((y >= 56.25) && (y <= 78.74)) {
			x = "ENE";
		} else if ((y >= 78.75) && (y <= 101.24)) {
			x = "E";
		} else if ((y >= 101.25) && (y <= 123.74)) {
			x = "ESE";
		} else if ((y >= 123.75) && (y <= 146.24)) {
			x = "SE";
		} else if ((y >= 146.25) && (y <= 168.74)) {
			x = "SSE";
		} else if ((y >= 168.75) && (y <= 191.24)) {
			x = "S";
		} else if ((y >= 191.25) && (y <= 213.74)) {
			x = "SSW";
		} else if ((y >= 213.75) && (y <= 236.24)) {
			x = "SW";
		} else if ((y >= 236.25) && (y <= 258.74)) {
			x = "WSW";
		} else if ((y >= 258.75) && (y <= 281.24)) {
			x = "W";
		} else if ((y >= 281.25) && (y <= 303.74)) {
			x = "WNW";
		} else if ((y >= 303.75) && (y <= 326.24)) {
			x = "NW";
		} else if ((y >= 326.25) && (y <= 348.74)) {
			x = "NNW";
		}
		return x;
	};



});







