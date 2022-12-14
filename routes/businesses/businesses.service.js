const { query } = require("../../db/query");

const getBusiness = async (businessId) => {
    const text = `
        SELECT id
            , "businessName"
            , "createdAt"
        FROM businesses
        WHERE id = $1;
    `;
    const [ business ] = await query(text, [ businessId]);
    return business
};

const createBusiness = async ( { businessName } ) => {
    const text = `
        INSERT INTO businesses
        ("businessName")
        VALUES ($1)
    `;
    await query( text, [ businessName ] );
};

module.exports = { getBusiness, createBusiness }