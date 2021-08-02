/**
 * NT/Win32 Identifier
 * @returns 
 */
module.exports = function nt() {
    if (process.env.HOME.startsWith("C:/")) return process.env.OS_NAME = "NT", true;
    else return false;
}