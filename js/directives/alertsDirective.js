angular.module("weatherish").directive("alertsDirective", function(){

	return {
		restrict: "E",
		template: '<div ng-if="weather.alerts">' +
				  '<button ng-click="showAlert = !showAlert" >Alerts</button>' +
				  '<div ng-show="showAlert" ng-repeat="alert in weather.alerts">' +
				  	'<h3>{{alert.title}}</h3>' +
					'<p>{{alert.description}}</p>' +
					'<hr>' +
						'</div>' +
				  '</div>',
	}
});