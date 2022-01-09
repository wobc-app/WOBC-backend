const Bikes = require('../../data/models/bikes.model');

const validateBody = async (req, res, next) => {
    try {
        const { serial, future } = req.body;
        if (!serial || !future) {
            next({ status: 400, message: 'Serial number and future must be entered' });
        } else next()
    } catch (err) {
        next({ status: 422, message: 'Error in the req.body' });
    };
    console.log('validate')
};

const serialFree = async (req, res, next) => {
    const { serial } = req.body;
    try {
        const checkSerial = await Bikes.findBy({ serial });
        if (!checkSerial) {
            next()
        } else {
            next({ status: 422, message: 'Serial is taken' });
        }
    } catch (err) {
        next({ status: 422, message: 'Error in serial free logic'})
    }
};

module.exports = {
    validateBody,
    serialFree
}