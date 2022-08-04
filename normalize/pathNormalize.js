let path = require('path');

module.exports = (f_name) => {
    let normalizedPath = path.normalize(f_name);
    let isAbs = path.isAbsolute(normalizedPath);
    return (isAbs) ? normalizedPath : new Error("THIS ISN'T THE RIGHT WAY!!!");
}