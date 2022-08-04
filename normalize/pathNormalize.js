const path = require('path');
const parse = require('../parse/parse')

module.exports = (f_name) => {
    let normalizedPath = path.normalize(f_name);
    return parse(normalizedPath);
}