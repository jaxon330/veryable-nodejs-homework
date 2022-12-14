const { query } = require("../../db/query");

const getSchedules = async ( scheduleId ) => {
    const text = `
        SELECT
             "businessName"
            , "opTitle"
            , "pay"
            , "startTime"
            , "endTime"
            , "addressline1"
            , "addressline2"
            , "city"
            , "state"
            , "zip"
        FROM ops
        INNER JOIN operators ON operators.id = ops.operatorId
        INNER JOIN businesses ON businesses.id = ops.businessId
        WHERE operatorId = $1
    `;
    const  schedule  = await query( text, [scheduleId]);
    return schedule;
};

module.exports = {
    getSchedules
}