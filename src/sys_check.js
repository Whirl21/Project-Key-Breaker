const local = process.env.LOCALAPPDATA,
roaming = process.env.ROAMINGAPPDATA,
p = require('path'),
// Chrome Paths
chrome_win = p.join(String(local),"Google","Chrome","User Data","Default","Login Data"),
chrome_mac = "/User/",
chrome_lin = "~/.config/google-chrome/Default/Login Data",
// Firefox Paths
fire_win = p.join(String(roaming),"Mozilla","Firefox","Profiles"),
fire_mac = "",
fire_lin = "";

const win32_browsers = ['chrome',    'firefox'];
const macos_browsers = [/^chrome/gi,    /^firefox/gi];
const linux_browsers = ['firefox',    'firefox'];

/**
 * @param {String} browser - Windows 7->10 browser to be used, NOTE: only chrome is ready
 */
function win32(browser) {
	if (!browser) throw new Error("No browser specified");
	if (browser == ("chrome") && win32_browsers.hasOwnProperty(browser)) return String(chrome_win);
    if (browser == ("firefox") && win32_browsers.hasOwnProperty(browser)) return String(fire_win);
    else throw new Error("No browser found");
}

function macos(browser) {
	if (!browser) throw new Error("No browser specified");
	for (browser in macos_browsers) {
        if (browser == ("chrome") && macos_browsers.hasOwnProperty(browser)) return String(chrome_mac);
        if (browser == ("firefox") && macos_browsers.hasOwnProperty(browser)) return String(fire_mac);
        else throw new Error("No browser found");
    }
}

/**
 * @returns
 */
function linux(browser) {
    console.log("Browser Choice: " + browser);
	if (!browser) throw new Error("No browser specified");
	if (browser == "chrome") return String(chrome_lin);
    if (browser === ("firefox") && linux_browsers.includes(browser)) return String(fire_lin);
    else throw "No browser found";
}


//module.exports = Check;
module.exports = {
	win32: win32,
	linux: linux,
	macos: macos
};