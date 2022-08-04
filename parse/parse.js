const { loopsPath } = require('../test/test');

module.exports = (normalized_Filename) => {
    console.log(loopsPath.includes(normalized_Filename));
}