const nt = require('./nt/win32'),
    darwin = require('./darwin/darwin'),
    posix = require('./posix/posix');

module.exports = {
    posix: posix,
    nt: nt,
    darwin: darwin
};