const { loopsPath } = require('../test/test');

module.exports = (normalized_Filename) => {
    try {
        loopsPath.includes(normalized_Filename)
    } catch (error) {
        console.log(error);
    }
}