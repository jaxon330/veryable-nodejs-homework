const express = require('express');
const { getLastInsertId } = require('../../db');
const { getBusiness, createBusiness} = require('./businesses.service');

const businessesRouter = express.Router(); 

businessesRouter
    .get(
        '/:businessId'
        , async ( req, res ) => {
            const businessId = req.params.businessId;
            const business = await getBusiness(businessId);
            return res
                .status( 200 )
                .json( business )
        }
    )
    .post(
        '/'
        , async ( req, res ) => {
             await createBusiness( {
                businessName: req.body.businessName
            } );

            const businessId = await getLastInsertId();
            const createdBusiness = await getBusiness( businessId );
            return res
                .status( 201 )
                .json( createdBusiness )
        }
    );

module.exports = {
    businessesRouter
}