angular.module("weatherish").directive("showTime", function($interval){

	return {
		restrict: "A",
		template: '<div>{{time | date: "fullDate"}} | {{time | date: "shortTime"}}</div>',
		link: function(scope, element, attrs){
			$interval(function(){
				scope.time = new Date();
			}, 1000);
		}
	};

});