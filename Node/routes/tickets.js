const express = require('express');
const router = express.Router();


// Require controller modules.
const _ticketController =  require('./../ticket/controller');

router.post('/create', _ticketController.createTicket);
router.post('/update', _ticketController.updateTicket);
router.post('/all', _ticketController.getTickets);
router.post('/detail', _ticketController.ticketDetail);

module.exports = router;