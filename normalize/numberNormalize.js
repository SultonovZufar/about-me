let ptrn = /^\d+$/;

module.exports = (argv) => {
    try {
        if (argv.match(ptrn)) {
            return parseInt(argv)
        } else {
            throw  new Error("PLEASE, ENTER A NUMBER!!!")
        }
    } catch (error) {
        console.log(error);
    }
}