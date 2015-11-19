angular.module("weatherish", ["ui.router", "ui.bootstrap", "angular-skycons"])

	.config(function($urlRouterProvider, $stateProvider){


		$urlRouterProvider.otherwise("/forecast");

		
		$stateProvider
			.state("forecast", {
				url: "/forecast",
				controller: "homeCtrl",
				templateUrl: "js/home/home.html",
			})
			.state("forecast.current", {
				url: "/current",
				controller: "currentCtrl",
				templateUrl: "js/current/current.html",
			})
			.state("forecast.sevenDay", {
				url: "/sevenDay",
				controller: "sevenDayCtrl",
				templateUrl: "js/sevenDay/sevenDay.html",
			})
			.state("forecast.hourly", {
				url: "/hourly",
				controller: "hourlyCtrl",
				templateUrl: "js/hourly/hourly.html",
			})




});






