const kb = require("./src/exploit"),
	args = process.argv.slice(2);
module.exports = args;
function x(){ switch (args[1]) {
	case "chrome":
		kb.chrome();
		break;
	case "firefox":
		kb.firefox();
		break;
	case "safari":
		kb.safari();
		break;
	case "edge":
		kb.edge();
		break;
	case "ie": // internet explorer
		kb.ie();
		break;

	default: // if there is no second arg then result to chrome.
		kb.chrome();
		break;
}}

if ((/(win)|(windows)|(nt)/gi).test(args[0])) { 
	x();
} else if ((/(mac)|(macos)/gi).test(args[0])) {
	console.log("Exploit not ready for MacOS");
} else if ((/(linux)|(posix)/gi).test(args[0])) { 
	x();
} else {
	console.error("Unknown System Type");
}