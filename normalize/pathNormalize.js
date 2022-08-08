const path = require('path');
const parsejs = require('../parse/parse')

module.exports = (fileName) => {
    let normalizedPath = path.normalize(fileName);
    return parsejs(normalizedPath);
}