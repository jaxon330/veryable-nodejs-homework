const { query } = require("../../db/query");

const getOp = async (opId) => {
    const text = `
        SELECT id
            , "operatorId"
            , "businessId"
            , "opTitle"
            , "pay"
            , "startTime"
            , "endTime"
            , "addressLine1"
            , "addressLine2"
            , "city"
            , "state"
            , "zip"
            , "createdAt"
        FROM ops
        WHERE id = $1;
    `;
    const [ op ] = await query( text, [ opId ]);
    return op;
};

const createOp = async ( {operatorId, businessId, opTitle, pay, startTime, endTime, addressLine1, addressLine2, city, state, zip}) => {
    const text = `
        INSERT INTO ops
        ( "operatorId", "businessId", "opTitle", "pay", "startTime", "endTime", "addressLine1", "addressLine2", "city", "state", "zip")
        VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 )
    `;
    await query(text, [ operatorId, businessId, opTitle, pay, startTime, endTime, addressLine1, addressLine2, city, state, zip ]);
};

module.exports = {
    getOp, createOp
}

