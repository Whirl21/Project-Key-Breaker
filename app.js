const kb = require("./src/exploit"),
	args = process.argv.slice(2);

if (args[0] === "win"){ 
	switch (args[1]) {
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
	}
}