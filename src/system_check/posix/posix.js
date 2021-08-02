/**
 * Posix/(GNU)Linux identifier
 * @returns 
 */
module.exports = function posix() {
    if (process.env.HOME.startsWith("/home/")) return process.env.OS_NAME = "posix", true;
    else return false;
}