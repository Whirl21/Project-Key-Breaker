const local = process.env.LOCALAPPDATA,
roaming = process.env.ROAMINGAPPDATA,
p = require('path'),
// Chrome Paths
chrome_win = p.join(String(local),"Google","Chrome","User Data","Default","Login Data"),
chrome_mac = "/User/",
chrome_lin = "~/.config/google-chrome/Default/Login\ Data",
// Firefox Paths
fire_win = p.join(String(roaming),"Mozilla","Firefox","Profiles"),
fire_mac = "",
fire_lin = "";

const win32_browsers = [/^chrome/gi,    /^firefox/gi];
const macos_browsers = [/^chrome/gi,    /^firefox/gi];
const linux_browsers = [/^chrome/gi,    /^firefox/gi];

/**
 * @param {String} browser - Windows 7->10 browser to be used, NOTE: only firefox and chrome is ready
 */
function win32(browser) {
	if (!browser) throw new Error("No browser specified");
	for (browser in win32_browsers) {
        if (browser.indexOf("chrome") == true) return String(chrome_win);
        if (browser.indexOf("firefox") == true) return String(fire_win);
        else return String("No Browser found");
    }
}

function macos(browser) {
	if (!browser) throw new Error("No browser specified");
	for (browser in macos_browsers) {
        if (browser.indexOf("chrome") == true) return String(chrome_mac);
        if (browser.indexOf("firefox") == true) return String(fire_mac);
        else return String("No Browser found");
    }
}

/**
 * @returns
 */
function linux(browser) {
	if (!browser) throw new Error("No browser specified");
	for (browser in linux_browsers) {
        if (browser.indexOf("chrome") == true) return String(chrome_lin);
        if (browser.indexOf("firefox") == true) return String(fire_lin);
        else return String("No Browser found");
    }
}


//module.exports = Check;
module.exports = {
	win32: win32,
	linux: linux,
	macos: macos
};