/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(1);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15)
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(21);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(24);
	__webpack_require__(34);
	__webpack_require__(35);
	__webpack_require__(36);
	__webpack_require__(37);
	__webpack_require__(38);
	__webpack_require__(39);
	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(44);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('partials', [
		'agreements',
		'client',
		'clientUser',
		'dashboard',
		'files',
		'logIn',
		'passwordReset',
		'errorPages',
		'report'])
		.config(['$routeProvider', '$sceDelegateProvider', function ($routeProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist([
				// Allow same origin resource loads.
				'self',
				// Allow loading from outer templates domain.
					BACKEND_URL + '/**'
			]);
			$routeProvider.when(ACTIVATE_CLIENT_USER_PAGE + '/:hash', {
				template: '<div ng-include src="templateUrl"></div>',
				controller: function ($scope, $routeParams) {
					$scope.templateUrl = BACKEND_URL + ACTIVATE_CLIENT_USER_PAGE + '/' +
						$routeParams.hash;
				}
			});
			$routeProvider.when(PASSWORD_RESET_REQUEST_PAGE + '/:hash', {
				template: '<div ng-include src="templateUrl"></div>',
				controller: function ($scope, $routeParams) {
					$scope.templateUrl = BACKEND_URL + PASSWORD_RESET_REQUEST_PAGE + '/' +
						$routeParams.hash;
				}
			});
			$routeProvider.when(AGREEMENTS_URL, {
				templateUrl: BACKEND_URL + PARTIALS_PATH + AGREEMENTS_PATH
			});
			$routeProvider.when(CLIENT_DETAILS_URL, {
				templateUrl: BACKEND_URL + PARTIALS_PATH + CLIENT_DETAILS_PATH
			});
			$routeProvider.when(CLIENT_LIST_URL, {
				templateUrl: BACKEND_URL + PARTIALS_PATH + CLIENT_LIST_PATH
			});
			$routeProvider.when(CLIENT_USER_DETAILS_URL, {
				templateUrl: BACKEND_URL + PARTIALS_PATH + CLIENT_USER_DETAILS_PATH
			});
			$routeProvider.when(CLIENT_USER_HISTORY_URL, {
				templateUrl: BACKEND_URL + PARTIALS_PATH + CLIENT_USER_HISTORY_PATH
			});
			$routeProvider.when(CLIENT_USER_LIST_URL, {
				templateUrl: BACKEND_URL + PARTIALS_PATH + CLIENT_USER_LIST_PATH
			});
			$routeProvider.when(CREATE_CLIENT_URL, {
				templateUrl: BACKEND_URL + PARTIALS_PATH + CREATE_CLIENT_PATH
			});
			$routeProvider.when(CREATE_CLIENT_USER_URL, {
				templateUrl: BACKEND_URL + PARTIALS_PATH + CREATE_CLIENT_USER_PATH
			});
			$routeProvider.when(DASHBOARD_URL, {
				templateUrl: BACKEND_URL + PARTIALS_PATH + DASHBOARD_URL
			});
			$routeProvider.when(LOGIN_URL, {
				templateUrl: PARTIALS_FULL_PATH + 'logIn/logInView.html'
			});
			$routeProvider.when(REPORT_URL, {
				templateUrl: BACKEND_URL + PARTIALS_PATH + REPORT_URL
			});
			$routeProvider.when('/report/:clientId/:reportId', {
				templateUrl: BACKEND_URL + PARTIALS_PATH + '/report/'
			});
			$routeProvider.when(PASSWORD_RESET_EMAIL_URL, {
				templateUrl: PARTIALS_FULL_PATH + 'passwordReset/resetEmailView.html'
			});
		}]);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	

	angular.module('agreements', []);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	angular.module('agreements')
		.controller('AgreementsCtrl',['$scope', 'Session', function ($scope, Session) {

			$scope.session = Session;

			$scope.submitButtonEnabled = true;
			$scope.accept = true;

			$scope.submit = function (accepted) {
			};

			$scope.toggleAccept = function(){
				$scope.accept = !$scope.accept;
			}
		}]);




/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('client', ['client.factory']);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('client')
		.controller('ClientCtrl', function ($scope, $location, ClientCreate, CompanyList) {
			var searchInputDisplaySet = false;
			$scope.pageErrorMessage = '';
			$scope.messageBar.message = '';

			function initVariables () {
				$scope.search = {
					name: ''
				};

				$scope.name = '';
				$scope.domainWhiteList = '';
				$scope.assignedCompanies = [];
				$scope.unassignedCompanies = [];
				$scope.allCompanies = [];

				$scope.currentCompanies = 0;

				$scope.submitButtonEnabled = false;
			}

			$scope.enableSubmitButton = function() {
				$scope.$evalAsync(function () {
					$scope.submitButtonEnabled = true;
				});
			};

			$scope.disableSubmitButton = function() {
				$scope.$evalAsync(function () {
					$scope.submitButtonEnabled = false;
				});
			};

			function getContainerSize (containerId) {
				var container = document.getElementById(containerId);

				if (container.scrollHeight > container.clientHeight) {
					document.getElementById('companySearchInput').style.display = 'block';
				} else {
					document.getElementById('companySearchInput').style.display = 'none';
				}

				searchInputDisplaySet = true;
			}

			$scope.setInitialState = function () {
				initVariables();

				$scope.disableSubmitButton();

				CompanyList.getUnassignedCompanies(function (companyList) {
					if (companyList.length < 1) {
						$scope.unassignedCompanies = [];
					} else {
						$scope.unassignedCompanies = companyList;
						console.log(companyList.length +
							' unassigned companies retrieved');
					}

					for (var i = 0; i < companyList.length; i++) {
						companyList[i].assigned = false;
					}

					$scope.allCompanies = companyList;
					$scope.allCompanies.sort(UTILS.arraySortAscending('name'));

					console.log('Unassigned companies successfully retrieved.');
				}, function (errorResponse) {
					console.log('Error retrieving unassigned companies: ' +
						UTILS.getPrintout(errorResponse));
				});
			};

			$scope.setInitialState();

			$scope.performInputFieldValidation = function () {
				if ($scope.name &&
					$scope.name.length > 1 &&
					$scope.domainWhiteList &&
					$scope.domainWhiteList.length > 3 && $scope.currentCompanies > 0) {

					$scope.enableSubmitButton();
				} else {
					$scope.disableSubmitButton();
				}
			};

			$scope.handleInputFieldClick = function () {
				$scope.performInputFieldValidation();
				$scope.pageErrorMessage = '';
				$scope.messageBar.message = '';
			};

			$scope.handleInputFieldChangeOrMouseOut = function () {
				$scope.performInputFieldValidation();
			};

			$scope.handleCompanyItemClick = function (checkedState) {
				if (checkedState) {
					$scope.currentCompanies++;
				} else {
					$scope.currentCompanies--;
				}

				$scope.performInputFieldValidation();
			};

			$scope.handleClientSubmit = function () {
				if (UTILS.hasClass(document.getElementById('clientButtonSubmit'),'buttonFormStdEnabled')) {
					console.log('Handling client create submit');
					$scope.pageErrorMessage = '';

					UTILS.assert(UTILS.isNotEmpty($scope.name),
						'Client Name must not be empty.');
					UTILS.assert(UTILS.isNotEmpty($scope.domainWhiteList),
						'Email Whitelist Domains must not be empty.');
					UTILS.assert(UTILS.isNotEmptyStringifiedObject($scope.currentCompanies),
						'Company selection must not be empty.');

					var invalidDomainsMessage = '';
					var finalEmailWhiteList = UTILS.getCommaSeparatedDomains($scope.domainWhiteList);

					if (UTILS.isNotEmpty($scope.name) &&
						UTILS.isNotEmpty(finalEmailWhiteList)) {
						var invalidDomains = UTILS.getInvalidDomains(finalEmailWhiteList);
						if (UTILS.isNotEmpty(invalidDomains)) {
							invalidDomainsMessage = $scope.DICTIONARY.error.client.invalidDomains +
								invalidDomains.split(',').join(', ') +
								'. <br/>';
						}

						var blacklistedDomains = UTILS.getBlacklistedDomains(finalEmailWhiteList);
						if (UTILS.isNotEmpty(blacklistedDomains)) {
							invalidDomainsMessage += $scope.DICTIONARY.error.client.emailWhiteListError1stPart +
								blacklistedDomains.split(',').join(', ') +
								'. <br/>' + $scope.DICTIONARY.error.client.emailWhiteListError2ndPart;
						}

						if (invalidDomainsMessage !== '') {
							$scope.pageErrorMessage = invalidDomainsMessage;
						} else {
							var companyIds = '';

							for (var i = 0; i < $scope.allCompanies.length; i++) {
								if ($scope.allCompanies[i].assigned === true) {
									companyIds += $scope.allCompanies[i].id + ',';
								}
							}

							companyIds = companyIds.replace(/,\s*$/, '');

							ClientCreate.clientCreate({name: $scope.name,
									whiteList: finalEmailWhiteList,
									companies: companyIds},
								function (successResponse) {
									console.log('Client succesfully created.');
									$scope.processClientCreateSuccessResponse(successResponse);
								}, function (errorResponse) {
									$scope.processClientCreateErrorResponse(errorResponse);
								});
						}
					} else {
						var missingInfoMessage = '';

						if (UTILS.isEmpty($scope.name)) {
							missingInfoMessage = $scope.DICTIONARY.error.client.clientDisplayNameEmpty + '.<br/>';
						}

						if (UTILS.isEmpty(finalEmailWhiteList)) {
							missingInfoMessage += $scope.DICTIONARY.error.client.clientDisplayNameEmpty + '.';
						}

						$scope.pageErrorMessage = missingInfoMessage;
					}
				}
			};

			$scope.processClientCreateSuccessResponse = function (response) {
				console.log('Success response status: ', response.status);
				console.log('Message received from client create submit success:', response.message);
				$scope.pageErrorMessage = '';

				if (response.message === MESSAGES.success.clients.added) {
					$scope.messageBar.message = $scope.DICTIONARY.success.client.added;

					$scope.name = '';
					$scope.domainWhiteList = '';

					$scope.setInitialState();
				}
			};

			$scope.processClientCreateErrorResponse = function (response) {
				console.log('There was an error creating this client: ' +
					UTILS.getPrintout(response.data.message));
				$scope.pageErrorMessage = '';
				var invalidDomainsMessage = '';

				if (response.data.message === MESSAGES.error.clients.exists) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.client.exists;
				} else if (response.data.message === MESSAGES.error.clients.blackListedDomains) {
					invalidDomainsMessage = $scope.DICTIONARY.error.client.emailWhiteListError1stPart +
						UTILS.getBlacklistedDomains(finalEmailWhiteList).split(',').join(', ') +
						'. <br/>' + $scope.DICTIONARY.error.client.emailWhiteListError2ndPart;
					$scope.pageErrorMessage = invalidDomainsMessage;
				} else if (response.data.message === MESSAGES.error.clients.invalidDomains) {
					invalidDomainsMessage = $scope.DICTIONARY.error.client.invalidDomains +
						response.data.domains.split(',').join(', ') + '. ';
					$scope.pageErrorMessage = invalidDomainsMessage;
				} else if (response.data.message === MESSAGES.error.clients.nameEmpty) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.client.nameEmpty;
					UTILS.assert(UTILS.isEmpty(response.data.message),
						'Client Name empty error should not happen.');
				} else if (response.data.message === MESSAGES.error.clients.unableToAdd) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.client.unableToAdd;
				} else if (response.data.message === MESSAGES.error.clients.whiteListEmpty) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.client.whiteListEmpty;
				} else if (response.data.message === MESSAGES.error.safety) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.safety;
				} else {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.client.unableToAdd;
				}
			};

			$scope.handleClientCancel = function () {
				console.log('Handling client create cancel');
				$location.path(CLIENT_LIST_URL);
			};
		});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('client')
		.controller('ClientDetailsCtrl', function ($scope, $rootScope, $location, $window,
				ClientUpdate, ClientList, ClientById, CompanyList, Session, $anchorScroll) {
			$scope.editDetailContainerClass = false;

			$scope.clientId;

			$scope.session = Session;
			$scope.pageErrorMessage = '';
			$scope.messageBar.message = '';

			$anchorScroll();

			function initVariables () {
				$scope.search = {
					name: ''
				};

				$scope.name = '';
				$scope.domainWhiteList = '';
				$scope.allCompanies = [];

				$scope.submitButtonEnabled = false;
			}

			$scope.enableSubmitButton = function() {
				$scope.$evalAsync(function () {
					$scope.submitButtonEnabled = true;
				});
			};

			$scope.disableSubmitButton = function() {
				$scope.$evalAsync(function () {
					$scope.submitButtonEnabled = false;
				});
			};

			$scope.clickEditSectionIconHandler = function (sectionId) {
				$scope.messageBar.message = '';
				var editElements = document.getElementsByClassName('editDetails');
				for (var i = 0; i < editElements.length; i++) {
					editElements[i].style.display = 'none';
				}

				document.getElementById(sectionId).style.display = 'block';

				if (sectionId === 'editAssignedCompanies') {
					getContainerSize('companyListContainer');
				}
			};

			function getContainerSize (containerId) {
				var container = document.getElementById(containerId);

				if (container.scrollHeight > container.clientHeight) {
					document.getElementById('companySearchInput').style.display = 'block';
				} else {
					document.getElementById('companySearchInput').style.display = 'none';
				}
			}

			function getClientDetails (clientId) {
				ClientById.getClientById({clientId: clientId},
					function (client) {
						if (client) {
							$scope.pageErrorMessage = '';
							console.log('Client details: ' , client);

							$scope.clientId = client.id;
							$scope.name = client.name;
							$scope.domainWhiteList = client.domainWhiteList;

							for (var i = 0; i < client.companies.length; i++) {
								client.companies[i].assigned = true;
							}

							CompanyList.getUnassignedCompanies(function (companyList) {
								if (companyList.length > 0) {
									console.log(companyList.length +
										' unassigned companies retrieved');
								} else {
									console.log('No unassigned companies retrieved');
								}

								for (var i = 0; i < companyList.length; i++) {
									companyList[i].assigned = false;
								}

								$scope.allCompanies = client.companies.concat(companyList);
								$scope.allCompanies.sort(UTILS.arraySortAscending('name'));

								console.log('Unassigned companies successfully retrieved.');
							}, function (errorResponse) {
								console.log('Error retrieving unassigned companies: ' +
									UTILS.getPrintout(errorResponse));
							});
						} else {
							$scope.pageErrorMessage = $scope.DICTIONARY.error.client.retrievalError;
						}
						console.log('Client data retrieved for client id: ' + clientId);
					}, function (errorResponse) {
						console.log('Error retrieving data for client id: ' + clientId);
					});
			}

			$scope.setInitialState = function () {
				initVariables();

				$scope.enableSubmitButton();

				getClientDetails(parseInt($window.localStorage.currentClientId));
			};

			$scope.setInitialState();

			$scope.performInputFieldValidation = function () {
				if ($scope.name &&
					$scope.name.length > 1 &&
					$scope.domainWhiteList &&
					$scope.domainWhiteList.length > 3 && $scope.getCurrentCompanyCount() > 0) {

					$scope.enableSubmitButton();
				} else {
					$scope.disableSubmitButton();
				}
			};

			$scope.handleClientUserHistoryClick = function () {
				delete localStorage.currentClientUserId;
				$location.path(CLIENT_USER_HISTORY_URL);
			};

			$scope.handleInputFieldClick = function () {
				$scope.performInputFieldValidation();
				$scope.pageErrorMessage = '';
				$scope.messageBar.message = '';
			};

			$scope.handleInputFieldChangeOrMouseOut = function () {
				$scope.performInputFieldValidation();
			};

			$scope.getCurrentCompanyCount = function () {
				var companyCount = 0;

				for (var i = 0; i < $scope.allCompanies.length; i++) {
					if ($scope.allCompanies[i].assigned === true) {
						companyCount++;
					}
				}

				return companyCount;
			};

			$scope.handleClientSubmit = function () {
				if (UTILS.hasClass(document.getElementById('clientButtonSubmit'),'buttonFormStdEnabled')) {
					console.log('Handling client edit submit');
					$scope.pageErrorMessage = '';

					UTILS.assert(UTILS.isNotEmpty($scope.name),
						'Client Name must not be empty.');
					UTILS.assert(UTILS.isNotEmpty($scope.domainWhiteList),
						'Email Whitelist Domains must not be empty.');
					UTILS.assert(UTILS.isNotEmptyStringifiedObject($scope.getCurrentCompanyCount()),
						'Company selection must not be empty.');

					var invalidDomainsMessage = '';
					var finalEmailWhiteList = UTILS.getCommaSeparatedDomains(
						$scope.domainWhiteList);

					if (UTILS.isNotEmpty($scope.name) &&
						UTILS.isNotEmpty(finalEmailWhiteList)) {
						var invalidDomains = UTILS.getInvalidDomains(finalEmailWhiteList);
						if (UTILS.isNotEmpty(invalidDomains)) {
							invalidDomainsMessage = $scope.DICTIONARY.error.client.invalidDomains +
								invalidDomains.split(',').join(', ') +
								'. <br/>';
						}

						var blacklistedDomains = UTILS.getBlacklistedDomains(finalEmailWhiteList);
						if (UTILS.isNotEmpty(blacklistedDomains)) {
							invalidDomainsMessage += $scope.DICTIONARY.error.client.emailWhiteListError1stPart +
								blacklistedDomains.split(',').join(', ') +
								'. <br/>' + $scope.DICTIONARY.error.client.emailWhiteListError2ndPart;
						}

						if (invalidDomainsMessage !== '') {
							$scope.pageErrorMessage = invalidDomainsMessage;
						} else {
							var companyIds = '';

							for (var i = 0; i < $scope.allCompanies.length; i++) {
								if ($scope.allCompanies[i].assigned === true) {
									companyIds += $scope.allCompanies[i].id + ',';
								}
							}

							companyIds = companyIds.replace(/,\s*$/, '');
							var clientIdFromDOM = document.getElementById('clientId').value;

							ClientUpdate.updateClient({clientId: clientIdFromDOM,
									name: $scope.name,
									whiteList: finalEmailWhiteList,
									companies: companyIds},
								function (successResponse) {
									console.log('Data successfully updated for client id: ' + $scope.clientId);
									$scope.processClientEditSuccessResponse(successResponse);
								}, function (errorResponse) {
									$scope.processClientEditErrorResponse(errorResponse);
								});
						}
					} else {
						var missingInfoMessage = '';

						if (UTILS.isEmpty($scope.name)) {
							missingInfoMessage = $scope.DICTIONARY.error.client.clientDisplayNameEmpty + '.<br/>';
						}

						if (UTILS.isEmpty(finalEmailWhiteList)) {
							missingInfoMessage += $scope.DICTIONARY.error.client.clientDisplayNameEmpty + '.';
						}

						$scope.pageErrorMessage = missingInfoMessage;
					}
				}
			};

			$scope.processClientEditSuccessResponse = function (response) {
				console.log('success response: ', response);
				console.log('Message received from client edit submit success:', response.message);
				$scope.pageErrorMessage = '';
				$scope.editDetailContainerClass = false;

				if (response.message === MESSAGES.success.clients.updated) {
					$scope.messageBar.message = $scope.DICTIONARY.success.client.updated;

					$scope.setInitialState();
				}
			};

			$scope.processClientEditErrorResponse = function (response) {
				console.log('There was an error updating this client: ' +
					UTILS.getPrintout(response.data.message));
				$scope.pageErrorMessage = '';
				$scope.editDetailContainerClass = true;
				var invalidDomainsMessage = '';

				if (response.data.message === MESSAGES.error.authorization.denied) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.authorization.denied;
				} else if (response.data.message === MESSAGES.error.clients.blackListedDomains) {
					invalidDomainsMessage = $scope.DICTIONARY.error.client.emailWhiteListError1stPart +
						UTILS.getBlacklistedDomains(finalEmailWhiteList).split(',').join(', ') +
						'. <br/>' + $scope.DICTIONARY.error.client.emailWhiteListError2ndPart;
					$scope.pageErrorMessage = invalidDomainsMessage;
				} else if (response.data.message === MESSAGES.error.clients.invalidDomains) {
					invalidDomainsMessage = $scope.DICTIONARY.error.client.invalidDomains +
						response.data.domains.split(',').join(', ') + '. ';
					$scope.pageErrorMessage = invalidDomainsMessage;
				} else if (response.data.message === MESSAGES.error.clients.nameEmpty) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.client.nameEmpty;
					UTILS.assert(UTILS.isEmpty(response.data.message),
						'Client Name empty error should not happen.');
				} else if (response.data.message === MESSAGES.error.clients.clientIdEmpty) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.client.clientIdEmpty;
				} else if (response.data.message === MESSAGES.error.clients.whiteListEmpty) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.client.whiteListEmpty;
				} else if (response.data.message === MESSAGES.error.safety) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.safety;
				} else {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.client.unableToUpdate;
				}
			};

			$scope.handleClientCancel = function () {
				console.log('Handling client edit cancel');
				$scope.pageErrorMessage = '';
				$scope.messageBar.message = '';
				$scope.search.name = '';
				$scope.setInitialState();
			};

			$scope.cancelClientView = function () {
				console.log('Handling client view cancel');
				$location.path(CLIENT_LIST_URL);
			};
		});


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('client')
		.controller('ClientListCtrl', function ($scope, $location, $rootScope, ClientList, Session) {
			var nameSortOrder = 1;
			var domainWhiteListSortOrder = 1;
			var finalSortOrder = 1;

			$scope.session = Session;
			$scope.listErrorMessage = '';

			if (Session.user.canSeeAllClients) {
				ClientList.getClients(function (clientList) {
					if (clientList.length < 1) {
						showNoClientListMessage();
					} else {
						$scope.listErrorMessage = '';

						$scope.clientList = clientList;
						// TBD remove this verbose log
						console.log('$scope.clientList: ', UTILS.getPrintout($scope.clientList));
					}
					console.log('Client list successfully retrieved.');
				}, function (errorResponse) {
					console.log('Error retrieving client list: ' + UTILS.getPrintout(errorResponse));
					showNoClientListMessage();
				});
			} else {
				showNoClientListMessage();
			}

			function showNoClientListMessage () {
				$scope.listErrorMessage = $scope.DICTIONARY.error.client.listAll;
			}

			$scope.clickClientCreateHandler = function () {
				$location.path(CREATE_CLIENT_URL);
			};

			$scope.clickHeaderHandler = function(category) {
				if (category === 'name') {
					if (nameSortOrder === 1) {
						nameSortOrder = -1;
					} else {
						nameSortOrder = 1;
					}
					finalSortOrder = nameSortOrder;
				} else if (category === 'domainWhiteList') {
					if (domainWhiteListSortOrder === 1) {
						domainWhiteListSortOrder = -1;
					} else {
						domainWhiteListSortOrder = 1;
					}
					finalSortOrder = domainWhiteListSortOrder;
				}

				$scope.clientList.sort(columnSort(category));
			};

			function columnSort(property) {
				return function (a,b) {
					var aVal = a[property] ? a[property].toLowerCase() : '';
					var bVal = b[property] ? b[property].toLowerCase() : '';
					var result = (aVal < bVal) ? -1 : (aVal > bVal) ? 1 : 0;
					return result * finalSortOrder;
				};
			}

			$scope.setInitialState = function () {
				$scope.listErrorMessage = '';
			};

			$scope.setInitialState();

			$scope.handleClientClick = function(clientId) {
				if ($scope.session.user.canManageClient) {
					console.log('Handling client details click for client: ' + clientId);

					localStorage.currentClientId = clientId;
					$location.path(CLIENT_DETAILS_URL);
				}
			};

			$scope.handleClientUserListClick = function(clientId, clientName) {
				if ($scope.session.user.canSeeAllClientUsers) {
					console.log('Handling Client User List click for client: ' + clientId);
					localStorage.currentClientId = clientId;
					localStorage.currentClientName = clientName;

					$location.path(CLIENT_USER_LIST_URL);
				}
			};
		});


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('client.factory', [])
		.factory('ClientById', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + CLIENT_SERVICE + '/:clientId', {}, {
					getClientById: {method: 'GET', isArray: false}
				});
			}])
		.factory('ClientCreate', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + CREATE_CLIENT_SERVICE, {}, {
					clientCreate: {method: 'POST', isArray: false}
				});
			}])
		.factory('ClientList', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + CLIENTS_LIST_SERVICE, {}, {
					getClients: {method: 'GET', isArray: true}
				});
			}])
		.factory('ClientUpdate', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + UPDATE_CLIENT_SERVICE, {}, {
					updateClient: {method: 'POST', isArray: false}
				});
			}])
		.factory('CompanyList', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + UNASSIGNED_COMPANIES_SERVICE, {}, {
					getUnassignedCompanies: {method: 'GET', isArray: true}
				});
			}])
		.factory('UserCompaniesList', ['$resource',
			function($resource){
				return $resource(BACKEND_URL + USER_COMPANIES_SERVICE + '/:userName', {}, {
					getCompaniesByUserName: {method: 'GET', isArray: true}
				});
			}])
		.factory('ClientCompanyList', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + CLIENT_COMPANIES_SERVICE + '/:clientId', {}, {
					getCompanies: {method: 'GET', isArray: true}
				});
			}])
		.factory('MatchbackTypeList', ['$resource',
			function($resource) {
				return $resource(BACKEND_URL + MATCHBACK_LIST_SERVICE, {}, {
					getMatchbackTypes: {method: 'GET', isArray: true}
				});
		}]);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('clientUser', [
		'clientUser.factory',
		'whiteList.factory'
	]);


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('clientUser')
		.controller('ClientUserCtrl', ['$scope', '$location', 'ClientUserCreate', 'FullReportList',
			'ClientCompanyList', 'MatchbackTypeList', 'Session', 'WhiteListService', 'KEY_CODES' ,
			function ($scope, $location, ClientUserCreate, FullReportList, ClientCompanyList,
					  MatchbackTypeList, Session, WhiteListService, KEY_CODES) {
				var emailSetForOverride = false;
				var overrideEmailAddress = '';

				$scope.MATCHBACK_TYPES = MATCHBACK_TYPES;

				$scope.clientId;
				$scope.clientName;
				$scope.pageErrorMessage = '';
				$scope.emailAddressErrorMessage = '';
				$scope.messageBar.message = '';

				if (localStorage.currentClientId) {
					$scope.clientId = localStorage.currentClientId;
				}

				if (localStorage.currentClientName) {
					$scope.clientName = localStorage.currentClientName;
				}

				function initVariables () {
					$scope.search = {
						name: ''
					};

					$scope.firstName = '';
					$scope.lastName = '';
					$scope.title = '';
					$scope.emailAddress = '';
					$scope.workPhone = '';
					$scope.mobilePhone = '';
					$scope.city = '';
					$scope.accountStatus = '';
					$scope.allReports = [];
					$scope.allCompanies = [];
					$scope.allMatchbacks = [];
					$scope.admin = false;

					$scope.currentReports = 0;
					$scope.currentCompanies = 0;
					$scope.currentMatchbacks = 0;
					$scope.singleCompany = false;

					$scope.submitButtonEnabled = false;
				}

				$scope.enableSubmitButton = function () {
					$scope.$evalAsync(function () {
						$scope.submitButtonEnabled = true;
					});
				};

				$scope.disableSubmitButton = function () {
					$scope.$evalAsync(function () {
						$scope.submitButtonEnabled = false;
					});
				};

				$scope.setInitialState = function () {
					initVariables();

					$scope.disableSubmitButton();

					FullReportList.getAllReports(function (reportList) {
						if (reportList.length < 1) {
							$scope.allReports = [];
						} else {
							$scope.allReports = reportList;
							console.log('getAllReports Report list: ', reportList);
						}
						console.log('Report list successfully retrieved.');
					}, function (errorResponse) {
						console.log('Error retrieving report list: ' + UTILS.getPrintout(errorResponse));
					});

					ClientCompanyList.getCompanies({clientId: $scope.clientId}, function (companyList) {
						if (companyList.length < 1) {
							$scope.allCompanies = [];
						} else {
							$scope.allCompanies = companyList;
							console.log('Company list: ', companyList);
							if ($scope.allCompanies.length === 1) {
								$scope.singleCompany = true;
								$scope.currentCompanies = 1;
								$scope.allCompanies[0].assigned = true;
							}
						}
						console.log('Company list successfully retrieved.');
					}, function (errorResponse) {
						console.log('Error retrieving company list: ' + UTILS.getPrintout(errorResponse));
					});

					MatchbackTypeList.getMatchbackTypes( function(matchbackList){
						if(matchbackList.length < 1) {
							$scope.allMatchbacks = [];
							console.warn('getAllMatchbacks: matchback list returned no items')
						} else {
							$scope.allMatchbacks = matchbackList;
							console.log('getAllMatchbacks: Matchback List' + matchbackList);
						}
					},function(errorResponse){
						console.error('Error retrieving matchback list: ' + UTILS.getPrintout(errorResponse));
					});

					$scope.pageErrorMessage = '';

					$scope.searchReport = {
						name: ''
					};

					$scope.searchCompany = {
						name: ''
					};
				};

				$scope.setInitialState();

				$scope.performInputFieldValidation = function () {
					if ($scope.firstName &&
						$scope.firstName.length > 0 &&
						$scope.lastName &&
						$scope.lastName.length > 1 &&
						$scope.emailAddress &&
						$scope.emailAddress.length > 3 && !$scope.emailAddressErrorMessage) {

						validateEmailEntry();
					} else {
						$scope.disableSubmitButton();
					}
				};

				$scope.handleInputFieldClick = function () {
					$scope.performInputFieldValidation();
					$scope.pageErrorMessage = '';
					$scope.messageBar.message = '';
				};

				$scope.handleNameInputFieldChange = function () {
					$scope.performInputFieldValidation();
				};

				$scope.handleKeyPress = function () {
					if (document.getElementById('clientUserEmailAddress').value === '') {
						$scope.emailAddressErrorMessage = '';
						document.getElementById('clientUserEmailApprove').style.display = 'none';
					} else {
						validateEmailEntry();
					}
				};

				$scope.handleKeyDown = function (event) {
					if (event.keyCode === KEY_CODES.TAB) {
						validateEmailEntry();
					}
				};

				$scope.checkEmailDomainOverride = function () {
					if (document.getElementById('clientUserEmailAddress').value !== overrideEmailAddress) {
						emailSetForOverride = false;
						$scope.disableSubmitButton();
						if (!emailSetForOverride && $scope.emailAddress) {
							var emailDomain = UTILS.getDomainFromEmail($scope.emailAddress);
							var whiteListPromise = WhiteListService.getWhiteList($scope.clientId);
							whiteListPromise.then(function (whiteList) {
								$scope.whiteList = whiteList.whiteList;

								console.log(emailDomain);
								console.log($scope.whiteList);
								UTILS.isDomainInWhiteList(emailDomain, $scope.whiteList);

								if (!UTILS.isDomainInWhiteList(emailDomain, $scope.whiteList)) {
									if (Session.user.canOverrideEmailWhiteList === 'true') {
										$scope.emailAddressErrorMessage = '';
										document.getElementById('clientUserEmailApprove').style.display = 'block';
									} else if (Session.user.canOverrideEmailWhiteList === 'false') {
										$scope.emailAddressErrorMessage = $scope.DICTIONARY.error.clientUser.unableToOverride;
										document.getElementById('clientUserEmailApprove').style.display = 'none';
									} else {
										if (emailSetForOverride === false) {
											$scope.emailAddressErrorMessage = $scope.DICTIONARY.error.clientUser.invalidEmailAddress;
										}
									}
								} else {
									$scope.emailAddressErrorMessage = '';
									document.getElementById('clientUserEmailApprove').style.display = 'none';

									validateFormEntries();
								}
							});
						}
					}
				};

				$scope.handleClientUserEmailApprove = function () {
					emailSetForOverride = true;
					overrideEmailAddress = document.getElementById('clientUserEmailAddress').value;
					document.getElementById('clientUserEmailApprove').style.display = 'none';
					validateFormEntries();
				};

				$scope.handleWorkPhoneChange = function () {
					validatePhoneEntry(document.getElementById('clientUserWorkPhone'),
						document.getElementById('clientUserWorkPhoneErrorMessage'));
				};

				$scope.handleWorkPhoneBlur = function () {
					validatePhoneEntry(document.getElementById('clientUserWorkPhone'),
						document.getElementById('clientUserWorkPhoneErrorMessage'));
				};

				$scope.handleMobilePhoneChange = function () {
					validatePhoneEntry(document.getElementById('clientUserMobilePhone'),
						document.getElementById('clientUserMobilePhoneErrorMessage'));
				};

				$scope.handleMobilePhoneBlur = function () {
					validatePhoneEntry(document.getElementById('clientUserMobilePhone'),
						document.getElementById('clientUserMobilePhoneErrorMessage'));
				};

				function validatePhoneEntry (phoneInputElement, phoneErrorMessageElement) {
					var phoneInputFieldValue = phoneInputElement.value;

					if (phoneInputFieldValue !== '') {
						if (!UTILS.validateUSPhoneNumber(phoneInputFieldValue)) {
							phoneErrorMessageElement.style.display = 'block';
							phoneErrorMessageElement.innerHTML = $scope.DICTIONARY.error.clientUser.invalidPhoneNumber;
							$scope.disableSubmitButton();
						} else {
							phoneErrorMessageElement.style.display = 'none';
							phoneErrorMessageElement.innerHTML = '';
							$scope.performInputFieldValidation();

							if (phoneInputElement.value.indexOf('-') < 0) {
								phoneInputElement.value = UTILS.formatUSPhoneNumber(phoneInputElement.value);
							}
						}
					} else {
						phoneErrorMessageElement.style.display = 'none';
						phoneErrorMessageElement.innerHTML = '';
						$scope.performInputFieldValidation();
					}
				}

				function validateEmailEntry () {
					if (UTILS.isNotEmpty($scope.emailAddress)) {
						if (UTILS.checkEmailFormat($scope.emailAddress)) {
							validateFormEntries();
							$scope.checkEmailDomainOverride();
						} else {
							console.log('Invalid email entered.');
							$scope.emailAddressErrorMessage = $scope.DICTIONARY.error.clientUser.invalidEmailAddress;
							overrideEmailAddress = '';
							$scope.disableSubmitButton();
							document.getElementById('clientUserEmailApprove').style.display = 'none';
							emailSetForOverride = false;
						}
					}
				}

				function validateFormEntries () {
					if ($scope.firstName &&
						$scope.firstName.length > 0 &&
						$scope.lastName &&
						$scope.lastName.length > 1 && $scope.currentCompanies > 0) {

						$scope.enableSubmitButton();
					} else {
						$scope.disableSubmitButton();
					}
				}

				$scope.handleReportItemClick = function (checkedState) {
					if (checkedState) {
						$scope.currentReports++;
					} else {
						$scope.currentReports--;
					}
				};

				$scope.handleCompanyItemClick = function (checkedState) {
					if (!$scope.singleCompany) {
						if (checkedState) {
							$scope.currentCompanies++;
						} else {
							$scope.currentCompanies--;
						}

						validateFormEntries();
					}
				};

				$scope.handleMatchbackItemClick = function(checkedState){
					if(checkedState) {
						$scope.currentMatchbacks++;
					}else{
						$scope.currentMatchbacks--;
					}
				};

				$scope.handleClientUserSubmit = function () {
					if (UTILS.hasClass(document.getElementById('clientUserButtonSubmit'),'buttonFormStdEnabled')) {
						$scope.pageErrorMessage = '';

						UTILS.assert(UTILS.isNotEmpty($scope.firstName),
							'Client First Name must not be empty.');
						UTILS.assert(UTILS.isNotEmpty($scope.lastName),
							'Client Last Name must not be empty.');
						UTILS.assert(UTILS.isNotEmpty($scope.emailAddress),
							'Email must not be empty.');
						UTILS.assert(UTILS.isNotEmptyStringifiedObject($scope.currentCompanies),
							'Company selection must not be empty.');

						$scope.emailAddressErrorMessage = '';
						document.getElementById('clientUserWorkPhoneErrorMessage').style.display = 'none';
						document.getElementById('clientUserMobilePhoneErrorMessage').style.display = 'none';

						var clientUser = {};
						clientUser.clientId = $scope.clientId;
						clientUser.clientDisplayName = $scope.clientName;
						clientUser.firstName = $scope.firstName;
						clientUser.lastName = $scope.lastName;
						clientUser.email = $scope.emailAddress;
						clientUser.title = $scope.title;
						clientUser.workPhone = UTILS.removePhoneFormatting($scope.workPhone);
						clientUser.mobilePhone = UTILS.removePhoneFormatting($scope.mobilePhone);
						clientUser.officeCity = $scope.city;

						var reportIds = '';
						var companyIds = '';
						var matchbackIds = '';

						for (var i = 0; i < $scope.allReports.length; i++) {
							if ($scope.allReports[i].assigned === true) {
								reportIds += $scope.allReports[i].id + ',';
							}
						}

						for (var i = 0; i < $scope.allCompanies.length; i++) {
							if ($scope.allCompanies[i].assigned === true) {
								companyIds += $scope.allCompanies[i].id + ',';
							}
						}

						for (var i = 0; i <$scope.allMatchbacks.length; i++) {
							if ($scope.allMatchbacks[i].assigned === true) {
								matchbackIds += $scope.allMatchbacks[i].id + ',';
							}
						}

						reportIds = reportIds.replace(/,\s*$/, '');
						companyIds = companyIds.replace(/,\s*$/, '');
						matchbackIds = matchbackIds.replace(/,\s*$/, '');

						clientUser.reports = reportIds;
						clientUser.companies = companyIds;
						clientUser.assignedMatchbacks = matchbackIds;

						console.log('clientUser: ' + UTILS.getPrintout(clientUser));

						ClientUserCreate.clientUserCreate({clientUser: clientUser,
								overrideEmailDomain: emailSetForOverride},
							function (successResponse) {
								console.log('Client user created.');
								$scope.processClientUserCreateSuccessResponse(successResponse);
							}, function (errorResponse) {
								$scope.processClientUserCreateErrorResponse(errorResponse);
							});
					}
				};

				$scope.processClientUserCreateSuccessResponse = function (response) {
					console.log('success response: ', response);
					console.log('Message received from client user create submit success:', response.message);
					$scope.pageErrorMessage = '';

					if (response.message === MESSAGES.success.clientUsers.added) {
						$scope.messageBar.priority = 'success';
						$scope.messageBar.message = $scope.DICTIONARY.success.clientUser.addedPart1 +
							$scope.firstName + ' ' + $scope.lastName +
							$scope.DICTIONARY.success.clientUser.addedPart2;
					} else if (response.message === MESSAGES.error.clientUsers.confirmationEmail) {
						$scope.messageBar.message = $scope.DICTIONARY.success.clientUser.addedEmailIssue;
						$scope.messageBar.priority = 'warning';
					}

					$scope.setInitialState();
				};

				$scope.processClientUserCreateErrorResponse = function (response) {
					console.log('There was an error creating this client user: ' +
						UTILS.getPrintout(response.data.message));
					$scope.pageErrorMessage = '';

					if (response.data.message === MESSAGES.error.authorization.denied) {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.authorization.denied;
					} else if (response.data.message === MESSAGES.error.clientUsers.clientIdEmpty) {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.clientIdEmpty;
					} else if (response.data.message === MESSAGES.error.clientUsers.emailEmpty) {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.emailEmpty;
					} else if (response.data.message === MESSAGES.error.clientUsers.invalidClientEmail) {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.invalidClientEmail;
					} else if (response.data.message === MESSAGES.error.clientUsers.firstNameEmpty) {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.firstNameEmpty;
					} else if (response.data.message === MESSAGES.error.clientUsers.lastNameEmpty) {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.lastNameEmpty;
					} else if (response.data.message === MESSAGES.error.clientUsers.unableToAdd) {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.unableToAdd;
					} else if (response.data.message === MESSAGES.error.clientUsers.notInWhiteList) {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.notInWhiteList;
					} else if (response.data.message === MESSAGES.error.clientUsers.exists) {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.exists;
					} else if (response.data.message ===MESSAGES.error.clientUsers.unableToOverride) {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.unableToOverride;
					} else if (response.data.message === MESSAGES.error.safety) {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.safety;
					} else {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.unableToAdd;
					}
				};

				$scope.handleClientUserCancel = function () {
					console.log('Handling client user create cancel');
					$location.path(CLIENT_USER_LIST_URL);
				};
			}]);


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('clientUser')
		.controller('ClientUserDetailsCtrl',
		['$scope', '$rootScope', '$location', '$window', 'ClientUserUpdate', 'ClientUserById',
			'ResendActivation', 'ClientUserDelete', 'ClientUserUndelete', 'Session', '$anchorScroll', 'ModalOverlay',
			function ($scope, $rootScope, $location, $window, ClientUserUpdate, ClientUserById,
				ResendActivation, ClientUserDelete, ClientUserUndelete, Session, $anchorScroll, ModalOverlay) {
			$scope.editDetailContainerClass = false;

			$scope.clientUserId;

			$scope.session = Session;
			$scope.clientId;
			$scope.clientName;
			$scope.pageErrorMessage = '';
			$scope.messageBar.message = '';
			$scope.MATCHBACK_TYPES = MATCHBACK_TYPES;

			$anchorScroll();

			if (localStorage.currentClientId) {
				$scope.clientId = localStorage.currentClientId;
			}

			if (localStorage.currentClientName) {
				$scope.clientName = localStorage.currentClientName;
			}

			function turnSpinnerOff() {
				ModalOverlay.show = false;
			}

			function turnSpinnerOn() {
				ModalOverlay.show = true;
			}

			function initVariables() {
				$scope.allReports = [];
				$scope.allCompanies = [];
				$scope.allMatchbacks = [];
				$scope.admin = $scope.DICTIONARY.clientUser.no;

				$scope.singleCompany = false;
				$scope.singleAvailableCompany = false;

				$scope.submitButtonEnabled = false;

				$scope.changedValues = {
					'userDetails' : {
						'firstName' : '',
						'lastName' : '',
						'title' : '',
						'workPhone' : '',
						'mobilePhone' : '',
						'city' : '',
						'admin' : $scope.admin
					},
					'accountStatus' : '',
					'assignedReports' : '',
					'assignedCompanies' : '',
					'assignedMatchbacks': ''
				};
			}

			$scope.enableSubmitButton = function () {
				$scope.$evalAsync(function () {
					$scope.submitButtonEnabled = true;
				});
			};

			$scope.disableSubmitButton = function () {
				$scope.$evalAsync(function () {
					$scope.submitButtonEnabled = false;
				});
			};

			$scope.clickEditSectionIconHandler = function (sectionId) {
				$scope.enableSubmitButton();

				$scope.messageBar.message = '';
				var editElements = document.getElementsByClassName('editDetails');
				for (var i = 0; i < editElements.length; i++) {
					editElements[i].style.display = 'none';
				}

				document.getElementById(sectionId).style.display = 'block';

				if (sectionId === 'editAssignedReports') {
					getContainerSize('reportListContainer', 'reportSearchInput');
				} else if (sectionId === 'editAssignedCompanies') {
					getContainerSize('companyListContainer', 'companySearchInput');
				}
			};

			function getContainerSize(containerId, searchBoxId) {
				var container = document.getElementById(containerId);

				if (container.scrollHeight > container.clientHeight) {
					document.getElementById(searchBoxId).style.display = 'block';
				} else {
					document.getElementById(searchBoxId).style.display = 'none';
				}
			}

			var originalValues = {
				'userDetails' : {
					'firstName' : '',
					'lastName' : '',
					'title' : '',
					'workPhone' : '',
					'mobilePhone' : '',
					'city' : '',
					'admin' : $scope.admin
				},
				'accountStatus' : '',
				'assignedReports' : '',
				'assignedCompanies' : '',
				'assignedMatchbacks' : ''
			};

			function getClientUserDetails(clientUserId) {
				ClientUserById.getClientUserById({clientUserId: clientUserId},
					function (clientUser) {
						if (clientUser) {
							$scope.pageErrorMessage = '';
							console.log('Client user details: ', clientUser);

							$scope.clientUserId = clientUser.id;
							$scope.emailAddress = clientUser.email;

							originalValues.userDetails.firstName =
								$scope.changedValues.userDetails.firstName = clientUser.firstName;
							originalValues.userDetails.lastName =
								$scope.changedValues.userDetails.lastName = clientUser.lastName;
							originalValues.userDetails.title =
								$scope.changedValues.userDetails.title = clientUser.title;

							if (clientUser.workPhone) {
								if (clientUser.workPhone.indexOf('-') < 0) {
									originalValues.userDetails.workPhone = UTILS.formatUSPhoneNumber(clientUser.workPhone);
								} else {
									originalValues.userDetails.workPhone = clientUser.workPhone;
								}
							}
							$scope.changedValues.userDetails.workPhone = originalValues.userDetails.workPhone;

							if (clientUser.mobilePhone) {
								if (clientUser.mobilePhone.indexOf('-') < 0) {
									originalValues.userDetails.mobilePhone =	UTILS.formatUSPhoneNumber(clientUser.mobilePhone);
								} else {
									originalValues.userDetails.mobilePhone = clientUser.mobilePhone;
								}
							}
							$scope.changedValues.userDetails.mobilePhone = originalValues.userDetails.mobilePhone;

							originalValues.userDetails.city = clientUser.officeCity;
							$scope.changedValues.userDetails.city = originalValues.userDetails.city;

				            originalValues.assignedReports = '';
							for (var i = 0; i < clientUser.assignedReports.length; i++) {
								clientUser.assignedReports[i].assigned = true;
								originalValues.assignedReports += clientUser.assignedReports[i].name + ',';
							}

							for (var i = 0; i < clientUser.unassignedReports.length; i++) {
								clientUser.unassignedReports[i].assigned = false;
							}

							$scope.allReports =	clientUser.assignedReports.concat(clientUser.unassignedReports);
							$scope.allReports.sort(UTILS.arraySortAscending('name'));

	            			originalValues.assignedCompanies = '';
							for (var i = 0; i < clientUser.assignedCompanies.length; i++) {
								clientUser.assignedCompanies[i].assigned = true;
								originalValues.assignedCompanies += clientUser.assignedCompanies[i].name + ',';
							}

							if (clientUser.assignedCompanies.length === 1) {
								$scope.singleCompany = true;
							}

							if (clientUser.assignedCompanies.length === 1 && clientUser.unassignedCompanies.length === 0) {
								$scope.singleAvailableCompany = true;
							}

							for (var i = 0; i < clientUser.unassignedCompanies.length; i++) {
								clientUser.unassignedCompanies[i].assigned = false;
							}

							$scope.allCompanies =
								clientUser.assignedCompanies.concat(clientUser.unassignedCompanies);
							$scope.allCompanies.sort(UTILS.arraySortAscending('name'));

							for (var i = 0; i < clientUser.assignedMatchbacks.length; i++){
								clientUser.assignedMatchbacks[i].assigned = true;
								originalValues.assignedMatchbacks += clientUser.assignedMatchbacks[i].name + ',';
							}
							$scope.allMatchbacks = clientUser.assignedMatchbacks.concat(clientUser.unassignedMatchbacks);
							$scope.allMatchbacks.sort(UTILS.arraySortAscending('name'));

							$scope.isPending = (clientUser.status === 'pending' ? true : false);
							$scope.isDeleted = (clientUser.status === 'deleted' ? true : false);

							if (clientUser.admin) {
								$scope.admin = $scope.DICTIONARY.clientUser.yes;
							} else {
								$scope.admin = $scope.DICTIONARY.clientUser.no;
							}

							originalValues.userDetails.admin = $scope.admin;
							originalValues.accountStatus = clientUser.status;
							$scope.changedValues.accountStatus = clientUser.status;

							if (clientUser.assignedCompanies.length === 0 && clientUser.status === 'pending') {
								$scope.messageBar.warning($scope.DICTIONARY.error.clientUser.userNeedsCompany);
							}

						} else {
							$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.retrievalError;
						}
						console.log('Client user data retrieved for client user id: ' + $scope.clientUserId);
					}, function (errorResponse) {
						console.log('Error retrieving data for client user id: ' + $scope.clientUserId);
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.retrievalError;
					});
			}

			$scope.setInitialState = function () {
				initVariables();

				$scope.enableSubmitButton();

				angular.element('#clientUserButtonStatusDelete').css('display', 'inline');
				angular.element('#clientUserDeleteConfirmation').css('display', 'none');
				angular.element('.buttonFormStatus').css('cursor', 'pointer');

				$scope.clientName = localStorage.currentClientName;

				getClientUserDetails(localStorage.currentClientUserId);

				$scope.searchReport = {
					name: ''
				};

				$scope.searchCompany = {
					name: ''
				};
			};

			$scope.setInitialState();

			$scope.performInputFieldValidation = function () {
				if ($scope.changedValues.userDetails.firstName &&
					$scope.changedValues.userDetails.firstName.length > 1 &&
					$scope.changedValues.userDetails.lastName &&
					$scope.changedValues.userDetails.lastName.length > 1 &&
					$scope.getCurrentCollectionCount($scope.allCompanies) > 0) {

					$scope.enableSubmitButton();
				} else {
					$scope.disableSubmitButton();
				}
			};

			$scope.handleInputFieldClick = function () {
				$scope.performInputFieldValidation();
				$scope.pageErrorMessage = '';
				$scope.messageBar.message = '';
			};

			$scope.handleNameInputFieldChange = function () {
				$scope.performInputFieldValidation();
			};

			$scope.handleWorkPhoneChange = function () {
				validatePhoneEntry(document.getElementById('clientUserWorkPhoneEdit'),
					document.getElementById('clientUserWorkPhoneErrorMessage'));
			};

			$scope.handleWorkPhoneBlur = function () {
				validatePhoneEntry(document.getElementById('clientUserWorkPhoneEdit'),
					document.getElementById('clientUserWorkPhoneErrorMessage'));
			};

			$scope.handleMobilePhoneChange = function () {
				validatePhoneEntry(document.getElementById('clientUserMobilePhoneEdit'),
					document.getElementById('clientUserMobilePhoneErrorMessage'));
			};

			$scope.handleMobilePhoneBlur = function () {
				validatePhoneEntry(document.getElementById('clientUserMobilePhoneEdit'),
					document.getElementById('clientUserMobilePhoneErrorMessage'));
			};

			function validatePhoneEntry(phoneInputElement, phoneErrorMessageElement) {
				var phoneInputFieldValue = phoneInputElement.value;

				if (phoneInputFieldValue !== '') {
					if (!UTILS.validateUSPhoneNumber(phoneInputFieldValue)) {
						phoneErrorMessageElement.style.display = 'block';
						phoneErrorMessageElement.innerHTML = $scope.DICTIONARY.error.clientUser.invalidPhoneNumber;
						$scope.disableSubmitButton();
					} else {
						phoneErrorMessageElement.style.display = 'none';
						phoneErrorMessageElement.innerHTML = '';
						$scope.performInputFieldValidation();

						if (phoneInputElement.value.indexOf('-') < 0) {
							phoneInputElement.value = UTILS.formatUSPhoneNumber(phoneInputElement.value);
						}
					}
				} else {
					phoneErrorMessageElement.style.display = 'none';
					phoneErrorMessageElement.innerHTML = '';
					$scope.performInputFieldValidation();
				}
			}

			$scope.handleCompanyItemClick = function (property) {
				$scope.changedValues.assignedCompanies = '';
				for (var i = 0; i < $scope.allCompanies.length; i++) {
					if ($scope.allCompanies[i].assigned === true) {
						$scope.changedValues.assignedCompanies += $scope.allCompanies[i].name + ',';
						$scope.messageBar.message = '';
					}
				}
			};

			$scope.handleReportItemClick = function (checkedState) {
				$scope.changedValues.assignedReports = '';
				for (var i = 0; i < $scope.allReports.length; i++) {
					if ($scope.allReports[i].assigned === true) {
						$scope.changedValues.assignedReports += $scope.allReports[i].name + ',';
					}
				}

				console.log('originalValues.assignedReports: ', originalValues.assignedReports);
				console.log('$scope.changedValues.assignedReports: ', $scope.changedValues.assignedReports);
			};

			$scope.handleMatchbackItemClick = function (matchback) {
				$scope.changedValues.assignedMatchbacks = '';
				for(var i = 0; i < $scope.allMatchbacks.length; i++){
					if($scope.allMatchbacks[i].assigned === true){
						$scope.changedValues.assignedMatchbacks += $scope.allMatchbacks[i].name + ',';
					}
				}

				console.log('originalValues.assignedMatchbacks: ', originalValues.assignedMatchbacks);
				console.log('$scope.changedValues.assignedMatchbacks', $scope.changedValues.assignedMatchbacks);
			};

			$scope.setUserStatus = function (statusAction) {
				switch (statusAction) {
					case 'deleteConfirm':
						$scope.changedValues.accountStatus = $scope.DICTIONARY.clientUser.deleted;
						break;
					case 'undelete':
						$scope.changedValues.accountStatus = $scope.DICTIONARY.clientUser.pending;
						break;
					default:
						$scope.changedValues.accountStatus = $scope.DICTIONARY.clientUser.active;
						break;
				}
			};

			$scope.getCurrentCollectionCount = function (collection) {
				var collectionObject = collection;
				var collectionCount = 0;

				for (var i = 0; i < collectionObject.length; i++) {
					if (collectionObject[i].assigned === true) {
						collectionCount++;
					}
				}

				return collectionCount;
			};

			$scope.handleClientUserHistoryClick = function () {
				$location.path(CLIENT_USER_HISTORY_URL);
			};

			$scope.handleClientUserSubmit = function () {
				if (UTILS.hasClass(document.getElementById('clientUserButtonSubmit'),'buttonFormStdEnabled')) {
					console.log('Handling client user edit submit');
					$scope.pageErrorMessage = '';

					UTILS.assert(UTILS.isNotEmpty($scope.changedValues.userDetails.firstName),
						'Client First Name must not be empty.');
					UTILS.assert(UTILS.isNotEmpty($scope.changedValues.userDetails.lastName),
						'Client Last Name must not be empty.');
					UTILS.assert(UTILS.isNotEmptyStringifiedObject($scope.getCurrentCollectionCount($scope.allCompanies)),
						'Company selection must not be empty.');

					angular.element('#clientUserWorkPhoneErrorMessage').css('display', 'none');
					angular.element('#clientUserMobilePhoneErrorMessage').css('display', 'none');

					var clientUser = {};
					clientUser.clientUserId = $scope.clientUserId;
					clientUser.firstName = $scope.changedValues.userDetails.firstName;
					clientUser.lastName = $scope.changedValues.userDetails.lastName;
					clientUser.email = $scope.emailAddress;
					clientUser.title = $scope.changedValues.userDetails.title;
					clientUser.workPhone = UTILS.removePhoneFormatting($scope.changedValues.userDetails.workPhone);
					clientUser.mobilePhone = UTILS.removePhoneFormatting($scope.changedValues.userDetails.mobilePhone);
					clientUser.officeCity = $scope.changedValues.userDetails.city;

					var reportIds = '';
					var companyIds = '';
					var matchbackIds = '';
					var reportNames = '';
					var companyNames = '';
					var matchbackNames = '';

					for (var i = 0; i < $scope.allReports.length; i++) {
						if ($scope.allReports[i].assigned === true) {
							reportIds += $scope.allReports[i].id + ',';
							reportNames += $scope.allReports[i].name + ',';
						}
					}

					for (var i = 0; i < $scope.allCompanies.length; i++) {
						if ($scope.allCompanies[i].assigned === true) {
							companyIds += $scope.allCompanies[i].id + ',';
							companyNames += $scope.allCompanies[i].name + ',';
						}
					}

					for (var i = 0; i < $scope.allMatchbacks.length; i++){
						if($scope.allMatchbacks[i].assigned === true){
							matchbackIds += $scope.allMatchbacks[i].id + ',';
							matchbackNames += $scope.allMatchbacks[i].name + ',';
						}
					}

					reportIds = reportIds.replace(/,\s*$/, '');
					companyIds = companyIds.replace(/,\s*$/, '');
					matchbackIds = matchbackIds.replace(/,\s*$/, '');
					reportNames = reportNames.replace(/,\s*$/, '');
					companyNames = companyNames.replace(/,\s*$/, '');
					matchbackNames = matchbackNames.replace(/,\s*$/, '');

					if ($scope.changedValues.assignedReports) {
						$scope.changedValues.assignedReports = $scope.changedValues.assignedReports.replace(/,\s*$/, '');
					}

					if ($scope.changedValues.assignedCompanies) {
						$scope.changedValues.assignedCompanies = $scope.changedValues.assignedCompanies.replace(/,\s*$/, '');
					}

					if ($scope.changedValues.assignedMatchbacks) {
						$scope.changedValues.assignedMatchbacks = $scope.changedValues.assignedMatchbacks.replace(/,\s*$/, '');
					}

					clientUser.reports = reportIds;
					clientUser.assignedCompanies = companyIds;
					clientUser.assignedMatchbacks = matchbackIds;

					var clientUserIdFromDOM = document.getElementById('clientUserId').value;

					$scope.changedValues.accountStatus = $scope.accountStatus;

					var changes = checkForUpdates(reportNames, companyNames, matchbackNames);

	        		console.log('changes to be sent in: ', changes);

					ClientUserUpdate.updateClientUser({clientUser: clientUser, changes: changes},
						function (successResponse) {
							console.log('Client user data updated for client user id: ' +
								clientUserIdFromDOM);
							$scope.processClientUserEditSuccessResponse(successResponse);
						}, function (errorResponse) {
							$scope.processClientUserEditErrorResponse(errorResponse);
						});
				}
			};

			function checkForUpdates (reportNames, companyNames, matchbackNames) {
				var changedObj = {};
				changedObj.userDetails = {};

				console.log('originalValues.assignedReports: ', originalValues.assignedReports);
				console.log('$scope.changedValues.assignedReports: ', $scope.changedValues.assignedReports);

				if (originalValues.assignedReports !== $scope.changedValues.assignedReports) {
					changedObj.reports = reportNames;
				}

				if (originalValues.assignedCompanies !== $scope.changedValues.assignedCompanies &&
					$scope.changedValues.assignedCompanies !== '') {
					changedObj.assignedCompanies = companyNames;
				}

				if (originalValues.assignedMatchbacks !== $scope.changedValues.assignedMatchbacks) {
					changedObj.assignedMatchbacks = matchbackNames;
				}

				for (var property in originalValues.userDetails) {
					if (originalValues.userDetails.hasOwnProperty(property)) {
						if (originalValues.userDetails[property] !== $scope.changedValues.userDetails[property]) {
							changedObj.userDetails[property] = $scope.changedValues.userDetails[property];
						}
					}
				}

				if (UTILS.isEmptyObject(changedObj.userDetails)) {
					delete changedObj.userDetails;
				}

				return changedObj;
			}

			$scope.handleResendEmail = function () {
				var email = angular.element('#clientUserEmailAddress').html();
				ResendActivation.resendEmail({email: email, clientDisplayName: $scope.clientName,
						clientUserId: $scope.clientUserId},
					function (response) {
						console.log(response);
						$scope.pageErrorMessage = '';
						if (response.message === MESSAGES.error.clientUsers.confirmationEmail) {
							$scope.messageBar.message = $scope.DICTIONARY.error.clientUser.unableToSendEmail;
							$scope.messageBar.priority = PRIORITY.warning;
						} else {
							console.log('Activation email resent for email: ' + email);
							$scope.messageBar.priority = PRIORITY.success;
							$scope.messageBar.message =
								$scope.DICTIONARY.success.clientUser.activationEmailSent;
						}
					}, function (errorResponse) {
						console.log('There was a problem resending the activation email ' +
							UTILS.getPrintout(errorResponse));
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.unableToSendEmail;
					});
			};

			$scope.handleDeleteClick = function () {
				angular.element('#clientUserDeleteConfirmation').css('display', 'block');
			};

			$scope.handleDeleteCancel = function () {
				angular.element('#clientUserDeleteConfirmation').css('display', 'none');
			};

			$scope.handleDeleteConfirmation = function () {
				turnSpinnerOn();
				var email = angular.element('#clientUserEmailAddress').html();
				angular.element('#clientUserDeleteConfirmation').css('display', 'none');
				ClientUserDelete.delete({userName: email},
					function (response) {
						turnSpinnerOff();
						$scope.pageErrorMessage = '';
						console.log('Client user ' + email + ' has been deleted.');
						$scope.setInitialState();
						$scope.messageBar.priority = PRIORITY.success;
						$scope.messageBar.message =
							$scope.DICTIONARY.success.clientUser.deleted;

						$scope.editDetailContainerClass = false;

					}, function (errorResponse) {
						turnSpinnerOff();
						console.log('There was an issue deleting the user: ' + email + ' ' +
							UTILS.getPrintout(errorResponse));
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.deleted;
					});
			};

			$scope.handleUndeleteClick = function () {
				turnSpinnerOn();
				var email = angular.element('#clientUserEmailAddress').html();
				ClientUserUndelete.undelete({userName: email},
					function (response) {
						turnSpinnerOff();
						$scope.pageErrorMessage = '';
						console.log('Client user ' + email + ' has been undeleted.');
						$scope.setInitialState();
						if (response.message === MESSAGES.error.clientUsers.notDeleted) {
							$scope.messageBar.priority = PRIORITY.warning;
							$scope.messageBar.message = $scope.DICTIONARY.error.clientUser.unableToUndelete;
						} else {
							$scope.messageBar.priority = PRIORITY.success;
							$scope.messageBar.message = $scope.DICTIONARY.success.clientUser.undeleted;
						}
					}, function (errorResponse) {
						turnSpinnerOff();
						console.log('There was an issue undeleting the user: ' + email + ' ' +
							UTILS.getPrintout(errorResponse));
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.undelete;
					});
			};

			$scope.processClientUserEditSuccessResponse = function (response) {
				console.log('success response: ', response);
				console.log('Message received from client user edit submit success:', response.message);
				$scope.pageErrorMessage = '';
				$scope.editDetailContainerClass = false;

				if (response.message === MESSAGES.success.clientUsers.updated) {
					$scope.messageBar.message = $scope.DICTIONARY.success.clientUser.updated;
					$scope.messageBar.priority = PRIORITY.success;

					$scope.setInitialState();
				}
			};

			$scope.processClientUserEditErrorResponse = function (response) {
				console.log('There was an error editing this client: ' +
					UTILS.getPrintout(response.data.message));
				$scope.pageErrorMessage = '';
				$scope.editDetailContainerClass = true;

				if (response.data.message === MESSAGES.error.authorization.denied) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.authorization.denied;
				} else if (response.data.message === MESSAGES.error.clientUsers.clientIdEmpty) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.clientIdEmpty;
				} else if (response.data.message === MESSAGES.error.clientUsers.clientUserIdEmpty) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.clientUserIdEmpty;
				} else if (response.data.message === MESSAGES.error.clientUsers.firstNameEmpty) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.firstNameEmpty;
				} else if (response.data.message === MESSAGES.error.clientUsers.lastNameEmpty) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.lastNameEmpty;
				} else if (response.data.message === MESSAGES.error.clientUsers.unableToUpdate) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.unableToUpdate;
				} else if (response.data.message === MESSAGES.error.clientUsers.updateDeleted) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.unableToUpdateDeleted;
				} else if (response.data.message === MESSAGES.error.safety) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.safety;
				} else {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.unableToUpdate;
				}
			};

			$scope.handleClientUserCancel = function () {
				console.log('Handling client user edit cancel');
				angular.element('#clientUserWorkPhoneErrorMessage').css('display', 'none');
				angular.element('#clientUserMobilePhoneErrorMessage').css('display', 'none');

				$scope.pageErrorMessage = '';
				$scope.messageBar.message = '';

				$scope.setInitialState();
			};

			$scope.cancelClientUserView = function () {
				console.log('Handling client user view cancel');
				$location.path(CLIENT_USER_LIST_URL);
			};
		}]);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('clientUser')
		.controller('ClientUserHistoryCtrl',
		function ($scope, $location, Session, ClientUserHistoryById, ClientUsersHistoryById) {
			var categories = {'userDisplayName':1,'clientUserDisplayName':1,'action':1,'details':1,'date':1};

			$scope.session = Session;
			$scope.history = {};
			$scope.individualHistory = false;
			$scope.listErrorMessage = '';

			$scope.cancelClientUserHistoryView = function () {
				if ($scope.individualHistory) {
					$location.path(CLIENT_USER_DETAILS_URL);
				}
				else {
					$location.path(CLIENT_DETAILS_URL);
				}
			};

			$scope.clickHeaderHandler = function (category) {
				if (categories.hasOwnProperty(category)) {
					categories[category] = -categories[category];
				}
				$scope.history.sort(columnSort(category, categories[category]));
			};

			function columnSort(property, finalSortOrder) {
				return function (a, b) {
					var aVal = a[property] ? a[property].toLowerCase() : '';
					var bVal = b[property] ? b[property].toLowerCase() : '';
					var result = (aVal < bVal) ? -1 : (aVal > bVal) ? 1 : 0;
					return result * finalSortOrder;
				};
			}

			$scope.getHistoryForUser = function(clientUserId) {
				ClientUserHistoryById.getClientUserHistoryById({clientUserId: clientUserId},
					function(response) {
						console.log('retrieved client user history to display');
						$scope.history = response.history;
					}, function (errorResponse) {
						console.log('Error retrieving history for client user id: ' + clientUserId);
						$scope.listErrorMessage = $scope.DICTIONARY.error.history.clientUser;
					});
			};

			$scope.getHistoryForClient = function (clientId) {
				ClientUsersHistoryById.getClientUsersHistoryByClientId({clientId: clientId},
					function(response) {
						console.log('retrieved client\'s users history to display');
						$scope.history = response.history;
					}, function (errorResponse) {
						console.log('Error retrieving users history for client id: ' + clientId);
						$scope.listErrorMessage = $scope.DICTIONARY.error.history.clientUser;
					});
			};

			$scope.populateHistoryTable = function () {
				if (UTILS.isNotEmpty(localStorage.currentClientUserId)) {
					$scope.individualHistory = true;
					$scope.getHistoryForUser(localStorage.currentClientUserId);
				}
				else if (UTILS.isNotEmpty(localStorage.currentClientId)) {
					$scope.individualHistory = false;
					$scope.getHistoryForClient(localStorage.currentClientId);
				}
			};

			$scope.populateHistoryTable();

		});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('clientUser')
		.controller('ClientUserActivateCtrl', function ($scope, $routeParams, $location, ClientUserById, ClientActivate, Session) {
			var clientUserId = location.hash.split('#' + ACTIVATE_CLIENT_USER_PAGE + '/').join('');
			console.log('Activation page for client user id: ' + clientUserId);

			$scope.Session = Session;

			$scope.pageErrorMessage = '';
			$scope.pageSuccessMessage = '';
			$scope.passwordErrorMessage = '';
			$scope.password2ErrorMessage = '';
			$scope.submitButtonEnabled = false;

			$('#clientUserPassword').focus();

			UTILS.assert(UTILS.isNotEmpty(clientUserId), 'Client User Id must not be empty.');

			$scope.firstName = clientUser.firstName;
			$scope.lastName = clientUser.lastName;
			$scope.title = clientUser.title;
			$scope.workPhone = clientUser.workPhone;
			$scope.mobilePhone = clientUser.mobilePhone;
			$scope.city = clientUser.officeCity;
			$scope.emailAddress = clientUser.email;

			$scope.password1 = '';
			$scope.password2 = '';

			$scope.enableSubmitButton = function () {
				$scope.$evalAsync(function () {
					$scope.submitButtonEnabled = true;
				});
			};

			$scope.disableSubmitButton = function () {
				$scope.$evalAsync(function () {
					$scope.submitButtonEnabled = false;
				});
			};

			$scope.setInitialState = function () {
				$scope.disableSubmitButton();
			};

			$scope.setInitialState();

			$scope.performInputFieldValidation = function () {
				var password1 = $scope.password1;
				var password2 = $scope.password2;

				if (UTILS.verifyPassword(password1) && UTILS.verifyPassword(password2)) {
					$scope.passwordErrorMessage = '';
					$scope.password2ErrorMessage = '';

					$scope.enableSubmitButton();
				} else {
					if (password1 === '') {
						$scope.passwordErrorMessage = '';
					}
					if (password2 === '') {
						$scope.password2ErrorMessage = '';
					}
					$scope.setInitialState();
				}
			};

			$scope.handlePasswordChange = function () {
				$scope.performInputFieldValidation();
			};

			$scope.handlePasswordBlur = function (passwordElementId) {
				var passwordElement;
				var errorMessage = '';

				if (passwordElementId ===  'password1') {
					passwordElement = document.getElementById('clientUserPassword');
				} else if (passwordElementId ===  'password2') {
					passwordElement = document.getElementById('clientUserPassword2');
				}

				if (passwordElement.value !== '') {
					if (passwordElement.value.length < 8) {
						errorMessage = $scope.DICTIONARY.error.clientUser.invalidPasswordLength;
					} else if (/\s/g.test($('#clientUserPassword').val())) {
						errorMessage = $scope.DICTIONARY.error.account.noSpacesAllowed;
					} else {
						errorMessage = '';
					}
				} else {
					errorMessage = '';
				}

				if (passwordElementId ===  'password1') {
					$scope.passwordErrorMessage = errorMessage;
				} else if (passwordElementId ===  'password2') {
					$scope.password2ErrorMessage = errorMessage;
				}
			}

			$scope.handleClientUserSubmit = function () {
				if (UTILS.hasClass(document.getElementById('clientUserButtonSubmit'),'buttonFormStdEnabled')) {
					console.log('Handling client user confirm submit');
					$scope.pageErrorMessage = '';

					UTILS.assert(UTILS.isNotEmpty($scope.password1), 'Password ' +
						'must not be empty.');
					UTILS.assert(UTILS.isNotEmpty($scope.password2), 'Confirm Password ' +
						'must not be empty.');

					if ($scope.password1 === $scope.password2) {
						$scope.pageSuccessMessage = '';

						$scope.disableSubmitButton();

						ClientActivate.setPassword({clientUserPassword: $scope.password1,
								clientUserFirstName: $scope.firstName,
								clientUserLastName: $scope.lastName,
								hash: $routeParams.hash},
							function (successResponse) {
								console.log('Client successfully activated.');
								$scope.processClientUserSuccessResponse(successResponse);
							}, function (errorResponse) {
								$scope.processClientUserErrorResponse(errorResponse);
							});

						$scope.password1 = '';
						$scope.password2 = '';
					} else {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.passwordsDoNotMatch;
					}
				}
			};

			$scope.processClientUserSuccessResponse = function (response) {
				$scope.pageErrorMessage = '';
				var message;

				if (response.message === MESSAGES.error.tableau.unableToAdd) {
					$scope.messageBar.priority = 'success';
					message = $scope.DICTIONARY.success.clientUser.activationTableau;
				} else {
					$scope.messageBar.priority = 'success';
					message = $scope.DICTIONARY.success.clientUser.activationComplete;
				}

				$scope.Session.messageToShow = message;
				$location.path(LOGIN_URL);
			};

			$scope.processClientUserErrorResponse = function (response) {
				console.log('There was an error activating this client: ' +
					UTILS.getPrintout(response.data.message));
				$scope.pageErrorMessage = '';

				if (response.data.message === MESSAGES.error.invalidLink.activation) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.invalidLink;
				} else if (response.data.message === MESSAGES.error.clientUsers.unableToAdd) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.unableToActivate;
				} else if (response.data.message === MESSAGES.error.authentication.passwordEmpty) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.invalidPasswordLength;
				} else if (response.data.message === MESSAGES.error.authentication.nameEmpty) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.unableToActivate;
				} else if (response.data.message === MESSAGES.error.clientUsers.exists) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.exists;
				} else if (response.data.message === MESSAGES.error.safety) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.safety;
				} else {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.unableToActivate;
				}
			};

			$scope.handleClientUserCancel = function () {
				console.log('Handling client user confirm cancel');
				$location.path(LOGIN_URL);
			};
		});


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('clientUser')
		.controller('ClientUserListCtrl', function ($scope, $location, ClientUsersByClient, Session) {
			var categories = {'firstName':1,'lastName':1,'title':1,'email':1,'city':1,'status':1};

			$scope.session = Session;
			$scope.listErrorMessage = '';

			if (Session.user.canSeeAllClientUsers) {
				ClientUsersByClient.getClientUsersByClientId({clientId: localStorage.currentClientId},
					function (clientUserList) {
						if (clientUserList.length < 1) {
							showNoClientUsersMessage();
						} else {
							$scope.listErrorMessage = '';

							$scope.clientUserList = clientUserList;
							// TBD remove this verbose log
							console.log('$scope.clientUserList: ', UTILS.getPrintout($scope.clientUserList));
						}
						console.log('Client user data retrieved for client id :' + localStorage.currentClientId);
					}, function (errorResponse) {
						$scope.processClientUserListErrorResponse(errorResponse);
					});
			} else {
				showNoClientUsersMessage();
			}

			function showNoClientUsersMessage () {
				$scope.listErrorMessage = $scope.DICTIONARY.error.clientUser.listAll;
			}

			$scope.clickClientUserCreateHandler = function () {
				$location.path(CREATE_CLIENT_USER_URL);
			};

			$scope.clickHeaderHandler = function (category) {
				if (categories.hasOwnProperty(category)) {
					categories[category] = -categories[category];
				}
				$scope.clientUserList.sort(columnSort(category, categories[category]));
			};

			$scope.formatPhoneNumber = function (phoneNumber) {
				return UTILS.formatUSPhoneNumber(phoneNumber);
			};

			function columnSort (property, finalSortOrder) {
				return function (a, b) {
					var aVal = a[property] ? a[property].toLowerCase() : '';
					var bVal = b[property] ? b[property].toLowerCase() : '';
					var result = (aVal < bVal) ? -1 : (aVal > bVal) ? 1 : 0;
					return result * finalSortOrder;
				};
			}

			$scope.handleClientUserClick = function (clientUserId) {
				if ($scope.session.user.canManageClientUser) {
					console.log('Handling client user details click for client user: ' + clientUserId);

					localStorage.currentClientUserId = clientUserId;
					$location.path(CLIENT_USER_DETAILS_URL);
				}
			};

			$scope.setInitialState = function () {
				$scope.listErrorMessage = '';
			};

			$scope.setInitialState();

			$scope.processClientUserListErrorResponse = function (response) {
				console.log('There was an error enlisting client users: ' +
					UTILS.getPrintout(response.data.message));
				$scope.listErrorMessage = '';

				if (response.message === MESSAGES.error.clientUsers.clientIdEmpty) {
					$scope.listErrorMessage = $scope.DICTIONARY.error.clientUser.clientIdEmpty;
				} else if (response.message === MESSAGES.error.clientUsers.listAll) {
					$scope.listErrorMessage = $scope.DICTIONARY.error.clientUser.listAll;
				} else if (response.data.message === MESSAGES.error.safety) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.safety;
				} else {
					$scope.listErrorMessage = $scope.DICTIONARY.error.clientUser.listAll;
				}
			};
		});


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('clientUser.factory', [])
		.factory('ClientActivate', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + ACTIVATE_CLIENT_USER_SERVICE, {}, {
					setPassword: {method: 'POST', isArray: false}
				});
			}])
		.factory('ClientUserCreate', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + CREATE_CLIENT_USER_SERVICE, {}, {
					clientUserCreate: {method: 'POST', isArray: false}
				});
			}])
		.factory('ClientUserDelete', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + SOFT_DELETE_CLIENT_USER_SERVICE, {}, {
					delete: {method: 'POST', isArray: false}
				});
			}])
		.factory('ClientUserHistoryById', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + CLIENT_USER_HISTORY_SERVICE + '/:clientUserId', {}, {
					getClientUserHistoryById: {method: 'GET', isArray: false}
				});
			}])
		.factory('ClientUsersHistoryById', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + CLIENT_USERS_HISTORY_SERVICE + '/:clientId', {}, {
					getClientUsersHistoryByClientId: {method: 'GET', isArray: false}
				});
			}])
		.factory('ClientUserList', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + CLIENT_USERS_LIST_SERVICE, {}, {
					getClientUsers: {method: 'GET', isArray: true}
				});
			}])
		.factory('ClientUserById', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + CLIENT_USER_SERVICE + '/:clientUserId', {}, {
					getClientUserById: {method: 'GET', isArray: false}
				});
			}])
		.factory('ClientUsersByClient', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + CLIENT_USERS_LIST_SERVICE + '/:clientId', {}, {
					getClientUsersByClientId: {method: 'GET', isArray: true}
				});
			}])
		.factory('ClientUserUpdate', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + UPDATE_CLIENT_USER_SERVICE, {}, {
					updateClientUser: {method: 'POST', isArray: false}
				});
			}])
		.factory('ClientUserUndelete', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + UNDELETE_CLIENT_USER_SERVICE, {}, {
					undelete: {method: 'POST', isArray: false}
				});
			}])
		.factory('FullReportList', ['$resource',
			function ($resource) {
				//tbd remove?
				return $resource(BACKEND_URL + REPORTS_LIST_SERVICE, {}, {
					getAllReports: {method: 'POST', isArray: true}
				});
			}])
		.factory('PasswordChange', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + PASSWORD_CHANGE_SERVICE, {}, {
					changePassword: {method: 'POST', isArray: false}
				});
			}])
		.factory('ResendActivation', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + RESEND_ACTIVATION_EMAIL_SERVICE, {}, {
					resendEmail: {method: 'POST', isArray: false}
				});
			}]);


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('whiteList.factory', []).
		service('WhiteListService', function($http, $q) {
			this.getWhiteList = function(clientId){
				var deferred = $q.defer();
				var url = BACKEND_URL + CLIENT_WHITELIST_SERVICE + '/' + clientId;
				$http.get(url).success(function(data, status) {
					deferred.resolve(data);
				}).error(function(data, status) {
					deferred.reject(data);
				});

				return deferred.promise;
			};
		}
	);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	

	angular.module('dashboard', []);


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('dashboard')
		.controller('DashboardCtrl', function () {
			//
		});


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('errorPages', [])
		.config(['$routeProvider', function($routeProvider){
			$routeProvider
				.when(ERROR_NOT_FOUND_PATH, {
					templateUrl: PARTIALS_FULL_PATH + 'errorPages/nonexistentView.html'
				});
			$routeProvider
				.when(ERROR_FORBIDDEN_PATH, {
					templateUrl: PARTIALS_FULL_PATH + 'errorPages/forbiddenView.html'
				});
		}]);


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	angular.module('errorPages')
		.controller('ErrorPagesCtrl', ['$scope', function ($scope) {

			if (message === MESSAGES.error.invalidLink.passwordReset) {
				$('#errorMessage').html($scope.DICTIONARY.error.account.invalidLinkMessage);
			} else if (message === MESSAGES.error.invalidLink.activation) {
				$('#errorMessage').html($scope.DICTIONARY.error.clientUser.invalidLinkMessage);
			} else {
				$('#errorMessage').html($scope.DICTIONARY.error.account.invalidLinkMessage);
			}
		}]);


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('files.resources', [])
		.factory('FileDownloadResource', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + FILE_DOWNLOAD_SERVICE, {}, {
					multipleFiles: {method: 'POST', isArray: false}
				});
			}])
		.factory('FolderCreateResource', ['$resource',
			function($resource){
				return $resource(BACKEND_URL + FOLDER_CREATE_SERVICE, {}, {
					createFolder: {method: 'POST', isArray: false}
				});
		}])
		.factory('FolderRenameResource', ['$resource',
			function($resource){
				return $resource(BACKEND_URL + FOLDER_RENAME_SERVICE, {}, {
					renameFolder: {method: 'POST', isArray: false}
				});
			}])
		.factory('FileDeleteResource', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + FILE_DELETE_SERVICE, {}, {
					deleteFiles: {method: 'POST', isArray: false}
				});
			}])
	  .factory('FileActivityResource', ['$resource',
	    function ($resource) {
	      return $resource(BACKEND_URL + FILE_HISTORY_SERVICE + '/:company', {}, {
	        getActivity: {method: 'GET', isArray: false}
	      });
	    }])
		.factory('FileListResource', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + FILE_LIST_SERVICE + '/:company/:directoryContext', {}, {
					getContents: {method: 'GET', isArray: false}
				});
			}])
		.factory('MatchbackFilesResource', ['$resource',
			function($resource){
				return $resource(BACKEND_URL + MATCHBACK_FILES_SERVICE + '/:company', {}, {
					getMatchbackLists: {method: 'GET', isArray: false}
				});
			}]);


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('files', ['ngRoute', 'services', 'files.resources'])
		.config(['$routeProvider', '$windowProvider', 'SessionProvider', function ($routeProvider, $windowProvider, SessionProvider) {
			var $window = $windowProvider.$get();
			var templateUrl = $window.BACKEND_URL + PARTIALS_PATH + $window.FILES_URL;

			$routeProvider.when($window.FILES_URL, {
				redirectTo: function () {
					var session = SessionProvider.$get();
					return $window.FILES_URL + '/' + session.currentCompanyMatchbackName + '/' +
						$window.DIRECTORY_TYPES.documents;
				}
			});

			$routeProvider.when($window.FILES_URL + '/:matchbackName', {
				redirectTo: function (parameters) {
					return $window.FILES_URL + '/' + parameters.matchbackName + '/' +
						$window.DIRECTORY_TYPES.documents;
				}
			});

			$routeProvider.when($window.FILES_URL + '/:matchbackName/:directoryContext', {
				templateUrl: templateUrl
			});

			$routeProvider.when($window.FILES_URL + '/:matchbackName/:directoryContext/:path*\/', {
				templateUrl: templateUrl
			});
		}]);


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('files')
		//convert bytes to kB, MB, GB, etc.
		.filter('bytes', function () {
			return function (bytes, precision) {
				var unit = 1024;
				if (bytes === 0) {
					return '0 bytes';
				}
				if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) {
					return '-';
				}
				if (typeof precision === 'undefined') {
					precision = 1;
				}

				var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
				var number = Math.floor(Math.log(bytes) / Math.log(unit));
				var val = (bytes / Math.pow(unit, Math.floor(number))).toFixed(precision);

				return  (val.match(/\.0*$/) ? val.substr(0, val.indexOf('.')) : val) + ' ' + units[number];
			};
		});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('files')
		.controller('FilesCtrl',
		['$scope', '$window', '$location', 'Session', 'MatchbackFiles', 'FileActivity', 'FileList',
	    'FileUpload', 'FileToolbar', 'LinkBuilder', 'FileNameEditor',
			function ($scope, $window, $location, Session, MatchbackFiles, FileActivity, FileList,
	              FileUpload, FileToolbar, LinkBuilder, FileNameEditor) {
				$scope.PARTIALS_FULL_PATH = $window.PARTIALS_FULL_PATH;
				$scope.FILE_TYPES = $window.FILE_TYPES;
	      $scope.FILE_HISTORY_ACTIONS = $window.FILE_HISTORY_ACTIONS;
				$scope.DIRECTORY_TYPES = $window.DIRECTORY_TYPES;
				$scope.session = Session;

	      $scope.fileActivity = FileActivity;
				$scope.linkBuilder = LinkBuilder;
				$scope.fileUpload = FileUpload;
				$scope.fileList = FileList;
				$scope.fileNameEditor = FileNameEditor;
				$scope.fileToolbar = FileToolbar;

				$scope.matchbackFiles = MatchbackFiles;

				$scope.showFilePageContent = parseInt(Session.currentCompanyId) > 0;

				$scope.showSplashPageOnly = function () {
					return !($window.UTILS.isDevMode() || $window.UTILS.isStagingProductionMode());
				};

				function cleanUp(){
					console.log('cleaning up file resources');
					FileList.clear();
					FileUpload.cancel();
					FileUpload.clearAuthorizationToken();
					FileUpload.resetFlowInitEvents();
				}

	      function showActivity(show) {
	        FileActivity.show = show;
	      }

				function showFileList(show) {
					FileList.show = show;
					FileToolbar.show = show;
				}

				function showMatchbackFiles(show){
					MatchbackFiles.setVisible(show);
				}

				$scope.$on('$destroy', cleanUp);
				$scope.$on($window.BROADCASTS.userLoggedOut, cleanUp);

				$scope.$on($window.BROADCASTS.companySelected, function () {
					$scope.showFilePageContent = Session.currentCompanyId;
					var path = LinkBuilder.buildContextPath();

					$location.path(path);
				});

				$scope.$on('$routeChangeSuccess', function(event, route) {
					FileUpload.cancel();
					var directoryContext = route.params.directoryContext;

	        FileList.setLocation(route.params);
					if (directoryContext === $window.DIRECTORY_TYPES.matchbacks) {
	          showActivity(false);
	          showFileList(false);
	          showMatchbackFiles(true);
	          MatchbackFiles.matchbackName = route.params.matchbackName;
	          MatchbackFiles.loadMatchbackFiles();
					}
	        else if (directoryContext === $window.DIRECTORY_TYPES.activity) {
	          showActivity(true);
	          showFileList(false);
	          showMatchbackFiles(false);
	          if (parseInt(Session.currentCompanyId) > 0) {
	            FileActivity.setLocation(route.params);
	            FileActivity.loadActivityLogs();
	          }
	        }
	        else {
	          showActivity(false);
						showMatchbackFiles(false);
						showFileList(true);

						if (parseInt(Session.currentCompanyId) > 0) {
							FileList.loadFiles();
						}
					}
				});
			}]);


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	angular.module('files')
	  .factory('FileActivity', ['$window', '$filter', '$location', 'Session', 'MessageBar',
	    'FileActivityResource',
	    function ($window, $filter, $location, Session, MessageBar, FileActivityResource) {

	      var matchbackName;

	      var fileActivity = {
	        directoryContext: $window.DIRECTORY_TYPES.activity,
	        loading: false,
	        logs: [],
	        show: false,

	        clear: clear,
	        loadActivityLogs: loadActivityLogs,
	        setLocation: setLocation
	      };

	      function clear() {
	        fileActivity.logs = [];
	      }

	      function loadActivityLogs() {
	        MessageBar.clear();
	        var requestBody = {
	          company: matchbackName
	        };

	        fileActivity.loading = true;
	        console.log('loadActivityLogs: Retrieving history. requestBody: ' +
	        $window.UTILS.getPrintout(requestBody));
	        return FileActivityResource.getActivity(requestBody)
	          .$promise
	          .then(function (response) {
	            var activityLogs = response.history;
	            console.log('loadFiles Successfully retrieved ' +
	            activityLogs.length + ' activity logs.');

	            updateCompanyInSession(response.company);

	            fileActivity.logs = activityLogs;
	            fileActivity.loading = false;
	          })
	          .catch(function (response) {
	            fileActivity.clear();
	            fileActivity.loading = false;

	            console.error('loadActivityLogs: Error retrieving file activity: ' +
	            $window.UTILS.getPrintout(requestBody));
	            console.error($window.UTILS.getPrintout(response));

	            MessageBar.error($window.DICTIONARY.error.files.activity);
	          });
	      }

	      function updateCompanyInSession(company) {
	        if (company.matchbackName !== Session.currentCompanyMatchbackName) {
	          Session.setCompany(company);
	        }
	      }

	      function setLocation(location) {
	        matchbackName = location.matchbackName;
	      }

	      return fileActivity;
	    }]);


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('files')
	  .factory('FileDelete', ['$window', 'Session', 'FileDeleteResource', 'MessageBar', 'FileList',
	    function ($window, Session, FileDeleteResource, MessageBar, FileList) {

	      var fileDelete = {
	        deleteFiles: deleteFiles
	      };

	      function deleteFiles(files) {
	        var filesToDelete = files.map(
	          function (file) {
	            return file.name;
	          }
	        );

	        var requestBody = {
	          companyId: Session.currentCompanyId,
	          directoryContext: FileList.directoryContext,
	          path: FileList.path,
	          fileNames: filesToDelete
	        };

	        return FileDeleteResource.deleteFiles(requestBody)
	          .$promise
	          .then(function (response) {
	            return FileList.loadFiles()
	              .then(function () {
	                reSelectNonDeletedFiles(filesToDelete);
	                showDeleteFilesResultMessage(response);
	              });
	          })
	          .catch(function (errorResponse) {
	            FileList.loadFiles()
	              .then(function () {
	                reSelectNonDeletedFiles(filesToDelete);
	                showDeleteFilesResultMessage(errorResponse.data);
	              });
	          });
	      }

	      function reSelectNonDeletedFiles(filesToDelete) {
	        FileList.files.forEach(function (file) {
	          if ($window.UTILS.arrayContains(filesToDelete, file.name)) {
	            file.selected = true;
	          }
	        });
	      }

	      function showDeleteFilesResultMessage(response) {
	        var permissionIssue = 0;
	        var genericIssue = 0;
	        var deletedFiles = 0;
	        var message = '';
	        var fileNameToResultObject = response.fileNameToResultObject;

	        Object.keys(fileNameToResultObject).forEach(function (fileName) {
	          if (fileNameToResultObject.hasOwnProperty(fileName)) {
	            var result = fileNameToResultObject[fileName];

	            console.log(fileName + '~' + result);

	            if (result === $window.MESSAGES.success.files.deleted) {
	              deletedFiles++;
	            }
	            else if (result === $window.MESSAGES.error.files.deletePermission) {
	              permissionIssue++;
	            }
	            else {
	              genericIssue++;
	            }
	          }
	        });

	        var filesText = ' File(s)';
	        if (deletedFiles > 0) {
	          filesText = deletedFiles === 1 ? ' file was' : ' files were';
	          message = deletedFiles + filesText + $window.DICTIONARY.success.files.deleted + ' ';
	        }
	        if (permissionIssue > 0) {
	          filesText = permissionIssue === 1 ? ' file' : ' files';
	          message += permissionIssue + filesText + $window.DICTIONARY.error.files.deletePermission + ' ';
	        }
	        if (genericIssue > 0) {
	          filesText = genericIssue === 1 ? ' file' : ' files';
	          message += genericIssue + filesText + $window.DICTIONARY.error.files.deleteGeneric + ' ';
	        }
	        if (UTILS.isEmpty(message)) {
	          message = 'Error when deleting files. ' + $window.DICTIONARY.error.generic.tryAgain;
	        }
	        if (response.status === 200) {
	          MessageBar.success(message);
	        }
	        else {
	          MessageBar.error(message);
	        }
	      }

	      return fileDelete;
	    }]);


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('files')
		.factory('FileList', ['$window', '$filter', '$location', 'Session', 'MessageBar', 'LinkBuilder', 'FileListResource',
			function ($window, $filter, $location, Session, MessageBar, LinkBuilder, FileListResource) {

				var matchbackName;

				var fileList = {
					directoryContext: $window.DIRECTORY_TYPES.documents,
					files: [],
					loading: false,
					path: '',
					show: true,
					reverse: false,
					sortProperty: undefined,

					clear: clear,
					createFolder: createFolder,
					getSelectedFiles: getSelectedFiles,
					loadFiles: loadFiles,
					removeFile: removeFile,
					setLocation: setLocation,
					sort: sort
				};

				function clear() {
					fileList.files = [];
				}

				function createFolder() {
					var newFolder = {
						createDate: Date.now(),
						owner: Session.user.userName,
						ownerDisplayName: Session.user.userDisplayName,
						name: 'New Folder',
						type: $window.FILE_TYPES.folder,
						new: true
					};

					fileList.files.splice(0, 0, newFolder);
					return newFolder;
				}

				function removeFile(file) {
					var index = fileList.files.indexOf(file);
					if (index >= 0) {
						fileList.files.splice(index, 1);
					}
				}

				function getSelectedFiles() {
					return fileList.files.filter(function (file) {
						return file.selected;
					});
				}

				function loadFiles() {
					MessageBar.clear();
					var requestBody = {
						company: matchbackName,
						directoryContext: fileList.directoryContext,
						path: fileList.path
					};

					fileList.loading = true;
					console.log('loadFiles: Retrieving files. requestBody: ' +
						        $window.UTILS.getPrintout(requestBody));

					return FileListResource.getContents(requestBody)
						.$promise
						.then(function (response) {
							var files = response.files;
							console.log('loadFiles Successfully retrieved ' +
								        files.length + ' files.');

							Session.setCompany(response.company);

							files.forEach(function(file){
								if(file.type === $window.FILE_TYPES.folder){
									file.href = LinkBuilder.buildFolderLink(file.name);
								}
							});

							fileList.reverse = true;
							fileList.sortProperty = 'createDate';
							fileList.files = $filter('orderBy')(files, fileList.sortProperty, fileList.reverse);
							fileList.loading = false;
						})
						.catch(function (response) {
							fileList.clear();
							fileList.loading = false;

							if (companyExistsWithoutContextRoot(requestBody, response)) {
								Session.setCompany(response.data.company);
								console.log('loadFiles: Encountered 404 on root directory ' +
									'context for authorized company - suppressing error');
							} else if( response.status === 404 ) {
								console.error('loadFiles: Unable to locate path for company.');
								$location.replace().path($window.ERROR_NOT_FOUND_PATH);
							} else if( response.status === 403 ) {
								console.error('loadFiles: Unauthorized.');
								$location.replace().path($window.ERROR_FORBIDDEN_PATH);
							} else {
								console.error('loadFiles: Error retrieving files: ' +
									$window.UTILS.getPrintout(requestBody));
								console.error($window.UTILS.getPrintout(response));

								MessageBar.error($window.DICTIONARY.error.files.list);
							}
						});
				}

				function companyExistsWithoutContextRoot(request, response) {
					var requestedPath = request.path,
						requestedContext = request.directoryContext,
						status = response.status,
						validCompany = false,
						validDirectoryContext = false,
						validDirectoryContexts = [
	            $window.DIRECTORY_TYPES.activity,
							$window.DIRECTORY_TYPES.documents,
							$window.DIRECTORY_TYPES.creatives
						];

					if(response.data && response.data.company){
						validCompany = true;
					}

					if(requestedContext && $window.UTILS.arrayContains(validDirectoryContexts, requestedContext)){
						validDirectoryContext = true;
					}

					return validCompany && validDirectoryContext && requestedPath === '' && status === 404;
				}

				function setLocation(location){
					if(location.path === undefined){
						location.path = '';
					}
					fileList.path = location.path;
					fileList.directoryContext = location.directoryContext;
					matchbackName = location.matchbackName;
				}

				function sort(property) {
					if (fileList.sortProperty === property) {
						fileList.reverse = !fileList.reverse;
					} else {
						fileList.reverse = false;
					}
					fileList.sortProperty = property;
					fileList.files = $filter('orderBy')(fileList.files, property,
						fileList.reverse);
				}

				return fileList;
			}]);


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('files')
		.factory('FileDownload', ['$window', 'Session', 'ModalOverlay', 'MessageBar', 'DownloadLink',
			'FileList', 'FileDownloadResource',
			function ($window, Session, ModalOverlay, MessageBar, DownloadLink, FileList, FileDownloadResource) {
				var fileDownload = {
					downloadFiles: downloadFiles
				};

				function turnSpinnerOff() {
					ModalOverlay.show = false;
				}

				function turnSpinnerOn() {
					ModalOverlay.show = true;
				}

				function downloadFiles(files) {
					console.log('Files selected for download: ' + $window.UTILS.getPrintout(files));
					if (files.length === 1) {
						if(files[0].type === FILE_TYPES.folder){
							downloadMultipleFiles(files);
						} else{
							downloadSingleFile(files[0]);
						}
					} else {
						downloadMultipleFiles(files);
					}
				}

				function downloadSingleFile(file) {
					MessageBar.clear();
					var path = $window.BACKEND_URL + $window.FILE_DOWNLOAD_SERVICE + '/' +
						Session.currentCompanyId + '/' + FileList.directoryContext + '/' +
						file.name + '?fileHash=' + Session.fileHash + '&path=' + FileList.path;

					DownloadLink.download(path, file.name);
				}

				function downloadMultipleFiles(files) {
					MessageBar.clear();
					turnSpinnerOn();
					var requestBody = {
						files: files,
						companyId: Session.currentCompanyId,
						directoryContext: FileList.directoryContext,
						path: FileList.path
					};

					FileDownloadResource.multipleFiles(requestBody)
						.$promise
						.then(function (response) {
							turnSpinnerOff();
							var zipName = response.zipName;

							var path = $window.BACKEND_URL + $window.FILE_DOWNLOAD_SERVICE + '/' +
								Session.currentCompanyId + '/' + $window.DIRECTORY_TYPES.zipped + '/' +
								zipName + '?fileHash=' + Session.fileHash;

							DownloadLink.download(path, zipName);
						})
						.catch(function (errorResponse) {
							turnSpinnerOff();
							console.error('Unable to download zip file: ' +
								$window.UTILS.getPrintout(errorResponse));
							if (errorResponse.data.message === MESSAGES.error.files.zipSize) {
								MessageBar.warning($window.DICTIONARY.error.files.multiFileZipSize);
							} else if(errorResponse.data.message === MESSAGES.error.files.folderEmpty) {
								MessageBar.warning($window.DICTIONARY.error.files.folderEmpty);
							} else {
								MessageBar.error($window.DICTIONARY.error.files.download);
							}
						});
				}


				return fileDownload;
			}]);


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('files')
		.factory('FileUpload', ['$window', 'flowFactory', 'Session', 'FileList', 'MessageBar',
			function ($window, flowFactory, Session, FileList, MessageBar) {

				var uploadChunkSizeInBytes = $window.COMMON.files.uploadChunkSizeInBytes;
				var targetUrl = $window.BACKEND_URL + $window.FILE_UPLOAD_SERVICE;

				var fileUpload = {
					flow: initializeFlow(),
					show: false,

					cancel: cancel,
					cancelAndRefresh: cancelAndRefresh,
					clearAuthorizationToken: clearAuthorizationToken,
					resetFlowInitEvents: resetFlowInitEvents,
					isActive: isActive,
					toggle: toggle,
					uploadSuccess: uploadSuccess,
					uploadComplete: uploadComplete,
					uploadError: uploadError,
					uploadFiles: uploadFiles,
					uploadCount: uploadCount
				};

				function initializeFlow() {
					return flowFactory.create({
						target: targetUrl,
						generateUniqueIdentifier: generateUniqueIdentifier,
						forceChunkSize: true,
						maxChunkRetries: 1,
						permanentErrors: [400, 404, 409, 500, 501],
						chunkSize: uploadChunkSizeInBytes,
						chunkRetryInterval: 2000,
						simultaneousUploads: 2
					});
				}

				function generateUniqueIdentifier(file){
					var relativePath = file.relativePath || file.webkitRelativePath || file.fileName ||
						               file.name;
					relativePath = relativePath.replace(/[^0-9a-zA-Z_-]/img, '');
					return Session.user.userName + '-' + Session.currentCompanyId + '-' + relativePath;
				}

				function uploadSuccess() {
					console.log('File successfully uploaded.');
					if (uploadComplete()) {
						console.log('Upload list completed.');
						FileList.loadFiles();
					}
				}

				function uploadComplete() {
					return fileUpload.flow.progress() === 1;
				}

				function uploadError(response){
					var parsedResponse = JSON.parse(response);
					console.error('encountered error while uploading file: ' + parsedResponse.message);

					if (parsedResponse.message === MESSAGES.error.files.exists) {
						MessageBar.error($window.DICTIONARY.error.files.exists);
					} else {
						MessageBar.error($window.DICTIONARY.error.files.uploadError);
					}
				}

				function clearAuthorizationToken() {
					delete fileUpload.flow.opts.headers.Authorization;
				}

				function resetFlowInitEvents(){
					//addresses a bug in ng-flow-init where event handlers are being re-initialized.
					fileUpload.flow.off('catchAll');
				}

				function cancel() {
					MessageBar.clear();
					fileUpload.flow.cancel();
					fileUpload.show = false;
				}

				function cancelAndRefresh() {
					fileUpload.cancel();
					if(fileUpload.flow.files.length > 0){
						FileList.loadFiles();
					}
				}

				function isActive(){
					return fileUpload.show === true;
				}

				function uploadCount(){
					return fileUpload.flow.files.length;
				}

				function uploadFiles() {
					MessageBar.clear();

					fileUpload.flow.opts.headers.Authorization = Session.token;
					fileUpload.flow.opts.query = {
						'directoryContext': FileList.directoryContext,
						'companyId': Session.currentCompanyId,
						'path': FileList.path
					};

					fileUpload.flow.upload();
				}

				function toggle() {
					fileUpload.show = !fileUpload.show;
				}

				return fileUpload;
			}]);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('files')
		.factory('FileNameEditor',
		['$window', 'MessageBar', 'Session', 'FileList', 'FolderCreateResource', 'FolderRenameResource',
			function ($window, MessageBar, Session, FileList, FolderCreateResource, FolderRenameResource) {

				var editor = {
					file: undefined,

					activate: activate,
					save: save,
					isActive: isActive,
					validate: validate
				};

				function activate(file) {
					MessageBar.clear();
					editor.file = file;
				}

				function deactivate() {
					editor.file = undefined;
				}

				function isActive() {
					return editor.file !== undefined;
				}

				function save(newName) {
					if (!isActive()) {
						return;
					} else if (editor.file.new) {
						if ($window.UTILS.isEmpty(newName)) {
							FileList.removeFile(editor.file);
							MessageBar.error($window.DICTIONARY.error.files.folderNameRequired);
							deactivate();
						} else {
							editor.file.name = newName;
							saveNewFolder(editor.file);
						}
					} else if (editor.file.editing) {
						if ($window.UTILS.isEmpty(newName)) {
							MessageBar.error($window.DICTIONARY.error.files.folderNameRequired);
							delete editor.file.editing;
							deactivate();
						} else {
							renameAndSaveFolder(editor.file, newName);
						}
					}
				}

				function saveNewFolder(folder) {
					folder.new = false;
					var requestBody = {
						companyId: Session.currentCompanyId,
						directoryContext: FileList.directoryContext,
						path: FileList.path,
						folderName: folder.name
					};
					console.log('Creating new folder ' + $window.UTILS.getPrintout(requestBody));

					FolderCreateResource.createFolder(requestBody)
						.$promise
						.then(function (response) {
							var folderName = response.folderName;
							folder.name = folderName;
							console.log('Successfully created new folder ' + $window.UTILS.getPrintout(folder));
							return FileList.loadFiles();
						})
						.then(function () {
							deactivate();
						})
						.catch(function (errorResponse) {
							console.error('Unable to create folder: ' + folder.name + ' ' +
								$window.UTILS.getPrintout(errorResponse));

							MessageBar.error($window.DICTIONARY.error.files.unableToCreateFolder);
							FileList.removeFile(folder);
							deactivate();
						});
				}

				function renameAndSaveFolder(folder, newName) {
					var originalName = folder.name;
					var requestBody = {
						companyId: Session.currentCompanyId,
						directoryContext: FileList.directoryContext,
						path: FileList.path,
						folderName: folder.name,
						newFolderName: newName
					};

					console.log('Renaming folder ' + $window.UTILS.getPrintout(requestBody));

					folder.name = newName;
					folder.editing = false;

					FolderRenameResource.renameFolder(requestBody)
						.$promise
						.then(function (response) {
							var folderName = response.folderName;
							folder.name = folderName;
							console.log('Successfully renamed folder to: ' + $window.UTILS.getPrintout(folder));
							return FileList.loadFiles();
						})
						.then(function () {
							deactivate();
						})
						.catch(function (errorResponse) {
							//TODO: handle rename errors (ie child file changes are not permitted).
							console.error('Unable to rename folder: ' + folder.name + ' ' +
								$window.UTILS.getPrintout(errorResponse));
							MessageBar.error($window.DICTIONARY.error.files.unableToRenameFolder);
							folder.name = originalName;
							deactivate();
						});
				}

				function validate(newName) {
					if (newName.length > 100) {
						MessageBar.error($window.DICTIONARY.error.files.invalidFolderNameLength);
						return false;
					} else if (!$window.UTILS.checkFolderNameFormat(newName)) {
						MessageBar.error($window.DICTIONARY.error.files.invalidFolderName);
						return false;
					} else {
						MessageBar.clear();
						return true;
					}
				}

				return editor;
			}]);


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('files')
		.factory('FileToolbar', ['$window', 'Session', 'MessageBar', 'FileList', 'FileUpload', 'FileNameEditor', 'FileDelete', 'FileDownload',
		function ($window, Session, MessageBar, FileList, FileUpload, FileNameEditor, FileDelete, FileDownload) {
			var toolbar = {
				show: true,

				activateUpload: activateUpload,
				activateUploadDisabled: activateUploadDisabled,

				createFolder: createFolder,
				createFolderDisabled: createFolderDisabled,

				deleteFiles: deleteFiles,
				deleteFilesDisabled: deleteFilesDisabled,

				downloadFiles: downloadFiles,
				downloadFilesDisabled: downloadFilesDisabled,

				renameFolder: renameFolder,
				renameFolderDisabled: renameFolderDisabled
			};

			function activateUpload(){
				MessageBar.clear();
				FileUpload.toggle();
			}

			function activateUploadDisabled(){
				return FileUpload.show;
			}

			function createFolder(){
				MessageBar.clear();
				var file = FileList.createFolder();
				FileNameEditor.activate(file);
			}

			function createFolderDisabled(){
				return FileUpload.show || FileNameEditor.isActive();
			}

			function deleteFiles(){
				MessageBar.clear();
				var files = FileList.getSelectedFiles();
				var message = deleteConfirmationMessage(files);
				if($window.confirm(message)){
					FileDelete.deleteFiles(files);
				}
			}

			function deleteConfirmationMessage(files){
				var numberOfFiles = files.length;
				if(numberOfFiles === 1){
					return $window.DICTIONARY.files.deleteConfirmationSingle;
				}else {
					return $window.DICTIONARY.files.deleteConfirmationPrefix + numberOfFiles +
						$window.DICTIONARY.files.deleteConfirmationSuffix;
				}
			}

			function deleteFilesDisabled(){
				var selectedFiles = FileList.getSelectedFiles();
				return FileUpload.show ||
					selectedFiles.length < 1 ||
					!Session.user.canManageFiles(selectedFiles);
			}

			function downloadFiles(){
				MessageBar.clear();
				var files = FileList.getSelectedFiles();
				return FileDownload.downloadFiles(files);
			}

			function downloadFilesDisabled() {
				return FileUpload.show || FileList.getSelectedFiles().length < 1;
			}

			function renameFolder(){
				MessageBar.clear();
				var folder = FileList.getSelectedFiles()[0];
				folder.editing = true;
				FileNameEditor.activate(folder);
			}

			function renameFolderDisabled(){
				var selectedFiles = FileList.getSelectedFiles();

				return FileUpload.show || FileNameEditor.isActive() || selectedFiles.length !== 1 ||
					selectedFiles[0].type !== $window.FILE_TYPES.folder ||
					!Session.user.canManageFile(selectedFiles[0]);
			}

			return toolbar;
		}]
	);


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('files')
		.factory('MatchbackFiles', ['$window', '$location', 'MessageBar', 'Session', 'MatchbackFilesResource', 'MatchbackFileList',
			function ($window, $location, MessageBar, Session, MatchbackFilesResource, MatchbackFileList) {

				var matchbackFiles = {
					loading: false,
					matchbackLists: [],
					matchbackName: undefined,
					show: false,

					setVisible: setVisible,
					loadMatchbackFiles: loadMatchbackFiles
				};

				function setVisible(visible) {
					matchbackFiles.show = visible;
					if (!visible) {
						matchbackFiles.matchbackLists.forEach(function (list) {
							list.showArchive = false;
						});
					}
				}

				function loadMatchbackFiles() {
					var requestBody = {
						directoryContext: $window.DIRECTORY_TYPES.matchbacks,
						company: matchbackFiles.matchbackName
					};
					matchbackFiles.matchbackLists = [];
					matchbackFiles.loading = true;
					console.log('loadMatchbackFiles: requesting matchback files. RequestBody: ' +
						$window.UTILS.getPrintout(requestBody));
					MatchbackFilesResource.getMatchbackLists(requestBody)
						.$promise
						.then(function (response) {
							var matchbacks = response.matchbacks;

							console.log('loadMatchbackFiles: received response: ' + matchbacks.length +
								' matchback lists');

							Session.setCompany(response.company);

							matchbackFiles.matchbackLists = matchbacks.map(function (matchbackResponse) {
								return new MatchbackFileList(matchbackResponse);
							});

							matchbackFiles.loading = false;
						})
						.catch(function (response) {
							matchbackFiles.loading = false;
							if (response.status === 404) {
								console.error('loadMatchbackFiles: Unable to load matchback files');
								$location.replace().path($window.ERROR_NOT_FOUND_PATH);
							} else if (response.status === 403) {
								console.error('loadMatchbackFiles: Unauthorized.');
								$location.replace().path($window.ERROR_FORBIDDEN_PATH);
							} else {
								console.error('loadMatchbackFiles: Error loading matchback files: ' +
									$window.UTILS.getPrintout(requestBody));
								console.error($window.UTILS.getPrintout(response));

								if(response.data && response.data.company){
									Session.setCompany(response.data.company);
								}

								MessageBar.error($window.DICTIONARY.error.files.unableToLoadMatchbacks);
							}
						});
				}

				return matchbackFiles;
			}]);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('files')
		.factory('MatchbackFileList', ['$window', 'Session', 'MessageBar', 'DownloadLink', 'ModalOverlay', 'FileDownloadResource',
			function ($window, Session, MessageBar, DownloadLink, ModalOverlay, FileDownloadResource) {

				function MatchbackFileList(matchbackJson) {
					this.type = matchbackJson.type;
					this.dataDate = matchbackJson.dataDate;
					this.current = matchbackJson.current;
					this.archive = matchbackJson.archive || [];

					this.showArchive = false;
				}

				function buildDownloadPath(companyId, fileName) {
					return $window.BACKEND_URL + $window.FILE_DOWNLOAD_SERVICE + '/' +
						companyId + '/' + $window.DIRECTORY_TYPES.matchbacks + '/' + fileName +
						'?fileHash=' + Session.fileHash;
				}

				MatchbackFileList.prototype = {
					constructor: MatchbackFileList,
					hasCurrentData: function hasCurrentData() {
						return !$window.UTILS.isEmptyObject(this.current);
					},
					hasArchive: function hasArchive() {
						return this.archive.length > 0;
					},
					toggleArchive: function toggleArchive() {
						MessageBar.clear();
						this.showArchive = !this.showArchive;
					},
					clearSelections: function clearSelections (){
						this.archive.forEach(function(archiveEntry){
							delete archiveEntry.selected;
						});
					},

					downloadCurrentDisabled: function downloadCurrentDisabled() {
						return this.showArchive === true || !this.hasCurrentData();
					},
					downloadCurrent: function downloadCurrent() {
						MessageBar.clear();
						if (this.hasCurrentData()) {
							var displayName = this.current.displayName,
								companyId = Session.currentCompanyId,
								fileName = this.current.name,
								href = buildDownloadPath(companyId, fileName);

							console.log('Downloading current matchback file: ' + displayName);
							DownloadLink.download(href, displayName);
						}
					},

					downloadArchiveDisabled: function downloadArchiveDisabled() {
						return !this.showArchive || this.getSelectedArchiveEntries().length < 1;
					},

					downloadArchive: function downloadArchive() {
						var thisMatchbackList = this;
						var files = this.getSelectedArchiveEntries().map(function(archive){
							return { name: archive.name };
						});

						var requestBody = {
							files: files,
							matchbackType: this.type,
							matchbackName: Session.currentCompanyMatchbackName,
							companyId: Session.currentCompanyId,
							directoryContext: $window.DIRECTORY_TYPES.matchbacks
						};

						MessageBar.clear();
						ModalOverlay.show = true;
						console.log('Requesting zipped matchback archive: ' +
							$window.UTILS.getPrintout(files));

						FileDownloadResource.multipleFiles(requestBody)

							.$promise
							.then(function(response){
								var zipName = response.zipName,
									companyId = requestBody.companyId,
									path = buildDownloadPath(companyId, zipName),
									downloadName = zipName.split('-')[1];

								console.log('Downloading zipped matchback archive: ' + downloadName);

								thisMatchbackList.clearSelections();
								ModalOverlay.show = false;
								DownloadLink.download(path, downloadName);
							})
							.catch(function(response){
								ModalOverlay.show = false;
								console.error('Unable to download zip file: ' +
									$window.UTILS.getPrintout(response) );
								//TODO: handle specific errors?
								MessageBar.error($window.DICTIONARY.error.files.download);
							});
					},

					getSelectedArchiveEntries: function getSelectedArchiveEntries() {
						return this.archive.filter(function(archiveEntry){
							return archiveEntry.selected;
						});
					},

					typeTextTransform: function typeTextTransform() {
						if (this.type === $window.MATCHBACK_TYPES.crm) {
							return 'uppercase';
						}
						return 'capitalize';
					}
				};

				return MatchbackFileList;
			}]);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('logIn', ['logIn.factory']);


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('logIn')
		.controller('LogInBodyCtrl', ['$scope', 'Session', 'KEY_CODES', function ($scope, Session, KEY_CODES) {
			$scope.session = Session;
			$scope.pageErrorMessage = '';
			$scope.submitButtonEnabled = false;

			$scope.password = '';
			$scope.incorrectCredentials = false;

			if (UTILS.isNotEmpty(Session.messageToShow)) {
				$scope.messageBar.message = Session.messageToShow;
			}

			$scope.userNameRemembered = function () {
				return Session.rememberUserName && UTILS.isNotEmpty(Session.user.userName);
			};

			$scope.handleKeyDown = function (event) {
				if (event.keyCode === KEY_CODES.ENTER) {
					$scope.submit(Session.user.userName, $scope.password);
				} else if (event.keyCode === KEY_CODES.TAB) {
					$scope.handleLogInInputClick();
				}
			};

			$scope.submit = function (email, password) {
				email = UTILS.removeExtraSpaces(email);
				email = email.toLowerCase();
				$scope.performEmailAndPasswordValidation();
				$scope.password = '';
				$scope.handleLogInSubmit(email, password);
			};

			$scope.handleLogInInputClick = function () {
				$scope.messageBar.message = '';
				$scope.session.messageToShow = '';
			};

			$scope.setInitialState = function () {
				$scope.submitButtonEnabled = false;
				$scope.checkboxState = Session.rememberUserName;
				$scope.password = '';
			};

			$scope.setInitialState();

			// trim spaces in the session values
			$scope.performEmailAndPasswordValidation = function () {
				if (!UTILS.containsWhitespaces(Session.user.userName) &&
					$scope.notEmptyUserNameAndPassword(Session.user.userName, $scope.password)) {
					$scope.submitButtonEnabled = true;
				} else {
					$scope.submitButtonEnabled = false;
				}
			};

			$scope.$on(BROADCASTS.userNotAuthenticated, function (event, message) {
				$scope.pageErrorMessage = message;
				$scope.incorrectCredentials = true;
				$scope.setInitialState();
			});

			$scope.$on(BROADCASTS.userAuthenticated, function () {
				$scope.pageErrorMessage = '';
				$scope.incorrectCredentials = false;
			});
		}]);


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('logIn')
		.controller('LoginCtrl', ['$scope', 'Authentication', '$window', '$rootScope', '$location',
			'Session', 'LogoutService', 'ModalOverlay',
			function ($scope, Authentication, $window, $rootScope, $location, Session, LogoutService,
					  ModalOverlay) {

				$rootScope.$broadcast(BROADCASTS.navToLogIn);

			LogoutService.logout();

			function redirectToRequestedPage($location){
				if (UTILS.isEmpty(Session.privateRequestedPage)) {
					console.log('Sending the user to the dashboard: ' + DASHBOARD_URL);
					$rootScope.$broadcast(BROADCASTS.navToDashboard);
					$location.path(DASHBOARD_URL);
				}
				else {
					console.log('Sending the user to the original requested destination: ' +
						Session.privateRequestedPage);
					$location.path(Session.privateRequestedPage);
					Session.clearPrivateRequestedPage();
				}
			}

			function turnSpinnerOff() {
				ModalOverlay.show = false;
			}

			function turnSpinnerOn() {
				ModalOverlay.show = true;
			}

			$scope.notEmptyUserNameAndPassword = function (email, password) {
				return UTILS.isNotEmpty(email) && UTILS.isNotEmpty(password);
			};

			$scope.handleLogInSubmit = function (email, password) {
				UTILS.assert(UTILS.isLowerCase(email), 'Email must be lower case');
				var message;

				if ($scope.notEmptyUserNameAndPassword(email, password) &&
					UTILS.validateEnteredUserName(email)) {
					console.log('Handling login submit');
					var userName = email.toLowerCase();
					if(UTILS.isInternalUser(email)){
						userName = UTILS.getLdapUserName(email);
					}
					turnSpinnerOn();
					Authentication.login({userName: userName, password: password},
						function (successResponse) {
							turnSpinnerOff();
							$scope.handleLoginSuccess(successResponse, $rootScope, userName, $location);
						}, function (errorResponse) {
							turnSpinnerOff();
							$rootScope.$broadcast(BROADCASTS.userNotAuthenticated,
								$scope.getUnsuccessfulLogInMessage(errorResponse.data.message, $scope, userName));
						});
				} else {
					turnSpinnerOff();
					if (UTILS.isEmpty(email)) {
						message = $scope.DICTIONARY.error.authentication.nameEmpty;
					} else if (UTILS.isEmpty(password)) {
						message = $scope.DICTIONARY.error.authentication.passwordEmpty;
					}
					else {
						//tbd fix to be invalidClientUserEmail
						message = $scope.DICTIONARY.error.authentication.invalidClientEmail;
					}
					console.log('handleLogInSubmit: Error authenticating user: ' + message);
					UTILS.assert(UTILS.isNotEmpty(message),
						'handleLogInSubmit: Message to the user cannot be empty.');
					$rootScope.$broadcast(BROADCASTS.userNotAuthenticated, message);
				}
			};

			$scope.handleLoginSuccess = function (response, $rootScope, userName, $location) {
				console.log('Token received from authentication:', response.token);
				console.log('Display Name received from authentication:', response.userDisplayName);
				if (UTILS.isNotEmpty(response.token)) {
					Session.storeUserInfo(userName, response);
					$rootScope.$broadcast(BROADCASTS.userAuthenticated);
					redirectToRequestedPage($location);
				}
			};

			$scope.getUnsuccessfulLogInMessage = function (errorMessage, $scope, userName) {
				console.log('Original login error message: ', errorMessage);
				var message = errorMessage;
				if (errorMessage === MESSAGES.error.authentication.accountLockedOut) {
					if (UTILS.isInternalUser(userName)) {
						message = $scope.DICTIONARY.error.authentication.internalLockedOut;
					}
					else {
						message = $scope.DICTIONARY.error.authentication.clientLockedOut;
					}
				} else if (errorMessage === MESSAGES.error.authentication.invalidCredentials) {
					message = $scope.DICTIONARY.error.authentication.invalidCredentials;
				} else if (errorMessage === MESSAGES.error.authentication.unavailable) {
					message = $scope.DICTIONARY.error.authentication.unavailable;
				} else {
					message = $scope.DICTIONARY.error.authentication.unexpected;
				}
				console.log('Message to show to the user:', message);
				UTILS.assert(UTILS.isNotEmpty(message),
					'getUnsuccessfulLogInMessage: Message to the user cannot be empty.');
				return message;
			};
		}]);


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('logIn.factory', [])
		.factory('Authentication', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + AUTHENTICATE_USER_SERVICE, {}, {
					login: {method: 'POST', isArray: false}
				});
			}]);


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('passwordReset', ['passwordReset.factory']);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('passwordReset')
		.controller('PasswordChangeCtrl', function ($scope, $routeParams, $location, PasswordChange) {
			var passwordValid = false;
			var password2Valid = false;

			$scope.pageErrorMessage = '';
			$scope.pageSuccessMessage = '';
			$scope.submitButtonEnabled = false;
			$scope.password = '';
			$scope.password2 = '';
			$scope.passwordErrorMessage = '';
			$scope.password2ErrorMessage = '';

			$('#passwordResetPassword').focus();

			$scope.enableSubmitButton = function() {
				$scope.$evalAsync(function () {
					$scope.submitButtonEnabled = true;
				});
			};

			$scope.disableSubmitButton = function() {
				$scope.$evalAsync(function () {
					$scope.submitButtonEnabled = false;
				});
			};

			$scope.setInitialState = function () {
				$scope.disableSubmitButton();
				$('#passwordResetContainer').css('display','block');
			};

			$scope.setInitialState();

			$scope.performInputFieldValidation = function () {
				if (UTILS.verifyPassword($scope.password) && UTILS.verifyPassword($scope.password2)) {
					$scope.passwordErrorMessage = '';
					$scope.password2ErrorMessage = '';

					comparePasswords();
				} else {
					if ($scope.password === '') {
						$scope.passwordErrorMessage = '';
					}
					if ($scope.password2 === '') {
						$scope.password2ErrorMessage = '';
					}
					$scope.setInitialState();
				}
			};

			$scope.validatePasswordEntry = function () {
				passwordValid = false;
				if ($scope.password !== '') {
					if ($scope.password.length < 8) {
						$scope.passwordErrorMessage = $scope.DICTIONARY.error.account.invalidPasswordLength;
						$scope.disableSubmitButton();
					} else if (/\s/g.test($scope.password)) {
						$scope.passwordErrorMessage = $scope.DICTIONARY.error.account.noSpacesAllowed;
						$scope.disableSubmitButton();
					} else {
						$scope.passwordErrorMessage = '';
						passwordValid = true;
					}
					comparePasswords();
				} else {
					$scope.passwordErrorMessage = '';
				}
			}

			$scope.validatePassword2Entry = function () {
				password2Valid = false;
				if ($scope.password2 !== '') {
					if ($scope.password2.length < 8) {
						$scope.password2ErrorMessage = $scope.DICTIONARY.error.account.invalidPasswordLength;
						$scope.disableSubmitButton();
					} else if (/\s/g.test($scope.password2)) {
						$scope.password2ErrorMessage = $scope.DICTIONARY.error.account.noSpacesAllowed;
						$scope.disableSubmitButton();
					} else {
						$scope.password2ErrorMessage = '';
						password2Valid = true;
					}
					comparePasswords();
				} else {
					$scope.password2ErrorMessage = '';
				}
			}

			function comparePasswords () {
				if (passwordValid && password2Valid) {
					if ($scope.password === $scope.password2) {
						$scope.pageErrorMessage = '';
						$scope.enableSubmitButton();
					} else {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.account.passwordsDoNotMatch;
						$scope.disableSubmitButton();
					}
				}
			}

			$scope.handlePasswordResetSubmit = function () {
				if ($('#passwordResetButtonSubmit').hasClass('buttonFormStdEnabled')) {
					console.log('Handling set password confirm submit');
					$scope.pageErrorMessage = '';

					UTILS.assert(UTILS.isNotEmpty($scope.password), 'Password ' +
						'must not be empty.');
					UTILS.assert(UTILS.isNotEmpty($scope.password2), 'Confirm Password ' +
						'must not be empty.');

					if ($scope.password === $scope.password2) {
						PasswordChange.changePassword({clientUserPassword: $scope.password,
								hash: $routeParams.hash},
							function (successResponse) {
								console.log('Password successfully changed.');
								$scope.processPasswordResetSuccessResponse(successResponse);
							}, function (errorResponse) {
								console.log('errorResponse' + UTILS.getSafePrintout(errorResponse));
								$scope.processPasswordResetErrorResponse(errorResponse);
							});

						$scope.password = '';
						$scope.password2 = '';
						$('#passwordResetSuccessMessageBar').fadeOut('fast');
						$scope.disableSubmitButton();
					} else {
						$scope.pageErrorMessage = $scope.DICTIONARY.error.account.passwordsDoNotMatch;
					}
				}
			};

			$scope.processPasswordResetSuccessResponse = function (response) {
				console.log('success response: ', response);
				console.log('Message received from set password confirm submit success:', response.message);
				$scope.pageErrorMessage = '';

				var successMessage = $scope.DICTIONARY.success.clientUser.passwordChanged1;
				successMessage += '<a style="color: #fff;" href="' + FRONTEND_URL + '">' +
					$scope.DICTIONARY.success.clientUser.passwordChanged2 + '</a>.';

				$scope.pageSuccessMessage = successMessage;
				$('#passwordResetContainer').fadeOut('fast');
			};

			$scope.processPasswordResetErrorResponse = function (response) {
				console.error('processPasswordResetErrorResponse response status: ', response.status);
				console.error('Message received:', response.data.message);
				$scope.pageErrorMessage =  $scope.DICTIONARY.error.generic.server + ' ' +
	      $scope.DICTIONARY.error.generic.tryAgain;

				if (response.data.message === MESSAGES.error.invalidLink.passwordReset) {
					$scope.pageErrorMessage = $scope.DICTIONARY.error.clientUser.invalidLink;
				}
			};

			$scope.handlePasswordResetCancel = function () {
				console.log('Handling set password cancel');
				$location.path(LOGIN_URL);
			};
		});


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	angular.module('passwordReset')
		.controller('ResetEmailCtrl', ['$scope', '$rootScope', 'LogoutService', 'PasswordResetEmailService',
			function ($scope, $rootScope, LogoutService, PasswordResetEmailService) {

				var DICTIONARY = $scope.DICTIONARY;

				$('#resetEmailAddress').focus();

				function validateEmail(value) {
					return UTILS.checkEmailFormat(value);
				}

				function submitEmail(email) {
					resetForm();
					email = email.toLowerCase();
					PasswordResetEmailService.post({email: email},
						function (response) {
							console.log('Password reset request submitted for email: ' + email);
							if (response.message === MESSAGES.success.passwords.resetEmailSent) {
								UTILS.assert(UTILS.isNotEmpty(response.clientUserFirstName),
									'Password reset response must contain clientUserFirstName');
							}
							showSuccessMessage(response);
						},
						function (error) {
							showErrorMessage(error.data);
							console.error('Error submitting password reset request: ' + JSON.stringify(error));
						});
				}

				function showSuccessMessage(response) {
					var message = response.clientUserFirstName +
						DICTIONARY.passwordReset.requestSubmissionSuccess;

					$scope.messageBar.message = message;
				}

				function showErrorMessage(errData) {
					if (errData.message === MESSAGES.error.passwords.internalUser) {
						$scope.resetEmail.error = DICTIONARY.passwordReset.internalUserError;
					} else if (errData.message === MESSAGES.error.clientUsers.notFound) {
						$scope.resetEmail.error = DICTIONARY.passwordReset.unknownUserError;
					} else if (errData.message === MESSAGES.error.clientUsers.notInWhiteList) {
						$scope.resetEmail.error = DICTIONARY.passwordReset.unknownUserError;
						$scope.resetEmail.errorNoAccountManager = DICTIONARY.passwordReset.noAccountManager;
					} else {
						$scope.resetEmail.error = DICTIONARY.error.authentication.unexpected;
					}
				}

				function resetForm(){
					$scope.messageBar.message = '';
					delete $scope.resetEmail.error;
					delete $scope.resetEmail.errorNoAccountManager;
				}

				$scope.resetEmail = {
					validateEmail: validateEmail,
					submitEmail: submitEmail
				};

	      		LogoutService.logout();
				$rootScope.$broadcast(BROADCASTS.userLoggedOut);
			}]);


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('passwordReset.factory', [])
		.factory('PasswordResetEmailService', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + PASSWORD_RESET_EMAIL_SERVICE + '/:email', {}, {
					post: {method: 'POST', isArray: false}
				});
			}]);




/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('report', ['report.factory']);


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	angular.module('report')
		.controller('CustomReportMenuCtrl', ['$scope', '$window', 'Tableau', 'KEY_CODES',
			function ($scope, $window, Tableau, KEY_CODES) {

				$scope.dropDown = {
					show: false
				};

				$scope.customReportMenu = {
					customViews: [],
					viewsLoaded: false,
					newViewName: '',
					inputsDisabled: false,
					showViewManager: false,

					toggleDropDown: toggleDropDown,
					displayDropDown: displayDropDown,
					displayViewManager: displayViewManager,
					saveCustomView: saveCustomView,
					showCustomView: showCustomView,
					updateCustomViews: updateCustomViews,
					getCustomViews: getCustomViews,
					newViewNameIsValid: newViewNameIsValid,
					handleKeyboardInput: handleKeyboardInput
				};

				$scope.$on($window.BROADCASTS.reportSelected, function (reportData) {
					$scope.customReportMenu.customViews = [];
					$scope.customReportMenu.viewsLoaded = false;
				});

				function displayDropDown(display) {
					$scope.dropDown.show = display;
					$scope.customReportMenu.newViewName = '';

					if ($scope.dropDown.show) {
						getCustomViews();
					}

					$scope.customReportMenu.displayViewManager(false);
				}

				function toggleDropDown() {
					displayDropDown(!$scope.dropDown.show);
				}

				function displayViewManager(show) {
					if (show) {
						$scope.customReportMenu.customViews.forEach(function (customView) {
							customView.setEditedName();
						});
					} else {
						$scope.customReportMenu.customViews.forEach(function (customView) {
							customView.rollback();
						});
					}
					$scope.customReportMenu.showViewManager = show;
				}

				function CustomView(tableauView) {
					this.tableauView = tableauView;
					this.name = tableauView.getName();
				}

				CustomView.prototype = {
					setEditedName: function () {
						this.editedName = this.name;
					},
					markDeleted: function () {
						this.deleted = true;
					},
					isNameModified: function () {
						return this.editedName !== undefined && this.editedName !== this.name;
					},
					rollback: function () {
						delete this.editedName;
						delete this.deleted;
					}
				};

				function convertView(customView) {
					return new CustomView(customView);
				}

				function updateCustomViews(customViews) {
					var updates = [],
						deletes = [];

					customViews.forEach(function (customView) {
						if (customView.deleted) {
							deletes.push(customView.tableauView);
						} else if (customView.isNameModified()) {
							var tableauView = customView.tableauView;
							tableauView.setName(customView.editedName);
							updates.push(tableauView);
						}
					});

					$scope.customReportMenu.showViewManager = false;

					Tableau.saveAndDeleteCustomViews(updates, deletes)
						.then(function (results) {
							console.log('custom views updated');
							getCustomViews();
						})
						.catch(function (error) {
							console.error('Error while saving view changes');
							handleTableauError(error, $scope.DICTIONARY.error.report.cannotUpdateCustomViews);
						});
				}

				function saveCustomView(newViewName) {
					$scope.report.reportErrorMessage = '';
					if (newViewNameIsValid(newViewName)) {

						$scope.dropDown.show = false;
						$scope.customReportMenu.inputsDisabled = true;

						console.log('Saving custom tableau view: ' + newViewName);

						Tableau.saveCustomView(newViewName)
							.then(function (customView) {
								var view = convertView(customView);

								$scope.customReportMenu.newViewName = '';
								$scope.customReportMenu.inputsDisabled = false;
								$scope.customReportMenu.customViews.push(view);
								$scope.customReportMenu.viewsLoaded = true;

								return Tableau.applyCompanyFilter();
							})
							.then(function () {
								console.log('company filter applied after view save.');
							})
							.catch(function (error) {
								console.error('Error while saving view: ' + newViewName);
								handleTableauError(error, $scope.DICTIONARY.error.report.cannotSaveCustomView);
							});
					}
				}

				function getCustomViews() {
					console.log('Loading custom tableau views');
					Tableau.getCustomViews()
						.then(function (customViews) {
							if (customViews) {
								console.log('Loaded custom views');
								var names = customViews.map(convertView);

								$scope.customReportMenu.viewsLoaded = true;
								$scope.customReportMenu.customViews = names;
							}
						})
						.catch(function (error) {
							console.error('Error while loading custom views');
							handleTableauError(error, $scope.DICTIONARY.error.report.cannotGetCustomViews);
						});
				}

				function showCustomView(customView) {
					var name = customView.name;

					console.log('Loading custom tableau view: ' + name);
					$scope.report.ignoreDropDownEvents = true;
					$scope.report.blockReport = true;
					$scope.dropDown.show = false;

					Tableau.showCustomView(name)
						.then(function () {
							console.log('Loaded view and applied filter.');
							$scope.report.ignoreDropDownEvents = false;
							$scope.report.blockReport = false;
						})
						.catch(function (error) {
							console.error('Error while loading custom view');
							$scope.report.ignoreDropDownEvents = false;
							$scope.report.blockReport = false;
							handleTableauError(error, $scope.DICTIONARY.error.report.cannotShowCustomView);
						});
				}

				function handleTableauError(error, message) {
					console.error(error);

					$scope.customReportMenu.inputsDisabled = false;
					$scope.report.reportErrorMessage = message;
					$scope.dropDown.show = false;
				}

				function handleKeyboardInput(event) {
					var newViewName = $scope.customReportMenu.newViewName;
					if (event.keyCode === KEY_CODES.ENTER && newViewNameIsValid(newViewName)) {
						saveCustomView(newViewName);
					}
				}

				function newViewNameIsValid(newViewName) {
					return $window.UTILS.isNotEmpty(newViewName);
				}
			}]);


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	angular.module('report')
		.controller('ReportSearchDropDownCtrl', ['$scope', 'Tableau', function($scope, Tableau){
			$scope.dropDown = {
				show: false
			};
			$scope.search.label = $scope.DICTIONARY.reports.selectReport;
			$scope.search.fetchRemoteData = function(){
				$scope.report.getReportData();
			};
			$scope.search.selectItem = function(item){
				$scope.search.name = '';
				$scope.dropDown.show = false;

				if(item.name !== $scope.search.placeholder){
					if(Tableau.viz) {
						$scope.report.showTools = false;
					}
					$scope.report.reportErrorMessage = '';
					$scope.report.loadReport(item.id, item.name);
				}
			};
		}]);


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	angular.module('report')
		.controller('ReportCsvDownloadCtrl', ['$scope', 'Tableau' ,function($scope, Tableau){
			$scope.dropDown = {
				show: false
			};

			$scope.reportCsvDownload = {
				worksheets: [],
				loadWorksheets : loadWorksheets,
				toggleDropDown: toggleDropDown,
				displayDropDown: displayDropDown,
				showExportCrossTabDialog: showExportCrossTabDialog
			};

			function loadWorksheets() {
				$scope.reportCsvDownload.worksheets = Tableau.getWorksheets();
			}

			function displayDropDown(visible){
				if(visible){
					loadWorksheets();
				}
				$scope.dropDown.show = visible;
			}

			function toggleDropDown(){
				displayDropDown(!$scope.dropDown.show);
			}

			function showExportCrossTabDialog(sheetName) {
				Tableau.showExportCrossTabDialog(sheetName);
				$scope.dropDown.show = false;
			}
		}]);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	angular.module('report')
		.controller('ReportToolbarCtrl', ['$scope', '$compile', '$window', 'Tableau',
			function($scope, $compile, $window, Tableau){
			$scope.report.showTools = false;

			$scope.report.showPdfDialog = function () {
				Tableau.viz.showExportPDFDialog();
			};

			$scope.report.showExportCrossTabDialog = function (sheetName) {
				Tableau.viz.showExportCrossTabDialog(sheetName);
			};

			$scope.report.resetToInitialState = function(){
				$scope.report.clearReportError();
				$scope.report.showTools = false;
				console.log('calling viz.revertAllAsync()');
				Tableau.viz.revertAllAsync().then(function(){
					$scope.report.applyCompanyFilter();
				}, function(error){
					var message = $scope.DICTIONARY.error.generic.server + ' ' +
						$scope.DICTIONARY.error.generic.tryAgain;

					$scope.report.showReportError(message);

					console.error('error encountered in viz.revertAllAsync()');
					console.error(error);
				});
			};
		}]);


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('report')
		.controller('ReportCtrl', function ($scope, $timeout, $window, Session, ReportList, ReportTableauToken, Tableau, MessageBar) {

			$scope.search = $scope.search || {};

			$scope.PARTIALS_FULL_PATH = $window.PARTIALS_FULL_PATH;

			$scope.report = {
				reportErrorMessage: '',
				reportDirectoryErrorMessage: '',
				reportList: undefined,
				reportName: undefined,
				blockReport: false,
				ignoreDropDownEvents: false,
				showReportDirectory: true,

				getReportData: getReportData,
				loadReport: loadReport,
				clearTableau: clearTableau,
				truncateTitle: truncateTitle,
				applyCompanyFilter: applyCompanyFilter,
				showReportError: showReportError,
				clearReportError: clearReportError
			};

			if (!parseInt(Session.currentCompanyId) > 0) {
				MessageBar.warning($scope.DICTIONARY.error.report.noValidCompany);
				$scope.report.showReportDirectory = true;
			}

			$scope.$on(BROADCASTS.dropDownVisible, function () {
				if (!$scope.report.ignoreDropDownEvents) {
					//allow true to beat false in races
					$timeout(function () {
						$scope.report.blockReport = true;
					}, 100);
				}
			});
			$scope.$on(BROADCASTS.dropDownHidden, function () {
				if (!$scope.report.ignoreDropDownEvents) {
					$scope.report.blockReport = false;
				}
			});

			$scope.$on(BROADCASTS.companySelected, function () {
				if (Tableau.viz) {
					$scope.report.applyCompanyFilter();
				}
			});

			$scope.$on(BROADCASTS.leftNavButtonClicked, function (event, leftNavInfo) {
				if (leftNavInfo.sectionId === $scope.DICTIONARY.general.leftNavInsights) {
					$scope.report.showReportDirectory = true;
					$scope.report.clearTableau();
					$scope.report.showTools = false;
					$scope.$digest();
				}
			});

			function getReportData() {
				ReportList.getReports(function (reportList) {
					if (reportList.length < 1) {
						console.log($scope.DICTIONARY.error.clientsUserReports.retrievalError);
						$scope.report.reportDirectoryErrorMessage = ($scope.DICTIONARY.error.report.noReportsAvailable);
					} else {
						$scope.report.reportDirectoryErrorMessage = '';
						$scope.report.reportDirectory = groupReportsByCategory(reportList);
						$scope.search.itemList = reportList;
						console.log('getReportData Report list: ', reportList);
					}
					console.log('Report list successfully retrieved.');
				}, function (errorResponse) {
					console.error('Error while retrieving report list: ' + UTILS.getPrintout(errorResponse));
					console.error($scope.DICTIONARY.error.clientsUserReports.retrievalError);
				});
			}

			function clearTableau() {
				var vizDiv = document.getElementById('viz');
				delete vizDiv.style.display;

				Tableau.dispose();
			}

			function truncateTitle(title) {
				//Consider creating a directive for such behavior (not supported by css)
				var maxLength = 64;
				var result = title;
				if (title && title.length > maxLength) {
					result = title.substring(0, title.lastIndexOf(' ', maxLength));
					result += '...';
				}
				return result;
			}

			function groupReportsByCategory(reportList) {
				var index = {},
					results = [];
				reportList.forEach(function (report) {
					if (!index[report.category]) {
						var category = {
							name: report.category,
							displayOrder: report.displayOrder,
							reports: []
						};

						index[report.category] = category;
						results.push(category);
					}
					index[report.category].reports.push(report);
				});
				return results;
			}

			function loadReport(reportId, reportDisplayName) {
				console.log('Getting report: ' + reportId);
				$scope.report.showReportDirectory = false;
				$scope.search.placeholder = reportDisplayName;
				$scope.report.reportName = reportDisplayName;
				$scope.$broadcast(BROADCASTS.reportSelected, {reportId: reportId, reportDisplayName: reportDisplayName});

				ReportTableauToken.getTableauToken({reportId: reportId},
					function (successResponse) {
						console.log('Tableau token retrieved.');
						initializeTableau(successResponse);
					}, function (errorResponse) {
						console.log('errorResponse' + UTILS.getPrintout(errorResponse));
						processGetTableauTokenErrorResponse(errorResponse, reportId);
					});

				function initializeTableau(response) {
					var tableauUrl = response.reportURL;
					var vizDiv = document.getElementById('viz');
					var vizUrl = tableauUrl;
					console.log('viz: ' + vizUrl);

					vizDiv.style.display = 'block';

					var options = {
						hideToolbar: true,
						hideTabs: false,
						width: vizDiv.offsetWidth,
						height: '800px',
						onFirstInteractive: function () {
							$scope.report.applyCompanyFilter();
						}
					};

					try {
						Tableau.create(vizDiv, vizUrl, options);
					} catch (e) {
						console.error('Caught exception while initializing tableau:');
						console.error(e);
					}

					window.onresize = $window._.debounce(function () {
						var windowHeight = $(window).height();
						var width = vizDiv.offsetWidth;
						if (Tableau.viz) {
							Tableau.viz.setFrameSize(width, windowHeight - 150);
							//HACK: tableau wants to expand the container width by 15 pixels in some cases.
							if (vizDiv.offsetWidth < width) {
								Tableau.viz.setFrameSize(vizDiv.offsetWidth, windowHeight - 150);
							}
						}
					}, 200);
				}
			}

			function applyCompanyFilter() {
				$scope.report.showTools = false;
				$scope.report.reportErrorMessage = '';

				var currentCompanyDisplayName = Session.currentCompanyDisplayName;

				Tableau.applyCompanyFilter()
					.then(function () {
						console.log('Applied Company filter to all worksheets');
						$scope.report.showTools = true;
					})
					.catch(function (err) {
						handleMissingCompanyReport(err, currentCompanyDisplayName);
						$scope.report.showTools = true;
						console.error('Error while filtering worksheets by company name');
						console.error(err);
					});
			}

			function handleMissingCompanyReport(err, currentCompanyDisplayName) {
				var isInvalidFilterFieldValue =
					err.tableauSoftwareErrorCode && err.tableauSoftwareErrorCode === 'invalidFilterFieldValue';
				var isCompanyErrorMessage = err.message === currentCompanyDisplayName;

				if (isInvalidFilterFieldValue && isCompanyErrorMessage) {
					$scope.report.reportErrorMessage =
						$scope.DICTIONARY.error.report.companyReportNotFound + currentCompanyDisplayName;
				}
			}

			function processGetTableauTokenErrorResponse(response, reportId) {
				console.error('processGetTableauTokenErrorResponse response status: ', response.status);
				console.error('Message received:', response.data.message);
				var reportErrorMessage = '';
				//tbd - need to replace with name of report selected
				var reportName = 'Overview Dashboard';

				if (response.data.message === MESSAGES.error.tableau.permission) {
					reportErrorMessage = $scope.DICTIONARY.error.report.noPermissionForTableauPart1 +
						reportName + $scope.DICTIONARY.error.report.noPermissionForTableauPart2;
				} else if (response.data.message === MESSAGES.error.tableau.tokenRetrieval) {
					reportErrorMessage = $scope.DICTIONARY.error.report.tableauPermissionErrorPart1 +
						reportName + $scope.DICTIONARY.error.report.tableauPermissionErrorPart2;
				} else if (response.data.message === MESSAGES.error.tableau.tokenMissing) {
					reportErrorMessage = $scope.DICTIONARY.error.report.tableauTokenMissing;
				} else if (response.data.message === MESSAGES.error.tableau.timeout) {
					reportErrorMessage = $scope.DICTIONARY.error.report.tableauTimeOutError;
				} else {
					reportErrorMessage = $scope.DICTIONARY.error.generic.server + ' ' +
						$scope.DICTIONARY.error.generic.tryAgain;
				}

				document.getElementById('viz').style.display = 'block';
				$scope.report.reportErrorMessage = reportErrorMessage;
			}

			function showReportError(message) {
				document.getElementById('viz').display = 'block';
				$scope.report.reportErrorMessage = message;
			}

			function clearReportError() {
				$scope.report.reportErrorMessage = '';
			}
		});


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('report.factory', [])
		.factory('ReportTableauToken', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + TABLEAU_REPORT_SERVICE, {}, {
					getTableauToken: {method: 'POST', isArray: false}
				});
			}])
		.factory('ReportList', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + USERS_REPORTS_SERVICE, {}, {
					getReports: {method: 'GET', isArray: true}
				});
			}]);


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.controller('CompanySearchDropDownCtrl', ['$rootScope', '$scope', 'Session', 'UserCompaniesList',
			function ($rootScope, $scope, Session, UserCompaniesList) {
				$scope.search = {
					label: ''
				};

				$scope.dropDown = {
					show: false
				};

				$scope.$on('userInfoReceived', function () {
					$scope.search.placeholder = Session.currentCompanyDisplayName;
				});

				$scope.$watch(function(){
					return Session.currentCompanyDisplayName;
				}, function(newValue){
					$scope.search.placeholder = newValue;
				});

				$scope.search.fetchRemoteData = function () {
					UserCompaniesList.getCompaniesByUserName({userName: Session.user.userName},
						function (results) {
							console.log('Success response from resource on load. num of records: ' +
								results.length);

							$scope.search.itemList = results;
						},
						function (error) {
							console.log('Error retrieving drop down data: ' + UTILS.getPrintout(error));
						});
				};

				$scope.search.selectItem = function (item) {
					$scope.search.placeholder = item.name;
					$scope.search.name = '';
					$scope.dropDown.show = false;

					Session.currentCompanyId = item.id;
					Session.currentCompanyMatchbackName = item.matchbackName;
					Session.currentCompanyDisplayName = item.name;

					$rootScope.$broadcast(BROADCASTS.companySelected);
				};
			}]);


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.controller('LogoutCtrl', ['$scope', '$window', '$rootScope', '$location', 'LogoutService',
			'Session', function ($scope, $window, $rootScope, $location, LogoutService, Session) {

			$scope.logout = function () {
				LogoutService.logout();
				Session.clearPrivateRequestedPage();
				$rootScope.$broadcast(BROADCASTS.userLoggedOut);
				$location.path(LOGIN_URL);
			};

			$rootScope.$on(BROADCASTS.pageRequiresLogout, function () {
				LogoutService.logout();
			});
		}]);


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inDoNotRememberPageList = function (location) {
		return location === LOGIN_URL ||
			location === ROOT_URL ||
			location === DASHBOARD_URL ||
			location === PASSWORD_RESET_EMAIL_URL ||
			UTILS.startsWith(location, PASSWORD_RESET_REQUEST_PAGE) ||
			UTILS.startsWith(location, ACTIVATE_CLIENT_USER_PAGE);
	};

	var pageRequiresLogout = function (location) {
		return UTILS.contains(location, ACTIVATE_CLIENT_USER_PAGE) ||
			UTILS.contains(location, PASSWORD_RESET_REQUEST_PAGE);
	};

	angular.module('cap')
		.controller('MainCtrl', ['$scope', function ($scope) {
			$scope.DICTIONARY = DICTIONARY;
			$scope.inDoNotRememberPageList = inDoNotRememberPageList;
		}])
		.factory('authenticationInterceptor',
		['$q', '$window', '$location', '$rootScope', 'Session', 'ModalOverlay',
			function ($q, $window, $location, $rootScope, Session, ModalOverlay) {
			return {
				request: function (config) {
					if (!config.headers) {
						console.log('No headers');
						config.headers = {};
					}

					if (!config.headers.Origin && navigator.appVersion.indexOf("MSIE") != -1) {
						var origin = $location.protocol() + '://' + $location.host();
						// for an internal server (e.g. qadev) we need to add the port
						if ($location.port() === COMMON.frontendPort) {
							origin += ':' + $location.port();
						}
						console.log('Old version of IE detected, adding Origin header ' + origin);
						config.headers.Origin = origin;
					}

					console.log('Request method: ' + config.method + ' url: ' + config.url);

					if (Session.weHaveUserInfo() && pageRequiresLogout(config.url)) {
						$rootScope.$broadcast(BROADCASTS.pageRequiresLogout);
					}

					if (UTILS.startsWith(config.url, BACKEND_URL)) {
						if (Session.weHaveUserInfo()) {
							console.log('Adding authorization header');
							config.headers.Authorization = Session.token;
						}

						if (UTILS.isNotEmpty(config.url) && !inDoNotRememberPageList($location.path())) {
							console.log('Storing the current location: ' + $location.path());
							Session.privateRequestedPage = $location.path();
						}
					}
					return config;
				},
				requestError: function (rejection) {
					console.log('Interceptor: Request error: ' + UTILS.getSafePrintout(rejection));
					return $q.reject(rejection);
				},
				response: function (response) {
					console.log('Interceptor response status: ' + response.status);
					if (Session.weHaveUserInfo() && response.status === 200) {
						$rootScope.$broadcast(BROADCASTS.userInfoReceived);
						ModalOverlay.show = false;
					} else {
						if (response.status === 401 || response.status === 403) {
							$rootScope.$broadcast(BROADCASTS.userNotAuthorized);
						}
					}
					return response || $q.when(response);
				},
				responseError: function (response) {
					console.log('Interceptor responseError. Response: ' +
						UTILS.getSafePrintout(response));
					if (response.status === 401 || response.status === 403) {
						if (response.data.message === MESSAGES.error.authorization.link) {
							console.log('Interceptor: ' + MESSAGES.error.authorization.link);
							$location.path(UNAUTHORIZED_LINK);
						} else {
							$rootScope.$broadcast(BROADCASTS.userNotAuthorized);
							console.log('Interceptor: redirecting to login.');
							$location.path(LOGIN_URL);
						}
					}
					return $q.reject(response);
				}
			};
		}])
		.config(function ($httpProvider) {
			$httpProvider.interceptors.push('authenticationInterceptor');
		})
		.run(['$rootScope', '$templateCache', function ($rootScope, $templateCache) {
			$rootScope.$on('$routeChangeStart', function () {
				$templateCache.removeAll();
			});
		}]);


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.controller('ResponsiveCtrl', function ($scope) {
			$scope.$on(BROADCASTS.windowResized, function () {
				adjustResponsivenessForLeftNav();
			});

			function adjustResponsivenessForLeftNav () {
				var browserWidth = window.innerWidth;
				var currentPage = location.hash;

				if (browserWidth < 768) {
					if (currentPage.indexOf('/report') > -1) {
						location.hash = DASHBOARD_URL;
					}
				}
			}
		});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('clickDisabledWhen', [function(){
			return {
				restrict: 'A',
				link: function(scope, element, attributes) {

					var disabledWhen = attributes.clickDisabledWhen;
					element[0].addEventListener('click', function(event){
						if(scope.$eval(disabledWhen)){
							event.preventDefault();
	//						event.stopPropagation();
						}
					});
				}
			};
		}]);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('checkBox', function () {
			return {
				restrict: 'E',
				controller: 'CheckBoxCtrl',
				replace: 'true',
				template: '<div class="buttonCheckbox"></div>'
			};
		});


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.controller('CheckBoxCtrl', function ($scope) {
			$scope.checkboxState = false;

			$('.buttonCheckbox').hover(function () {
				if (!$scope.checkboxState) {
					$(this).css('background-position', '0 -20px');
				}
			});

			$('.buttonCheckbox').mouseout(function () {
				if (!$scope.checkboxState) {
					$(this).css('background-position', '0 0px');
				}
			});

			$('.buttonCheckbox').click(function () {
				if (!$scope.checkboxState) {
					$(this).css('background-position', '0 -40px');
					$scope.checkboxState = true;
				} else {
					$(this).css('background-position', '0 0px');
					$scope.checkboxState = false;
				}
				if (!$scope.$$phase) {
					$scope.$apply();
				}
			});
		});


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('onClickOutside', ['$document', function($document){
			return {
				restrict: 'A',
				link: function(scope, element, attributes) {

					var scopeExpression = attributes.onClickOutside;
					var clickHandler = function handleClickOutside(event) {
						if(!element[0].contains(event.target)){
							scope.$evalAsync(scopeExpression);
						}
					};

					$document.on('click', clickHandler);

					element.on('$destroy', function(){
						$document.off('click', clickHandler);
					});
				}
			};
		}]);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('downloadLink', ['$document', 'DownloadLink', function ($document, DownloadLink) {
			return {
				restrict: 'E',
				template: '<div style="display: none"></div>',
				link: function(scope, element){
					var hiddenElement = element.find('div')[0];
					scope.downloadLink = DownloadLink;
					scope.$watch('downloadLink.href', function(newValue){
						if(newValue !== '') {
							var anchor = $document[0].createElement('a');
							anchor.href = newValue;
							anchor.target = '_blank';

							if (DownloadLink.name) {
								anchor.download = DownloadLink.name;
							}

							hiddenElement.appendChild(anchor);
							anchor.click();
							hiddenElement.removeChild(anchor);
							DownloadLink.clear();

						}
					});
				}
			};
		}]);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('dropDown', ['$rootScope', '$window', function($rootScope, $window){
			return {
				restrict: 'E',
				templateUrl: $window.DIRECTIVES_PATH + 'dropDown.html',
				transclude: true,

				link: function(scope, element, attributes) {

					var child = element.children(0);
					var parentClass = attributes.class;
					if(child && parentClass){
						child.addClass(parentClass);
					}

					if(scope.dropDown === undefined){
						scope.dropDown = {};
					}
					scope.dropDown.show = false;

					scope.$watch('dropDown.show', function(newValue){
						if(newValue){
							$rootScope.$broadcast($window.BROADCASTS.dropDownVisible);
						} else {
							$rootScope.$broadcast($window.BROADCASTS.dropDownHidden);
						}
					});
				}
			};
		}]);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('directoryNav', ['$window', 'Session',
			function ($window, Session) {
				return {
					restrict: 'E',
					templateUrl: $window.DIRECTIVES_PATH + '/directoryNav.html',

					link: function (scope, element, attributes) {
						scope.directoryNav = {
							pathLinks : ''
						};

						function buildLink(directoryContext, path, text){
							var hash =  '#' + $window.FILES_URL + '/' +
								Session.currentCompanyMatchbackName + '/' +
								directoryContext + '/' +
								path.join('/');
							return {location: hash, name: text};
						}

						function parsePath(value) {
							var path = [];

							if(value){
								path = value.split('/');
							}

							return path;
						}

						scope.$watchGroup(['fileList.directoryContext', 'fileList.path'], function (newValues) {
							var directoryContext = newValues[0];
							var path = parsePath(newValues[1]);
							var links = [];

							if(path.length >= 3) {
								links.push(buildLink(directoryContext, path.slice(0, -2), '...'));
								links.push(buildLink(directoryContext, path.slice(0, -1), path[path.length-2]));
								links.push(buildLink(directoryContext, path, path[path.length-1]));
							} else if (path.length > 1) {
								links.push(buildLink(directoryContext, [], directoryContext));
								links.push(buildLink(directoryContext, path.slice(0, -1), path[path.length-2]));
								links.push(buildLink(directoryContext, path, path[path.length-1]));
							} else if (path.length === 1) {
								links.push(buildLink(directoryContext, [], directoryContext));
								links.push(buildLink(directoryContext, path, path[path.length-1]));
							} else {
								links.push(buildLink(directoryContext, [], directoryContext));
							}

							scope.directoryNav.pathLinks = links;
						});
					}
				};
			}]);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('focusInput', function () {
			return {
				restrict: 'A',
				scope: false,
				controller: function(){
					this.cases = {};
					this.default = function () {};
				},
				link: function (scope, element, attributes, focusInputCtrl) {
					var watchExpression = attributes.focusInput;
					scope.$watch(watchExpression, function focusInputChange(newValue) {
						var focusFunction = focusInputCtrl.cases[newValue];
						if(focusFunction !== undefined && focusFunction !== null){
							focusFunction();
						} else {
							focusInputCtrl.default();
						}
					});
				}
			};
		})
		.directive('focusInputWhen', function () {
			return {
				restrict: 'A',
				require: '^focusInput',
				scope: false,
				link: function (scope, element, attributes, focusInputCtrl) {
					var caseValue = attributes.focusInputWhen;
					focusInputCtrl.cases[caseValue] = function focusInput(){
						element[0].focus();
					};
				}
			};
		})
		.directive('focusInputDefault', function () {
			return {
				restrict: 'A',
				require: '^focusInput',
				scope: false,
				link: function (scope, element, attributes, focusInputCtrl) {
					focusInputCtrl.default = function focusInputDefault() {
						element[0].focus();
					};
				}
			};
		});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('inlineEditor', ['$window', 'KEY_CODES', function ($window, KEY_CODES) {
			return {
				restrict: 'E',
				transclude: true,
				templateUrl:  $window.DIRECTIVES_PATH + 'inlineEditor.html',

				link: function (scope, element, attributes) {
					var activeWhen = attributes.activeWhen;
					var save = attributes.save;
					var validate = attributes.validate;

					var contentElement = element[0].querySelector('span[ng-transclude]');
					var inputElement = element[0].querySelector('input');

					scope.$watch(activeWhen, function (newValue) {
						if (newValue === true) {

							if(scope.updatedValue){
								scope.updatedValue = '';
							}

							contentElement.style.display = 'none';
							inputElement.style.removeProperty('display');
							inputElement.focus();
						} else {
							inputElement.style.display = 'none';
							contentElement.style.removeProperty('display');
						}
					});

					scope.valid = true;

					scope.save = function(event){
						if(scope.valid){
							scope.$evalAsync(save);
						}
					};

					scope.saveOnEnter = function(event){
						if(event.keyCode === KEY_CODES.ENTER){
							scope.save();
						}
					};

					scope.validate = function() {
						var valid = scope.$eval(validate);
						scope.valid = valid;
					};

					scope.stopPropagation = function(event) {
						event.stopPropagation();
					};
				}
			};
		}]);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('inlineSpinner', ['$window', function ($window) {
			return {
				restrict: 'A',
				link: function(scope, element, attributes){
					var show = attributes.watchExpression,
						spinner = new $window.Spinner({
							color: '#000',
							lines: 9,
							length: 6,
							width: 4,
							radius: 5,
							zIndex: 0
						});

					scope.$watch(show, function(newValue){
						if(newValue){
							spinner.spin();
							element[0].appendChild(spinner.el);
							element[0].style.display = 'block';
						}else {
							element[0].style.display = 'none';
							spinner.stop();
						}
					});
				}
			};
		}]);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('searchDropDown', ['$window', '$location', 'KEY_CODES',
			function ($window, $location, KEY_CODES) {
			return {
				restrict: 'E',
				templateUrl: $window.DIRECTIVES_PATH + 'searchDropDown.html',
				scope: true,

				link: function (scope, element) {
					var searchDropDownEl = element.find('#searchDropDownContainer'),
						rootEl = element[0];

					if(scope.search === undefined){
						scope.search = {};
					}

					angular.extend(scope.search, {
						name: '',
						placeholder: scope.DICTIONARY.general.searchList,
						toggleResults: toggleResults,
						handleKeydown: handleKeydown
					});

					scope.dropDown = {
						show: false,
						onClickOutside: onClickOutside
					};

					function handleKeydown( event ){
						switch(event.keyCode) {
							case KEY_CODES.TAB:
								toggleResults(false);
								break;
							case KEY_CODES.ESCAPE:
								toggleResults(false);
								blurInput();
								break;
							case KEY_CODES.ENTER:
								selectFocused();
								break;
							case KEY_CODES.UP_ARROW:
								focusPrevious();
								break;
							case KEY_CODES.DOWN_ARROW:
								focusNext();
								break;
							default:
								clearItemFocus();
						}
					}

					function getResultListItems(){
						return rootEl.querySelectorAll('.dropDownListItem');
					}

					function getFocusedItem() {
						return rootEl.querySelector('.dropDownListItem.focused');
					}

					function clearItemFocus() {
						angular.element(getFocusedItem()).removeClass('focused');
					}

					function blurInput() {
						rootEl.querySelector('.searchDropDownInput').blur();
					}

					function focusInput() {
						rootEl.querySelector('.searchDropDownInput').focus();
					}

					function focusItem(element){
						angular.element(element).addClass('focused');
						var scrollEl = rootEl.querySelector('.dropDownInner');
						scrollEl.scrollTop = element.offsetTop - scrollEl.offsetTop;
					}

					function selectElement(element){
						var ngElement = angular.element(element);
						var item = ngElement.scope().item;
						ngElement.removeClass('focused');
						scope.search.selectItem(item);
						blurInput();
					}

					function selectFocused() {
						var focusedItem = getFocusedItem();
						var resultListItems = getResultListItems();
						if(focusedItem){
							selectElement(focusedItem);
						}else if(resultListItems.length > 0 ){
							selectElement(resultListItems[0]);
						}
					}

					function focusNext() {
						var listItems = getResultListItems();
						var currentItem = getFocusedItem();
						if(!currentItem){
							focusItem(listItems[0]);
						} else {
							var next = currentItem.nextElementSibling;
							angular.element(currentItem).removeClass('focused');
							if(next){
								focusItem(next);
							}else{
								focusItem(listItems[0]);
							}
						}
					}

					function focusPrevious() {
						var listItems = getResultListItems();
						var currentItem = getFocusedItem();
						var lastItem = listItems.length - 1;
						if(!currentItem){
							focusItem(listItems[lastItem]);
						} else {
							var prev = currentItem.previousElementSibling;
							angular.element(currentItem).removeClass('focused');
							if(prev){
								focusItem(prev);
							}else{
								focusItem(listItems[lastItem]);
							}
						}
					}

					function toggleResults(visible){
						scope.search.name='';
						scope.dropDown.show = visible;
						clearItemFocus();

						if(visible){
							focusInput();
						}
					}

					function onClickOutside(){
						if(scope.dropDown.show){
							scope.search.toggleResults(false);
						}
					}

					/*TODO: the following functions should be moved to top nav*/
					function shouldHide() {
						var location = $location.path();
						return location === CLIENT_DETAILS_URL ||
							location === CLIENT_LIST_URL ||
							location === CLIENT_USER_DETAILS_URL ||
							location === CLIENT_USER_LIST_URL ||
							location === CREATE_CLIENT_URL ||
							location === CREATE_CLIENT_USER_URL ||
							location === CLIENT_USER_HISTORY_URL;
					}

					function hide() {
						searchDropDownEl.css('display', 'none');
						scope.dropDown.show = false;
						scope.search.placeholder = scope.DICTIONARY.general.searchList;
					}

					function show() {
						searchDropDownEl.css('display', 'block');
					}

					function showOrHide() {
						if (shouldHide()) {
							hide();
						} else {
							show();
						}
					}

					scope.$on('userLoggedOut', hide);
					scope.$on('navToLogIn', hide);
					scope.$on('userInfoReceived', showOrHide);
					/*End section to be refactored*/

					scope.$watch('dropDown.show', function toggleDropDown(newValue) {
						if (newValue === true) {
							scope.search.fetchRemoteData();
						}
					});

					scope.$on('leftNavButtonClicked', function () {
						toggleResults(false);
					});
				}
			};
		}])
		.filter('highlight', function ($sce) {
			return function (text, phrase) {
				if (phrase) {
					text = text.replace(new RegExp('(' + phrase + ')', 'gi'),
						'<span class="highlighted">$1</span>');
				}

				return $sce.trustAsHtml(text);
			};
		});


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('footer', function ($window) {
			return {
				restrict: 'E',
				replace: 'true',
				templateUrl: $window.DIRECTIVES_PATH + 'footer.html'
			};
		});


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.controller('FooterCtrl', function ($scope) {
			$('.footer a').click(function () {
				$('#topNavLogIn').removeClass('active');
			});

			$scope.currentYear = new Date().getFullYear();
		});


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('leftNav', function ($window) {
			return {
				restrict: 'E',
				templateUrl: $window.DIRECTIVES_PATH + 'leftNav.html',
				replace: 'true'
			};
		});


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
	  .controller('LeftNavCtrl',
	  ['$scope', '$rootScope', 'LeftNavCreativeApprovals', 'Session', 'LinkBuilder', '$location', '$window',
	    function ($scope, $rootScope, LeftNavCreativeApprovals, Session, LinkBuilder, $location, $window) {
	      $scope.DIRECTORY_TYPES = $window.DIRECTORY_TYPES;

	      $scope.currentSection = 'dashboard';
	      $scope.leftNavSubOpen = false;
	      $scope.session = Session;
	      $scope.linkBuilder = LinkBuilder;

	      setSelector($location.path());

	      $scope.$on(BROADCASTS.userInfoReceived, function () {
	        document.getElementById('leftNavWrapper').style.display = 'block';
	        document.getElementById('mobileMenu').style.display = 'block';

	        $scope.showCreativeApprovals = UTILS.isNotEmpty(Session.currentCompanyId) &&
	        parseInt(Session.currentCompanyId) > 0;
	      });

	      $scope.$on(BROADCASTS.navToDashboard, function () {
	        $scope.currentSection = 'dashboard';
	      });

	      $scope.$on(BROADCASTS.navToLogIn, function () {
	        processLogOut();
	      });

	      $scope.$on('$locationChangeSuccess', function () {
	        setSelector($location.path());
	      });

	      $scope.$on(BROADCASTS.profileMenuOpen, function () {
	        $scope.leftNavSubOpen = false;
	      });

	      function processLogOut() {
	        $scope.leftNavSubOpen = false;
	        document.getElementById('leftNavWrapper').style.display = 'none';
	        document.getElementById('mobileMenu').style.display = 'none';
	      }

	      $('.iconMobileMenu').click(function () {
	        if ($scope.leftNavSubOpen) {
	          $scope.leftNavSubOpen = false;
	        } else {
	          $scope.leftNavSubOpen = true;
	        }
	      });

	      $scope.clickSelectionBarHandler = function (sectionName) {
	        if (sectionName === $scope.DICTIONARY.general.leftNavManageClients) {
	          location.hash = CLIENT_LIST_URL;
	          $scope.currentSection = 'manageclients';
	          $scope.currentSubSection = '';
	        } else if (sectionName === $scope.DICTIONARY.general.leftNavDashboard) {
	          location.hash = DASHBOARD_URL;
	          $scope.currentSection = 'dashboard';
	          $scope.currentSubSection = '';
	        } else if (sectionName === $scope.DICTIONARY.general.leftNavFiles) {
	          var browserWidth = window.innerWidth;

	          if (browserWidth > 875) {
	            location.hash = FILES_URL;
	            $scope.currentSection = 'files';
	            $scope.currentSubSection = 'documents';
	          }
	        } else if (sectionName === $scope.DICTIONARY.general.leftNavInsights) {
	          location.hash = REPORT_URL;
	          $scope.currentSection = 'insights';
	          $scope.currentSubSection = '';
	        }

	        var leftNavBroadcastData = {sectionId: sectionName};
	        $rootScope.$broadcast(BROADCASTS.leftNavButtonClicked, leftNavBroadcastData);

	        if ($scope.leftNavSubOpen) {
	          $scope.leftNavSubOpen = false;
	        }
	      };

	      function setSelector(pathOrSection) {
	        if (UTILS.startsWith(pathOrSection, CLIENT_LIST_URL) ||
	          UTILS.startsWith(pathOrSection, CREATE_CLIENT_URL) ||
	          UTILS.startsWith(pathOrSection, CLIENT_DETAILS_URL) ||
	          UTILS.startsWith(pathOrSection, CLIENT_USER_LIST_URL) ||
	          UTILS.startsWith(pathOrSection, CREATE_CLIENT_USER_URL) ||
	          UTILS.startsWith(pathOrSection, CLIENT_USER_DETAILS_URL)) {
	          $scope.currentSection = 'manageclients';
	          $scope.currentSubSection = '';
	        } else if (UTILS.startsWith(pathOrSection, DASHBOARD_URL)) {
	          $scope.currentSection = 'dashboard';
	          $scope.currentSubSection = '';
	        } else if (UTILS.startsWith(pathOrSection, FILES_URL)) {
	          $scope.currentSection = 'files';
	          if (UTILS.endsWith(pathOrSection, DIRECTORY_TYPES.documents)) {
	            $scope.currentSubSection = 'documents';
	          } else if (UTILS.endsWith(pathOrSection, DIRECTORY_TYPES.creatives)) {
	            $scope.currentSubSection = 'creatives';
	          } else if (UTILS.endsWith(pathOrSection, DIRECTORY_TYPES.matchbacks)) {
	            $scope.currentSubSection = 'matchbacks';
	          } else if (UTILS.endsWith(pathOrSection, DIRECTORY_TYPES.activity)) {
	            $scope.currentSubSection = 'activity';
	          }
	        } else if (UTILS.startsWith(pathOrSection, REPORT_URL)) {
	          $scope.currentSection = 'insights';
	          $scope.currentSubSection = '';
	        } else {
	          $scope.currentSection = '';
	          $scope.currentSubSection = '';
	        }
	      }

	      $scope.handleCreativeApprovalsClick = function () {
	        var companyId = Session.currentCompanyId;
	        if (UTILS.isNotEmpty(companyId) && companyId > 0) {
	          var companyName = Session.currentCompanyDisplayName;
	          var userName = Session.user.userName;
	          console.log('Opening Creative Approvals. companyId: ' + companyId +
	          ' companyName: ' + companyName + ' userName: ' + userName);
	          LeftNavCreativeApprovals.postToExtranet({companyId: companyId},
	            function (data) {
	              console.log('data from Extranet: ' + UTILS.getPrintout(data));
	              $scope.extranetUrl = UTILS.getExtranetPageUrl() +
	              '?userName=' + userName;
	              $('#extranetAnchor').click();
	            }, function (errorResponse) {
	              console.log('handleCreativeApprovalsClick. errorResponse: ' +
	              UTILS.getPrintout(errorResponse));
	              alert($scope.DICTIONARY.error.extranet + ' ' +
	              $scope.DICTIONARY.error.generic.tryAgain);
	            });
	        }
	        else {
	          alert('Please select a company from the dashboard dropdown');
	        }
	      };
	    }]);



/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('directives.leftNav', [])
		.factory('LeftNavCreativeApprovals', ['$resource',
			function ($resource) {
				return $resource(BACKEND_URL + EXTRANET_SERVICE + '/:companyId', {}, {
					postToExtranet: {method: 'GET', isArray: false}
				});
			}]);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('logoGroup', function ($window) {
			return {
				restrict: 'E',
				replace: 'true',
				templateUrl: $window.DIRECTIVES_PATH + 'logoGroup.html'
			};
		});


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('messageBar', ['$window', 'MessageBar', function ($window, MessageBar, Session) {
			return {
				restrict: 'E',
				replace: true,
				templateUrl: $window.DIRECTIVES_PATH + 'messageBar.html',
				link: function (scope, element) {
					scope.$watchCollection('[messageBar.message, messageBar.priority]', function (newValues) {
						if ($window.UTILS.isNotEmpty(newValues[0])) {
							element.fadeIn('fast');
						} else {
							element.css({display: ''});
						}
					});
				},
				controller: function ($scope) {
					$scope.Session = Session;
					$scope.messageBar = MessageBar;

					$scope.$on('$locationChangeStart', function () {
						$scope.messageBar.clear();
					});
				}
			};
		}]);


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by daryl on 9/4/14.
	 */
	'use strict';

	angular.module('cap')
			.directive('modalOverlay', ['ModalOverlay', function (ModalOverlay) {
				return {
					restrict: 'E',
					replace: 'true',

					template:
						'<div id="modalOverlayContainer" ng-show="modalOverlay.show">' +
						  '<div id="modalOverlay" class="modalOverlay"></div>' +
						'</div>',

					link: function(scope, element, attributes){
						var opts = {
							color: '#000'
						};

						var target = element[0].querySelector('#modalOverlay');
						var spinner = new Spinner(opts).spin();
						target.appendChild(spinner.el);

						scope.modalOverlay = ModalOverlay;
					}
				};
			}]);


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	 This directive is required to circumvent anuglar's email validation if you want to use an HTML5
	 email input with an ng-change handler.
	 Our specific case is to use this with input that does not include a domain (lack of domain assumes
	 default domain (dmedia.com);
	 */
	angular.module('cap')
		.directive('overrideEmailValidation', function(){
			return {
				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attributes, ctrl){
					function overrideEmailValidation(modelValue, viewValue){
						var value = modelValue || viewValue;
						return !ctrl.$isEmpty(value);
					}
					ctrl.$validators.email = overrideEmailValidation;
				}
			};
		});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('profileMenu', function ($window) {
			return {
				restrict: 'E',
				templateUrl: $window.DIRECTIVES_PATH + 'profileMenu.html',
				replace: 'true'
			};
		});


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.controller('ProfileMenuCtrl', function ($scope, $rootScope) {
			$scope.dropDown = {
				show: false
			};

			$scope.clickProfileMenuHandler = function () {
				if ($scope.dropDown.show) {
					$rootScope.$broadcast(BROADCASTS.profileMenuOpen);
				}
			};
		});



/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('resizeDebouncer', ['$rootScope', '$window', function($rootScope, $window){
			return {
				restrict: 'A',
				link: function(scope, element, attr){
				var onResize = function(){
					$rootScope.$broadcast(BROADCASTS.windowResized);
				}

				var debouncedResize = _.debounce(onResize, 10);
				angular.element($window).bind('resize', debouncedResize);
			}
			};
		}]);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('topNav', function ($window) {
			return {
				restrict: 'E',
				replace: 'true',
				templateUrl: $window.DIRECTIVES_PATH + 'topNav.html'
			};
		});


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.controller('TopNavCtrl', function ($scope) {
			$('#topNav').fadeIn('fast');

			$scope.$on(BROADCASTS.userInfoReceived, function () {
				$('#logInErrorMessage').css('display','none');
				$('#logInEmail, #logInPassword').css('border','1px solid #dedede');
				$('#topNavLogIn').css('display','none');
				$('#topNavLogOut').css('display','block');

				setTopNavLinkActiveDisplay();
			});

			$scope.$on(BROADCASTS.userNotAuthorized, function () {
				setDefaultDisplay();
			});

			$('.topNav a').click(function () {
				$('#topNav a').removeClass('active');
				$(this).addClass('active');
				if ($(this).attr('id') === 'topNavLogOut') {
					$('#topNav a').removeClass('active');
					$('#topNavLogIn').css('display','block').addClass('active');
					$('#topNavLogOut').css('display','none');
				}
			});

			setTopNavLinkActiveDisplay();

			function setTopNavLinkActiveDisplay() {
				var topNavElementId;
				$('#topNav a').removeClass('active').each(function () {
					topNavElementId = $('#topNav a').attr('id');
					var topNavLinkName = String($(this).attr('id')).split('topNav').join('')
						.toLowerCase();
					var pageName = String(location.hash.toLowerCase()).split('#/').join('');
					if (topNavLinkName === pageName) {
						$(this).addClass('active');
					}
				});
			}

			$scope.$on(BROADCASTS.userLoggedOut, function () {
				setDefaultDisplay();
			});

			function setDefaultDisplay() {
				$('#topNav a').removeClass('active');
				$('#topNavLogIn').css('display','block').addClass('active');
				$('#topNavLogOut').css('display','none');
			}

			$scope.$on(BROADCASTS.navToLogIn, function () {
				$('#topNav a').removeClass('active');
				$('#topNavLogIn').css('display','block').addClass('active');
				$('#topNavLogOut').css('display','none');
			});

		});


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('userName', function (Session) {
			return {
				restrict: 'E',
				replace: 'true',
				template: '<div id="userName" class="userName">{{getUserNameHerald()}}<br/>{{getUserName()}}</div>',
				link: function (scope) {
					scope.DICTIONARY = DICTIONARY;

					scope.getUserNameHerald = function(){
						return scope.DICTIONARY.general.userHello;
					};

					scope.getUserName = function(){
						var clientDisplayName = Session.clientDisplayName;
						var userDisplayName = Session.user.userDisplayName;
						var clientText = (UTILS.isNotEmpty(clientDisplayName) ?
							' (' + clientDisplayName + ')' : '');

						return userDisplayName + clientText + '!';
					};
				}
			};
		});


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('scrollTopWhen', function($document){
			return {
				restrict: 'A',
				link: function(scope, element, attr) {
					var scopeExpression = attr.scrollTopWhen;

					scope.$watch(scopeExpression, function scrollTopWhen(newValue){
						if(newValue){
							var domElement = element[0];
							scope.$evalAsync(function(){
								domElement.scrollTop = 0;
							});
						}
					});
				}
			};
		});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('cap')
		.directive('progressBar', ['$window', function($window){
			return {
				restrict: 'E',
				templateUrl: $window.DIRECTIVES_PATH + 'progressBar.html',
				link: function(scope, element, attributes){
					var progress = attributes.watchExpression;
					var displayOnComplete = attributes.displayOnComplete;

					var progressBarEl = angular.element(element[0].querySelector('.progressBar'));
					var progressContainerEl =
						angular.element(element[0].querySelector('.progressContainer'));

					scope.$watch(progress, function(newValue){
						if(newValue < 1){
							var width = (newValue * 100) + '%';
							progressBarEl.css({width: width});
						}else {
							progressContainerEl
								.removeClass('progressContainer')
								.addClass(displayOnComplete);
							progressBarEl.remove();
						}
					});
				}
			};
		}]);


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services', ['ngResource']);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services')
		.factory('DownloadLink', [function(){
			return {
				href: '',
				name: '',
				clear: function clear(){
					this.href = '';
					this.name = '';
				},
				download: function downloadFile(href, name){
					this.name = name;
					this.href = href;
				}
			};
		}]);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services')
		.factory('LinkBuilder', ['$window', '$routeParams', 'Session',
			function ($window, $routeParams, Session) {

				var linkBuilder = {
					buildCurrentCompanyPath: buildCurrentCompanyPath,
					buildContextPath: buildContextPath,
					buildContextLink: buildContextLink,
					buildFolderLink: buildFolderLink,
					isActiveDirectoryContext: isActiveDirectoryContext
				};

				// todo: consider making flexible for base urls other than 'files'
				function buildCurrentCompanyPath() {
					return $window.FILES_URL + '/' + Session.currentCompanyMatchbackName;
				}

				function buildContextPath(directoryContext) {
					if(!directoryContext){
						directoryContext = $routeParams.directoryContext || '';
					}
					return buildCurrentCompanyPath() + '/' + directoryContext;
				}

				function buildContextLink(directoryContext) {
					return '#' + buildContextPath(directoryContext);
				}

				function isActiveDirectoryContext(directoryContext) {
					return $routeParams.directoryContext === directoryContext;
				}

				function buildFolderLink(folderName) {
					var baseUrl = buildContextLink($routeParams.directoryContext) + '/',
						path = $routeParams.path;

					if (!path) {
						path = '';
					} else {
						path += '/';
					}

					return baseUrl + path + folderName;
				}

				return linkBuilder;
			}]);


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services')
		.factory('LocalStorageAdapter', ['$window', function ($window) {

			var adapter = {};

			adapter.defineLocalStorageProperty = function (obj, propertyName) {
				Object.defineProperty(obj, propertyName, {
					get: function () {
						return $window.localStorage[propertyName];
					},
					set: function (value) {

						console.log('changing localStorage [' + propertyName + '] from: ' +
							$window.localStorage[propertyName] + ' to: ' + value);

						if (value === undefined) {
							delete $window.localStorage[propertyName];
						} else {
							$window.localStorage[propertyName] = value;
						}
					},
					enumerable: true
				});

			};

			return adapter;
		}]);


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services')
		.factory('LogoutService', ['Session', 'LogoutResource', function (Session, LogoutResource) {
			function logout () {
				console.log('Logging out user: ' + Session.user.userName);

				if (Session.weHaveUserInfo()) {
					LogoutResource.logoutUserFromRequest({userName: Session.user.userName},
						function () {
							console.log('logoutUserFromRequest successful.');
						}, function (error) {
							console.warn('Error logging out.');
							console.warn(error);
						});
				}
				Session.clear();
			}

			return {
				logout: logout
			};
		}])
		.factory('LogoutResource', ['$window', '$resource', function ($window, $resource) {
			return $resource($window.BACKEND_URL + $window.LOGOUT_USER_SERVICE, {}, {
				logoutUserFromRequest: {method: 'POST', isArray: false}
			});
		}]);


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services')
		.factory('MessageBar', function(Session){
			return {
				message: '',
				priority: '',

				setMessage: function setMessage(message, priority){
					this.message = message;
					this.priority = priority || '';
				},
				warning: function warning(message){
					this.setMessage(message, 'warning');
				},
				success: function success(message){
					this.setMessage(message, 'success');
				},
				error: function error(message){
					this.setMessage(message, 'error');
				},
				clear: function clear(){
					this.message = '';
					this.priority = '';
				}
			};
		});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services')
		.factory('ModalOverlay', function(){
			return {
				show: false
			};
		});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services')
		.factory('Session', ['$window', 'User', 'LocalStorageAdapter',
			function ($window, user, localStorageAdapter) {

				var Session = {
					privateRequestedPage: undefined,
					user: user,
					messageToShow: ''
				};

				localStorageAdapter.defineLocalStorageProperty(Session, 'token');
				localStorageAdapter.defineLocalStorageProperty(Session, 'fileHash');
				localStorageAdapter.defineLocalStorageProperty(Session, 'currentCompanyId');
				localStorageAdapter.defineLocalStorageProperty(Session, 'currentCompanyMatchbackName');
				localStorageAdapter.defineLocalStorageProperty(Session, 'currentCompanyDisplayName');
				localStorageAdapter.defineLocalStorageProperty(Session, 'clientDisplayName');
				localStorageAdapter.defineLocalStorageProperty(Session, 'rememberUserName');

				Session.weHaveUserInfo = function () {
					var token = this.token;
					var userName = this.user.userName;
					return $window.UTILS.isNotEmpty(token) && $window.UTILS.isNotEmpty(userName);
				};

				Session.clear = function () {
					var userName = this.user.userName;
					var rememberUserName = this.rememberUserName;

					$window.localStorage.clear();

					if (rememberUserName === 'true') {
						this.rememberUserName = 'true';
						this.user.userName = userName;
					}
				};

				Session.clearPrivateRequestedPage = function(){
					Session.privateRequestedPage = undefined;
				};

				Session.storeUserInfo = function (userName, response) {
					this.token = response.token;
					this.fileHash = response.fileHash;

					$window.UTILS.assert($window.UTILS.isNotEmpty(userName),
						$window.MESSAGES.error.authentication.nameEmpty);
					$window.UTILS.assert($window.UTILS.isNotEmpty(response.userDisplayName),
						$window.MESSAGES.error.authentication.displayNameEmpty);

					this.user.storeUserInfo(userName, response);

					if (response.currentCompanyId !== undefined && response.currentCompanyId > 0 &&
						$window.UTILS.isNotEmpty(response.currentCompanyDisplayName)) {
						this.currentCompanyId = response.currentCompanyId;
						this.currentCompanyMatchbackName = response.currentCompanyMatchbackName;
						this.currentCompanyDisplayName = response.currentCompanyDisplayName;
					}
					if ($window.UTILS.isNotEmpty(response.clientDisplayName)) {
						this.clientDisplayName = response.clientDisplayName;
					}
				};

				Session.setCompany = function(company){
					if(this.currentCompanyMatchbackName !== company.matchbackName){
						this.currentCompanyId = company.id;
						this.currentCompanyMatchbackName = company.matchbackName;
						this.currentCompanyDisplayName = company.name;
					}
				};

				return Session;
			}]);


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services')
		.factory('Tableau', ['$window', '$q', 'Session', function ($window, $q, Session) {

			var Tableau = {
				viz: undefined,

				create: function create(element, url, options) {
					if (this.viz) {
						this.dispose();
					}
					this.viz = new $window.tableauSoftware.Viz(element, url, options);
					console.log('tableauSoftware.Viz initialized');
				},

				dispose: function dispose() {
					if (this.viz) {
						this.viz.dispose();
						this.viz = undefined;
						console.log('tableauSoftware.Viz disposed');
					}
				},

				applyCompanyFilter: function applyCompanyFilter() {
					return applyOrRemoveCompanyFilter('REPLACE');
				},

				removeCompanyFilter: function removeCompanyFilter() {
					return applyOrRemoveCompanyFilter('REMOVE');
				},

				getWorksheets: function getWorksheets() {
					var results = [];

					if(this.viz){
						var sheet = this.viz.getWorkbook().getActiveSheet();
						var worksheets = sheet.getWorksheets();
						worksheets.forEach(function(worksheet){
							var name = worksheet.getName();
							if(name.indexOf('[X]') < 0){
								results.push({name: name});
							}
						});
						console.log('Returning: ' + results.length + ' worksheets for active sheet.');
					}

					return results;
				},

				showExportCrossTabDialog: function showExportCrossTabDialog (sheetName) {
					if(this.viz){
						this.viz.showExportCrossTabDialog(sheetName);
					}
				},

				getCustomViews: function getCustomViews() {
					if (this.viz) {
						var workbook = this.viz.getWorkbook();
						return wrapPromise(workbook, workbook.getCustomViewsAsync);
					} else {
						return $q.when(undefined);
					}
				},

				showCustomView: function showCustomView(viewName) {
					if (this.viz) {
						var workbook = this.viz.getWorkbook();
						return wrapPromise(workbook, workbook.showCustomViewAsync, [viewName])
							.then(function () {
								$window.setTimeout(function () {
									return Tableau.applyCompanyFilter();
								}, 100);
							});
					} else {
						return $q.when(undefined);
					}
				},

				saveCustomView: function saveCustomView(newViewName) {
					if (this.viz) {
						return Tableau.removeCompanyFilter()
							.then(function () {
								var workbook = Tableau.viz.getWorkbook();
								return wrapPromise(workbook, workbook.rememberCustomViewAsync, [newViewName]);
							});
					} else {
						return $q.when(undefined);
					}
				},

				saveAndDeleteCustomViews: function (updatedViews, deletedViews) {
					var promises = {};
					if (this.viz) {
						updatedViews.forEach(function (customView) {
							var viewName = customView.getName();
							console.log('saving customView - ' + viewName);

							var promise = wrapPromise(customView, customView.saveAsync);
							promises[viewName] = promise;
						});

						deletedViews.forEach(function (customView) {
							var viewName = customView.getName();
							console.log('deleting customView - ' + viewName);

							var workbook = Tableau.viz.getWorkbook();
							var promise = wrapPromise(workbook, workbook.removeCustomViewAsync, [viewName]);
							promises[viewName] = promise;
						});
					}
					return $q.all(promises);
				}
			};

			function wrapPromise(target, promiseFunction, args) {
				var deferred = $q.defer();
				promiseFunction.apply(target, args)
					.then(function (result) {
						console.log('resolving tableau promise: ', result);
						deferred.resolve(result);
					})
					.otherwise(function (error) {
						console.log('rejecting tableau promise: ', error);
						deferred.reject(error);
					});
				return deferred.promise;
			}

			function applyOrRemoveCompanyFilter(operation) {
				var workSheets = [],
					currentCompanyDisplayName, activeSheet;

				if (Tableau.viz) {
					currentCompanyDisplayName = Session.currentCompanyDisplayName;
					activeSheet = Tableau.viz.getWorkbook().getActiveSheet();
					workSheets = activeSheet.getWorksheets();
					workSheets = filterWorksheetWithoutCompanyName(workSheets);
				}

				var promises = workSheets.map(function (worksheet, index) {
					console.log(operation + ' company filter for worksheet ' + index);
					return wrapPromise(worksheet, worksheet.applyFilterAsync,
						['Company Name', currentCompanyDisplayName, operation]
					);
				});

				console.log('wrapping ' + promises.length + ' promises for applyFilterAsync');
				return $q.all(promises);
			}

			function filterWorksheetWithoutCompanyName(workSheets) {
				return workSheets.filter(function(worksheet){
					var name = worksheet.getName();
					return $window.COMMON.tableau.worksheetsWithoutCompanyFilter.indexOf(name) === -1;
				});
			}

			return Tableau;
		}]);


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services')
	  .factory('User', ['$window', 'LocalStorageAdapter', function ($window, localStorageAdapter) {
			var User = {};

			localStorageAdapter.defineLocalStorageProperty(User, 'userName');
			localStorageAdapter.defineLocalStorageProperty(User, 'userDisplayName');

			localStorageAdapter.defineLocalStorageProperty(User, 'canOverrideEmailWhiteList');
			localStorageAdapter.defineLocalStorageProperty(User, 'canManageClient');
			localStorageAdapter.defineLocalStorageProperty(User, 'canManageClientUser');
			localStorageAdapter.defineLocalStorageProperty(User, 'canSeeAllClients');
			localStorageAdapter.defineLocalStorageProperty(User, 'canSeeAllClientUsers');
			localStorageAdapter.defineLocalStorageProperty(User, 'canSeeManageClientsButton');
			localStorageAdapter.defineLocalStorageProperty(User, 'canSeeMatchbackFiles');

			User.storeUserInfo = function storeUserInfo(userName, response) {
				this.userName = userName;
				this.userDisplayName = response.userDisplayName;

				if (response.canOverrideEmailWhiteList) {
					this.canOverrideEmailWhiteList = response.canOverrideEmailWhiteList;
				}
				if (response.canManageClient) {
					this.canManageClient = response.canManageClient;
				}
				if (response.canManageClientUser) {
					this.canManageClientUser = response.canManageClientUser;
				}
				if (response.canSeeAllClients) {
					this.canSeeAllClients = response.canSeeAllClients;
				}
				if (response.canSeeAllClientUsers) {
					this.canSeeAllClientUsers = response.canSeeAllClientUsers;
				}
				if (response.canSeeManageClientsButton) {
					this.canSeeManageClientsButton = response.canSeeManageClientsButton;
				}
				if (response.canSeeMatchbackFiles){
					this.canSeeMatchbackFiles = response.canSeeMatchbackFiles;
				}
			};

			User.canManageFile = function canManageFile(file){
				return $window.UTILS.isInternalUser(User.userName) ||
					   $window.UTILS.isClientUser(file.owner);
			};

			User.canManageFiles = function canManageFiles(files){
				if($window.UTILS.isInternalUser(User.userName)){
					return true;
				}

				for(var i = 0; i < files.length; i++){
					if(!User.canManageFile(files[i])){
						return false;
					}
				}
				return true;
			};

			return User;
		}]);


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	angular.module('cap')
		.constant('KEY_CODES', {
			'TAB': 9,
			'ENTER': 13,
			'ESCAPE': 27,
			'UP_ARROW': 38,
			'DOWN_ARROW': 40
		});

/***/ }
/******/ ])