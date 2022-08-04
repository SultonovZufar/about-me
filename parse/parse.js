const { loopsPath } = require('../test/test');
const pNormalize = require('../normalize/pathNormalize');

module.exports = (pNormalize) => {
    try {
        loopsPath.includes(pNormalize);
        let isAbs = path.isAbsolute(normalizedPath);
        return (isAbs) ? normalizedPath : new Error("THIS ISN'T THE RIGHT WAY!!!");
    } catch (error) {
        console.log(error);
    }
}