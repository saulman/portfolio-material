'use strict'
var app = angular.module('portfolio')

app.controller('toolbarCtrl', ['$scope','$mdSidenav', function($scope, $mdSidenav){

	 $scope.toggleNav = function() {
	    $mdSidenav('navigation').toggle();
	  };
	
}])