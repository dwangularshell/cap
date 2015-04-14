'use strict';

//TODO: move to constants?
var BROADCASTS = {
	companySelected: 'companySelected',
	dropDownVisible: 'dropDownVisible',
	dropDownHidden: 'dropDownHidden',
	leftNavButtonClicked: 'leftNavButtonClicked',
	navToDashboard: 'navToDashboard',
	navToLogIn: 'navToLogIn',
	pageRequiresLogout: 'pageRequiresLogout',
	profileMenuOpen: 'profileMenuOpen',
	reportSelected: 'reportSelected',
	userAuthenticated: 'userAuthenticated',
	userInfoReceived: 'userInfoReceived',
	userLoggedOut: 'userLoggedOut',
	userNotAuthenticated: 'userNotAuthenticated',
	userNotAuthorized: 'userNotAuthorized',
	windowResized: 'windowResized'
};

var PRIORITY = {
	success: 'success',
	warning: 'warning',
	error: 'error'
};

angular.module('cap', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'ngAnimate',
	'flow',
	'services',
	'partials',
	'report.factory',
	'directives.leftNav'
]).config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when(ROOT_URL, {
			redirectTo: DASHBOARD_URL
		});
	$routeProvider.otherwise({
		//tbd works with http://127.0.0.1:9000/#/pagenotfound but not with http://127.0.0.1:9000/pagenotfound
		redirectTo: ERROR_NOT_FOUND_PATH
	});
}]);

