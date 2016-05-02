'use strict'
var app = angular.module('portfolio')

app.controller('NaviCtrl', ['$scope','$state','$window','$location', function($scope, $state, $window, $location){

	$scope.redirect = function(pageID) {
       $state.go(pageID, {});
    };

    $scope.download = function() {
	    $window.open('files/example.pdf');
	}

	$scope.messageMe = function() {
	    $location.href = 'mailto:saulius@skeirys.com';
	}
}])

