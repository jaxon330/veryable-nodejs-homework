const express = require('express');
const { getLastInsertId } = require('../../db');
const { getOp, createOp } = require('./ops.service');

const opsRouter = express.Router();

opsRouter
    .post(
        '/'
        , async ( req, res ) => {
            console.log(req.body)
            await createOp( {
                operatorId: req.body.operatorId,
                businessId: req.body.businessId,
                opTitle: req.body.opTitle,
                pay: req.body.pay,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                addressLine1: req.body.addressLine1,
                addressLine2: req.body.addressLine2,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip
            } );
            
            const opId = await getLastInsertId();
            const createdOp = await getOp( opId);

            return res
                .status(201)
                .json( createdOp )
        }
    );

module.exports = {
    opsRouter
}