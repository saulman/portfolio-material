'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolio', [
  'ui.router',
  'ngMaterial',
  'ngMdIcons'
])
.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  	
  	$urlRouterProvider.otherwise('/');
    
    $stateProvider
	    .state('home',{
	        url: '/',
	        views: {
	            'navigation': {
	                templateUrl: 'templates/navigation/navi.html',
	                controller: 'NaviCtrl'
	            },
	            'content': {
	                templateUrl: 'templates/content/about.html',
	                controller: 'AboutCtrl'
	            }
	        }
	    })

	    .state('portfolio',{
	        url: '/portfolio',
	        views: {
	            'navigation': {
	                templateUrl: 'templates/navigation/navi.html',
	                controller: 'NaviCtrl'
	            },
	            'content': {
	                templateUrl: 'templates/content/portfolio.html',
	                controller: 'portfolioCtrl'
	            }
	        }
	    })

	    
}])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
   .primaryPalette('indigo', {
      'default': '400'
    })
});
