const { loopsPath } = require('../test/test');
const path = require('path');

module.exports = (fileway) => {
    try {
        loopsPath.includes(fileway);
        let isAbs = path.isAbsolute(normalizedPath);
        return (isAbs) ? normalizedPath : new Error("THIS ISN'T THE RIGHT WAY!!!");
    } catch (error) {
        console.log(error);
    }
}