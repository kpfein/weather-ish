angular.module("weatherish").controller("homeCtrl", function($scope, weatherService, cityService){

	
	$scope.$watch("city", function(){
		cityService.city = $scope.city;
	});

});







