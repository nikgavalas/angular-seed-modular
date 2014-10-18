'use strict';


angular.module('adminApp').controller('MainCtrl', [
	'$scope',
	'AuthFactory',
	function ($scope, AuthFactory) {

		$scope.isConnected = function() {
			return AuthFactory.isConnected;
		};
		
		// Logs the user out and returns to the login screen.
		$scope.logout = function() {
			AuthFactory.logout();
		};

	} // end controller
]);

