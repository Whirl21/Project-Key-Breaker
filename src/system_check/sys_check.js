const local = process.env.LOCALAPPDATA,
	roaming = process.env.ROAMINGAPPDATA,

	fs = require('fs'),
		p = require('path'),
	chrome_win = p.join(
		String(local),
		"Google",
		"Chrome",
		"User Data",
		"Default",
		"Login Data"
	),
	fire_win = p.join(
		String(roaming),
		"Mozilla",
		"Firefox",
		"Profiles" 
	);
const id = require("./identifier"); 
const OS = new Map();

const win32_browsers = {
	firefox: {
		path: "C:\\Program Files (x86)\\Mozilla\\Firefox\\"
	},
	chrome: {
		path: "C:\Program Files (x86)\\Google\\Chrome\\"
	},
	ie: { path: "C:\\Program Files (x86)\\Microsoft\Internet Explorer\\" },
	edge: { path: "C:\Program Files (x86)\\Microsoft\\Edge\\" }
};
const macos_browsers = {};
const linux_browsers = {};

os = process.env.OS_NAME;
switch (os === null) {
	case id.darwin() == true:
		OS.set("Current OS:", os);
		break;
	case id.nt() == true:
		OS.set("Current OS:", os);
		break;
	case id.posix() == true:
		OS.set("Current OS:", os);
		break;
	default:
		OS.set("Current OS:", "NT");
		break;
}

function win32(browser) {
	if (!browser) throw new Error("No browser specified");
	for (let i = browser; i in win32_browsers;) {
		if (i in win32_browsers == true) return String(i.path);
	} 
}

function macos(browser) {
	if (!browser) throw new Error("No browser specified");
	
	if (!!macos_browsers.has(browser)) {let foundBrowser = macos_browsers.browser.path; return foundBrowser;}
	else return false;
}

/**
 * @returns
 */
function linux(browser) {
	if (!browser) throw new Error("No browser specified");
	
	if (!!linux_browsers.has(browser)) {let foundBrowser = linux_browsers.browser.path; return foundBrowser;}
	else return false;
}


//clmodule.exports = Check;
module.exports = {
	win32: win32,
	linux: linux,
	macos: macos
};