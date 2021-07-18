exports = class Sys_Check {
    constructor() {
        this.win32_validBrowsers = [
          [/chrome/, "chrome path"],
          [/firefox/, "firefox path"],
          [/internet explorer/, "internetExplorer path"],
          [/edge/, "edge path" ]
          [/ie/, "ie path"]
        ];

        this.macOS_validBrowsers = [
          [/chrome/, "chrome path"],
          [/firefox/, "firefox path"],
          [/safari/, "safari path"]
        ]

        this.linux_validBrowsers = [
          [/chrome/, "chrome path"],
          [/firefox/, "firefox path"]
        ]
    };
    /**
     * @param {String} browser
     * @returns 
     */
    static async win32(browser) {
        if (!browser) throw new Error("No browser specified");
        const foundBrowser = this.win32_validBrowsers.find(v => new RegExp(v[0], 'i').test(browser));
        if(!foundBrowser)
          throw Error("Invalid Browser Input");
        if(!fs.existsSync(foundBrowser[1]))
          throw Error("Browser Not Found >:3");
    };
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
