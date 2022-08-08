let ptrn = /^\d+$/;

module.exports = (number) => {
    try {
        if (number.match(ptrn)) {
            return parseInt(number);
        } else {
            throw  new Error("PLEASE, ENTER A NUMBER!!!");
        }
    } catch (error) {
        console.log(error);
    }
}