const kb = require("./src/exploit"),
	args = process.argv.slice(2);

if (args[0] === "win"){ 
	switch (args[1]) {
		case "chrome":
			kb.chrome();
			 
		case "firefox":
			kb.firefox();
			 
		case "safari":
			kb.safari();
			 
		case "edge":
			kb.edge();
			 
		case "ie": // internet explorer
			kb.ie();
			 

		default: // if there is no second arg then result to chrome.
			kb.chrome();
			 
	}
}