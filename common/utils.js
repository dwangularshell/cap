
// we cannot use @ in LDAP, so we define our unlikely sequence for the conversion
// using the available dots and underscores
var AT_CHAR = '_cap_at_cap_';
var dMediaDotCom = 'dmedia.com';
var extranetPostFix = '@dtmextranet.corp.valueclick.com';

var arraySortAscending = function (property) {
	return function (a, b) {
		if (a[property].toLowerCase() < b[property].toLowerCase())
			return -1;
		if (a[property].toLowerCase() > b[property].toLowerCase())
			return 1;
		return 0;
	};
};

var arraySortDescending = function (property) {
	return function (a, b) {
		if (b[property].toLowerCase() < a[property].toLowerCase())
			return -1;
		if (b[property].toLowerCase() > a[property].toLowerCase())
			return 1;
		return 0;
	};
};

//this is for frontend's sake since javascript does not have assertions per se
var assert = function (condition, message) {
	if (!condition) {
		throw new Error(message);
	}
};

var assertEqual = function (string, expected) {
	assert(string === expected, '\n  actual: ' + string + '\nexpected: ' + expected);
};

var assertStartsWith = function (string, expected) {
	var actual = string.substring(0, expected.length);
	assert(actual === expected, '\n  actual: ' + actual + '\nexpected: ' + expected);
};

var capitaliseFirstLetter = function (string) {
	if (isEmpty(string)) {
		return string;
	}
	return string.charAt(0).toUpperCase() + string.slice(1);
};

var hasClass = function (element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
};

var hasNoValue = function (string) {
	return typeof(string) === 'undefined' || string === null || string.length === 0;
};

var hasValue = function (string) {
	return !hasNoValue(string);
};

var isEmptyStringifiedObject = function (object) {
	return object === undefined || object === null || object === '{}' || object === {} ||
		object === [] || object === '[]';
};

var isNotEmptyStringifiedObject = function (object) {
	return !isEmptyStringifiedObject(object);
};

var isEmptyObject = function (object) {
	return isObject(object) && Object.keys(object).length <= 0;
};

var isNotEmptyObject = function (object) {
	return !isEmptyObject(object);
};

var isEmpty = function (string) {
	return string === undefined || typeof(string) !== 'string' || string === null ||
		string.trim().length === 0;
};

var isNotEmpty = function (string) {
	return !isEmpty(string);
};

var endsWith = function endsWith(string, endString) {
	return hasValue(string) && hasValue(endString) &&
		string.indexOf(endString, string.length - endString.length) !== -1;
};

var startsWith = function (string, startString) {
	return hasValue(string) && hasValue(startString) && string.indexOf(startString) === 0;
};

var getHash = function (token) {
	var crypto = require('crypto');
	LOGGER.extra('Generating hash based on token: ' + token);
	var text = 'de196.KE8ldV' + UTILS.getRandomNumberBetween1andMax(100000) + token +
		UTILS.getRandomNumberBetween1andMax(100000) + '34.KwieG9js0';
	var hmacHash = crypto.createHmac('md5', BACKEND.secret).update(text).digest('hex');
	LOGGER.debug('Generated hash: ' + hmacHash);
	return hmacHash;
};

var generateEmailUrl = function (path, hash) {
	LOGGER.debug('generating URL with path: ' + path + ' hash: ' + hash);
	//example url:	//http://access.dmedia.com:9000/#/<path>/<hash>
	return FRONTEND_URL + '/#' + path + '/' + hash;
};

var getObjectProperties = function (object) {
	return getObjectPropertiesRecursive(object, 5);
};

var getObjectPropertiesRecursive = function (object, depth) {
//	console.log('depth: ' + depth);
	var separator = ', ';
	var properties = '';

	if (object === undefined || object === null) {
		properties = '';
	}
	else if (isObject(object)) {
		for (var name in object) {
//			console.log('name: ' + name);
			if (object.hasOwnProperty(name)) {
				if (isObject(object[name])) {
					if (depth > 0) {
						properties += name + ': ' + getObjectPropertiesRecursive(object[name],
							--depth) + separator;
					}
					else {
						properties += name + ': ' + typeof object[name] + separator;
					}
				}
				else {
					properties += name + ': ' + object[name] + separator;
				}
			}
		}
	}
	else {
		properties = object;
	}

	if (endsWith(properties, separator)) {
		properties = properties.substring(0, properties.length - separator.length);
	}

	properties = '{' + properties + '}';
//	console.log('getObjectProperties: ' + properties);
	return properties;
};

var getSafePrintout = function (element) {
	//todo go through the element, find password hasOwnProperties, change the values,
	// run obscure password as final check
	return obscurePassword(getPrintout(element));
};

var obscurePassword = function (string) {
	if (isEmpty(string)) {
		return string;
	}
	var startPosition = string.toLowerCase().indexOf('password');
	if (!isNatural(startPosition)) {
		return string;
	}
	var password = string.substring(startPosition, startPosition + 24)
	var newString = safeReplaceAll(string, password, 'passworzXXXXXXXXXXXXXXXXXXXXXXXX');
//	var divider = string.charAt(startPosition);
//	var endPosition = string.indexOf(divider, startPosition);
//	var password = string.substring(startPosition, endPosition)
//	var string = replaceAll(string, password, 'xxx');
	if (containsCaseInsensitive(newString, 'password')) {
		return obscurePassword(newString);
	}
	else {
		return newString;
	}
};

var getPrintout = function (element) {
	if (isObject(element)) {
		if (Array.isArray(element)) {
			if (element.length === 0) {
				return '';
			}
			else {
				return element.map(function (el) {
					return getPrintout(el)
				}).join();
			}
		}
		else {
			var stringified;
			try {
				stringified = JSON.stringify(element);
				if (stringified !== 'null' && UTILS.isNotEmptyStringifiedObject(stringified)) {
					return stringified;
				}
				else {

					if (stringified !== '{}' && UTILS.isNotEmptyStringifiedObject(element) ||
						element.toString() !== ({}).toString()) {
						stringified = '[' + element.toString() + ']';
					}
					else {
						return '';
					}
					if (UTILS.isNotEmpty(stringified)) {
						return stringified;
					}
					return '';
				}
			}
			catch (err) {
				stringified = '[' + getObjectProperties(element) + ']';
				return stringified;
			}
		}
	}

	if (element) {
		var asString = element.toString();
		if (isNotEmpty(asString)) {
			return asString;
		}
	}
	return element;
};

var getRearrangedDisplayName = function (displayName) {
	if (contains(displayName, ', ')) {
		var names = displayName.split(', ');
		return names[1].trim() + ' ' + names[0].trim();
	}
	return displayName;
};

var getRandomNumberBetween1andMax = function (maxValue) {
	return Math.floor((Math.random() * maxValue) + 1);
};

// ..., -2, -1, 0, 1, 2, 3...
var isInteger = function (object) {
	return isNumber(object) && object % 1 === 0;
};

// 0, 1, 2, 3...
var isNatural = function (object) {
	return isInteger(object) && object >= 0;
};

var isNumber = function (object) {
	return typeof object === 'number' && !isNaN(object);
};

var isObject = function (object) {
	return object !== null && object !== undefined && typeof object === 'object';
};

var isOnlyDigits = function (numberOrString) {
	return /^[0-9]+$/.test(numberOrString);
};

// 1, 2, 3...
var isPositive = function (object) {
	return isInteger(object) && object > 0;
};

var isString = function (object) {
	return typeof object === 'string';
};

var isValidDirectoryContext = function (directoryContext) {
	return isNotEmpty(directoryContext) && DIRECTORY_TYPES[directoryContext] === directoryContext;
};

var isDevMode = function () {
	return COMMON.mode === MODE.DEVELOPMENT;
};

var isProductionMode = function () {
	return COMMON.mode === MODE.PRODUCTION;
};

var isStagingProductionMode = function () {
	return isProductionMode() && COMMON.staging === true;
};

var isLowerCase = function (string) {
	return isNotEmpty(string) && string === string.toLowerCase();
};

var isMetadata = function (fileName) {
	var metadata = UTILS.endsWith(fileName, BACKEND.files.fileMetadataExtension) ||
		UTILS.endsWith(fileName, BACKEND.files.folderMetadataExtension);
	LOGGER.verbose('File: ' + fileName + ' is ' + (metadata ? '' : 'not') + ' a metadata file');
	return metadata;
};

var isValidDate = function (year, month, day) {
	if (!isInteger(year) || year.toString().length !== 4 || year < 2000) {
		return false;
	}
	if (!isInteger(month) || month.toString().length < 1 || month.toString().length > 2) {
		return false;
	}
	if (!isInteger(day) || day.toString().length < 1 || day.toString().length > 2) {
		return false;
	}
	try {
		month = month - 1; //javascript date month is 0-11
		var date = new Date(year, month, day);
		if (Object.prototype.toString.call(date) !== '[object Date]') {
			return false;
		}
		if (day !== date.getDate() || month !== date.getMonth() || year !== date.getFullYear()) {
			return false;
		}
		return !isNaN(date.getTime());
	}
	catch (err) {
		return false;
	}
}

var arrayContains = function (array, element) {
	return (array.indexOf(element) > -1);
};

var arrayContainsAllElements = function (mainArray, subArray) {
	var containsAllElements = true;
	subArray.forEach(function (element) {
		if (mainArray.indexOf(element.toString()) === -1) {
			LOGGER.extra('array element not found: ' + element);
			containsAllElements = false;
		}
	});
	return containsAllElements;
};

var contains = function (string, subString) {
	return isNotEmpty(string) && isNotEmpty(subString) && string.indexOf(subString) >= 0;
};

var containsCaseInsensitive = function (string, subString) {
	return isNotEmpty(string) && isNotEmpty(subString) &&
		string.toLowerCase().indexOf(subString.toLowerCase()) >= 0;
};

var containsAny = function () {
	var string = arguments[0];
	if (isEmpty(string)) {
		return false;
	}
	for (var i = 1; i < arguments.length; i++) {
		if (contains(string, arguments[i])) {
			return true;
		}
	}
	return false;
};

var containsAll = function () {
	var string = arguments[0];
	if (isEmpty(string)) {
		return false;
	}
	for (var i = 1; i < arguments.length; i++) {
		if (!contains(string, arguments[i])) {
			return false;
		}
	}
	return true;
};

var containsAt = function (string) {
	return contains(string, '@') || contains(string, AT_CHAR);
};

var containsWhitespaces = function (string) {
	return isString(string) && /\s/.test(string);
};

var endsWithAtdmediaDotCom = function (string) {
	return endsWith(string, '@' + dMediaDotCom) ||
		endsWith(string, AT_CHAR + dMediaDotCom);
};

var escape = function (html) {
	if (isEmpty(html)) {
		return html;
	}
	var escaped = String(html)
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
	return escaped;
};

var unescape = function (string) {
	if (isEmpty(string)) {
		return string;
	}
	return String(string)
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, '\'')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>');
};

var changeLineBreaksSpacesAndCarriageReturnsIntoCommas = function (string) {
	var result = string.replace(/(\r|\n|\s)+/g, ',');
	//console.log('    changeLineBreaks: <' + string + '> - <' + result + '>');
	return result;
};

var removeExtraCommas = function (string) {
	var result = string.replace(/,+/g, ',');
	//console.log('        removeExtraCommas: <' + string + '> - <' + result + '>');
	return result;
};

var removeExtraSpaces = function (string) {
	var result = string.replace(/\s{2,}/g, ' ');
	//console.log('removeExtraSpaces: <' + string + '> - <' + result + '>');
	return result;
};

//source: http://stackoverflow.com/questions/5181746/preg-how-to-write-a-preg-pattern-to-get-domain-name-from-an-email
var getDomainFromEmail = function (email) {
	assert(checkEmailFormat(email));
	var domain = email.replace(/.*@/, '');
	//console.log('got email Domain: <' + email + '> - <' + domain + '>');
	return domain;
};

var getExtranetPostUrl = function () {
	if (isProductionMode()) {
		return COMMON.extranet.url.production;
	}
	return COMMON.extranet.url.qa;
};

var getExtranetPageUrl = function () {
	if (isProductionMode()) {
		return COMMON.extranet.page.production;
	}
	return COMMON.extranet.page.qa;
};

var getFormattedDetailsString = function (object, keyNamePairs) {
	var detailsString = getPrintout(object);
	detailsString = replaceAll(detailsString, '\",\"', '\"; \"');
	detailsString = detailsString.substring(1, detailsString.length - 1);
	if (keyNamePairs) {
		for (var keyName in keyNamePairs) {
			if (keyNamePairs.hasOwnProperty(keyName)) {
				var oldKeyName = '\"' + keyName + '\":';
				detailsString = detailsString.replace(oldKeyName, keyNamePairs[keyName] + ': ');
			}
		}
	}
	return detailsString;
};

//source: http://javascript.about.com/library/blnumclean.htm
var removePhoneFormatting = function (phone) {
	var unformatted = phone;
	if (isNotEmpty(phone)) {
		unformatted = phone.replace(/\D/g, '');
		if (unformatted.length !== 10) {
			unformatted = '';
		}
		//console.log('Phone Number: <' + phone + '> - <' + unformatted + '>');
	}
	return unformatted;
};

var getCommaSeparatedDomains = function (string) {
	var result = removeExtraSpaces(string);
	result = changeLineBreaksSpacesAndCarriageReturnsIntoCommas(result);
	result = removeExtraCommas(result);
	return result;
};

// NOTE: it does not work if there are chars like []\^$.|?*+() in the password. use safeReplaceAll
var replaceAll = function (string, toBeReplaced, replacingText) {
	return string.replace(new RegExp(toBeReplaced, 'g'), replacingText);
};

var safeReplaceAll = function (string, toBeReplaced, replacingText) {
	if (isEmpty(string) || isEmpty(toBeReplaced) || !containsCaseInsensitive(string, toBeReplaced)) {
		return string;
	}
	var newString = string.replace(toBeReplaced, replacingText);
	if (containsCaseInsensitive(newString, toBeReplaced)) {
		return safeReplaceAll(newString, toBeReplaced, replacingText);
	}
	else {
		return newString;
	}
};

var getTimeStamp = function () {
	return formatTimeStamp();
};

var formatUSPhoneNumber = function (phoneNumber) {
	phoneNumber = removePhoneFormatting(phoneNumber);
	if (isEmpty(phoneNumber)) {
		return '';
	}
	else {
		var areaCode = phoneNumber.slice(0, 3);
		var exchange = phoneNumber.slice(3, 6);
		var subscriber = phoneNumber.slice(6, 10);
		return areaCode + '-' + exchange + '-' + subscriber;
	}
};

var formatTimeStamp = function (dateString) {
	var date;
	if (!dateString) {
		return '';
	}
	else {
		date = new Date(dateString);
	}

	var month = date.getMonth() + 1;
	var day = date.getDate();
	var year = String(date.getFullYear()).substr(2, 2);
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var amPm = 'AM';

	if (hour > 12) {
		hour = hour - 12;
		amPm = 'PM';
	} else if (hour === 12) {
		amPm = 'PM';
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	var formatted = month + '-' + day + '-' + year + ' ' +
		hour + ':' + minutes + ':' + seconds + ' ' + amPm;

	return formatted;
};

// source: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
var checkEmailFormat = function (email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var valid = re.test(email);
	return valid;
};

//  a-z A-Z 0-9 _ - . ( )
var checkFolderNameFormat = function (folderName) {
	var re = /^[a-zA-Z0-9\-\_\.\(\)]*$/;
	var valid = re.test(folderName);
	return valid;
};

//source: http://blog.stevenlevithan.com/archives/validate-phone-number
//examples from book: http://www.amazon.com/dp/1449319432/?tag=slfb-20
var validateUSPhoneNumber = function (phone) {
	var re = /^\(?([2-9][0-8][0-9])\)?[-. ]?([2-9][0-9]{2})[-. ]?([0-9]{4})$/;
	var valid = re.test(phone);
	return valid;
};


var isClientUser = function (email, stopCrossCheck) {
	assert(isNotEmpty(email), 'isInternalUser: ' + MESSAGES.error.authentication.nameEmpty);
	var normalizedEmail = getNormalizedEmail(email);
	var isClientUser = containsAt(normalizedEmail) && !endsWithAtdmediaDotCom(normalizedEmail) && checkEmailFormat(normalizedEmail);
	if (isClientUser && stopCrossCheck !== true) {
		assert(!isInternalUser(email, true));
	}
	console.log('The user: ' + email + ' is ' + isClientUser ? '' : ' not ' + ' a client user');
	return isClientUser;
};

//todo improve with regex validations when required
var isInternalUser = function (email, stopCrossCheck) {
	assert(isNotEmpty(email), 'isInternalUser: ' + MESSAGES.error.authentication.nameEmpty);
	var doesNotStartWithAt = email.indexOf('@') > 0 || email.indexOf(AT_CHAR) > 0;
	var fulldmediaEmail = doesNotStartWithAt && endsWithAtdmediaDotCom(email);
	var isInternalUserName = !containsAt(email) && email.indexOf('.') === -1;
	var isInternalUser = fulldmediaEmail || isInternalUserName;
	if (isInternalUser && stopCrossCheck !== true) {
		assert(!isClientUser(email, true));
	}
	console.log('The user: ' + email + ' is ' +
	isInternalUser ? '' : ' not ' + ' an internal user');
	return isInternalUser;
};

var getInvalidDomains = function (whiteList) {
	assert(isNotEmpty(whiteList), 'getInvalidDomains: ' + MESSAGES.error.clients.whiteListEmpty);
	var invalidDomains = [];
	var whiteListArray = whiteList.split(',');
	for (var index in whiteListArray) {
		var domain = whiteListArray[index];
		//console.log('testing domain: ' + domain);
		if (!checkEmailFormat('abc@' + domain)) {
			invalidDomains.push(domain);
		}
	}
	return invalidDomains.toString();
};

var getBlacklistedDomains = function (whiteList) {
	//console.log('Getting blacklisted domains for whitelist: ' + whiteList);
	assert(isNotEmpty(whiteList), 'getBlacklistedDomains: ' +
	MESSAGES.error.clients.whiteListEmpty);
	var whiteListArray = whiteList.split(',');
	var blackListedDomains = [];
	for (var domain in whiteListArray) {
		if (DOMAIN_BLACKLIST.indexOf(whiteListArray[domain]) > -1) {
			blackListedDomains.push(whiteListArray[domain]);
		}
	}
	return blackListedDomains.toString();
};

var isDomainInWhiteList = function (domain, whiteList) {
	var whiteListArray = whiteList.split(',');
	if (whiteListArray.indexOf(domain) !== -1) {
		return true;
	} else {
		return false;
	}
};

var getFileOrFolderNameToAdd = function (fileList, fileName) {
	var nameToAdd = fileName;
	var count = 1;
	while (fileList.indexOf(nameToAdd) >= 0) {
		nameToAdd = fileName + '(' + count + ')';
		count++;
	}
	return nameToAdd;
}

var getLdapUserName = function (email) {
	assert(isNotEmpty(email), 'getLdapUserName: ' + MESSAGES.error.authentication.nameEmpty);
	var normalizedEmail = getNormalizedEmail(email);
	if (isInternalUser(normalizedEmail)) {
		return normalizedEmail.replace('@' + dMediaDotCom, '');
	}
	assert(checkEmailFormat(normalizedEmail), MESSAGES.error.authentication.invalidClientEmail);
	var ldapUserName = getLdapEmail(normalizedEmail) + extranetPostFix;
	return ldapUserName;
};

var getLdapEmail = function (email) {
	return email.replace('@', AT_CHAR);
};

var getNormalizedEmail = function (email) {
	return email.replace(AT_CHAR, '@');
};

var getInternalUserFullEmail = function (userName) {
	assert(isInternalUser(userName), 'Must be an internal user. userName: ' + userName);
	if (endsWithAtdmediaDotCom(userName)) {
		return userName;
	}
	return userName + '@' + dMediaDotCom;
};

var truncateText = function (text, maxLength, ellipsisText) {
	ellipsisText = ellipsisText || '&hellip;';
	if (text.length < maxLength)
		return text;
	var matchLastWholeWord = text.substr(0, maxLength).match(/([^A-Za-z0-9_]*)[A-Za-z0-9_]*$/);
	if (!matchLastWholeWord) return ellipseText;
	var lastCharPosition = maxLength - matchLastWholeWord[0].length;
	if (/[\s\(\[\{]/.test(text[lastCharPosition])) lastCharPosition--;
	return (lastCharPosition ? text.substr(0, lastCharPosition + 1) : '') + ellipsisText;
};

var validateEnteredUserName = function (email) {
	var normalizedEmail = UTILS.getNormalizedEmail(email);
	if (isInternalUser(normalizedEmail) && !endsWithAtdmediaDotCom()) {
		normalizedEmail = getInternalUserFullEmail(email);
	}
	return checkEmailFormat(normalizedEmail);
};

var verifyPassword = function (password) {
	return isNotEmpty(password) && password.trim().length > 7;
};

UTILS = {
	AT_CHAR: AT_CHAR,
	arraySortAscending: arraySortAscending,
	arraySortDescending: arraySortDescending,
	assert: assert,
	assertEqual: assertEqual,
	assertStartsWith: assertStartsWith,
	arrayContains: arrayContains,
	arrayContainsAllElements: arrayContainsAllElements,
	capitaliseFirstLetter: capitaliseFirstLetter,
	checkEmailFormat: checkEmailFormat,
	checkFolderNameFormat: checkFolderNameFormat,
	contains: contains,
	containsAny: containsAny,
	containsAll: containsAll,
	containsAt: containsAt,
	containsCaseInsensitive: containsCaseInsensitive,
	containsWhitespaces: containsWhitespaces,
	dMediaDotCom: dMediaDotCom, //todo put this in userCheckUtils.js
	endsWith: endsWith,
	endsWithAtdmediaDotCom: endsWithAtdmediaDotCom,
	escape: escape,
	extranetPostFix: extranetPostFix,
	formatUSPhoneNumber: formatUSPhoneNumber,
	formatTimeStamp: formatTimeStamp,
	getBlacklistedDomains: getBlacklistedDomains,
	getCommaSeparatedDomains: getCommaSeparatedDomains,
	getDomainFromEmail: getDomainFromEmail,
	getExtranetPageUrl: getExtranetPageUrl,
	getExtranetPostUrl: getExtranetPostUrl,
	getFileOrFolderNameToAdd: getFileOrFolderNameToAdd,
	getFormattedDetailsString: getFormattedDetailsString,
	getInvalidDomains: getInvalidDomains,
	getLdapEmail: getLdapEmail,
	getLdapUserName: getLdapUserName,
	getHash: getHash,
	getNormalizedEmail: getNormalizedEmail,
	getObjectProperties: getObjectProperties,
	getPrintout: getPrintout,
	getRearrangedDisplayName: getRearrangedDisplayName,
	getRandomNumberBetween1andMax: getRandomNumberBetween1andMax,
	getTimeStamp: getTimeStamp,
	generateEmailUrl: generateEmailUrl,
	getSafePrintout: getSafePrintout,
	hasClass: hasClass,
	hasNoValue: hasNoValue,
	hasValue: hasValue,
	isClientUser: isClientUser, //todo put this in environmentUtils.js
	isDevMode: isDevMode,
	isDomainInWhiteList: isDomainInWhiteList,
	isEmpty: isEmpty,
	isEmptyObject: isEmptyObject,
	isEmptyStringifiedObject: isEmptyStringifiedObject,
	isInteger: isInteger,
	isInternalUser: isInternalUser,
	isLowerCase: isLowerCase,
	isMetadata: isMetadata,
	isNatural: isNatural,
	isNotEmpty: isNotEmpty,
	isNotEmptyObject: isNotEmptyObject,
	isNotEmptyStringifiedObject: isNotEmptyStringifiedObject,
	isNumber: isNumber,
	isObject: isObject,
	isOnlyDigits: isOnlyDigits,
	isPositive: isPositive,
	isProductionMode: isProductionMode,
	isValidDate: isValidDate,
	isStagingProductionMode: isStagingProductionMode,
	isString: isString,
	isValidDirectoryContext: isValidDirectoryContext,
	removeExtraSpaces: removeExtraSpaces,
	removePhoneFormatting: removePhoneFormatting,
	replaceAll: replaceAll,
	safeReplaceAll: safeReplaceAll,
	startsWith: startsWith,
	truncateText: truncateText,
	unescape: unescape,
	validateEnteredUserName: validateEnteredUserName,
	validateUSPhoneNumber: validateUSPhoneNumber,
	verifyPassword: verifyPassword
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = UTILS;
}
else {
	window.UTILS = UTILS;
}