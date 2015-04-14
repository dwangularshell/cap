MODE = {
	BAMBOO: 'bamboo',
	DEVELOPMENT: 'development',
	PRODUCTION: 'production'
};

COMMON = {
	mode: MODE.PRODUCTION,
	frontendPort: 9000,
	backendPort: 7000,
	staticHostName: 'access.dmedia.com',
	apiHostName: 'access-be.dmedia.com',
	localHostname: 'dtord01cex02p.dc.dotomi.net',
	extranet: {
                page: {
                    production: 'https://client.dotomi.com/extranet/html/index.html',
                    qa: 'https://qasdev-o03.dotomi.com:8443/extranet/html/index.html'
                },
                url: {
                    production: 'http://client.dotomi.com/extranet/html/index.html',
                    qa: 'http://qasdev-o03.dotomi.com:8081/extranet/html/index.html'
                }
	},	
	files: {
		uploadChunkSizeInBytes: 1024 * 1024 * 16
	},
	foreignHostName: 'uncap.graystripe.com',
	delayBeforeApiTest: 5,
	logging: {
		level: {
			console: 'verbose',
			file: 'verbose'
		},
		verboseLimit: 100
	},
	tableau: {
		sourceHost: 'https://tab-obj.dmedia.com',
		worksheetsWithoutCompanyFilter: ['[X] Data Through']
	}
};

FILESIZE = {
    BYTE: 1,
    KILOBYTE: 1024,
    MEGABYTE: 1024 * 1024,
    GIGABYTE: 1024 * 1024 * 1024
};

TIME = {
     SECOND: 1000,
     MINUTE: 1000 * 60,
     HOUR: 1000 * 60 * 60,
     DAY: 1000 * 60 * 60 * 24,
     WEEK: 1000 * 60 * 60 * 24 * 7,
     YEAR: 1000 * 60 * 60 * 24 * 365 
};
