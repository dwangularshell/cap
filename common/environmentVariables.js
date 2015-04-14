

IS_EXECUTING_BACKEND = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

if (IS_EXECUTING_BACKEND) {
	ROOT_URL = process.cwd();
	BACKEND_PATH = ROOT_URL + '/backend';
	API_PATH = BACKEND_PATH + '/apiServer';
	DATABASE_PATH = API_PATH + '/database';
}
else {
	ROOT_URL = '/';
}

COMMON_PATH = ROOT_URL + '/common';
CONFIG_PATH = ROOT_URL + '/config';

if (IS_EXECUTING_BACKEND) {
	require(CONFIG_PATH + '/commonProperties.js');
	require(CONFIG_PATH + '/backendProperties.js');
}

if (COMMON.mode === MODE.PRODUCTION) {
	HTTP_PROTOCOL = 'https';
	BACKEND_URL = HTTP_PROTOCOL + '://' + COMMON.apiHostName;
	FRONTEND_URL = HTTP_PROTOCOL + '://' + COMMON.staticHostName;
}
else {
	HTTP_PROTOCOL = 'http';
	BACKEND_URL = HTTP_PROTOCOL + '://' + COMMON.apiHostName + ':' + COMMON.backendPort;
	FRONTEND_URL = HTTP_PROTOCOL + '://' + COMMON.staticHostName + ':' + COMMON.frontendPort;
}

//Page URLs
ABOUT_URL = '/about';
AGREEMENTS_URL = '/agreements';
CLIENT_DETAILS_URL = '/clientDetails';
CLIENT_LIST_URL = '/clientList';
CLIENT_USER_DETAILS_URL = '/clientUserDetails';
CLIENT_USER_HISTORY_URL = '/clientUserHistory';
CLIENT_USER_LIST_URL = '/clientUserList';
CREATE_CLIENT_URL = '/clientCreate';
CREATE_CLIENT_USER_URL = '/clientUserCreate';
CONTACT_URL = '/contact';
MANAGE_CLIENTS_URL = '/manageClients';
DASHBOARD_URL = '/dashboard';
FILES_URL = '/files';
FRONTEND_PUBLIC_URL = '/frontend/public';
LOGIN_URL = '/login';
PASSWORD_CHANGE_URL = '/passwordReset';
PASSWORD_RESET_EMAIL_URL = '/passwordResetEmail';
REPORT_URL = '/report';
ERROR_URL = '/error';
UNAUTHORIZED_LINK = '/unauthorizedLink';

//Project folder paths
AGREEMENTS_PATH = '/agreements';
CLIENT_DETAILS_PATH = '/clientDetails/clientDetails';
CLIENT_LIST_PATH = '/clientList/clientList';
CLIENT_USER_DETAILS_PATH = '/clientUserDetails/clientUserDetails';
CLIENT_USER_HISTORY_PATH = '/clientUserHistory/clientUserHistory';
CLIENT_USER_LIST_PATH = '/clientUserList/clientUserList';
CREATE_CLIENT_PATH = '/client/clientCreate';
CREATE_CLIENT_USER_PATH = '/clientUser/clientUserCreate';
DIRECTIVES_PATH = 'scripts/directives/';
PARTIALS_PATH = '/partials';
PARTIALS_FULL_PATH = 'scripts' + PARTIALS_PATH + '/';
FRONTEND_PAGE_PATH = 'frontend/app/scripts/partials';
PUBLIC_PATH = 'public/';
ERROR_NOT_FOUND_PATH = ERROR_URL + '/notFound';
ERROR_FORBIDDEN_PATH = ERROR_URL + '/forbidden';

//Pages served up by backend
ACTIVATE_CLIENT_USER_PAGE = '/accounts/confirm';
INVALID_LINK_PAGE = FRONTEND_PAGE_PATH + '/errorPages/invalidLinkView.html';
PASSWORD_RESET_REQUEST_PAGE = '/accounts/passwordResetRequest';

//Services
ACTIVATE_CLIENT_USER_SERVICE = '/accounts/activateClientUser';
AUTHENTICATE_USER_SERVICE = '/accounts/authenticateUser';
CLIENT_USER_SERVICE = '/accounts/clientUser';
CLIENT_USER_HISTORY_SERVICE = '/accounts/clientUserHistory';
CLIENT_USERS_HISTORY_SERVICE = '/accounts/clientUsersHistory';
CLIENT_SERVICE = '/accounts/client';
CLIENT_COMPANIES_SERVICE = '/clients/assignedCompanies';
CLIENT_USERS_LIST_SERVICE = '/accounts/clientUsersList';
CLIENT_WHITELIST_SERVICE = '/accounts/clientWhiteList';
CLIENTS_LIST_SERVICE = '/accounts/clientsList';
CREATE_CLIENT_SERVICE = '/accounts/createClient';
CREATE_CLIENT_USER_SERVICE = '/accounts/createClientUser';
EXTRANET_SERVICE = '/loadPage/extranet';
FILE_DOWNLOAD_SERVICE = '/download';
FILE_LIST_SERVICE = '/fileList';
FILE_DELETE_SERVICE = '/deleteFiles';
FILE_HISTORY_SERVICE = '/filesHistory';
FILE_UPLOAD_SERVICE = '/uploadFiles';
FOLDER_CREATE_SERVICE = '/createFolder';
FOLDER_RENAME_SERVICE = '/renameFolder';
LOGOUT_USER_SERVICE = '/accounts/logoutUser';
MATCHBACK_FILES_SERVICE = '/matchback/files';
MATCHBACK_LIST_SERVICE = '/matchback/typeList';
MATCHBACK_NOTIFICATION_SERVICE = '/matchback/notify';
PASSWORD_CHANGE_SERVICE = '/accounts/passwordChange';
PASSWORD_RESET_EMAIL_SERVICE = '/accounts/passwordResetEmail';
REPORTS_LIST_SERVICE = '/reports/reportList';
RESEND_ACTIVATION_EMAIL_SERVICE = '/accounts/activationEmail';
SOFT_DELETE_CLIENT_USER_SERVICE = '/accounts/deleteClientUser';
TABLEAU_REPORT_SERVICE = '/tableauAuthentication';
TABLEAU_TOKEN_PROXY_SERVICE = '/tableauTokenFromProxy';
TOKEN_VALIDATION_SERVICE = '/accounts/validate';
UNASSIGNED_COMPANIES_SERVICE = '/accounts/unassignedCompanies';
UNDELETE_CLIENT_USER_SERVICE = '/accounts/undeleteClientUser';
UPDATE_CLIENT_SERVICE = '/accounts/updateClient';
UPDATE_CLIENT_USER_SERVICE = '/accounts/updateClientUser';
USER_COMPANIES_SERVICE = '/accounts/assignedCompanies';
USERS_REPORTS_SERVICE = '/reports/userReports';

//testing paths/urls
TEST_PATH = ROOT_URL + '/test';
API_SERVER_TEST_PAGE_URL = FRONTEND_PUBLIC_URL + '/apiServerTest.html';
CLIENT_SERVER_TEST_PAGE_URL = '/#/about';
CLIENT_SERVER_TEST_LOGIN_URL = '/#/login';
CLIENT_TESTS_PATH = TEST_PATH + '/client';
CONFIGURATION_TESTS_PATH = TEST_PATH + '/configuration';
INTEGRATION_TESTS_PATH = TEST_PATH + '/integration';
SERVER_TESTS_PATH = TEST_PATH + '/server';
SERVICE_TESTS_PATH = TEST_PATH + '/service';
UNIT_TESTS_PATH = TEST_PATH + '/unit';

//variables
MATCHBACK_TYPES = {
	acquisition: 'acquisition',
	crm: 'crm'
};

DIRECTORY_TYPES = {
	activity: 'activity',
	creatives: 'creatives',
	documents: 'documents',
	matchbacks: 'matchbacks',
	zipped: 'zipped'
};
FILE_TYPES = {
	file: 'file',
	folder: 'folder'
};
FILE_HISTORY_ACTIONS = {
	createFolder: 'created folder',
	deleteFile: 'deleted file',
	deleteFolder: 'deleted folder',
	deleteFilesOrFolders: 'deleted files or folders',
	downloadFiles: 'downloaded files',
	renameFolder: 'renamed folder',
	uploadFiles: 'uploaded files'
};
