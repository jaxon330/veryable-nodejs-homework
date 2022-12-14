const { operatorsRouter } = require( './operators' );
const { businessesRouter } = require('./businesses');
const { opsRouter } = require( './ops' );
const { scheduleRouter } = require('./schedules')

module.exports = {
    operatorsRouter,
    businessesRouter,
    opsRouter,
    scheduleRouter
}