define({
	proxyPort: 9000,
	proxyUrl: 'http://localhost:9000/',

	capabilities: {
		'selenium-version': '2.43.0',
		'idle-timeout': 30
	},
	environments: [
		{ browserName: 'firefox', version: '33', platform: [ 'OS X 10.10' ] }
	],

	maxConcurrency: 3,
	tunnel: 'SauceLabsTunnel',

	loader: {
		// Packages that should be registered with the loader in each testing environment
		packages: [
			{ name: 'intern-selftest', location: '.' }
		],
		map: {
			'intern-selftest': {
				dojo: 'intern-selftest/node_modules/dojo',
				chai: 'intern-selftest/node_modules/chai/chai',
			}
		}
	},

	functionalSuites: [
		'intern-selftest/tests/functional/search'
	],

	excludeInstrumentation: /^(?:tests|node_modules)\//,

	isSelfTestConfig: true
});
