angular.module("weatherish", ["ui.router"])

	.config(function($urlRouterProvider, $stateProvider){

		
		$stateProvider
			.state("home", {
				url: "/",
				controller: "homeCtrl",
				templateUrl: "js/home/home.html",
			})
			.state("current", {
				url: "/current",
				controller: "currentCtrl",
				templateUrl: "js/current/current.html",
			})
			.state("forecast", {
				url: "/forecast",
				controller: "forecastCtrl",
				templateUrl: "js/forecast/forecast.html",
			})
			


		$urlRouterProvider.otherwise("/home");

});