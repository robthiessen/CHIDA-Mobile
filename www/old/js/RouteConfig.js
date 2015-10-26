;(function () {
  
	'use strict';

     var RouteConfig = angular.module('RouteConfig', []);
     console.log("ROUTE ");
	  
	 RouteConfig.config(['$routeProvider','$locationProvider', 
	  function($routeProvider,$locationProvider) {
		$routeProvider.
		  when('/services', {
			templateUrl: '/partials/employee-detail.html',
			controller: 'ModelViewController'
		  }).
		  otherwise({
			redirectTo: '/services'
		  });
		  
		  
		 
		  
	  }]);
	 
	  
}).call(this);