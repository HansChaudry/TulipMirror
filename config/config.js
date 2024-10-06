/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		// {
		// 	module: "calendar",
		// 	header: "US Holidays",
		// 	position: "top_left",
		// 	config: {
		// 		calendars: [
		// 			{
		// 				fetchInterval: 7 * 24 * 60 * 60 * 1000,
		// 				symbol: "calendar-check",
		// 				url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
		// 			}
		// 		]
		// 	}
		// },
		{
			module: "compliments",
			position: "lower_third",
			config: {
				remoteFile: "https://gist.githubusercontent.com/HansChaudry/8c43e572223374fafcf49568bd741459/raw/a41d4497b30ddbf42e886c9df0f36e9d2dcb65f7/TulipMirrorCompliments.js"
			}
		},
		{
			module: "MMM-SmartTouch",
			position: "bottom_center",    // This can be any of the regions.(bottom-center Recommended)
			config: {
				// None configuration options defined
			}
		},
		{

			/* Don't share your credentials! */
			module: "MMM-OnSpotify",
			position: "bottom_left", /* bottom_left, bottom_center */
				config: {
				clientID: "a8de92415aaa4a3796074dd1c6a444dc",
				clientSecret: "0ed67ae0150f4c8d8f681e8db4d4c9c7",
				accessToken: "BQCYZpYbEaTD0gHWlWDabaQ5WSmgPiO_1zQyQJ6ppkb9mwYRNylvDT5S96FisJboQbsNDpkeqonPh3OsCv5oG70MvYp90WE0u4bYHiR08ECz-ZriE4UFtcfeIXbtE-udNSA3qo21Dp_EJrlhXFFFaMARCgjTjKkDUlo7NW8YRfnYthH9xDNQB3uwdWsHAOok3JIkrqPgmQPJjg9ye5I8uoaX1Q",
				refreshToken: "AQDmxSEP4hq_WcqOzdBVWE2chBDYZ8MPwSMfEAl2x1A0FFkKxJ7rYgaPAjkv5bEBs0KthG27IREzZCYt17IXU5TbqliKT8SWL1jfgHylqQBIVNj7YQqfHPpryGI25A6N2Xg",

				/* Add here your theming and behaviour configurations */
				advertisePlayerTheme: true,
				displayWhenEmpty: "both",
				userAffinityUseTracks: false,
				prefersLargeImageSize: false,
				hideTrackLengthAndAnimateProgress: false,
				showDebugPalette: false,
				userDataMaxAge: 14400,
				userAffinityMaxAge: 36000,
				deviceFilter: [],
				deviceFilterExclude: false,
				filterNoticeSubtitle: true,
				language: "en",
				// Update intervals [SEE BELOW]
				isPlaying: 1,
				isEmpty: 2,
				isPlayingHidden: 2,
				isEmptyHidden: 4,
				onReconnecting: 4,
				onError: 8,
				// Animations [SEE BELOW]
				mediaAnimations: false,
				fadeAnimations: false,
				scrollAnimations: false,
				textAnimations: true,
				transitionAnimations: true,
				spotifyVectorAnimations: false,
				// Spotify Code (EXPERMIENTAL)
				spotifyCodeExperimentalShow: true,
				spotifyCodeExperimentalUseColor: true,
				spotifyCodeExperimentalSeparateItem: true,
				// Canvas
				experimentalCanvas: false,
				experimentalCanvasEffect: "cover",
				experimentalCanvasAlbumOverlay: false,
				// Theming General
				roundMediaCorners: true,
				roundProgressBar: true,
				showVerticalPipe: true,
				useColorInProgressBar: true,
				useColorInTitle: true,
				useColorInUserData: true,
				showBlurBackground: true,
				blurCorrectionInFrameSide: false,
				blurCorrectionInAllSides: false,
				alwaysUseDefaultDeviceIcon: false,
				experimentalCSSOverridesForMM2: false, // [SEE BELOW]
			}
		},
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	config: {
		// 		weatherProvider: "openweathermap",
		// 		type: "current",
		// 		location: "New York",
		// 		locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		apiKey: "YOUR_OPENWEATHER_API_KEY"
		// 	}
		// },
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	header: "Weather Forecast",
		// 	config: {
		// 		weatherProvider: "openweathermap",
		// 		type: "forecast",
		// 		location: "New York",
		// 		locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		apiKey: "YOUR_OPENWEATHER_API_KEY"
		// 	}
		// },
		// {
		// 	module: "newsfeed",
		// 	position: "bottom_bar",
		// 	config: {
		// 		feeds: [
		// 			{
		// 				title: "New York Times",
		// 				url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		// 			}
		// 		],
		// 		showSourceTitle: true,
		// 		showPublishDate: true,
		// 		broadcastNewsFeeds: true,
		// 		broadcastNewsUpdates: true
		// 	}
		// },
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
