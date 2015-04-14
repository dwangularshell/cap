DICTIONARY = {
  account: {
    resetPassword: 'RESET PASSWORD',
    confirmPassword: 'Confirm Password:',
    password: 'Password:'
  },
  agreement: {
    acceptAgreement: 'I accept.',
    signOut: 'Sign Out',
    termsAcceptance: 'Please read and accept our Terms and Conditions to continue.',
    termsUpdatedAcceptance: 'We\'ve made a few updates to our Terms and Conditions. Please read and accept to continue.'
  },
  button: {
    add: 'ADD',
    approve: 'APPROVE',
    cancel: 'Cancel',
    close: 'CLOSE',
    companies: 'COMPANIES',
    confirm: 'YES',
    continue: 'CONTINUE',
    createClient: 'CREATE CLIENT',
    createUser: 'CREATE USER',
    download: 'DOWNLOAD',
    editProfile: 'EDIT PROFILE',
    logIn: 'SIGN IN',
    no: 'NO',
    pdf: 'PDF',
    reports: 'REPORTS',
    save: 'SAVE',
    saveChanges: 'SAVE CHANGES',
    submit: 'SUBMIT',
    upload: 'UPLOAD',
    uploadFiles: 'UPLOAD FILES'
  },
  client: {
    assignedCompanies: 'Assigned Companies',
    clientDetails: 'Client Details',
    createNew: 'CREATE NEW CLIENT',
    edit: 'EDIT',
    editCaps: 'EDIT CLIENT',
    editClientDetails: 'EDIT CLIENT DETAILS',
    editEmailDomainDetails: 'EDIT EMAIL WHITELIST DOMAINS',
    emailWhitelist: 'Email Whitelist Domains',
    emailWhitelistCaps: 'EMAIL WHITELIST DOMAINS',
    history: 'CLIENT HISTORY',
    name: 'Client Name',
    nameCaps: 'CLIENT NAME',
    profile: 'CLIENT PROFILE',
    requiredField: '* Required field',
    view: 'VIEW',
    viewCaps: 'VIEW CLIENT'
  },
  clientCompanies: {
    assignedCompanies: 'Assigned Companies:',
    selectCompanies: 'Select companies from below:'
  },
  clientUser: {
    accountAdmin: 'Account Admin',
    accountStatus: 'Account Status',
    actionCaps: 'ACTION',
    active: 'ACTIVE',
    adminCaps: 'ADMIN',
    adminUserCaps: 'ADMIN USER',
    assignedCompanies: 'Assigned Companies',
    assignedMatchbacks: 'Matchback Files',
    assignedReports: 'Assigned Reports',
    assignments: 'Assignments:',
    clientUserActivateAccount: 'ACTIVATE ACCOUNT',
    city: 'City',
    cityCaps: 'CITY',
    client: 'Client',
    clientAdmin: 'Client Admin:',
    clientUserCaps: 'CLIENT USER',
    confirmPassword: 'Confirm Password:',
    createCaps: 'CREATE CLIENT USER',
    createNew: 'CREATE NEW CLIENT USER',
    currentStatus: 'Current Status',
    dateCaps: 'DATE',
    delete: 'DELETE',
    deleted: 'DELETED',
    detailsCaps: 'DETAILS',
    disabled: 'DISABLED',
    edit: 'EDIT',
    editAccountStatus: 'EDIT ACCOUNT STATUS',
    editAssignedCompanies: 'EDIT ASSIGNED COMPANIES',
    editAssignedMatchbacks: 'EDIT ASSIGNED MATCHBACKS',
    editAssignedReports: 'EDIT ASSIGNED REPORTS',
    editCaps: 'EDIT CLIENT USER',
    editUserDetails: 'EDIT USER DETAILS',
    emailAddress: 'Email Address',
    emailAddressCaps: 'EMAIL ADDRESS',
    firstName: 'First Name',
    firstNameCaps: 'FIRST NAME',
    history: 'CLIENT USER HISTORY',
    histories: 'CLIENT USERS HISTORY',
    lastLoginCaps: 'LAST LOGIN',
    lastName: 'Last Name',
    lastNameCaps: 'LAST NAME',
    loginCountCaps: 'LOGINS',
    mobile: 'mobile',
    mobilePhone: 'Mobile Phone',
    mobilePhoneCaps: 'MOBILE PHONE',
    no: 'No',
    password: 'Password:',
    pending: 'PENDING',
    profile: 'CLIENT USER PROFILE',
    requiredField: '* Required field',
    resendEmail: 'RESEND ACTIVATION EMAIL',
    showDeleted: 'Show deleted users',
    title: 'Title',
    titleCaps: 'TITLE',
    undelete: 'UNDELETE',
    universalUserGroup: 'Universal User Groups:',
    userDetails: 'User Details',
    userGroup: 'Client User Groups:',
    userStatusCaps: 'STATUS',
    view: 'VIEW',
    viewCaps: 'VIEW CLIENT USER',
    work: 'work',
    workPhone: 'Work Phone',
    workPhoneCaps: 'WORK PHONE',
    yes: 'Yes'
  },
  clientsUserReports: {
    assigned: 'Assigned Reports:',
    select: 'Select reports from below:'
  },
  companies: {
    company: 'Company',
    companies: 'Companies',
    currentSelected: 'company(s) currently selected'
  },
  dashboard: {
    splashHeading: 'WE\'RE WORKING ON SOMETHING EXCITING.',
    splashCopyHeading: 'Dashboard is the quickest way to get a pulse on your running campaigns.',
    splashCopyBullet1: 'Easy access to key metrics for running campaigns',
    splashCopyBullet2: 'Quickly access depth of client integration (site tagging, data file, first party cookies, etc.)'
  },
  error: {
    account: {
      invalidLinkMessage: 'This link is no longer valid. Please submit a new request to ' +
      'try again. Otherwise please contact your Account Manager.',
      invalidPasswordLength: 'Your password must be at least 8 characters.',
      noSpacesAllowed: 'Your password cannot contain any spaces.',
      passwordsDoNotMatch: 'Your passwords must match.'
    },
    authentication: {
      clientLockedOut: 'Your user name and/or password were not recognized. There have' +
      ' been too many failed attempts to log in. This account is now locked. Please' +
      ' contact your account representative for assistance.',
      clientNotFound: 'The credentials you entered did not match our records. Please log' +
      ' in again.',
      expiredToken: 'Your session has expired. Please log in again.',
      internalLockedOut: 'There have been too many failed attempts to log in. This account' +
      ' is now locked. Contact help desk.',
      invalidClientEmail: 'Please enter a valid email address.',
      invalidCredentials: 'Your user name and/or password were not recognized. Please try' +
      ' again. (Be careful, too many failed attempts will lock out your account.)',
      unavailable: 'The authentication service is currently unavailable.',
      unexpected: 'Unexpected server error. Please try again. If the problem persists, ' +
      'please contact your representative.'
    },
    authorization: {
      denied: 'Looks like you do not have access to this page. Please ask your d' +
      'contact if you need access to something there.'
    },
    client: {
      blackListedDomains: 'Blacklisted domains found in client white list: ',
      exists: 'Client already exists.',
      clientIdEmpty: 'Client id is empty.',
      clientNameEmpty: 'Client name is empty.',
      domainErrorActionMessage: ' Please remove or correct before submitting again.',
      emailWhiteListError1stPart: 'The following domain(s) you entered represent free email' +
      ' or ISP services: ',
      emailWhiteListError2ndPart: 'We only enable whitelisting of domains associated with' +
      ' company-issued email accounts. Any users created for this client with a' +
      ' non-whitelisted domain will be flagged for confirmation.',
      invalidDomains: 'There are invalid domains present: ',
      listAll: 'Unable to get list of clients. There may not be any clients ' +
      ' in the system. Click the link above to add a client.',
      retrievalError: 'Unable to retrieve the details for the client selected. Please try again.',
      unableToAdd: 'We were unable to add client.',
      unableToUpdate: 'We were unable to update the client.',
      whiteListEmpty: 'Email white list is empty.'
    },
    clientCompanies: {
      retrieval: 'Unable to get list of available companies.'
    },
    clientUser: {
      alreadyActivated: 'This account is already active.',
      approveNewEmailDomain: 'Email domain does not match whitelist for this client. Okay to' +
      ' add anyway?',
      clientIdEmpty: 'Client id is missing.',
      clientUserIdEmpty: 'Client user id is missing.',
      confirmSoftDelete: 'Are you sure you want to delete this account?',
      deleted: 'There was an error deleting this account. Please contact your admin.',
      emailEmpty: 'Email is empty.',
      exists: 'Client user already exists.',
      firstNameEmpty: 'First name is missing.',
      invalidClientEmail: 'Invalid client email.',
      invalidEmailAddress: 'Please enter a valid email address.',
      invalidLinkMessage: 'Your link is no longer valid. Please contact your Account Manager.',
      invalidPasswordLength: 'Your password must be at least 8 characters.',
      invalidPhoneNumber: 'You have entered an invalid phone number.',
      lastNameEmpty: 'Last name is missing.',
      listAll: 'Unable to get list of client users. There may not be any users ' +
      ' associated with this client. Click the link above to add a user.',
      notInWhiteList: 'Email is not in white list.',
      passwordsDoNotMatch: 'Your passwords must match.',
      retrievalError: 'Unable to retrieve the details for the client user selected. Please try again.',
      unableToActivate: 'We were unable to complete your activation. Please contact your Account' +
      ' Manager.',
      unableToAdd: 'We were unable to add the client user. ' +
      'Please contact your Account Manager.',
      unableToSendEmail: 'There was an issue sending the activation email. Please try ' +
      'again later.',
      undelete: 'We were unable to undelete the user',
      unableToOverride: 'You are not allowed to override the email address for a user.',
      unableToUndelete: 'We were unable to undelete a user that is not currently deleted.',
      unableToUpdate: 'We were unable to update the client user. ' +
      'Please contact your Account Manager.',
      unableToUpdateDeleted: 'We were unable to update a deleted client user.',
      userNeedsCompany: 'This user needs a company assigned. Please select one before any other update.'
    },
    clientsUserReports: {
      retrievalError: 'Unable to get list of available reports.'
    },
    extranet: 'Unable to open Creative Approval at this time.',
    files: {
      activity: 'Unable to load file activity.',
      deleteGeneric: ' could not be deleted.',
      deletePermission: ' could not be deleted due to insufficient permissions.',
      download: 'Unable to download the files. Please contact your admin.',
      exists: 'File already exists. Please delete or rename and try again.',
      fileUploadError: 'Error',
      folderEmpty: 'You cannot download an empty folder.',
      folderNameRequired: 'Folder name is required.',
      invalidFolderName: 'Invalid folder name: only letters and numbers are allowed.',
      invalidFolderNameLength: 'Folder names must be 100 characters or less.',
      list: 'Unable to load folder contents.',
      multiFileZipSize: 'Multi-file downloads not supported for combined size greater than ' +
      '1GB. Please download individually.',
      noValidCompany: 'Error: No valid company is selected. Please check your company' +
      ' selection, and contact your representative if this persists.',
      uploadError: 'Unable to upload files, please try again. ' +
      'If the problem persists please contact your Account Manager.',
      unableToCreateFolder: 'Unable to create folder, please try again. ' +
      'If the problem persists please contact your Account Manager.',
      unableToLoadMatchbacks: 'Unable to load matchback file data, please try again. ' +
      'If the problem persists please contact your Account Manager.',
      unableToRenameFolder: 'Unable to rename folder, please try again. ' +
      'If the problem persists please contact your Account Manager'
    },
    generic: {
      server: 'An unexpected server error happened.',
      tryAgain: 'Please try again. If this error persists, please contact your Account Manager ' +
      'for assistance.'
    },
    history: {
      clientUser: 'Could not retrieve client user history records.'
    },
    report: {
      cannotGetCustomViews: 'Unable to load custom views.',
      cannotSaveCustomView: 'Unable to save custom view.',
      cannotShowCustomView: 'Unable to load custom view.',
      cannotUpdateCustomViews: 'Unable to update custom views.',
      companyReportNotFound: 'This report is not available for: ',
      noPermissionForTableauPart1: 'Your account is currently not enabled to view the ',
      noPermissionForTableauPart2: ' report. Please contact your account representative for' +
      ' more information.',
      noReportsAvailable: 'Your current configuration does not include access to any Insights' +
      ' reports.\nPlease contact your representative to discuss.',
      noValidCompany: 'Error: No valid company is selected. Please check your company' +
      ' selection, and contact your representative if this persists.',
      retrievalError: 'Unable to retrieve the details for the client selected. Please try again.',
      tableauPermissionErrorPart1: 'Error: Your account is configured to access the ',
      tableauPermissionErrorPart2: ' report, but the report is not properly recognizing you.' +
      ' Please contact your account representative for more information.',
      tableauTimeOutError: 'Error: An attempt to establish a session with the reporting' +
      ' server has timed out. Please try again. If this error persists, please contact' +
      ' your representative for assistance.',
      tableauTokenMissing: 'There was an error retrieving the report you requested.' +
      ' Please try again.'
    },
    safety: 'Please check the data entered.'
  },
  files: {
    actionHeading: 'ACTION',
    activity: 'Activity',
    createFolder: 'Create Folder',
    creativeAssets: 'Creative Assets',
    date: 'DATE',
    deleteConfirmationPrefix: 'Are you sure you want to permanently delete these ',
    deleteConfirmationSuffix: ' files?',
    deleteConfirmationSingle: 'Are you sure you want to permanently delete this file?',
    deleteFiles: 'Delete',
    detailsHeading: 'DETAILS',
    directoryTypeHeading: 'DIRECTORY',
    documents: 'Documents',
    downloadFiles: 'Download',
    emptyFolder: 'This folder is empty.',
    emptyLogs: 'No file activity logs available.',
    fileCreatedDateHeading: 'CREATED',
    fileDetails: 'FILE DETAILS',
    filePathHeading: 'PATH',
    fileNameHeading: 'FILE NAME',
    fileSize: 'Size',
    filesSelected: 'Files Selected',
    fileType: 'Type',
    fileTypeHeading: 'TYPE',
    fileUserHeading: 'USER',
    fileSizeHeading: 'FILE SIZE',
    matchbackFiles: 'Matchback Files',
    matchbackHeader1: 'Matchback files provide details on the messaged customer IDs we have ' +
    'associated with conversions. Depending on the programs you are running, you may ' +
    'have access to one or more different types of matchbacks.',
    matchbackHeader2: 'Select "Download" to access the most recently updated set of files.',
    matchbackHeader3: 'Any historical files may be found below in the archive section.',
    matchbackNoCurrentData: 'No current data file available.',
    showUpload: 'Upload',
    splashHeading: 'FILE SHARING MADE SIMPLE.',
    splashCopyHeading: 'Quickly transfer matchback files, documents and creative assets.',
    splashCopyBullet1: 'Download and upload multiple files at once',
    splashCopyBullet2: 'Easily view and organize files',
    renameFolder: 'Rename Folder',
    uploadBrowse: 'browse your computer.',
    uploadDrag: 'To upload files, drag and drop here or',
    viewArchive: 'View Archive'
  },
  footer: {
    privacyPolicy: 'Privacy Policy',
    termsOfUse: 'Terms of Use'
  },
  general: {
    copyright: 'd, Inc. All rights reserved.',
    forbidden: 'Unauthorized',
    forbiddenMessage: 'You do not have permission to access this page.',
    headerBarAppName: 'Client Access Portal',
    invalidLink: 'Invalid Link',
    leftNavDashboard: 'Dashboard',
    leftNavInsights: 'Insights',
    leftNavFiles: 'Files',
    leftNavCreativeApprovals: 'Creative Approvals',
    leftNavPromoBuilder: 'Promo Builder',
    leftNavManageClients: 'Manage Clients',
    mainEmail: 'Email:',
    mainNeedAnAccount: 'Need an account?',
    mainPassword: 'Password:',
    mainRegisterHere: 'Register here.',
    mainRememberMe: 'Remember me on this device.',
    mainSignIntoYourAccount: 'Sign in to your account:',
    messageBarSampleCopy: 'Recorded Webinar Now Available: Personalized Marketing - The ' +
    'Next Wave for Retailers with Guest Speaker Sucharita Mulpuru of Forrester Research, ' +
    'Inc.',
    operationError: 'Operation error.',
    pageNotFound: 'Page not found.',
    pageNotFoundMessage: 'Please verify the page you requested and try again.',
    profileMenuImpersonateUser: 'Impersonate User',
    profileMenuSettings: 'Settings',
    profileMenuSignOut: 'Sign Out',
    registerClientCreateNewClient: 'Create New Client',
    registerClientRequiredField: '* Required field',
    registerClientClientName: '*Client Name:',
    registerClientAccountRep: '*Account Rep:',
    registerClientAnalyst: 'Analyst:',
    registerClientArtDirector: 'Art Director:',
    registerClientCIE: 'CIE:',
    registerClientEmailWhitelist: '*Email Whitelist Domains:',
    registerClientUniversalGroups: 'Universal Group Assignments:',
    registerClientSubmit: 'SUBMIT',
    searchList: 'Search list...',
    thePowerOfPersonal: 'The power of personal.',
    topNavAboutUs: 'About Us',
    topNavContactUs: 'Contact Us',
    topNavDashboard: 'Dashboard',
    topNavLogIn: 'Sign In',
    userExists: 'User session information exists.',
    userHello: 'Hello',
    youreViewing: 'You\'re viewing:',
    loading: 'Loading...'
  },
  matchbacks: {
    matchback: 'matchback',
    matchbacks: 'Matchbacks',
    currentSelected: 'matchback(s) currently selected'
  },
  passwordReset: {
    forgotPassword: 'Forgot password?',
    header: 'Reset Password',
    instructions: 'Please enter your email address',
    requestSubmissionSuccess: ' , we just sent you a message. ' +
    'Please check your email to continue the password reset process.',
    internalUserError: 'Hello colleague! Only client account passwords can be reset here. ' +
    'Please contact internal support to reset your password.',
    unknownUserError: 'We don\'t seem to have this account in the system. ' +
    'Please double check the account you entered. ' +
    'Otherwise you can contact your account manager.',
    noAccountManager: 'If you don\'t have an account manager, please contact us at '
  },
  reports: {
    currentSelected: 'report(s) currently selected',
    customViewInputPlaceholder: 'Name your current view',
    customViewMenuLink: 'My Views for This Report',
    deleteView: 'Delete view',
    manageViews: 'Manage Views',
    manageViewsFor: 'Manage Views for ',
    myCustomViews: 'My Custom Views:',
    noCustomViews: 'You have no saved views for this report.',
    notAvailable: 'Not Available',
    renameOrDeleteViews: 'Rename or delete your views',
    reports: 'Reports',
    selectReport: 'Select Report:',
    updated: 'Updated'

  },
  success: {
    client: {
      added: 'Client added successfully.',
      updated: 'Client updated successfully.'
    },
    clientUser: {
      activationComplete: 'Your account is ready to use. Please log in.',
      activationComplete2: 'https://access.dmedia.com',
      addedEmailIssue: 'Account successfully created, but there was an issue sending the ' +
      'activation email. Please try resending from the user\'s profile.',
      activationTableau: 'Your account was successfully activated. However, there was a' +
      ' problem that may impact your ability to access Insights reports. Please contact' +
      ' your representative.',
      addedPart1: 'SUCCESS! ',
      addedPart2: ' will soon receive an email informing them of their new account.',
      activationEmailSent: 'The activation email was sent successfully.',
      deleted: 'This account was successfully deleted.',
      passwordChanged1: 'Your password has been successfully changed. Please log in to ',
      passwordChanged2: 'https://access.dmedia.com',
      undeleted: 'Account successfully restored and is ready for reconfiguration.',
      updated: 'Client user updated successfully.'
    },
    files: {
      deleted: ' successfully deleted.'
    }
  }
};
