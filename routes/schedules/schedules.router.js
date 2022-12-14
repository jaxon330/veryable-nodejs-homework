const express = require('express');
const { getLastInsertId } = require('../../db');
const { getSchedules } = require('./schedules.service');

const scheduleRouter = express.Router();

scheduleRouter
    .get(
        '/:operatorId/schedules'
        , async (req, res) => {
            const operatorId = req.params.operatorId
            const schedule = await getSchedules( operatorId );
            return res
                .status( 200 )
                .json(schedule)
        }
    );

module.exports = {
    scheduleRouter
}