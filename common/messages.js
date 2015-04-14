MESSAGES = {
	error: {
		authentication: {
			accountLockedOut: 'User account is locked out.',
			cors: {
				emptyDomainOrigin: 'The request origin is empty.',
				notInWhiteList: 'The origin is not in the whitelist or is not allowed this action.'
			},
			displayNameEmpty: 'Display name is empty.',
			emptyToken: 'Token is empty.',
			expiredToken: 'Session has expired.',
			general: 'Unable to authenticate user',
			invalidClientEmail: 'Invalid client email.',
			invalidCredentials: 'InvalidCredentialsError',
			invalidToken: 'Invalid token.',
			jwtExpired: 'jwt expired',
			ldapAddFailure: 'Failed to create user.',
			ldapBindingFailure: 'Failed to bind user.',
			lowerCase: 'Username must be all lowercase characters',
			nameEmpty: 'Username is empty.',
			passwordEmpty: 'Password is empty',
			requester: 'Requester must exist',
			tokenMissingUsername: 'Username missing from token',
			unavailable: 'Ldap server is unavailable.'
		},
		authorization: {
			cannotSeeAllClients: 'User does not have authorization to view all clients.',
			denied: 'User does not have access to requested resource.',
			link: 'User does not have access to this link.',
			nameEmpty: 'Username is missing.',
			unableToGetPermissions: 'Unable to get permissions.',
			unableToGetRole: 'Unable to get role.',
			unavailable: 'Authorization server is unavailable.'
		},
		clients: {
			blackListedDomains: 'Blacklisted domains found in client white list.',
			clientIdEmpty: 'Client id is missing.',
			exists: 'Client already exists.',
			invalidDomains: 'There are invalid domains.',
			listAll: 'Unable to get list of clients.',
			nameEmpty: 'Client name is empty.',
			nameNotFound: 'Client name not found.',
			notFound: 'Client not found.',
			unableToAdd: 'Unable to add client.',
			unableToUpdate: 'Unable to update client.',
			unknownDomain: 'Domain not found in any client whitelist.',
			whiteListEmpty: 'Email white list is empty.',
			whiteListNotFound: 'Client whitelist not found.'
		},
		clientCompanies: {
			notFound: 'No companies found.',
			unableToAssign: 'Unable to assign to a client.'
		},
		clientUsers: {
			activated: 'Unable to activate client user.',
			clientIdEmpty: 'Client id is missing.',
			clientUserIdEmpty: 'Client user id is missing.',
			clientDisplayNameEmpty: 'Client display name is missing',
			confirmationEmail: 'Cannot send the confirmation email',
			detailsEmpty: 'Client User details missing.',
			displayNameEmpty: 'client user display name is missing',
			emailEmpty: 'Email is empty.',
			exists: 'Client user already exists',
			firstNameEmpty: 'First name is missing.',
			hashEmpty: 'Hash from email link is missing.',
			invalidClientEmail: 'Invalid client email.',
			invalidId: 'Invalid client Id.',
			ldapChangeDisplayName: 'Unable to change display name for client user',
			lastNameEmpty: 'Last name is missing.',
			ldapExists: 'EntryAlreadyExistsError',
			listAll: 'Unable to get list of client users.',
			listAllEmails: 'Unable to get list of client users emails.',
			notAPendingUser: 'Cannot send an activation email to a user that is not pending.',
			notDeleted: 'Cannot undelete a user that is not deleted.',
			notFound: 'Client user not found.',
			notInWhiteList: 'Email is not in white list.',
			pendingRecordExists: 'Pending user record already exists.',
			removeFlag: 'Remove flag can not be empty: ',
			unableToAdd: 'Unable to add client user.',
			unableToAddPending: 'Unable to add pending client user data.',
			unableToDelete: 'Unable to delete client user.',
			unableToGetPending: 'Unable to get pending client user data.',
			unableToSoftDelete: 'Unable to soft delete client user.',
			unableToUndelete: 'Unable to undelete client user.',
			unableToUpdate: 'Unable to update client user.',
			unableToOverride: 'Requesting user not allowed to override domain white list.',
			updateDeleted: 'Unable to update a deleted user.',
			urlEmpty: 'Url to include in email is missing.',
			userHistoryRetrieval: 'Unable to get requested client user history.',
			userRetrieval: 'Unable to get requested client user.',
			validateAccount: 'Email provided is not an active account.'
		},
		company: {
			companyIdEmpty: 'Missing company id',
			invalidCompanyId: 'Invalid company id.'
		},
		companies: {
			delete: 'Error deleting client company relationship.',
			missingAssigned: 'There must be at least one company to assign to a user.',
			unableToDeleteAssigned: 'Unable to delete company assignments.',
			unableToGetAssigned: 'Unable to get assigned companies.',
			unableToGetUnassigned: 'Unable to get unassigned companies.',
			unableToGetCompany: 'Unable to get company.',
			userNameEmpty: 'Username is empty.',
			unableToAssign: 'Unable assign companies.'
		},
		clientUsersMatchbackTypes: {
			delete: 'Error deleting client user matchback type relationship.',
			info: 'Unable to get matchback info for client user.',
			missingAssigned: 'There must be at least one matchback type to assign to a user.',
			notFound: 'No matchback types found for this user.',
			types: 'Unable to get all matchback types.',
			unableToAssign: 'Unable to assign to client user.',
			unableToGetAssigned: 'Unable to get assigned matchback types.',
			unableToGetUnassigned: 'Unable to get unassigned matchback types.'
		},
		clientUsersReports: {
			unableToAssign: 'Unable to assign to a client user.',
			notFound: 'No reports assigned to this user.'
		},
		couchbase: {
			connection: 'Connection to couchbase server failed',
			delete: 'Error when deleting data on couchbase server.',
			get: 'Error when getting data from couchbase server.',
			invalidInfo: 'User info does not exist.',
			query: 'Error while querying view.',
			set: 'Error when setting data to couchbase server.',
			update: 'Error when updating data on couchbase server.',
			userNotFound: 'User does not exist.'
		},
		database: {
			commit: 'Error while committing transaction.',
			delete: 'Unable to delete.',
			duplicateKeyCode: '23505',
			insert: 'Unable to insert record',
			notConnected: 'Database connection failed.',
			saveHistoryRecord: 'Unable to insert file history record.',
			statement: 'Error running statement',
			sequenceNext: 'Error retrieving sequence nextval'
		},
		files: {
			chunkIdentifierEmpty: 'Chunk identifier cannot be empty.',
			complete: 'Unable to complete file upload.',
			createFolder: 'Unable to create upload folders.',
			createMetadata: 'Unable to create metadata file ',
			delete: 'Unable to delete file or folder.',
			deletePermission: 'User does not have permission to delete file.',
			directoryContextEmpty: 'Directory context must not be empty.',
			download: 'Unable to download file.',
			exists: 'File already exists.',
			existsCode: 'EEXIST',
			fileAuthorization: 'User is not authorized to manage files for selected company.',
			fileNameEmpty: 'File name is empty.',
			folderEmpty: 'Folder is empty.',
			folderNameEmpty: 'Folder name is empty.',
			hashEmpty: 'File download hash must not be empty.',
			invalidCompletedSize: 'Completed file size does not match expected file size.',
			invalidDirectoryContext: 'Directory context is invalid.',
			invalidFolder: 'Folder name is invalid.',
			invalidRequest: 'invalid request',
			invalidSize: 'File size is invalid.',
			list: 'Unable to get folder contents.',
			listEmpty: 'List of files is required.',
			matchbackNameEmpty: 'Company matchback name is empty.',
			metadata: 'Unable to get metadata for file or folder.',
			notExists: 'File does not exist.',
			notExistsCode: 'ENOENT',
			owner: 'Unable to find file owner.',
			pathEmpty: 'File path is empty.',
			permissions: 'Permissions are empty',
			renameFolder: 'Unable to rename folder.',
			upload: 'Unable to upload file.',
			validatingSize: 'Error while validating size',
			validatingZipSize: 'Error while validating total zip size.',
			zip: 'Unable to generate zip.',
			zipSize: 'Zip size is greater than allowed size.'
		},
		history: {
			files: {
				retrieval: 'Unable to get requested file history.'
			},
			changesEmpty: 'update client user request is missing changes object.',
			userInfo: 'Missing userInfo parameter',
			insertRecord: 'Unable to insert history record.'
		},
		internalUsers: {
			displayNameEmpty: 'internal user display name is missing'
		},
		invalidLink: {
			activation: 'Invalid link for activating client user.',
			inactiveAccount: 'Link is not available for an inactive client user.',
			passwordReset: 'Invalid link for resetting password.'
		},
		matchback: {
			archiveFiles: 'Unable to get archived matchback files',
			currentFiles: 'Unable to get current matchback files',
			dataDate: 'Unable to get data date',
			info: 'Unable to get matchback info.',
			invalidType: 'Invalid matchbackType.',
			missingParameters: 'Missing dataDate or matchbackType parameter.',
			dataDateFormat: 'Invalid dataDate format.',
			saveNotification: 'Unable to insert matchback record.',
			unableToGetTypes: 'Unable to get matchback types.'
		},
		notClientUser: 'User must be a client user.',
		notInternalUser: 'User must be internal.',
		passwords: {
			internalUser: 'Cannot reset password for an internal user.',
			invalidPassword: 'Password does not follow the password policy.',
			ldapChangePassword: 'Unable to change password for client user',
			unableToSendResetEmail: 'Unable to send password reset email to client user.'
		},
		passwordsResets: {
			requestExists: 'A password reset request already exists for this account.',
			unableToAddReset: 'Unable to add a password reset record in the database',
			unableToGetDeleteTransaction: 'Unable to delete password reset record.',
			unableToGet: 'Unable to get password reset record.'
		},
		reports: {
			add: 'Error adding reports to new client user.',
			delete: 'Error deleting client user report relationship.',
			emptyId: 'Report id is missing.',
			invalidId: 'Report id is invalid.',
			notFound: 'Unable to get list of available reports.'
		},
		safety: 'Request contains unsafe data.',
		sequenceCurrent: 'Error retrieving sequence nextval',
		service: 'The requested service cannot be provided, please check your request url and ' +
		'parameters.',
		tableau: {
			adminLogin: 'Unable to login as server admin to tableau.',
			api: 'Unable to connect to Tableau REST API.',
			permission: 'User does not have permission to view this report.',
			tokenRetrieval: 'Unable to get Tableau token.',
			tokenMissing: 'Tableau token is missing.',
			timeout: 'Tableau server did not respond within set timeout: ',
			unableToAdd: 'Unable to add client user to site in tableau.',
			unableToDelete: 'Unable to delete client user from site in tableau.',
			unableToGetUsers: 'Unable to get tableau user(s).',
			serverDisconnect: 'Unable to connect to server: '

		}
	},
	general: {
		userExists: 'User session information exists.'
	},
	success: {
		authentication: 'User successfully authenticated.',
		authorization: {
			permissionsRetrieved: 'Successfully retrieved permissions.',
			roleRetrieved: 'Successfully retrieved role.'
		},
		clients: {
			added: 'Client added successfully',
			listAll: 'Successfully retrieved list of clients.',
			knownDomain: 'The domain exists in a clients whitelist',
			updated: 'Client updated successfully.'
		},
		clientUsers: {
			accountActive: 'This account is currently active.',
			activated: 'User successfully activated.',
			added: 'User added successfully',
			confirmationEmailSent: 'Confirmation email sent successfully',
			deleted: 'User deleted successfully.',
			passwordChanged: 'Password successfully changed.',
			pending: 'Pending client user created successfully.',
			undeleted: 'Client user has been successfully undeleted.',
			updated: 'Client user updated successfully.'
		},
		companies: {
			added: 'Companies added successfully',
			retrieved: 'Company successfully retrieved.'
		},
		couchbase: {
			connection: 'Successfully connected to couchbase.',
			operation: 'Operation executed successfully on couchbase.'
		},
		database: {
			connected: 'Successfully connected to database.',
			insert: 'Successfully inserted record.'
		},
		files: {
			completed: 'File upload successfully completed.',
			deleted: 'Successfully deleted file or folder.',
			deletedPartialError: 'Some files could not be deleted.',
			deletedPartialPermission: 'Some files were not deleted because you do ' +
			'not have permission to delete them.',
			downloadStarted: 'Successfully started download.',
			downloadFinished: 'File downloaded successfully.',
			fileAuthorization: 'User is not authorized to manage files.',
			folderCreated: 'Successfully created folder',
			folderRenamed: 'Successfully renamed folder',
			metadata: 'Successfully created metadata file.',
			uploaded: 'Successfully uploaded file.',
			zipSize: 'Zip file will be less than max allowed.'
		},
		history: 'history record successfully inserted.',
		login: 'User successfully logged in.',
		logout: 'User successfully logged out.',
		matchback: {
			insert: 'Successfully inserted a matchback record.',
			added: 'Matchback types successfully added.'
		},
		passwords: {
			resetEmailSent: 'Password reset email sent successfully.'
		},
		passwordResets: {
			deleted: 'Password reset record successfully deleted.',
			gotDeleteTransaction: 'Got delete password reset record successfully.'
		},
		reports: {
			added: 'Reports successfully added.'
		},
		tableau: {
			added: 'User added successfully to tableau site.',
			admin: 'Tableau server admin successfully logged in',
			deleted: 'Client user successfully delete from tableau site.',
			listAll: 'Successfully retrieved users for tableau site.'
		},
		validToken: 'Successfully validated token.'
	}
};
