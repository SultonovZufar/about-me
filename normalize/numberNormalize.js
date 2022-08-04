let ptrn = /^\d+$/;

module.exports = (argv) => {
    try {
        if (argv.match(ptrn)) {
            return parseInt(argv)
        } else {
            throw  new Error("Son kiritilsin!!!")
        }
    } catch (error) {
        console.log(error);
    }
}