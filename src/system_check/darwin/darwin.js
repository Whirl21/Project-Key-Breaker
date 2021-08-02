/**
 * Darwin/MacOS X Identifier
 * @returns 
 */
module.exports = function darwin() {
    if (process.env.HOME.startsWith("/User/") == true) return process.env.OS_NAME = "darwin", true;
    else return false
}