const fs = require('fs');

exports = class Sys_Check {
    constructor() {};

    /**
     * @param {String} browser
     * @returns 
     */
    static async win32(browser) {
        if (!browser) throw new Error("No browser specified");

        switch (browser) {
            case /chrome/gi.test(browser) == true:
                if (fs.existsSync(/** path to chrome */) == true) return true;
                else false;
                break;
            case (/firefox/gi).test(browser) == true:
                if (fs.existsSync(/** path to firefox */) == true) return true;
                else false;
                break;
            case (/edge/gi).test(browser) == true:
                if (fs.existsSync(/** path to MS Edge */) == true) return true;
                else false;
                break;
            case (/internet explorer/gi).test(browser) == true:
                if (fs.existsSync(/** path to MS Internet Explorer */) == true) return true;
                else false;
                break;
            case (/ie/gi).test(browser) == true:
                if (fs.existsSync(/** path to MS Internet Explorer */) == true) return true;
                else false;
                break;
        }
    };

    static async macOS(browser) {
        if (!browser) throw new Error("No browser specified");

        switch (browser) {
            case /chrome/gi.test(browser) == true:
                if (fs.existsSync(/** path to chrome */) == true) return true;
                else false;
                break;
            case (/firefox/gi).test(browser) == true:
                if (fs.existsSync(/** path to firefox */) == true) return true;
                else false;
                break;
            case (/safari/gi).test(browser) == true:
                if (fs.existsSync(/** path to safari */) == true) return true;
                else false;
                break;
        }
    }

    static async linux(browser) {
        if (!browser) throw new Error("No browser specified");

        switch (browser) {
            case /chrome/gi.test(browser) == true:
                if (fs.existsSync(/** path to chrome */) == true) return true;
                else false;
                break;
            case (/firefox/gi).test(browser) == true:
                if (fs.existsSync(/** path to firefox */) == true) return true;
                else false;
                break;
            case (/etc/gi).test(browser) == true:
                if (fs.existsSync(/** path to other browsers */) == true) return true;
                else false;
                break;
        }
    }
}